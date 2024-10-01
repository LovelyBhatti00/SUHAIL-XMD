toconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙 𝙃𝙪𝙯𝙖𝙞𝙛𝙖 𝙕𝙖𝙛𝙖𝙧" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923458401298";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923458401298";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923284303828,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_41_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibkpJcjBicUplM3QremsvaU1oai9UM0VjeW1udkt2MUExZVppYVNpemczbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODQzMDM4MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZEOTI4NjZFNTU5OUQwNzU1M0VCQjcxMkQxNTdCNEJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzgwMDkwOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4NDMwMzgyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDExRjEyM0JCRjNBQzUxODE4NDdENjU3NUZEMThEMTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3ODAwOTEwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFMUzU3WWlEUlotREJRbXJZZlhiNXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2YxZjVhMTAtN2ZiMy00Zjk4LTg5ZTMtNjE3NGM2NWIwYmVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDE0MCxcbiAgICAgIDIyOSxcbiAgICAgIDEyMCxcbiAgICAgIDM3LFxuICAgICAgMTgzLFxuICAgICAgMjM1LFxuICAgICAgODEsXG4gICAgICA1NCxcbiAgICAgIDI0OSxcbiAgICAgIDE3OCxcbiAgICAgIDE0NyxcbiAgICAgIDE0NixcbiAgICAgIDU0LFxuICAgICAgMTI1LFxuICAgICAgMTIxLFxuICAgICAgMTAzLFxuICAgICAgMjA3LFxuICAgICAgNjAsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMTQ1LFxuICAgICAgNzAsXG4gICAgICA0MSxcbiAgICAgIDIzNixcbiAgICAgIDE0LFxuICAgICAgMTAsXG4gICAgICAxMzgsXG4gICAgICAyMyxcbiAgICAgIDIwOSxcbiAgICAgIDExLFxuICAgICAgNjYsXG4gICAgICAxNyxcbiAgICAgIDE4OCxcbiAgICAgIDE2NyxcbiAgICAgIDI0OCxcbiAgICAgIDE1MyxcbiAgICAgIDE4NCxcbiAgICAgIDE4OCxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxCQUhRMzhOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyODQzMDM4Mjg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2MjQ4OTIzNTA4NzU3OjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWDgvSzhIRU1YTThMY0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZVUmZlNk1FR1BDTnpZZjF2d0UyaEFkNXd2UFlqaVZhUUdCM0kyVE91a2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia3g3TjBzOWE2NWNYdWJEcTBXNHBrbitmNXpsRmFGZEpteHdWbUN2TW9BUlNsSkNKMW5CNVNLTFdDRVVFVzdPOWdEaTYvRnNaVlQ5L0ExY0dGd3FEQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRkpFcGFGT1N1aEhockNnN0ExMG0wZU5TTitvNnNCQ2RyU2d6SnpGb2dyb042MWhmeW5abzk4bjJNcHE1SSt1VGNCWVZFckR5N0lrMjhnaFNlRXQ5aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg0MzAzODI4OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc4MDA5MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOYnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5icC5qc29uIjogIntcImtleURhdGFcIjpcImF6aU04aWZ3NkwxKzNiczlnc0c4a2lsdGhpc2hjalpWSk9udDdDMnR1T2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk3OTY2MTgyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3Nzk1MDE0MTQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙈𝙖𝙡𝙞𝙠 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ •𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙 𝙃𝙪𝙯𝙖𝙞𝙛𝙖 𝙕𝙖𝙛𝙖𝙧 』"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙈𝙖𝙡𝙞𝙠-XMD",
  ownername:process.env.OWNER_NAME|| "𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙 𝙃𝙪𝙯𝙖𝙞𝙛𝙖 𝙕𝙖𝙛𝙖𝙧-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
