const convertNumberToWords = (numberInput = 0) => {   
    let number = numberInput;

    if(number.toString().length > 4 || number > 5000 || number < 1) {
        console.log("input has to be between 5000 and 1");
        return;
    }
    else if(number === 0){
        console.log(`${numberInput} = zero`);
        return;
    } 
    else if(number.toString().length === 1) number = '___'.concat(number);
    else if(number.toString().length === 2) number = '__'.concat(number);
    else if(number.toString().length === 3) number = '_'.concat(number);
    else number = numberInput;

    let teens = ["ten","eleven", "twelve", "thirteen", "fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    let ones = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let numberString = number.toString().split('');
    let numberInWords = ''; 

    for (let i = 0; i <= numberString.length ; i++){
        
            if(i === 0){ 
               if(Number(numberString[i])) numberInWords += `${ones[numberString[i]]} thousand `;
            }
            if(i === 1){
                if(numberString[i] === "0" && numberString[i+1] === "0" && numberString[i+2] === "0"){
                    console.log(`${numberInput} = ${numberInWords}`);
                    return;
                }
                else if(numberString[i] !== "0" && numberString[i+1] === "0" && numberString[i+2] === "0"){
                    numberInWords += `${ones[numberString[i]]} hundred`
                    console.log(`${numberInput} = ${numberInWords}`);
                    return;
                }
                else if(numberString[i] === "0") numberInWords += "and ";
                else if(Number(numberString[i])) numberInWords += `${ones[numberString[i]]} hundred and `;
            }
            if(i === 2){
                if(numberString[i] === "0") continue;
                if(numberString[i] === "1"){
                    numberInWords += `${teens[numberString[i+1]]}`;
                    console.log(`${numberInput} = ${numberInWords}`);
                    return;
                }
                if(Number(numberString[i])) numberInWords += `${tens[numberString[i]]} `;
            }
            if(i === 3){
                    numberInWords += `${ones[numberString[i]]}`;
                    console.log(`${numberInput} = ${numberInWords}`);
                    return;
            }  
        }
    console.log(`${numberInput} could not be converted`);
}

convertNumberToWords(5560);
convertNumberToWords(2250);
convertNumberToWords(2300);
convertNumberToWords(4508);
convertNumberToWords(2010);
convertNumberToWords(1006);
convertNumberToWords(91);
convertNumberToWords(3091);
convertNumberToWords(4322);
convertNumberToWords(1);
convertNumberToWords();