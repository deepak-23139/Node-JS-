const fs=require("fs");
fs.writeFile("hello.txt", "Hello, World!", "utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("data added successfully");
});

// fs.appendFile("hello.txt", "data updated successfully", "utf8",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("data added successfully");
// });

// fs.rename("hello.txt", "new.txt", "utf8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("data added successfully");
// });

// const fs=require("fs");

// const content = "Hii this is hello world";
// fs.writeFile("hello.txt",content,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Add data successfully in the file");
// });

// fs.appendFile("hello.txt","New Text Updated",(err)=>{
//     if(err){
//         console.log("Error: ",err);
//         return;
//     }
//     console.log("data updated successfully");
// });

               //rename file

// fs.rename("hello.txt","new.txt",(err)=>{
//     if(err){
//         console.log("Error: ",err);
//          return;
//       }
//       console.log("rename is success");
//     });

               //delete file
// fs.unlink("new.txt",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("file deleted");
// });

           //file path 
// const path = require("path");

// const filepath = "D:\day2_FS\app.js";
// console.log("Base Name:",path.basename(filepath));
// console.log("Dir Name :", path.dirname(filepath));
// console.log("Extension name :",path.extname(filepath));

// const joinPath = path.join(__dirname,"public","index.html");
// console.log(joinPath);

           //OS module

// const os = require("os");
// console.log("platform: ",os.platform());
// console.log("Type: ",os.type());
// console.log("Total Memory: ",os.totalmem());
// console.log("Free Memory: ",os.freemem());
// console.log("Home dir: ",os.homedir());
// console.log("CPU Info: ",os.cpus());

            //creating server

const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content -type":"text/plain"});
    if(req.url === "/"){
        res.end("Welcome to my Node js server!");
    }else if(req.url === "/about"){
        res.end("Welcome to About Page");
    }else{
        res.statusCode=404;
        res.end("Page Not Found");
    }
});

server.listen(3001,()=>{
    console.log("Server is created successfully");
});

           // server created successfully

const express = require("express");
const app = express();
//Middleware to read JSON Body
app.use(express.json());

let users = [
    {id:1,name:"Rohan"

   }
];

app.get("/users",(req,res)=>{
    res.status(200).json(users);
});

       //for create user
app.post("/users",(req,res)=>{
   const newUser =  req.body;
   const user = {
     id:users.length=1,
     name:newUser.name
   }
   users.push(user);
   res.status(201).json({
            message:"User Created Successfully",
            user:user
   });
});


//         //for update user
// app.put("/users/:id",(req,res)=>{
//     const userId = parseInt(req.params.id);
//     const updatedUser = req.body;

//     const userIndex = users.findIndex(u => u.id === userId);
//     if(userIndex === -1){
//         return res.status(404).json({message: "User not found"})
//     }
//     users[userIndex].name = updatedUser.name;
//     res.json({
//         message:User ${userId} is updated successfully,
//         updatedUser:users[userIndex]
//     })
// })

//            //for delete user
// app.delete("/users/:id",(req,res)=>{
//     const deletedId = parseInt(req.params.id);
//     const fiteredUsers = users.filter(user =>{
//         user.id !== deletedId
//     });
//     if(filteredUsers.length === users.length){
//         return res.status(404).json({message:"User not found"});
//     }
//     users = filteredUsers;
//     res.json({
//         message:User ${deletedId} is deleted successfully
//     });
// });
// app.get("/users",(req,res)=>{
//     res.status(200).json(users);
// });

// app.get("/users/:id",{req,res}=>{
//     const userId = parseInt(req.params.id);
//     const user = users.find(u => u.id === userId);
//     if(!user){
//         return res.status(404).json({message:"User not found"});
//     }
//     res.status
// })
// app.listen(3000,()=>{
//     console.log("server created successfully");
// });

        //express router modularization

// const express = require("express");
// const app = express();

// app.use(express.json());
// const userRouter = require("./routes/userRoutes");

// app.use("/users",userRouter);
// app.listen(3000,()=>{
//     console.log("Server created successfully");
// })