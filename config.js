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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_43_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImh6WWIrVno4Q2pBM0xzNEIxSTl5K1dBWW16K2xLUzhLYSs3NnNkM3UveHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRVTnRqcnpiVDBlZzAtN00zYU5oNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQ4ODUxYmEtODdlOC00N2QyLWEzNWEtODcwMjNjZDYxNWU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDE5LFxuICAgICAgMTYyLFxuICAgICAgMjU1LFxuICAgICAgNTYsXG4gICAgICAzOSxcbiAgICAgIDMzLFxuICAgICAgMjgsXG4gICAgICA1NixcbiAgICAgIDgwLFxuICAgICAgMTM5LFxuICAgICAgMjE1LFxuICAgICAgMTE2LFxuICAgICAgNTksXG4gICAgICAzOSxcbiAgICAgIDg3LFxuICAgICAgMjQ1LFxuICAgICAgMjA4LFxuICAgICAgNjMsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAyMzgsXG4gICAgICAyMzYsXG4gICAgICAxMDYsXG4gICAgICAyMzYsXG4gICAgICAxNzUsXG4gICAgICAxODcsXG4gICAgICAxMzYsXG4gICAgICAxNDYsXG4gICAgICAxOTYsXG4gICAgICAyMixcbiAgICAgIDM1LFxuICAgICAgOTcsXG4gICAgICAxMzAsXG4gICAgICA4LFxuICAgICAgOTEsXG4gICAgICAxMDUsXG4gICAgICAxMzAsXG4gICAgICAxNDMsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEI4UjFORVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIwMDE5OTg5NToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY1NzY0NDU2MTM2OTI0OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ011WjNvZ0VFUGlWakxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGRoRXJlM1I4UFFaS1k2RE0zZXo5T055eTN6YmhkRlg2QS9vVkxhRE9FYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDWVBJQ0Rtd29vbkVkT3dvNEpyeVRIbEl3d2FCWTMxVEFTVHhmRGI0WmlZblk4RStKY21wb0dQMXBFanRSN1ZjWVRnc1pZMmtlTXhSMGdkSzc3TS9CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3ZnRRVjZ3Mjg5bjF5WXV6dmZ3TkVxR0ViejFiN3Y2dTk5K3NKTWdIR3NsOWJrbWQ3VXNqSXdTVFU5MnVxYlA4SXRaT0RpeGtQZ0tMQnZzcFVkRUNBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMDAxOTk4OTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAzNDk4MjJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
