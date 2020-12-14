"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_bunyan_logger_1 = __importDefault(require("express-bunyan-logger"));
const fast_glob_1 = __importDefault(require("fast-glob"));
const helmet_1 = __importDefault(require("helmet"));
const database_1 = require("./database");
const config_1 = __importDefault(require("./config"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const logger_1 = __importDefault(require("./utils/logger"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.default.info('Starting server...', config_1.default.server.database);
        yield database_1.connect(config_1.default.server.database);
        const app = express_1.default();
        // Register middlewares
        app.use(cors_1.default({
            origin: '*',
        }));
        app.use(helmet_1.default({ hidePoweredBy: true }));
        app.use(body_parser_1.default.json());
        app.use(express_bunyan_logger_1.default({
            logger: logger_1.default,
            parseUA: false,
            excludes: ['response-hrtime', 'req-headers', 'res-headers'],
            format: ':incoming :method :url :status-code',
        }));
        // Register routes
        const routes = yield fast_glob_1.default('./routes/*.(ts|js)', { cwd: __dirname });
        for (const routePath of routes) {
            const { default: router } = yield Promise.resolve().then(() => __importStar(require(routePath)));
            if (typeof (router) === 'function')
                app.use('/', router);
        }
        // Error handler must come last...
        app.use(errorHandler_1.default);
        // Kick it off!
        app.listen(process.env.PORT || 5000, () => __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info({ port: process.env.PORT }, 'Hey! I\'m listening...');
        }));
    });
}
start();
//# sourceMappingURL=server.js.map