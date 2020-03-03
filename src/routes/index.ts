import { Router } from 'express';
import multer from '../libs/multer';
import multer2 from '../libs/multer2';
import * as fotoCrontroller from '../controllers/foto.controller'
import * as menuController from '../controllers/menu.controller'
import * as authController from '../controllers/auth.controller'
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

  router.route('/auth/register').post(authController.createAdmin)
  router.route('/auth/login').post(authController.login);
  router.route('/auth/isLoged').post(authController.isLoged);
  router.route('/itsActived').get(authController.itsActived);
  router.route('/activeOrDesactive').get(authController.ActiveOrDesactive);

export default router