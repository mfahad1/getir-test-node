"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const RecordSchema = new mongoose_1.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
    createdAt: { type: mongoose_1.Schema.Types.Date, required: true },
    counts: { type: mongoose_1.Schema.Types.Number, required: true },
});
exports.default = mongoose_1.default.model('records', RecordSchema);
//# sourceMappingURL=Records.js.map