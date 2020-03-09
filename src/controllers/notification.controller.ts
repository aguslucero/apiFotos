import { Request, Response, json} from 'express'
var nodemailer = require('nodemailer');
// email sender function
export async function sendEmail(req: Request, res: Response): Promise<Response>{
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'IAM.notificaciones@gmail.com',
            pass: 'agus40188225'
        }
    });
// Definimos el email
var mailOptions = {
    from: 'Remitente',
    to: req.body.email,
    subject: 'Pedido listo',
    text: 'Hola '+ req.body.name + ' Su pedido (' + req.body.title + ') ya se encuentra disponible para ser retirado!'
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
      return  res.send(error);
    } else {
        console.log("Email sent");
       return res.status(200).json(req.body);
    }
})
      return res.json('mail enviado');
};