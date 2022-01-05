
var response = "There are Twenty-Four hours in a day. A year has 14 months."
var correctAnswer = "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year."



calculateMarks = (inputStr) => {

    var count = 0;
    
    let inputStr1 = inputStr.replace(/[,.]/g, "").split(" ")            //as we are considering "," , "." as not a character so removing them and them spliting the string from space.

            // console.log(inputStr1)

    for(var j=0; j< inputStr1.length; j++)  {
        
        if(inputStr1[j].match(/\d+/g)){         //checking if it is number or not, using regEx

            count = count + 4;
        }
        else if( inputStr1[j].length > 7 ) {

            count = count + 3;
        }else if( inputStr1[j].length >= 5 && inputStr1[j].length <= 7 ){

            count = count + 1;
        }
        
    }
        return count;
        
}


// console.log(calculateMarks(correctAnswer))
// console.log(calculateMarks(response))

var cAnswer = calculateMarks(correctAnswer)
var cResponse = calculateMarks(response)

percentageScore = (maxScore,pointScored) => {

    return pointScored/maxScore*100                             // calculating percntage
                                                               
}

console.log(percentageScore(cAnswer,cResponse).toFixed(2))





// 1. In the given explaination, toatal of Correct Answer is 16, which is incorrect. Correct count should be 18. Here count of "calendar" should be +3 instead of +1.

// 2. In the given explaination, toatal of Candidate Response is 6, which is incorrect. Correct count should be 10. Here count of "14" should be +4 instead of +1.

