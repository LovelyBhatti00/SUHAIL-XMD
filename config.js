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
global.caption = process.env.CAPTION || global.caption || "© ARAIN HACKER " 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923200199895";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923200199895";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_20_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDY5LFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjE3THl1c3hJTU5qYWtTS2YxenE5WjZlZWFSZmxCaU15M0t1WTQ2K2ZCYzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjAwMTk5ODk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNUJCMjk5MTk2RDdBMUYyNTEwMzREMjI1OThENkRGNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjcyNDE2MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMDAxOTk4OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4MTNENENDMkMzMzVDM0Q1RDg1Q0JGQzVBQjEwMjdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzI0MTYzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0Q1lMMFdlaVRXR3A2NzNjeWhzX3ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmNjhiYTYxLWI1OWYtNDUxYi1iMGQwLWZlZDY0NWFjYmQ5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDMzLFxuICAgICAgMTc3LFxuICAgICAgNDMsXG4gICAgICAyNTIsXG4gICAgICAxMTIsXG4gICAgICAxNjksXG4gICAgICAyMDgsXG4gICAgICAxMzQsXG4gICAgICAxMDUsXG4gICAgICAxMzgsXG4gICAgICAyNTIsXG4gICAgICAyNTEsXG4gICAgICAxOTYsXG4gICAgICAxMjYsXG4gICAgICA2NixcbiAgICAgIDE4OSxcbiAgICAgIDE3MSxcbiAgICAgIDE3NixcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDEyMCxcbiAgICAgIDIwMCxcbiAgICAgIDY0LFxuICAgICAgMzgsXG4gICAgICA3NCxcbiAgICAgIDE3NixcbiAgICAgIDIyOCxcbiAgICAgIDE4NixcbiAgICAgIDE3MyxcbiAgICAgIDIxLFxuICAgICAgMTIzLFxuICAgICAgMTQyLFxuICAgICAgNTQsXG4gICAgICAxMzEsXG4gICAgICA4MyxcbiAgICAgIDE5OCxcbiAgICAgIDMwLFxuICAgICAgMTkyLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVlOWkVYQ0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIwMDE5OTg5NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY1NzY0NDU2MTM2OTI0OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1yLiBBS1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01tWjNvZ0VFSmk3enJjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGRoRXJlM1I4UFFaS1k2RE0zZXo5T055eTN6YmhkRlg2QS9vVkxhRE9FYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnUllUL1BlSFUyWWJ3ZVFLMkxtMmE2Qk9nVC9yNlRoTzlKaDlad2ZqNldIT2RSVmo4eUJiRERubEpld3hnbWIwV0phY29Cb1dPcFBUYWM2RDRPY1hEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwUE9pNXY3eld6emt1bmdHaFliTTREbXNkRUhHRW5uUFVoTTkyKzd0TFdvemVyR3RTcWRoQWRrQ3VwNlkzYW10NUxodGo0Z0hXcmlwK2RjN2o3enJBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMDAxOTk4OTU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcyNDE2MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNSFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1IWi5qc29uIjogIntcImtleURhdGFcIjpcImtaV0hGc2tPVUFVTit4aTVnMUxOUCtlWjVNWVNXVFArTzhDZUVzRGFBZ289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5MjA2MjQwNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjg0NDk2MzEwOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ARAIN HACKER ",
  packname: process.env.PACK_NAME || "ARAIN HACKER ",
  botname : process.env.BOT_NAME  || "ARSLAN -XMD",
  ownername:process.env.OWNER_NAME|| "ARSLAN -X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
