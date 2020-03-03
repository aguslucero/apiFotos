"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const foto_1 = __importDefault(require("../models/foto"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
async function crearFoto(req, res) {
    const { title, description } = req.body;
    const newPhoto = {
        title: req.file.originalname,
        imagePath: req.file.path
    };
    const foto = new foto_1.default(newPhoto);
    await foto.save();
    return res.json({
        message: 'foto guardada correctamente',
        foto
    });
}
exports.crearFoto = crearFoto;
;
async function getFotos(req, res) {
    const fotos = await foto_1.default.find();
    return res.json(fotos);
}
exports.getFotos = getFotos;
async function getFoto(req, res) {
    const foto = await foto_1.default.findById(req.params.id);
    return res.json(foto);
}
exports.getFoto = getFoto;
async function deleteFoto(req, res) {
    const foto = await foto_1.default.findByIdAndDelete(req.params.id);
    if (foto) {
        fs_extra_1.default.unlink(path_1.default.resolve(foto.imagePath));
    }
    return res.json({
        message: 'foto eliminada',
        foto
    });
}
exports.deleteFoto = deleteFoto;
async function actualizar(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const foto = await foto_1.default.findByIdAndUpdate(id, {
        title
    }, { new: true });
    return res.json({
        message: 'foto actualizada',
        foto
    });
}
exports.actualizar = actualizar;
//# sourceMappingURL=foto.controller.js.map