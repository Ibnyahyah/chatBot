const coll = document.getElementsByClassName("collapsible");
const timeStamp = document.getElementById("chat-timeStamp");
const chatBox = document.getElementById("chatBox");
const textInput = document.getElementById('text-input');
const btn = document.getElementById('chat-icon');

// collapsible


for(let i = 0; i<coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime(){
    var today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    
    return time;
}

// FIRST BOT MESSAGE

function firstBotMessage(){
    let firstMessage = "How is it going";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    timeStamp.append(time);
    document.getElementById("userInput").scrollIntoView(false);

}

firstBotMessage();


function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';

    $("#chatBox").append(botHtml);
    // chatBox.append(botHtml);

    document.getElementById('chat-bar-bottom').scrollIntoView(true);
}


function getResponse(){
    // let userText = textInput.value;
    let userText = $("#text-input").val();
        if (userText == ""){
        userText = "hello";
    }
    let userHtml ='<p class="userText"><span>' + userText + '</span></p>';

    // textInput.value = "";
    // chatBox.append(userHtml);

    $("#text-input").val("");
    $("#chatBox").append(userHtml);
    document.getElementById('chat-bar-bottom').scrollIntoView(true);

    setTimeout(
        function(){
            getHardResponse(userText);
        }, 1000);
}

function buttonSendText(sampleText){
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#text-input").val("");
    $("#chatBox").append(userHtml);

    document.getElementById('chat-bar-bottom').scrollIntoView(true);

}

// btn.addEventListener('click', function(event){

//    return getResponse();
// })

function sendButton(){
    getResponse();
}
function likeButton(){
    buttonSendText("Liked");
}

$('#text-input').keypress(function(e){
    if(e.which == 13){
        getResponse();
    }
});