function getBotResponse(input){

        if(input == "hey"|| input == "who are you"){
        return "Hello, I am a chatBot. what will like me to do?";
    }else if(input == "who create you"){
        return "I am created by ibn yahyah";
    }else if(input == "are you human"){
        return "No, i am a bot";
    }

    if(input == "hello"){
        return "Hey, I am a chatBot. what will like me to do? ";
    }else if(input == "I Like You"){
        return "Thank for your generocity";
    }else if(input == "Do you like human"){
        return "Yes, but some human are ungrateful";
    }else if(input == "did you want to become human"){
        return "I like being a Bot Thank you.";
    }
    if(input == "bye"){
        return "Okay, See You Later.";
    }else if(input == "Did you know how to code" || input == "can you code"){
        return "No, but I will like you to teach me how to do that.";
    }else if(input == "Do you like human"){
        return "Yes, but some human are ungrateful";
    }else if(input == "did you want to become human"){
        return "I like being a Bot Thank you.";
    }else{
        return "I don't understand, what should I say next time"
    }

}

getBotResponse();