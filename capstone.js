const messagegenerator = () => {
    let rand = Math.floor(Math.random()*6)
    
    let message = []

    if (rand === 1){
        message = "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
    }else if(rand === 2){
        message = "The way to get started is to quit talking and begin doing. -Walt Disney";
    }else if(rand === 3) {
        message = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs";
    }else if(rand === 4){
        message = "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey";
    }else if (rand === 5){
        message = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron";
    }else{
        return "try again"
    };

    console.log(message);

};

console.log(messagegenerator());
