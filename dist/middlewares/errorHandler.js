"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
function ErrorHandler(err, req, res, next) {
    const joiErr = err;
    if (joiErr.isJoi) {
        res.status(400).send({ message: joiErr.details[0].message });
        return next();
    }
    const boomErr = err;
    if (boomErr.isBoom) {
        res.status(boomErr.output.statusCode).send({ message: boomErr.message });
        return next();
    }
    switch (err.name) {
        case 'SyntaxError':
            res.status(400).send({ message: 'Invalid body syntax' });
            return next();
        default:
            req.log.error({ err }, `Something not handled well: ${err.message}`);
            res.status(500).send({
                message: err.message,
                stack: config_1.default.env !== 'production' ? err.stack : undefined,
            });
            return next();
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=errorHandler.js.map