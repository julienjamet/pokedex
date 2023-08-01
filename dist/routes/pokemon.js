"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const express_1 = __importDefault(require("express"));
const pokemon_1 = require("../controllers/pokemon");
const router = express_1.default.Router();
/*****************************************************************ROUTES*/
router.get('/', pokemon_1.getAll);
router.get('/:id', pokemon_1.getOne);
router.post('/', pokemon_1.catchOne);
router.put('/:id', pokemon_1.updateOne);
router.delete('/:id', pokemon_1.deleteOne);
/****************************************************************EXPORTS*/
exports.default = router;
