"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const records_1 = __importDefault(require("../controllers/records"));
const asyncHandler_1 = require("../utils/asyncHandler");
const router = express_1.Router();
/**
 * @swagger
 * /records:
 *   post:
 *     tags:
 *       - Records
 *     summary: Get Records
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                startDate:
 *                  description: Starting date range for record retrieval
 *                  type: string
 *                endDate:
 *                  description: Ending date range for record retrieval
 *                  type: string
 *                minCount:
 *                  description: Minimum Count Range of record counts
 *                  type: integer
 *                maxCount:
 *                  description: Maximum Count Range of record counts
 *                  type: integer
 *            example:
 *                startDate: "2016-01-26"
 *                endDate: "2018-02-02"
 *                minCount: 2700
 *                maxCount: 3000
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 code:
 *                   type: integer
 *                 msg:
 *                   type: string
 *                 records:
 *                   type: array
 *                   items:
 *                      key: string
 *                      createdAt: string
 *                      totalCount: string
 *             example:
 *               code: 1
 *               msg: 'Success'
 *               records:
 *                 - key: TAKwGc6Jr4i8Z487
 *                   createdAt: 2017-01-28T01:22:14.398Z
 *                   totalCount: 288
 *                 - key: NAeQ8eX7e5TEg7oH
 *                   createdAt: 2017-01-28T01:22:14.398Z
 *                   totalCount: 299
 */
router.post('/records', asyncHandler_1.wrapAsync(records_1.default.getAll));
exports.default = router;
//# sourceMappingURL=records.js.map