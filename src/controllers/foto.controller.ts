import { Request, Response, json} from 'express';
import Foto from '../models/foto';
import fs from 'fs-extra';
import path from 'path';


export async function crearFoto(req: Request, res: Response) {
const { title, description } = req.body;
const newPhoto = {
    title: req.file.originalname,
    imagePath: req.file.path
};
const foto = new Foto(newPhoto);
await foto.save();
return res.json({
    message:'foto guardada correctamente',
    foto
});
} ;

export async function getFotos(req: Request, res: Response): Promise<Response>{
const fotos = await Foto.find();
return res.json(fotos);
}

export async function getFoto(req: Request, res: Response): Promise<Response> {
const foto = await Foto.findById(req.params.id);
    return res.json(foto );
}

export async function deleteFoto(req: Request, res: Response): Promise<Response> {
   const foto =  await Foto.findByIdAndDelete(req.params.id);
   if (foto) {
       fs.unlink(path.resolve(foto.imagePath));
   }
    return res.json({
        message: 'foto eliminada',
        foto
    });
}


export async function actualizar(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title } = req.body;
    const foto = await Foto.findByIdAndUpdate(id, {
        title
    },{new: true});
    return res.json({
        message: 'foto actualizada',
        foto
    });
}