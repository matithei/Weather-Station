import * as telegram from './telegram.js'
import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

// 👇️ "/home/borislav/Desktop/javascript/index.js"
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

// 👇️ "/home/borislav/Desktop/javascript"
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, "control-panel")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "control-panel", "index.html"));
});

app.post('/esp32', (req, res) => {
    const { body } = req;
    res.send({
        ok:true
    })
    telegram.sendNotification({stationName:'Don Atilio'})
})

app.listen(3000, () => console.log("Example app listening on port 3000!"));
