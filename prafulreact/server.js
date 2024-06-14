const express = require('express');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const https = require('https');


const agent = new https.Agent({
    rejectUnauthorized: false
});

const PORT = process.env.PORT || 7000;
const app = express();

app.get("/", async (req, res) => {
    try {
        const filePath = path.resolve(__dirname, "./build", "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");

        data = data
            .replace(/__TITLE__/g, "Home Page")
            .replace(/__DESCRIPTION__/g, "Home Page description")
            .replace(/__IMAGE__/g, "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp")
            .replace(/__URL__/g, "https://enterprisetalk.com/");

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/:cat_name/:post_name", async (req, res) => {
    try {
        const { cat_name, post_name } = req.params;

        const response = await fetch(`https://app-node.enterprisetalk.com:3000/api/post/postdetails/${cat_name}/${post_name}`, { httpsAgent: agent });
        const apiData = await response.json();
        const postData = apiData.result[0];
        console.log({ postData });

        const filePath = path.resolve(__dirname, "./build", "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");

        data = data
            .replace(/__TITLE__/g, postData.meta_title)
            .replace(/__DESCRIPTION__/g, postData.meta_description)
            .replace(/__IMAGE__/g, 'https://enterprisetalk.com' + postData.banner_img)
            .replace(/URL/g, `https://enterprisetalk.com/${cat_name}/${post_name}`)
            .replace(/CANONICAL/g, `https://enterprisetalk.com/${cat_name}/${post_name}`);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});





app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});        
