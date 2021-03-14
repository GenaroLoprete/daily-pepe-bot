const pepe = require('rare-pepe-api');
const axios = require('axios');

const getPepeImg = () => {
    return pepe.getRandom().img_url;
}

module.exports.getPepeBase64 = async () => {
    const pepeImg = getPepeImg();
    try {
        return axios
            .get(pepeImg, {
                responseType: 'arraybuffer'
            })
            .then(response => Buffer.from(response.data, 'binary').toString('base64'));
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}
