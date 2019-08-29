const Parse = require('parse/node');

const appID = process.env.APP_ID || 'myAppId';
const masterKey = process.env.MASTER_KEY || '';
const javascriptKey = process.env.JAVASCRIPT_KEY || '';
const parseServerUrl = process.env.SERVER_URL || 'http://localhost:1337/parse';
Parse.initialize(appID, javascriptKey, masterKey);
Parse.Cloud.useMasterKey();
Parse.serverURL = parseServerUrl;

exports.handler = async event => {
  // TODO implement
  console.log('event', JSON.stringify(event));
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!')
  };
  return response;
};
