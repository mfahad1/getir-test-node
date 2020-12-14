"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Records_1 = __importDefault(require("../models/Records"));
class RecordsRepo {
    findRecords(params) {
        return Records_1.default.aggregate([
            {
                $project: {
                    _id: 0,
                    key: "$_id",
                    createdAt: 1,
                    totalCount: { $sum: ["$counts"] },
                },
            }, {
                $match: {
                    createdAt: {
                        $gte: new Date(params.startDate),
                        $lte: new Date(params.endDate)
                    },
                    totalCount: {
                        $gte: params.minCount,
                        $lte: params.maxCount
                    }
                }
            }
        ]).then(res => res);
    }
}
exports.default = RecordsRepo;
//# sourceMappingURL=records.js.map