/**
 * 
 * @param {Object generated to post in twitter} tw 
 * @param {Object with the meta id, the metadata for the tw} metaParams 
 */
module.exports.metaDataCreate = async (tw, metaParams) => {
    return new Promise((resolve, reject) => {

        tw.post('media/metadata/create', metaParams, function (err, data, response) {
            if (err) return reject(err);
            return resolve();
        });

    })
}
