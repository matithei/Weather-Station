import * as telegram from './telegram.js'
import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// 👇️ "/home/borislav/Desktop/javascript/index.js"
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

// 👇️ "/home/borislav/Desktop/javascript"
const __dirname = path.dirname(__filename);
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "control-panel")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "control-panel", "index.html"));
});

app.post('/esp32', (req, res) => {
  const { body } = req;
  console.log(body)
  telegram
    .sendNotification({ stationName: "Don Atilio",value:body.sensorValue })
    .catch((e) => console.log(e));
    res.send({
        ok:true
    })
    
})


app.post(`/webhook/:token`, async (req, res) => {
  try {
    const { message } = req.body;

    if (message) {
      const chatId = message.chat.id;
      const text = message.text;

      // Manejar el mensaje recibido
      console.log(`Mensaje recibido: ${text}`);

      // Responder al mensaje recibido
     //TODO
    }

    res.status(200).send("OK");
  } catch (error) {
    console.error("Error al manejar la actualización:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

telegram.setWebhook().then()
app.listen(3000, () => console.log("Example app listening on port 3000!"));
