let xyz
let questionNumber = 0;

// question one
function questionOne() {

    document.getElementById("text-display").innerHTML = "1. Who is the king of cricket?";
    document.getElementById("answer-one").innerHTML = "A. Sachin Tendulkar";
    document.getElementById("answer-two").innerHTML = "B. MS Dhoni";
    document.getElementById("answer-three").innerHTML = "C. Virat Kohli";
    document.getElementById("answer-four").innerHTML = "D. Rohit Sharma";

}

// question two
function questionTwo() {
    document.getElementById("text-display").innerHTML = "2. Which cricket bat worth more than 100 IPL cups?";
    document.getElementById("answer-one").innerHTML = "A. CEAT";
    document.getElementById("answer-two").innerHTML = "B. SS";
    document.getElementById("answer-three").innerHTML = "C. REBOOK";
    document.getElementById("answer-four").innerHTML = "D. MRF";
}
// question three
function questionThree() {
    document.getElementById("text-display").innerHTML = "3. Who is the higher run scorer in IPL?";
    document.getElementById("answer-one").innerHTML = "A. AB De'villers";
    document.getElementById("answer-two").innerHTML = "B. S. Watson";
    document.getElementById("answer-three").innerHTML = "C. Sachin Tendulkar";
    document.getElementById("answer-four").innerHTML = "D. Virat Kohli";
}
// question four
function questionFour() {
    document.getElementById("text-display").innerHTML = "4. Who scored the first century in the history of the Cricket World Cup??";
    document.getElementById("answer-one").innerHTML = "A. Vivian Richards";
    document.getElementById("answer-two").innerHTML = "B. Clive Lloyd ";
    document.getElementById("answer-three").innerHTML = "C.Dennis Amiss ";
    document.getElementById("answer-four").innerHTML = "D. Sunil Gavaskar";
}
// question five
function questionFive() {
    document.getElementById("text-display").innerHTML = "5. Which player has the most centuries in Cricket World Cup history?";
    document.getElementById("answer-one").innerHTML = "A. Ricky Ponting";
    document.getElementById("answer-two").innerHTML = "B. Sachin Tendulkar";
    document.getElementById("answer-three").innerHTML = "C. Virat Kohli";
    document.getElementById("answer-four").innerHTML = "D. Rohit Sharma";
}
// question six*-*/
function questionSix() {
    document.getElementById("text-display").innerHTML = "6. Who is the highest run-scorer in the World Cup 2023?";
    document.getElementById("answer-one").innerHTML = "A. Rachin Ravindra";
    document.getElementById("answer-two").innerHTML = "B. Mohammad Rizwan ";
    document.getElementById("answer-three").innerHTML = "C. Rohit Sharma";
    document.getElementById("answer-four").innerHTML = "D. Virat Kohli";
}
// question seven
function questionSeven() {
    document.getElementById("text-display").innerHTML = "7. Who is the best wicket kipper in the World?";
    document.getElementById("answer-one").innerHTML = "A. MS Dhoni";
    document.getElementById("answer-two").innerHTML = "B. AB De'villers";
    document.getElementById("answer-three").innerHTML = "C. Trishabh Pant";
    document.getElementById("answer-four").innerHTML = "D. Phill Salt";
}
// question eight
function questionEight() {
    document.getElementById("text-display").innerHTML = "8. Who has the biggest fan following in the World?";
    document.getElementById("answer-one").innerHTML = "A. Ronaldo";
    document.getElementById("answer-two").innerHTML = "B. Virat Kohli ";
    document.getElementById("answer-three").innerHTML = "C. Messi ";
    document.getElementById("answer-four").innerHTML = "D. Non of these";
}
// question nine
function questionNine() {
    document.getElementById("text-display").innerHTML = "9.  Which team has the highest scores in the history of the World Cup?";
    document.getElementById("answer-one").innerHTML = "A. India";
    document.getElementById("answer-two").innerHTML = "B. New Zealand";
    document.getElementById("answer-three").innerHTML = "C. England ";
    document.getElementById("answer-four").innerHTML = "D. South Africa";
}
// question ten
function questionTen() {
    document.getElementById("text-display").innerHTML = "10. Who is the best test cricket captain?";
    document.getElementById("answer-one").innerHTML = "A. Rohit Sharma";
    document.getElementById("answer-two").innerHTML = "B. T.Babuma";
    document.getElementById("answer-three").innerHTML = "C. P. Cummins";
    document.getElementById("answer-four").innerHTML = "D. Virat Kohli";
}
// question eleven
function questionEleven() {
    document.getElementById("text-display").innerHTML = "11.  Which team has won the MOST IPL titles?";
    document.getElementById("answer-one").innerHTML = "A. CSK";
    document.getElementById("answer-two").innerHTML = "B. MI";
    document.getElementById("answer-three").innerHTML = "C. KKR";
    document.getElementById("answer-four").innerHTML = "D. RCB";
}
// question twelve
function questionTwelve() {
    document.getElementById("text-display").innerHTML = "12. Which Team in IPL was suspended for 2 years?";
    document.getElementById("answer-one").innerHTML = "A. CSK";
    document.getElementById("answer-two").innerHTML = "B. MI";
    document.getElementById("answer-three").innerHTML = "C. KKR";
    document.getElementById("answer-four").innerHTML = "D. RCB";
}
// question thirteen 
function questionThirteen() {
    document.getElementById("text-display").innerHTML = "13.  What is the maximum number of foreign players allowed in an IPL playing XI?";
    document.getElementById("answer-one").innerHTML = "A. 11";
    document.getElementById("answer-two").innerHTML = "B. 5";
    document.getElementById("answer-three").innerHTML = "C. 4";
    document.getElementById("answer-four").innerHTML = "D. None of these";
}
function questionFourteen() {
    document.getElementById("text-display").innerHTML = "14. Which player holds the record for the most number of sixes hit in the IPL?";
    document.getElementById("answer-one").innerHTML = "A.  David Warner";
    document.getElementById("answer-two").innerHTML = "B. Chris Gayle ";
    document.getElementById("answer-three").innerHTML = "C. Kieron Pollard";
    document.getElementById("answer-four").innerHTML = "D. MS Dhoni";
}
function questionFifteen() {
    document.getElementById("text-display").innerHTML = "15. Which Team in IPL  has biggest fan base?";
    document.getElementById("answer-one").innerHTML = "A. CSK";
    document.getElementById("answer-two").innerHTML = "B. MI";
    document.getElementById("answer-three").innerHTML = "C. KKR";
    document.getElementById("answer-four").innerHTML = "D. RCB";
}
// questions 

function question(question) {
    if (question == 1) {
        questionNumber = 1;
        questionOne();
    } else if (question == 2) {
        questionNumber = 2;
        questionTwo();
    } else if (question == 3) {
        questionNumber = 3;
        questionThree();
    } else if (question == 4) {
        questionNumber = 4;
        questionFour();
    } else if (question == 5) {
        questionNumber = 5;
        questionFive();
    } else if (question == 6) {
        questionNumber = 6;
        questionSix();
    } else if (question == 7) {
        questionNumber = 7;
        questionSeven();
    } else if (question == 8) {
        questionNumber = 8;
        questionEight();
    } else if (question == 9) {
        questionNumber = 9;
        questionNine();
    } else if (question == 10) {
        questionNumber = 10;
        questionTen();
    } else if (question == 11) {
        questionNumber = 11;
        questionEleven();
    } else if (question == 12) {
        questionNumber = 12;
        questionTwelve();
    } else if (question == 13) {
        questionNumber = 13;
        questionThirteen();
    } else if (question == 14) {
        questionNumber = 14;
        questionFourteen();
    } else if (question == 15) {
        questionNumber = 15;
        questionFifteen();
    }
    else {
        document.getElementById("text-display").innerHTML =
            "Bravo for clinching the 7 crore rupee prize!"
    }
}
// answer
function answer(givenAnswer) {
    if (questionNumber == 1) {
        if (givenAnswer == 3) {
            answerOne(true, 2);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 2) {
        if (givenAnswer == 4) {
            answerOne(true, 3);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 3) {
        if (givenAnswer == 4) {
            answerOne(true, 4);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 4) {
        if (givenAnswer == 3) {
            answerOne(true, 5);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 5) {
        if (givenAnswer == 4) {
            answerOne(true, 6);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 6) {
        if (givenAnswer == 4) {
            answerOne(true, 7);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 7) {
        if (givenAnswer == 1) {
            answerOne(true, 8);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 8) {
        if (givenAnswer == 2) {
            answerOne(true, 9);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 9) {
        if (givenAnswer == 4) {
            answerOne(true, 10);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 10) {
        if (givenAnswer == 4) {
            answerOne(true, 11);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 11) {
        if (givenAnswer == 1) {
            answerOne(true, 12);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 12) {
        if (givenAnswer == 1) {
            answerOne(true, 13);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 13) {
        if (givenAnswer == 3) {
            answerOne(true, 14);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 14) {
        if (givenAnswer == 2) {
            answerOne(true, 15);
        } else {
            answerOne(false, 0);
        }
    } else if (questionNumber == 15) {
        if (givenAnswer == 4) {
            answerOne(true, 16);
        } else {
            answerOne(false, 0);
        }
    }
}
// correct or not
function answerOne(correctAnswer, nextQuestion) {
    if (correctAnswer) {
        document.getElementById("text-display").innerHTML =
            "Spot on, that's the perfect response!";
        document.getElementById("container").style.backgroundColor =
            "#41B06E";

        setTimeout(() => {
            question(nextQuestion);
        }, 3000);
    } else {
        document.getElementById("text-display").innerHTML =
            "Not quite, let's try another approach.";
        document.getElementById("container").style.backgroundColor =
            "#FF0000";
        setTimeout(() => {
            startScreen();
        }, 2000);
    }
}
// hidden 
function dostart() {
    document.getElementById("main-body").hidden = false;
    document.getElementById("play-button").hidden = true;
    question(1);
}

function startScreen() {
    document.getElementById("main-body").hidden = true;
    document.getElementById("play-button").hidden = false;

}