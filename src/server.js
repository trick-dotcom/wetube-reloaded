import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req,res ) =>{
    return res.send("love"); //함수 끝내기?
};
const handleLogin = (req,res) =>{
    return res.send("login here")
};
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
