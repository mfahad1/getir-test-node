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
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
class RecordsService {
    constructor(repo) {
        this.repo = repo;
    }
    findRecords(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = yield joi_1.default.object({
                startDate: joi_1.default.string().required().label('startDate'),
                endDate: joi_1.default.string().required().label('endDate'),
                minCount: joi_1.default.number().required().label('minCount'),
                maxCount: joi_1.default.number().required().label('maxCount'),
            }).validateAsync(params);
            return this.repo.findRecords(payload);
        });
    }
}
exports.default = RecordsService;
//# sourceMappingURL=records.js.map