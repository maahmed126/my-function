const AWS = require("aws-sdk");
const apigateway = new AWS.APIGateway();

exports.handler = async (event) => {

    var params = {
        apiKey: "6Unzbh7iib1zFi4aPACVT1AzbU3fTuIh3gM2zVFw",
        includeValue: true
    };

    const apikey = await apigateway.getApiKey(params).promise();
    console.log("apikey:", apikey);
    return apikey;
};
