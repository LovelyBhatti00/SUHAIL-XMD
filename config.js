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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_23_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDczLFxuICAgICAgICAyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE5LFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0hvZm02TXpmNUUrLzFmSUg0NXlsVWpUT0o2c25uNkNSTFYvMTRra0x0VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVjYtT2hDcXBRSmlfZjFvRkxmY2tHUVwiLFxuICBcInBob25lSWRcIjogXCJiNzJjOWMxZS02Y2Q5LTQzYzMtYjMxNS1kOGUzOTZiNTczZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMjIwLFxuICAgICAgMjI3LFxuICAgICAgOTAsXG4gICAgICAxNTgsXG4gICAgICA5MyxcbiAgICAgIDUwLFxuICAgICAgMjQ4LFxuICAgICAgMTUzLFxuICAgICAgODUsXG4gICAgICAyNDUsXG4gICAgICA0OCxcbiAgICAgIDExNCxcbiAgICAgIDE5NyxcbiAgICAgIDE1OCxcbiAgICAgIDEzMSxcbiAgICAgIDE4MSxcbiAgICAgIDIyOCxcbiAgICAgIDIwOSxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICA0MixcbiAgICAgIDU5LFxuICAgICAgMjIyLFxuICAgICAgMTI4LFxuICAgICAgMTE3LFxuICAgICAgMTAsXG4gICAgICAyMTMsXG4gICAgICAyMTEsXG4gICAgICA3LFxuICAgICAgMTAsXG4gICAgICAxNjcsXG4gICAgICA5NCxcbiAgICAgIDExLFxuICAgICAgOSxcbiAgICAgIDIzNyxcbiAgICAgIDE2OCxcbiAgICAgIDMyLFxuICAgICAgMjUyLFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1RUU5LVlQ5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NTg0MDEyOTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxNTcwMTYxOTE4MDQ0OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGJaNVpvQ0VMYnk3YmNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3enRzMi81WHdLVXhpV05nYjU3Y2E2aFVZQkFFQ1JLdExvalh6U0tTUkEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtRNWRJeVpCa3JTSTV0MHlqRllsR095aEorZzdjV1dkNldvNFlkRWhSNTBkajlNTHN1dTdkSG9PSlBUTkJPQlVRSCtwS3ZkOWZiRVV3OWNiYXUzT0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh3WThkT2JTOW0yWGkyOTY0b1ppNGxDRWFZTGlhUittSnhLUjltM2w2RURjcGk3aUJISW5HanY4WXRvSkNGZW5EdkMzVThERU1Jdlp5S1ZCMGdDb2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ1ODQwMTI5ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzc1NjYwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURxbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHFtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTXVSY3hFOWg1aFMvTzl1NWpYZDFlZVpvVEtHT2FlSC95aEIyZEtsbmJBVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTMwNjMxNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzcxNzc2MjgyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
