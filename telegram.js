import TelegramBot from 'node-telegram-bot-api';
import { config } from './config.js';

const token = config.bot_key
const users=config.users
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
    console.log(msg.from.username)
      console.log(msg.chat.id);
  bot.sendMessage(chatId, "Received your message");
});


export function sendNotification(notification) {
    bot.sendMessage(
      1358182211,
      `Esta empezando a llover en ${notification.stationName} http://192.168.120.50:8080`
    );
}

