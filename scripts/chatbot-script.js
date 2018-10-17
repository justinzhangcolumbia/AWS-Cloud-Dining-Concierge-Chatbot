var chatHistory = [];
var apigClient = apigClientFactory.newClient();

function callChatbotLambda() {
  var inputText = document.getElementById('user-input-text').value.trim().toLowerCase();
  document.getElementById('user-input-text').value = "";
  if(inputText == "") {
    alert("Please enter some text");
    return false;
  }else {
    chatHistory.push("User: " + inputText);
    document.getElementById('chat-output').innerHTML = "";
    chatHistory.forEach(function(element) {
      document.getElementById('chat-output').innerHTML += "<p>" + element + "</p>";
    });
    setTimeout(chatbotResponse, 1000, inputText);
    return false;
  }
}

function chatbotResponse(inputText) {
  var params = {};
  var body = {
    "message":inputText
  };
  var additionalParams = {
    headers: {
      'x-api-key': 'YOUR_API_KEY'
    },
    queryParams: {}
  };
  apigClient.chatbotPost(params,body,additionalParams)
    .then(function(result){
        chatHistory.push("Bot: " + result.data.body);
        document.getElementById('chat-output').innerHTML = "";
        chatHistory.forEach(function(element) {
          document.getElementById('chat-output').innerHTML += "<p>" + element + "</p>";
        });
    }).catch(function(error){
        console.log(error);
    });
}
