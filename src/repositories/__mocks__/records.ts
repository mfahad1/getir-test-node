import { RecordResults, SearchRecordParams } from "../records";


const mockData = {data: [
  {
      "_id" : "5ee1e209e07f053f990cea8c",
      "key" : "TAKwGc6Jr4i8Z487",
      "createdAt" : "2017-01-28T01:22:14.398+0000",
      "counts" : [150, 160],
      "value" : "Getir Task"
  },
  {
      "_id" : "5ee1e8dee07f053f990ceaa1",
      "key" : "TAKwGc6Jr4i8Z487",
      "createdAt" : "2017-01-28T01:22:14.398+0000",
      "counts" : [170],
      "value" : "Getir Task"
  },
  {
      "_id" : "5ee1e8e6e07f053f990ceaa2",
      "key" : "TAKwGc6Jr4i8Z487",
      "createdAt" : "2017-01-28T01:22:14.398+0000",
      "counts" : [120],
      "value" : "Getir Task"
  }
]}

class RecordRepositoryMock {
  findRecords(params: SearchRecordParams): Promise<RecordResults[]>  {
    const foundData = mockData.data.filter(dt => {
      const dataCount = dt.counts.reduce((acc, ct) => acc + ct, 0);
      const isCountInRange = dataCount >= params.minCount && dataCount <= params.maxCount;
      const isDateInRange = new Date(dt.createdAt).getTime() >= new Date(params.startDate).getTime() && new Date(dt.createdAt).getTime() <= new Date(params.endDate).getTime();

      return  isDateInRange && isCountInRange ? dt : false;
    }).map(dt => ({ key: dt._id, createdAt: dt.createdAt, totalCount: dt.counts.reduce((acc, ct) => acc + ct, 0) }));

    return Promise.resolve(foundData);
  }
}

export default new RecordRepositoryMock();