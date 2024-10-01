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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_03_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDMzLFxuICAgICAgICAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MixcbiAgICAgICAgMTA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJveE9DOHNiVHRlWmVlb3ljcCtlSWI2cGNXMGZJWG5CZlAvb3RaTzZ6bGxRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVN3E1Um5PS1RPMko0YXFYcEhxZm9RXCIsXG4gIFwicGhvbmVJZFwiOiBcImU4ZmY5YTk4LTU2ZTItNDBmMC05OWFkLWZhN2VmNzkyYTNiMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAyMzMsXG4gICAgICAxODgsXG4gICAgICAxMixcbiAgICAgIDE5MSxcbiAgICAgIDE1NixcbiAgICAgIDE1NyxcbiAgICAgIDIwNCxcbiAgICAgIDMxLFxuICAgICAgNixcbiAgICAgIDMzLFxuICAgICAgMTM1LFxuICAgICAgMjQsXG4gICAgICAxOTMsXG4gICAgICA2MyxcbiAgICAgIDE2MixcbiAgICAgIDExNCxcbiAgICAgIDEwMSxcbiAgICAgIDIzNCxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDk3LFxuICAgICAgMjM5LFxuICAgICAgMjIwLFxuICAgICAgMTkzLFxuICAgICAgMTY4LFxuICAgICAgMzcsXG4gICAgICAxNyxcbiAgICAgIDI1NCxcbiAgICAgIDcwLFxuICAgICAgMTg1LFxuICAgICAgNSxcbiAgICAgIDEzOCxcbiAgICAgIDEyNSxcbiAgICAgIDI1MCxcbiAgICAgIDEyMCxcbiAgICAgIDExMixcbiAgICAgIDExMSxcbiAgICAgIDE5MyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFRDRUSFZYNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg0MzAzODI4OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NjI0ODkyMzUwODc1NzoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWDgvSzhIRUw2ZThMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZVUmZlNk1FR1BDTnpZZjF2d0UyaEFkNXd2UFlqaVZhUUdCM0kyVE91a2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicFZ6SWRiRjZQZUxvK0JydHVrdE9PbDhqR2NJUVhpSWZpd3Z6TnNrRnd2OEEvbmlEeFdUMlpaOCtDTlZPWVZSeXAwUkI2KzRDajNERE5ubEdsMFEyQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaG8rV051cVRKbkJ6Q0d3REtlS0NMUlhKcGdDR3pjUzI4cGE3VzN4WGplRzRNVGZtU0FOWENMR1lqSkJ5OVcvL1pOdXRXUFMyUlBabzN5Ly8rdXJ3QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg0MzAzODI4OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc3OTUwMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOYm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5iby5qc29uIjogIntcImtleURhdGFcIjpcIlE4VVdiMFVvdmIzd2Vsd1VtRGc3Q1M1MmVIM1U4bUVqc0JLQ0ZNTEJJVkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk3OTY2MTgyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzc5NDkzMTQ5OVwifSIKfQ=="  // PUT your SESSION_ID 


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
