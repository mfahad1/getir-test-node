import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import bunyanMiddleware from 'express-bunyan-logger';
import fg from 'fast-glob';
import helmet from 'helmet';
import { connect } from './database';

import config from './config';
import ErrorHandler from './middlewares/errorHandler';
import logger from './utils/logger';

async function start(): Promise<void> {
    logger.info('Starting server...', config.server.database);

    await connect(config.server.database);

    const app = express();

    // Register middlewares
    app.use(cors({
        origin: '*',
    }));
    app.use(helmet({ hidePoweredBy: true }));
    app.use(bodyParser.json());
    app.use(bunyanMiddleware({
        logger,
        parseUA: false,
        excludes: ['response-hrtime', 'req-headers', 'res-headers'],
        format: ':incoming :method :url :status-code',
    }));

    // Register routes
    const routes = await fg('./routes/*.(ts|js)', { cwd: __dirname });
    for (const routePath of routes) {
        const { default: router } = await import(routePath);
        if (typeof(router) === 'function') app.use('/', router);
    }

    // Error handler must come last...
    app.use(ErrorHandler);

    // Kick it off!
    app.listen(process.env.PORT || 5000, async () => {
        logger.info({ port: process.env.PORT }, 'Hey! I\'m listening...');
    });
}

start();
