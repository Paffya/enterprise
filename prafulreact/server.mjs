import express from 'express';
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import https from 'https';

import mysql from 'mysql2/promise'


// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust this as needed
  host: 'localhost',
  user: 'enterprisetalk_staging',
  password: 'Apple@2024?',
  database: 'enterprisetalk_stage1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error connecting to database:', error);
    return;
  }

  console.log('Connected to database.');
})

import { fileURLToPath } from 'url'; // Import the fileURLToPath function

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Define __dirname using fileURLToPath

// const PORT = process.env.PORT || 7000;
const PORT = 'process.env.PORT || 7000';
const app = express();

const agent = new https.Agent({
    rejectUnauthorized: false
});

app.use(express.static(path.resolve(__dirname, 'public')));

// Serve static files from the 'static' directory
app.use(express.static(path.resolve(__dirname, 'static')));

// Serve static files from the 'uploads' directory
app.use(express.static(path.resolve(__dirname, 'uploads')));


const mimeTypes = {
    '.js': 'application/javascript',
    '.css': 'text/css',
    // Add more MIME types as needed
  };
  
  // Serve static files
  app.use('/static', express.static(path.resolve(__dirname, 'static'), {
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      const mimeType = mimeTypes[ext];
      if (mimeType) {
        res.setHeader('Content-Type', mimeType);
      }
    }
  }));

app.get("/", async (req, res) => {
    try {
        console.log(path.resolve(__dirname, "index.html"));
        const filePath = path.resolve(__dirname, "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");

        
    
        
        data = data
            .replace(/__TITLE__/g, "EnterpriseTalk - News | Editorial insights | Enterprise Updates")
            .replace(/__DESCRIPTION__/g, "A Peer Knowledge Resource Expert inputs on challenges, triumphs & innovative solutions from corporate Movers & Shakers in global Leadership.")
            .replace(/__IMAGE__/g, "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp")
            .replace(/__URL__/g, "https://staging.enterprisetalk.com:7000");

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/contact-us", async (req, res) => {
    try {
        console.log(path.resolve(__dirname, "index.html"));
        const filePath = path.resolve(__dirname, "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");
        data = data
            .replace(/__TITLE__/g, "Contact Us | Enterprise Talk")
            .replace(/__DESCRIPTION__/g, "Contact Us")
            .replace(/__IMAGE__/g, "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp")
            .replace(/__URL__/g, "https://staging.enterprisetalk.com:7000/contact-us");

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


app.get("/tag/:subCat", async (req, res) => {
    try {
        const { subCat } = req.params;
        console.log(path.resolve(__dirname, "index.html"));
        const filePath = path.resolve(__dirname, "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");
        data = data
            .replace(/__TITLE__/g, `${subCat}`)
            .replace(/__DESCRIPTION__/g, `${subCat} Information`)
            .replace(/__IMAGE__/g, "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp")
            .replace(/__URL__/g, `https://staging.enterprisetalk.com:7000/tag/${subCat}`);

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/topics/:catname/:subCat", async (req, res) => {
    try {
        const { catname , subCat } = req.params;
        console.log(path.resolve(__dirname, "index.html"));
        const filePath = path.resolve(__dirname, "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");
        data = data
            .replace(/__TITLE__/g, `${catname} - ${subCat} `)
            .replace(/__DESCRIPTION__/g, `${catname} - ${subCat} Information`)
            .replace(/__IMAGE__/g, "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp")
            .replace(/__URL__/g, `https://staging.enterprisetalk.com:7000/topics/${catname}/${subCat}`);

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/topics/:catname", async (req, res) => {
    try {
        const { catname } = req.params;
        console.log(path.resolve(__dirname, "index.html"));
        const filePath = path.resolve(__dirname, "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");
        data = data
            .replace(/__TITLE__/g, `${catname}`)
            .replace(/__DESCRIPTION__/g, `${catname} Information`)
            .replace(/__IMAGE__/g, "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp")
            .replace(/__URL__/g, `https://staging.enterprisetalk.com:7000/topics/${catname}`);

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/:cat_name/:post_name", async (req, res) => {
    try {
        const { cat_name, post_name } = req.params;

        const connection = await pool.getConnection();
        const postQuery = `select id,post_title,post_name,post_content,post_author,post_author_id,banner_show,banner_img,podcast_link,post_date,cat_name,cat_slug,subcat_name,meta_title,meta_description,meta_keywords,reading_time from p_data_view WHERE cat_slug = ? and post_name = ? and post_status ='publish' `;
        const [result] = await connection.execute(postQuery,[cat_name,post_name]);
        const postData = result[0];
        const filePath = path.resolve(__dirname, "index.html");
        let data = await fs.promises.readFile(filePath, "utf8");

        data = data
            .replace(/__TITLE__/g, postData.meta_title)
            .replace(/__DESCRIPTION__/g, postData.meta_description)
            .replace(/__IMAGE__/g, 'https://staging.enterprisetalk.com:7000' + postData.banner_img)
            .replace(/__URL__/g, `https://staging.enterprisetalk.com:7000/${cat_name}/${post_name}`)
            .replace(/__CANONICAL__/g, `https://staging.enterprisetalk.com:7000/${cat_name}/${post_name}`);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// app.use(express.static(path.resolve(__dirname, "./build")));

https
  .createServer(
    {
      key: fs.readFileSync(
        "../../ssl/keys/aa3e0_d274b_dccfc3182893b25dd367b7553743a2d2.key"
      ),
      cert: fs.readFileSync(
        "../../ssl/certs/staging_enterprisetalk_com_aa3e0_d274b_1718019213_8c9e12f0f8b7bb8ce99a8ffac1af13d5.crt"
      ),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });