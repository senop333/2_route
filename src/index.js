import express from'express';
const app = express();
const port = 3000;
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.get('/',(req, res) => {
    // res.send('Helooo World');
    res.sendFile("./page/index.html",{root:__dirname});
});

app.get('/about',(req, res) => {
    // res.send('Helooo about');
    res.sendFile("./page/about.html",{root:__dirname});
});

app.get('/contact',(req, res) => {
    // res.send('Helooo contactt');
    res.sendFile("./page/contact.html",{root:__dirname});
});

app.use("/", (req,res) => {
    res.status(404)
    res.send("Halaman tidak ditemukan");
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});