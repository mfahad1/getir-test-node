import Bunyan from 'bunyan';

import config from '../config';

export default new Bunyan({
    name: 'getir-test',
    serializers: Bunyan.stdSerializers,
    streams: [{
        level: config.env !== 'production' ? 'debug' : 'info',
        stream: process.stdout,
    }],
});
