/**
 * 
 * @param {Object generated to post in twitter} tw 
 * @param {base 64 image, need it to post in tw} imageBase64 
 * @returns promise with the media id generated to create the post on tw
 */
module.exports.mediaUpload = async (tw, imageBase64) => {
    return new Promise((resolve, reject) => {
        // first we must post the media to Twitter
        tw.post('media/upload', { media_data: imageBase64 }, function (err, data, response) {
            if (err) return reject(err);
            if (!data) return reject("Can't upload the image");

            // now we can assign alt text to the media, for use by screen readers and
            // other text-based presentations and interpreters
            const { media_id_string } = data;
            const altText = `Daily pepe in ${(new Date()).toString()}`;
            const meta_params = { media_id: media_id_string, alt_text: { text: altText } };

            return resolve(meta_params);
        })
    });
}