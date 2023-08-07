"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAuthToFront = void 0;
/*****************************************************SEND AUTH TO FRONT*/
const sendAuthToFront = (req, res) => {
    if (req.auth) {
        res.status(200).json({ trainer: req.auth });
    }
    else {
        return res.status(401).json({ message: `Tu n'es pas authentifié(e) !` });
    }
};
exports.sendAuthToFront = sendAuthToFront;
