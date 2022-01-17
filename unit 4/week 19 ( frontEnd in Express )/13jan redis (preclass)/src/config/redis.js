/*from documentation :
1)          import { createClient } from 'redis';
            (async () => {
            const client = createClient();
            client.on('error', (err) => console.log('Redis Client Error', err));
            await client.connect();
            await client.set('key', 'value');
            const value = await client.get('key');
            })();


*/
const redis = require("redis");
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));
module.exports = client

