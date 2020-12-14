"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convict_1 = __importDefault(require("convict"));
const conf = convict_1.default({
    env: {
        format: ['development', 'staging', 'production'],
        default: 'development',
        env: 'NODE_ENV',
    },
    server: {
        port: {
            format: 'port',
            default: 3200,
            env: 'NODE_PORT',
        },
        database: {
            format: '*',
            default: 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true&replicaSet=Cluster0-shard-0&authSource=admin',
            env: 'DATABASE_URI',
        },
    }
});
conf.validate({ allowed: 'strict' });
exports.default = conf.getProperties();
//# sourceMappingURL=config.js.map