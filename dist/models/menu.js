"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    imagePath: String,
    description: String,
    price: Number
});
exports.default = mongoose_1.model('Menu', schema);
//# sourceMappingURL=menu.js.map