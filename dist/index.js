"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const pokemon_1 = __importDefault(require("./routes/pokemon"));
/********************************************************************APP*/
const app = (0, express_1.default)();
const port = 3000;
dotenv_1.default.config();
const connectionString = process.env.DATABASE_CREDENTIALS || 'Insert your MongoDB string here';
mongoose_1.default.connect(connectionString)
    .then(() => console.log('Connection à MongoDB établie !'))
    .catch(() => console.log('Connection à MongoDB échouée !'));
/********************************************************************USE*/
app.use((0, serve_favicon_1.default)(__dirname + '/favicon.ico'));
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.json());
app.use('api/pokemon', pokemon_1.default);
/*****************************************************************LISTEN*/
app.listen(port, () => console.log(`Ecoute sur le port ${port}`));
