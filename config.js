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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923493436993";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923493436993";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_14_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU1doTFdFK0hFZHc1VEhlZ1J4RUNqSk51MXpOaWU2WjVGNGdVQnlvenBzVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0OTM0MzY5OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlGOENBNjQwOUY4QkIzN0JCQTM2OUI3N0M5MjY2RkMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDM1ODgzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ5MzQzNjk5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDFFQjEzNDNGM0REMDZERkQxQkRDMDlBMDlDRDY2ODVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMzU4ODM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdjRUpNV3hfU215N3RFRDNianBxdGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzIwNGM1YjYtM2E1ZC00NTM3LTgyY2ItNTc1MDI2MDZjNTYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTE5LFxuICAgICAgNDAsXG4gICAgICA1MixcbiAgICAgIDk4LFxuICAgICAgMTMyLFxuICAgICAgNTIsXG4gICAgICAxNzAsXG4gICAgICAyNTAsXG4gICAgICAxOTEsXG4gICAgICAxLFxuICAgICAgMTAxLFxuICAgICAgMTYyLFxuICAgICAgNTYsXG4gICAgICAzLFxuICAgICAgNTYsXG4gICAgICAxNTYsXG4gICAgICAxNzUsXG4gICAgICAxNTQsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAyMTksXG4gICAgICA0MSxcbiAgICAgIDE2OCxcbiAgICAgIDIyMyxcbiAgICAgIDIzOCxcbiAgICAgIDEzMSxcbiAgICAgIDE1NCxcbiAgICAgIDIyLFxuICAgICAgMTgyLFxuICAgICAgNDQsXG4gICAgICAyNSxcbiAgICAgIDE0MyxcbiAgICAgIDk3LFxuICAgICAgMjQ4LFxuICAgICAgMTcyLFxuICAgICAgMTQ5LFxuICAgICAgMTA2LFxuICAgICAgMzIsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGVlhXU0sxNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDkzNDM2OTkzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBcnNsYW4gQWtyYW1cIixcbiAgICBcImxpZFwiOiBcIjE2MTI4MDg3MDYwMDk1MDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012ZHJSQVFydHlNdVFZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidjhiUnh6bG9naXBObHdHL3Zya1lqY2F0NjFBeHF0STU5dWRleEhEOFVoWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0dVlMTWtlYVFkb25ZRzhYaktOb1RzSVptRHRwUHVhb3dpTnhXc2ovbkUzVGsySEthcTM3S3ZHUU5GdUtjdDRpNVBodXo2azBJZkZjQ2E4azBrUmVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrQVVEdFVvTmhHYWcyNlJNTXZWb2wwTk0zN2ZGdHkzQnhEd3lhRFhzVFNFL1FRUlM0OXNRellTelo0NnhMS0N2Zm1oM05VUGZwWjZBU3oxVVNSUXFBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTM0MzY5OTM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDM1ODgzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtPTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS09OLmpzb24iOiAie1wia2V5RGF0YVwiOlwibTcrZ0ZXd3NMSXB6bTkvUWNrbXM5VnJGRWdKdy9BUmxMM1pCUUdPbU9vbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDMwMzY5MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
