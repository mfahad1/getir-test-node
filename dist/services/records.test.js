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
const records_1 = __importDefault(require("./../repositories/__mocks__/records"));
const records_2 = __importDefault(require("./records"));
const recordServices = new records_2.default(records_1.default);
describe('Testing findRecords function in the service', () => {
    it('returns record', () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = yield recordServices.findRecords({ startDate: '2016-01-26', endDate: '2018-02-02', minCount: 10, maxCount: 3000 });
        expect(payload).toEqual([{ "createdAt": "2017-01-28T01:22:14.398+0000", "key": "5ee1e209e07f053f990cea8c", "totalCount": 310 }, { "createdAt": "2017-01-28T01:22:14.398+0000", "key": "5ee1e8dee07f053f990ceaa1", "totalCount": 170 }, { "createdAt": "2017-01-28T01:22:14.398+0000", "key": "5ee1e8e6e07f053f990ceaa2", "totalCount": 120 }]);
    }));
    it('returns empty array', () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = yield recordServices.findRecords({ startDate: '2016-01-26', endDate: '2018-02-02', minCount: 1000, maxCount: 3000 });
        expect(payload).toEqual([]);
    }));
});
//# sourceMappingURL=records.test.js.map