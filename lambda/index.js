exports.handler = async (event) => {

    console.log('Loading function');

    var responseText = "Sorry, I don’t understand what you are trying to say";
    if (event.message == "hello") {
        responseText = "Hello Human";
    } else if (event.message == "can you help me with building a bot ?") {
        responseText = "Sure, more bot friends for me";
    } else if (event.message == "so why aren't you helping me ?") {
        responseText = "You only asked if I can";
    }
    const response = {
        headers: {
            "Access-Control-Allow-Origin" : "*",
        //    "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        statusCode: 200,
        body: responseText
    };
    return response;
};
