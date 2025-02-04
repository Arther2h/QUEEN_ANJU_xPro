//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   HOSSAM ARTHER BOT                                              //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © HOSSAM ARTHER BOT
//  * @version      : 4.0
//  * @author       : HOSSAM ARTHER
//  * @youtube      : https://chat.whatsapp.com/HURwrBJQNNo32MfvA91jSf
//  * @description  : © HOSSAM ARTHER BOT, A Multi-functional WhatsApp bot created by HOSSAM ARTHER.
//*
//*
//Base by HOSSAM ARTHER
//GitHub: @ARTHER
//WhatsApp: +201009045195
//Want more free bot scripts? Subscribe to my YouTube channel: https://chat.whatsapp.com/HURwrBJQNNo32MfvA91jSf
//   * Created By GitHub: HOSSAM
//   * Credit To HOSSAM ARTHER
//   * © 2025 © HOSSAM ARTHER BOT-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~bBdnkDQT#4JccTD_gDb9mptXUYAmjt-9qVDBVCdkvlZl4rLNGF2g",
PORT: process.env.PORT || "8000"
};
