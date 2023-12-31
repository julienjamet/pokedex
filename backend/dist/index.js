"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const trainer_1 = require("./routes/trainer");
const auth_1 = require("./controllers/auth");
const rank_1 = require("./controllers/rank");
const pokemon_1 = require("./routes/pokemon");
const frontAuth_1 = require("./controllers/frontAuth");
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
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: process.env.FRONT_URL, methods: 'GET, POST, PUT, DELETE', credentials: true }));
app.use('/api/trainer', trainer_1.trainerRouter);
app.use('/api/pokemon', auth_1.auth, rank_1.rank, pokemon_1.pokemonRouter);
/*************************************************************FRONT AUTH*/
app.get('/api/frontauth', frontAuth_1.frontAuth);
/*****************************************************************LISTEN*/
app.listen(port, () => console.log(`Ecoute sur le port ${port}`));
