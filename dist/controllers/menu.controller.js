"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = __importDefault(require("../models/menu"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
async function crearMenu(req, res) {
    const { title, description, price } = req.body;
    const newMenu = {
        title,
        imagePath: req.file.path,
        description,
        price,
    };
    const menu = new menu_1.default(newMenu);
    await menu.save();
    return res.json({
        message: 'menu guardado correctamente',
        menu
    });
}
exports.crearMenu = crearMenu;
;
async function getMenus(req, res) {
    const menus = await menu_1.default.find();
    return res.json(menus);
}
exports.getMenus = getMenus;
async function getMenu(req, res) {
    const menu = await menu_1.default.findById(req.params.id);
    return res.json(menu);
}
exports.getMenu = getMenu;
async function deleteMenu(req, res) {
    const menu = await menu_1.default.findByIdAndDelete(req.params.id);
    if (menu) {
        fs_extra_1.default.unlink(path_1.default.resolve(menu.imagePath));
    }
    return res.json({
        message: 'menu eliminado',
        menu
    });
}
exports.deleteMenu = deleteMenu;
async function actualizarMenu(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const menu = await menu_1.default.findByIdAndUpdate(id, {
        title
    }, { new: true });
    return res.json({
        message: 'menu actualizado',
        menu
    });
}
exports.actualizarMenu = actualizarMenu;
//# sourceMappingURL=menu.controller.js.map