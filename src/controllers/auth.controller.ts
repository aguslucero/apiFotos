import { Request, Response, json} from 'express'
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import Admin from '../models/admin';

const SECRET_KEY = 'secretkey12345'

export async function createAdmin(req: Request, res: Response): Promise<Response> {
    const admin = req.body.admin;
    const encrypt = await bcrypt.genSalt(10)
    admin.password = bcrypt.hashSync(admin.password, encrypt);
    const ad = new Admin(admin);
    await ad.save();
    const accessToken: string = jwt.sign({ _id: admin._id}, SECRET_KEY, {expiresIn : 60 * 60 } )
    return res.json(accessToken);
   
}

export async function login(req: Request, res: Response): Promise<Response> {
        const email = req.body.email;
        const admin = await Admin.findOne({email: email});
        if (!admin) return res.status(400).json('email or password is wrong');
        const validate : boolean =  await bcrypt.compare(req.body.password, admin.password);
        if (!validate) return res.status(400).json('Email or Password is wrong');
        const accessToken: string = jwt.sign({ _id: admin._id}, SECRET_KEY, {expiresIn : 60 * 60 * 24 });
        res.status(200).send({
          user: admin,
          token: accessToken
        });
         
      };

export async function isLoged(req: Request, res: Response): Promise<Response> {
  const token = req.body.token;
  jwt.verify(token, SECRET_KEY, function(err, decoded){
    if (err){
      return res.json(false);
    } 
    
  });
  return res.json(true);

}