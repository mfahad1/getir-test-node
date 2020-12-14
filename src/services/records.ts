import RecordsRepository, { SearchRecordParams } from '../repositories/records';
import Joi from '@hapi/joi';


export default class RecordsService {
  private repo: RecordsRepository;

  constructor(repo: RecordsRepository) {
    this.repo = repo;
  }

  async findRecords(params: SearchRecordParams) {
    const payload = await Joi.object({
      startDate: Joi.string().required().label('startDate'),
      endDate: Joi.string().required().label('endDate'),
      minCount: Joi.number().required().label('minCount'),
      maxCount: Joi.number().required().label('maxCount'),
    }).validateAsync(params);

    return this.repo.findRecords(payload);
  }
}
