const clientS3 = require("@aws-sdk/client-s3");
const uuid = require("uuid");

const s3 = new clientS3.S3Client();
const BUCKET = process.env.BUCKET;

const uploadToS3 = async ({ file, userId }) => {
    const key = `${userId}/${uuid.v4()}`;
    const command = new PutObjectCommand({ 
        Bucket: BUCKET, 
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype 
    });

    try {
        await s3.send(command);
        return { key };
    } catch (err) {
        console.log(err);
        return { err };
    };
};

module.exports = uploadToS3;