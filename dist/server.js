"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const items_1 = __importDefault(require("./routes/items"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/items', items_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (_, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//# sourceMappingURL=server.js.map