import { Request, Response, json} from 'express'
import moment = require('moment');
import Pedido from '../models/pedido'


export async function crearReserva(req: Request, res: Response) { 


}


export async function newPedido(req: Request, res: Response) { 
 const pedido = new Pedido(req.body.pedido);
 pedido.save();
 return res.json(pedido);
 
}

export async function getPedidos(req: Request, res: Response): Promise<Response>{
    const pedidos = await Pedido.find();
    return res.json(pedidos);
    }

export async function getPendings(req: Request, res: Response): Promise<Response>{ 
    const pedidos = await Pedido.find({state: 'pendiente'});
    return res.json(pedidos)    
    }

export async function getReady(req: Request, res: Response): Promise<Response>{ 
    const pedidos = await Pedido.find({state: 'listo'});
    return res.json(pedidos)    
    }

export async function changeState(req: Request, res: Response): Promise<Response>{ 
    const pedido = await Pedido.findById(req.body.id)
    if (pedido.state == 'pendiente') {
      pedido.state = 'listo';
    } else {
        pedido.state = 'pendiente';
    }
    pedido.save();
    return res.json(pedido);
}

export async function delivered(req: Request, res: Response): Promise<Response>{ 
    const pedido = await Pedido.findById(req.body.id);
    pedido.state = 'entregado';
    pedido.save();
    return res.json(pedido);
}