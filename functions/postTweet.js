
/**
 * 
 * @param {Object generated to post in twitter} tw 
 * @param {Object with the meta id, the metadata for the tw} metaParams 
 */
module.exports.postTweet = async (tw, metaParams) => {
    return new Promise((resolve, reject) => {
        tw.post('statuses/update', { status: '', media_ids: [metaParams.media_id] }, function (err, data, response) {
            if (err) return reject(err);
            return resolve();
        });

    })
}