

const nodemailer = require("nodemailer");
const appSetting = require('./appSetting.json');

const main =  async function sendMail(req){
    
    let transporter = nodemailer.createTransport({
        host: appSetting.mail.host,//"smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
        user: appSetting.mail.mail,//"julian.leonel3004@gmail.com", 
        pass: appSetting.mail.pass//"boletero", 
        },
    });


    // send mail with defined transport object
    let info = await transporter.sendMail(req);



    console.log("Message sent: %s", info.messageId);

}

module.exports = main;