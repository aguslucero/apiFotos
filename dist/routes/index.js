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
router.route('/auth/login').post();
exports.default = router;
