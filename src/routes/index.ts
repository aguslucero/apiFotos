import { Router } from 'express';
import { getFotos, crearFoto, getFoto, deleteFoto, actualizar } from '../controllers/foto.controller'
import multer from '../libs/multer'

const router = Router();

router.route('/fotos')
   .get(getFotos)
   .post(multer.single('image'), crearFoto) 

router.route('/fotos/:id')
 .get(getFoto)
 .delete(deleteFoto)
 .put(actualizar)

export default router