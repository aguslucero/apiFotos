"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function startConnecion() {
    await mongoose_1.default.connect('mongodb://localhost/galeria', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('base de datos conectada');
}
exports.startConnecion = startConnecion;
//# sourceMappingURL=database.js.map