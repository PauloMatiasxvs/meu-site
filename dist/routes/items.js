"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let items = [];
router.get('/', (_, res) => {
    res.json(items);
});
router.post('/', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json(item);
});
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = req.body;
    items[id] = item;
    res.json(item);
});
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items.splice(id, 1);
    res.status(204).send();
});
exports.default = router;
//# sourceMappingURL=items.js.map