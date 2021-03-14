const T = require('../twit/twitterCredentials');
const { mediaUpload } = require('./mediaUpload');
const { metaDataCreate } = require('./metaDataCreate');
const { postTweet } = require('./postTweet');
const { getPepeBase64 } = require('./getPepeBase64');

module.exports.makeTweet = async () => {

    try {

        const tw = T.getTwit();

        const pepeBase64 = await getPepeBase64();

        const metaParams = await mediaUpload(tw, pepeBase64);

        await metaDataCreate(tw, metaParams);

        await postTweet(tw, metaParams);

        console.log('Daily pepe posted');
    }
    catch (e) {
        console.log(e);
        throw e;
    }

}

