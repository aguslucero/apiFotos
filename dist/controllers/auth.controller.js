"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const admin_1 = __importDefault(require("../models/admin"));
const itsActived_1 = __importDefault(require("../models/itsActived"));
const SECRET_KEY = 'secretkey12345';
async function createAdmin(req, res) {
    const admin = req.body.admin;
    const encrypt = await bcrypt_1.default.genSalt(10);
    admin.password = bcrypt_1.default.hashSync(admin.password, encrypt);
    const ad = new admin_1.default(admin);
    await ad.save();
    const accessToken = jwt.sign({ _id: admin._id }, SECRET_KEY, { expiresIn: 60 * 60 });
    return res.json(accessToken);
}
exports.createAdmin = createAdmin;
async function login(req, res) {
    const email = req.body.email;
    const admin = await admin_1.default.findOne({ email: email });
    if (!admin)
        return res.status(400).json('email or password is wrong');
    const validate = await bcrypt_1.default.compare(req.body.password, admin.password);
    if (!validate)
        return res.status(400).json('Email or Password is wrong');
    const accessToken = jwt.sign({ _id: admin._id }, SECRET_KEY, { expiresIn: 60 * 60 * 24 });
    res.status(200).send({
        user: admin,
        token: accessToken
    });
}
exports.login = login;
;
async function isLoged(req, res) {
    const token = req.body.token;
    jwt.verify(token, SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.json(false);
        }
    });
    return res.json(true);
}
exports.isLoged = isLoged;
async function itsActived(req, res) {
    const verify = await itsActived_1.default.findOne();
    if (verify) {
        if (verify.actived) {
            return res.json(true);
        }
        return res.json(false);
    }
    return res.json(false);
}
exports.itsActived = itsActived;
async function ActiveOrDesactive(req, res) {
    let verify = await itsActived_1.default.findOne();
    if (!verify) {
        let newItsActive = new itsActived_1.default();
        newItsActive.actived = true;
        await newItsActive.save();
        verify = newItsActive;
        return res.json(verify);
    }
    if (verify.actived) {
        verify.actived = false,
            verify.save();
        res.json(verify);
    }
    else {
        verify.actived = true,
            verify.save();
        res.json(verify);
    }
}
exports.ActiveOrDesactive = ActiveOrDesactive;
//# sourceMappingURL=auth.controller.js.map