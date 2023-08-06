"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./controllers/auth");
const rank_1 = require("./controllers/rank");
const trainer_1 = require("./routes/trainer");
const pokemon_1 = require("./routes/pokemon");
/********************************************************************APP*/
const app = (0, express_1.default)();
/*************************************************************DB CONNECT*/
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const connectionString = process.env.DATABASE_CREDENTIALS || 'Insert your MongoDB string here';
mongoose_1.default.connect(connectionString)
    .then(() => console.log('Connection à MongoDB établie !'))
    .catch(() => console.log('Connection à MongoDB échouée !'));
/********************************************************************USE*/
app.use(express_1.default.json());
app.use('/api/trainer', trainer_1.trainerRouter);
app.use('/api/pokemon', auth_1.auth, rank_1.rank, pokemon_1.pokemonRouter);
/*****************************************************************LISTEN*/
app.listen(port, () => console.log(`Ecoute sur le port ${port}`));
