import RecordRepositoryMock from './../repositories/__mocks__/records';
import RecordService from './records';

const recordServices = new RecordService(RecordRepositoryMock);

describe('Testing findRecords function in the service', () => {

  it('returns record', async () => {

    const payload = await recordServices.findRecords({ startDate: '2016-01-26', endDate: '2018-02-02', minCount: 10, maxCount: 3000 });

    expect(payload).toEqual([{"createdAt": "2017-01-28T01:22:14.398+0000", "key": "5ee1e209e07f053f990cea8c", "totalCount": 310}, {"createdAt": "2017-01-28T01:22:14.398+0000", "key": "5ee1e8dee07f053f990ceaa1", "totalCount": 170}, {"createdAt": "2017-01-28T01:22:14.398+0000", "key": "5ee1e8e6e07f053f990ceaa2", "totalCount": 120}]);

  });

  it('returns empty array', async () => {

    const payload = await recordServices.findRecords({ startDate: '2016-01-26', endDate: '2018-02-02', minCount: 1000, maxCount: 3000 });

    expect(payload).toEqual([]);

  });

});