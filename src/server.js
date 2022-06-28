import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req,res ) =>{
    return res.send("love"); //함수 끝내기?
};
const handleLogin = (req,res) =>{
    return res.send("login here")
};
const handleAbout = (req,res) =>{
    return res.send("abputtt")
};
const handleContact = (req,res) =>{
    return res.send("contTac")
};
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/about", handleAbout);
app.get("/contact", handleContact);

const handleListening = () => console.log(`Server listentidng on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
