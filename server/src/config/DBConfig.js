const AWS = require('aws-sdk')


const config = new AWS.Config({
    accessKeyId: 'AKIAQLAIYA5SE7ODXLJK',
    secretAccessKey: "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",
    region: 'ap-southeast-1'
})
AWS.config = config;
const DBConfig = new AWS.DynamoDB.DocumentClient()
module.exports = DBConfig