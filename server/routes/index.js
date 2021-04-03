const express = require('express');

const router = express.Router();
const { Telegraf } = require('telegraf');

function routes() {
  router.get('/bot/create', (req, res) => {
    const bot = new Telegraf('1789798446:AAFbhqy-Elo0fW-siH6Z1E1acZgfwA1LGVo');
    bot.start(ctx => ctx.reply('Welcome'));
    bot.help(ctx => ctx.reply('Send me a sticker'));
    bot.on('sticker', ctx => ctx.reply('👍'));
    bot.hears('hi', ctx => ctx.reply('Hey there'));
    bot.launch();

    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  });

  return router;
}

module.exports = routes;
