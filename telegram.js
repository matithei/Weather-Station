import { config } from './config.js';
import axios from 'axios';

const TOKEN = config.bot_key

async function setWebhook() {
  try {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/setWebhook`, {
      url: `https://apricot-lemur-wear.cyclic.app//webhook/${TOKEN}`,
    });
    console.log("Webhook configurado correctamente");
  } catch (error) {
    console.error("Error al configurar el webhook:", error.message);
  }
}

// Llamar a la función para configurar el webhook al iniciar la aplicación
setWebhook();

export async function sendNotification(notification) {
   var options = {
     method: "POST",
     url: `https://api.telegram.org/bot${TOKEN}/sendMessage`,
     headers: {
       "Content-Type": "application/json",
       "User-Agent": "insomnia/8.5.1",
     },
     data: {
       chat_id: 1358182211,
       text: `${notification.stationName} , Lluvia Actual: ${notification.value}`,
     },
   };

   return axios
     .request(options)
     .then(function (response) {
       console.log(response.data);
     })
}

