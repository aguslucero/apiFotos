import { Request, Response, json} from 'express';
import Menu from '../models/menu';
import fs from 'fs-extra';
import path from 'path';


export async function crearMenu(req: Request, res: Response) {
const { title, description, price } = req.body;
const newMenu = {
    title,
    imagePath: req.file.path,
    description,
    price,
};
const menu = new Menu(newMenu);
await menu.save();
return res.json({
    message:'menu guardado correctamente',
    menu
});
} ;

export async function getMenus(req: Request, res: Response): Promise<Response>{
const menus = await Menu.find();
return res.json(menus);
}

export async function getMenu(req: Request, res: Response): Promise<Response> {
const menu = await Menu.findById(req.params.id);
    return res.json(menu );
}

export async function deleteMenu(req: Request, res: Response): Promise<Response> {
   const menu =  await Menu.findByIdAndDelete(req.params.id);
   if (menu) {
       fs.unlink(path.resolve(menu.imagePath));
   }
    return res.json({
        message: 'menu eliminado',
        menu
    });
}


export async function actualizarMenu(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, price, description } = req.body;
    const menu = await Menu.findByIdAndUpdate(id, {
        title,
        price,
        description,
        imagePath: req.file.path
        
    },{new: true});
    return res.json({
        message: 'menu actualizado',
        menu
    });
}