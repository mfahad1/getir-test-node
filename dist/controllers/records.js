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
const records_1 = __importDefault(require("../services/records"));
const records_2 = __importDefault(require("../repositories/records"));
class FieldController {
    constructor(service = new records_1.default(new records_2.default())) {
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { startDate, endDate, minCount, maxCount } = req.body;
            const records = yield this.service.findRecords({ startDate, endDate, minCount, maxCount });
            res.send(records);
        });
        this.service = service;
    }
}
exports.default = new FieldController();
//# sourceMappingURL=records.js.map