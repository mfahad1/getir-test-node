"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = __importDefault(require("bunyan"));
const config_1 = __importDefault(require("../config"));
exports.default = new bunyan_1.default({
    name: 'getir-test',
    serializers: bunyan_1.default.stdSerializers,
    streams: [{
            level: config_1.default.env !== 'production' ? 'debug' : 'info',
            stream: process.stdout,
        }],
});
//# sourceMappingURL=logger.js.map