import { Router } from 'express';
import multer from '../libs/multer';
import multer2 from '../libs/multer2';
import * as fotoCrontroller from '../controllers/foto.controller'
import * as menuController from '../controllers/menu.controller'
import * as authController from '../controllers/auth.controller'
import * as reservaController from '../controllers/reservas.controller'
import * as notificacionController from '../controllers/notification.controller'
const router = Router();

router.route('/fotos')
   .get(fotoCrontroller.getFotos)
   .post(multer.single('image'), fotoCrontroller.crearFoto) 

router.route('/fotos/:id')
 .get(fotoCrontroller.getFoto)
 .delete(fotoCrontroller.deleteFoto)
 .put(fotoCrontroller.actualizar)

 router.route('/menus')
    .get(menuController.getMenus)
   .post(multer2.single('image'), menuController.crearMenu) 

 router.route('/menus/:id')
  .get(menuController.getMenu)
  .delete(menuController.deleteMenu)
  .put(menuController.actualizarMenu)

  //auth
  router.route('/auth/register').post(authController.createAdmin)
  router.route('/auth/login').post(authController.login);
  router.route('/auth/isLoged').post(authController.isLoged);
  
  //pedidos
  router.route('/itsActived').get(authController.itsActived);
  router.route('/activeOrDesactive').get(authController.ActiveOrDesactive);
  router.route('/pedidos/newPedido').post(reservaController.newPedido);
  router.route('/pedidos/getPedidos').get(reservaController.getPedidos);
  router.route('/pedidos/getPendings').get(reservaController.getPendings);
  router.route('/pedidos/getReady').get(reservaController.getReady);
  router.route('/pedidos/changeState').post(reservaController.changeState);
  router.route('/pedidos/delivered').post(reservaController.delivered);

  //notificacion
  router.route('/nofication/sendEmail').post(notificacionController.sendEmail)

  // reservas

  router.route('/reserva/createWorkableDay').post(reservaController.createWorkableDay)
  router.route('/reserva/getWorkableDays').get(reservaController.getWorkableDays)
  router.route('/reserva/tablesFoyDay/:date').get(reservaController.getTablesFoyDay)
  router.route('/reserva/createReserva').post(reservaController.createReserva)
  router.route('/reserva/deleteReserva').delete(reservaController.deleteReserva)
  router.route('/reserva/getReservaForDay').post(reservaController.getReservasForDay)

export default router