const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_10_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMTE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtEZ1htNmRkY2dTK1RtWjM1a0dsb3hBN3hPcHZ4d3UzOG9Yd0pwaDBKbzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2Mjg4NTMyODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVBRTdBRjZFRkFDRjcxQTEyQzU0RTFENzU5MDI3NjA1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODgyMDY1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzRGpYZWRZYVFqNmFxcjlkaGlsNm5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3ODc4ODQ1LWNhNWQtNDFjMS1iZjYxLTlkNmU3YTAwOTBkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxMzMsXG4gICAgICAyMTMsXG4gICAgICAyMDYsXG4gICAgICAyMDMsXG4gICAgICAyMzEsXG4gICAgICAzMyxcbiAgICAgIDc1LFxuICAgICAgNzAsXG4gICAgICAxNjIsXG4gICAgICA3OSxcbiAgICAgIDEyNCxcbiAgICAgIDE0OSxcbiAgICAgIDE0NCxcbiAgICAgIDI0OCxcbiAgICAgIDIwNCxcbiAgICAgIDI5LFxuICAgICAgMjQ5LFxuICAgICAgMTE4LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMTc3LFxuICAgICAgMTQ2LFxuICAgICAgMjAwLFxuICAgICAgMTk4LFxuICAgICAgMjMsXG4gICAgICA2OSxcbiAgICAgIDE4MSxcbiAgICAgIDgxLFxuICAgICAgMTU1LFxuICAgICAgNixcbiAgICAgIDE3NSxcbiAgICAgIDExMCxcbiAgICAgIDEwMSxcbiAgICAgIDI0OCxcbiAgICAgIDIwMCxcbiAgICAgIDE3MixcbiAgICAgIDE3MixcbiAgICAgIDI0NCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZUkQ4QkdYVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2Mjg4NTMyODE6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MTg4OTA3OTQ3MjI5MzoyN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJwcmluY2VtYXNoYW1iYTA5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERnOUlJSEVLYSt6TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4b3M5anBDZ2RCSVNIT1lGUUJBcUo5WGU5WEdNSXBZaEc4UWpVUEd0cm5VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjg4VUxCQkw1U0krWlNBMFNDWXV6TkwxOFo2UTRuV1ZtSThURVJtV2R5K3FyUVJBYkJIbHlGbkMyMWtpdXFxYVQ1NG5XMGxRQ1Uzd25yQmpENmV6YURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNtYjRCb2FoZ05uQWdvMmQxdk5BRFBCZlQ0aTZQR3p1R0Z0QUZSQjhSMkV5ZFoxYWpMempzck5xeGtQOVRQVmxkTWpnS1NQbzgyV29Zc0k1OGlWS2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjI4ODUzMjgxOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODIwNjQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUlxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSXEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLSnNvNmRhdGc0ZkN1S3ZVMkNXUE1lSGw1TjhVSGxpMHl2amxsSFpmMG1zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODUxNTU0MzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODgxOTE0MTAzOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
