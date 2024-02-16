import TelegramBot from 'node-telegram-bot-api';
import { config } from './config.js';
import axios from 'axios';

const token = config.bot_key


export async function sendNotification(notification) {
   var options = {
     method: "POST",
     url: `https://api.telegram.org/bot${token}/sendMessage`,
     headers: {
       "Content-Type": "application/json",
       "User-Agent": "insomnia/8.5.1",
     },
     data: { chat_id: 1358182211, text: `${notification.stationName} , Lluvia Actual: ${notification.value}` },
   };

   return axios
     .request(options)
     .then(function (response) {
       console.log(response.data);
     })
}

