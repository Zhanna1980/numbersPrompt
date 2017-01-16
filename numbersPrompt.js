var prompt = require('prompt');
startPrompt();

function startPrompt() {

//
// Start the prompt
//
    prompt.start();

//
// Get two properties from the user: username and email
//
    var options = [
        {
            name: 'firstNumber',
            description: 'Enter first number'
        },
        {
            name: 'secondNumber',
            description: 'Enter second number'
        }
    ]

    prompt.get(options, function (err, result) {
        if (err) {
            return;
        }
        //
        // Log the results.

        var firstNumber = Number(result.firstNumber);
        var secondNumber = Number(result.secondNumber);

        if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
            var whatIsBigger;
            if (firstNumber > secondNumber) {
                whatIsBigger = "First number is bigger";
            }
            else if (firstNumber < secondNumber) {
                whatIsBigger = "Second number is bigger";
            }
            else {
                whatIsBigger = "The numbers are equal";
            }
            console.log(whatIsBigger);
        }
        else {
            console.log("Please enter the numbers");
            startPrompt();
        }

    });
}

