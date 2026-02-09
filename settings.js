const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=4266e6d43bd1e1db",
MONGODB: process.env.MONGODB || "mongodb+srv://qu6054:7XGfSRE66Yp7667k@cluster0.p7y66.mongodb.net/",
OWNER_NUMBER: process.env.OWNER_NUMBER || "+94727634194", 
OWNER_NAME: process.env.OWNER_NAME || "Oshada",
BOT_NAME: process.env.BOT_NAME || "OSHADA-MD",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/V0f9r6W/oshada-md.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hellow I'm OSHADA-MD I'm Online Now!",
};
