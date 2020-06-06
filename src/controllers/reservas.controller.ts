import { DateHelper } from './date.helper';
import { Request, Response, json} from 'express'
import moment = require('moment');
import Pedido from '../models/pedido'
import WorkableDay from '../models/workableDay'
import Reserva from '../models/reserva'



export async function crearReserva(req: Request, res: Response) { 


}


export async function newPedido(req: Request, res: Response) { 
 const pedido = new Pedido(req.body.pedido);
 pedido.menus = req.body.pedido.menus;
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

export async function createWorkableDay(req: Request, res: Response): Promise<Response>{
    const workableday = new WorkableDay(req.body.workableday);
    workableday.save();
    return res.json(workableday);
}

export async function getWorkableDays(req: Request, res: Response): Promise<Response>{
 const workableDay = await WorkableDay.find();
 return res.json(workableDay);
}

export async function getTablesFoyDay(req: Request, res: Response): Promise<Response>{ 
if (!DateHelper.isAfterThanToday(req.params.date)){
    return res.json(false)
}
  let availableHours = [];
   const hours = ['11', '12', '13', '14', '20', '21', '22']
   for(let element of hours) {
    let tables = 40;
    const reservas = await Reserva.find({dia: req.params.date}).find({hora: element})
    reservas.forEach( reserva => 
    tables = tables - +reserva.personas )
    if (tables > 0 ) {
        const availables = new Availables(element, tables)
        availableHours.push(availables)
    }
   }
   
   return res.json(availableHours);


}

export async function createReserva(req: Request, res: Response): Promise<Response>{ 
const reserva = new Reserva(req.body.reserva);
let tables = 40;
    const reservas = await Reserva.find({dia: reserva.dia}).find({hora: reserva.hora})
    reservas.forEach( data => 
    tables = tables - +data.personas );
    tables = tables - +reserva.personas;
    if (tables > 0) {
       reserva.save();
       return res.json(reserva);
    }
       return res.json(false);

}

export async function deleteReserva(req: Request, res: Response): Promise<Response>{ 
    const reserva = await Reserva.findByIdAndDelete(req.params.id);
    return res.json('reserva eliminada' + reserva)
 }

 export async function getReservasForDay(req: Request, res: Response): Promise<Response>{  
    const reserva = await Reserva.find({dia: req.params.date});
    return res.json(reserva);
 }


export class Availables {
    hour: string;
    tables: number

    constructor(hour: string, tables:number){
        this.hour = hour;
        this.tables = tables
    }
}
