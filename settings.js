const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
global.email = 'vishwanishakya@gmail.com'
global.github = 'https://github.com/vishwabot810/VAJIRA-MD'
global.location = 'Srilanka Colombo'
global.packname = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚅𝚒𝚜𝚑𝚠𝚊-𝙱𝚘𝚝';
global.author = '𝚅𝚒𝚜𝚑𝚠𝚊 𝙽.𝙳𝚑𝚊𝚛𝚖𝚊𝚜𝚘𝚘𝚛𝚒𝚢𝚊.....😍';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`I am not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
}

global.owner = [process.env.OWNER_NUMBER] || ['94742088810'] // Owner number , (අයිතිකරුගේ නම්බර් එක )

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'youre session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
LANG:  process.env.LANG || 'SI' ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,    
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,            
WORK_TYPE: process.env.WORK_TYPE || 'public'  ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
OWNER_NUMBER: process.env.OWNER_NUMBER || '94742088810'  ,    
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || 'Vajira' ,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,    
NUMBER_212_BLOCK: process.env.NUMBER_212_BLOCK || true  ,
FOOTER: process.env.FOOTER ||  '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚅𝚒𝚜𝚑𝚠𝚊-𝙱𝚘𝚝',
LOGO: process.env.LOGO || `https://telegra.ph/file/6ff26add40aea95b4c7f4.jpg` ,
IMAGE: process.env.IMAGE || `https://telegra.ph/file/6ff26add40aea95b4c7f4.jpg`     
};
