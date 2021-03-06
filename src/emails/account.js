const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from: 'tubakhantts@gmail.com',
        subject: 'This is my first creation!',
        text:'Welcome to the app, '+name+'. Let me know how you get along with the app.'
        })
}

const sendRemoveAccountEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from: 'tubakhantts@gmail.com',
        subject: 'Account Deletion !',
        text:name+', your account has been deleted.'
        })
}

module.exports={
    sendWelcomeEmail,
    sendRemoveAccountEmail
}