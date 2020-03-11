"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../libs/multer"));
const multer2_1 = __importDefault(require("../libs/multer2"));
const fotoCrontroller = __importStar(require("../controllers/foto.controller"));
const menuController = __importStar(require("../controllers/menu.controller"));
const authController = __importStar(require("../controllers/auth.controller"));
const reservaController = __importStar(require("../controllers/reservas.controller"));
const notificacionController = __importStar(require("../controllers/notification.controller"));
const router = express_1.Router();
router.route('/fotos')
    .get(fotoCrontroller.getFotos)
    .post(multer_1.default.single('image'), fotoCrontroller.crearFoto);
router.route('/fotos/:id')
    .get(fotoCrontroller.getFoto)
    .delete(fotoCrontroller.deleteFoto)
    .put(fotoCrontroller.actualizar);
router.route('/menus')
    .get(menuController.getMenus)
    .post(multer2_1.default.single('image'), menuController.crearMenu);
router.route('/menus/:id')
    .get(menuController.getMenu)
    .delete(menuController.deleteMenu)
    .put(menuController.actualizarMenu);
//auth
router.route('/auth/register').post(authController.createAdmin);
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
router.route('/nofication/sendEmail').post(notificacionController.sendEmail);
// reservas
router.route('/reserva/createWorkableDay').post(reservaController.createWorkableDay);
router.route('/reserva/getWorkableDays').get(reservaController.getWorkableDays);
router.route('/reserva/tablesFoyDay/:date').get(reservaController.getTablesFoyDay);
router.route('/reserva/createReserva').post(reservaController.createReserva);
router.route('/reserva/deleteReserva/:id').delete(reservaController.deleteReserva);
router.route('/reserva/getReservaForDay/:date').get(reservaController.getReservasForDay);
exports.default = router;
//# sourceMappingURL=index.js.map