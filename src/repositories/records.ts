import Record from '../models/Records';

export type SearchRecordParams = { startDate: string, endDate: string, minCount: number, maxCount: number };
export type RecordResults = { key: string; createdAt: string; totalCount: number; }

export default class RecordsRepo {
  findRecords(params: SearchRecordParams) {
    return Record.aggregate<RecordResults>([
      {
        $project: {
          _id: 0,
          key: "$_id",
          createdAt: 1,
          totalCount: { $sum: [ "$counts" ] },
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
