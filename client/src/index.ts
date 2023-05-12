// Libs
import * as fs from "fs";

import axios from "axios";
import https from "https";

// Functions
async function main() {
    // console.info('Request to server...');
    // try {
    //     await axios.get("https://test-server:8000");
    //     console.log('Nice.');
    // } catch (err) {
    //     console.warn('Fuck');
    //     console.error(err);
    // }

    console.info('Request to haproxy...');
    try {
        await axios.get("https://test-haproxy:8000");
        console.log('Nice.');
    } catch (err) {
        console.warn('Fuck');
        console.error(err);
    }
}

// Code
const agent = new https.Agent({
    // rejectUnauthorized: true,
    // requestCert: true,
    ca: fs.readFileSync('./certs/ca.crt')
});

axios.defaults.httpsAgent = agent;

main();
