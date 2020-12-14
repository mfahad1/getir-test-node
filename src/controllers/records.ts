import { Request, Response } from "express";

import RecordsService from '../services/records';
import RecordsRepo from '../repositories/records';
import { NextFunction } from 'connect';

class FieldController {

  private service: RecordsService;

  constructor(service : RecordsService = new RecordsService(new RecordsRepo())) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    const { startDate, endDate, minCount, maxCount } = req.body;

    const records = await this.service.findRecords({ startDate, endDate, minCount, maxCount });

    res.send(records);
  };

}

export default new FieldController();