const fs = require('fs-extra')
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923458401298,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_14_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRyVWN3elQ5RWxHV3JFaWZvWjBJZGw4bVViOE5ocG83bC9PazI2WjNyODg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndYXy1sc1UyVGV1bmc2ME1aRlNwVXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmU2N2FkY2QtNTMwNS00NzNjLTg4NTQtZGZmZDIzMzQzNzBjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDEzNixcbiAgICAgIDI0OSxcbiAgICAgIDE3NCxcbiAgICAgIDQ0LFxuICAgICAgMTU3LFxuICAgICAgMTM0LFxuICAgICAgMjA3LFxuICAgICAgMjE0LFxuICAgICAgODksXG4gICAgICAxLFxuICAgICAgMTM0LFxuICAgICAgMTE0LFxuICAgICAgOCxcbiAgICAgIDMsXG4gICAgICAxMzIsXG4gICAgICAxNzUsXG4gICAgICAyMTcsXG4gICAgICAxNDcsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMzUsXG4gICAgICAxODksXG4gICAgICA3MyxcbiAgICAgIDUsXG4gICAgICAxMjIsXG4gICAgICA2OCxcbiAgICAgIDg2LFxuICAgICAgMTE4LFxuICAgICAgOTYsXG4gICAgICAxMzksXG4gICAgICAyMzksXG4gICAgICAxNSxcbiAgICAgIDk1LFxuICAgICAgMTU0LFxuICAgICAgMCxcbiAgICAgIDEwOCxcbiAgICAgIDIyNyxcbiAgICAgIDE2MixcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2QTlDNFJIWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDU4NDAxMjk4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTU3MDE2MTkxODA0NDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BiWjVab0NFTCtqOExjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid3p0czIvNVh3S1V4aVdOZ2I1N2NhNmhVWUJBRUNSS3RMb2pYelNLU1JBMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyUVhkZDdLVTNtWFhub1pxR0FqOUZFOXFuRTBwRXdTamZoTHZxaktCMHFCN3loMDNuRTJiU3cxMzlCZjBaeUJBMHNDb2hWL2lKOFZKMnltQkpNVE5EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyNnYyZWE2V3BzbEYwNUFXaDQ1dDlVQ3VhZFFaZHVoR2MrQjNjNTY3YkpDSmZmR2RWcXpzRTVPbmEyamVSTTBRTDJmM3A3Y244OU8xV2FaRy9TeFRBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NTg0MDEyOTg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc3OTU2NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEcW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURxbS5qc29uIjogIntcImtleURhdGFcIjpcIk11UmN4RTloNWhTL085dTVqWGQxZWVab1RLR09hZUgveWhCMmRLbG5iQVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTkzMDYzMTU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc3MTc3NjI4MjVcIn0iCn0="  // PUT your SESSION_ID 


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
