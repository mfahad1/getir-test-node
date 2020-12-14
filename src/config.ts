import convict from 'convict';

const conf = convict({
    env: {
        format: ['development', 'staging', 'production'],
        default: 'development',
        env: 'NODE_ENV',
    },
    server: {
        port: {
            format: 'port',
            default: 3200,
            env: 'NODE_PORT',
        },
        database: {
            format: '*',
            default: 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true&replicaSet=Cluster0-shard-0&authSource=admin',
            env: 'DATABASE_URI',
        },
    }
});

conf.validate({ allowed: 'strict' });

export default conf.getProperties();
