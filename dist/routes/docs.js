"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const router = express_1.Router();
const swaggerSpecs = swagger_jsdoc_1.default({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Getir test',
            version: '1.0.0',
        },
    },
    apis: [path_1.default.join(__dirname, './*')],
});
router.get('/swagger.json', (req, res) => {
    res.send(swaggerSpecs);
});
exports.default = router;
//# sourceMappingURL=docs.js.map