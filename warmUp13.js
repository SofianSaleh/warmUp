/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 


    
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function romanNumbers(str) {

    var arr = str.split('');
    var result = 0;
    var array =[];
    
    for(var j = 0; j < arr.length; j++) {

        if(arr[j] === 'I') {

            array.push(1);

        }

        if(arr[j] === 'V') {

            array.push(5);

        }

       if(arr[j] === 'X') {

            array.push(10);

        }

        if(arr[j] === 'L') {

            array.push(50);

        }

        if(arr[j] === 'C') {

            array.push(100);

        }

        if(arr[j] === 'D') {

            array.push(500);

        }

        if(arr[j] === 'M') {

            array.push(1000);

        }

        result = result + array[j];

    }

    return result;
    
} 


function toCamelCase(str) {

    var string = '';
    var Camel = '';

    if(str.indexOf('-') !== -1) {

        string = str.split('-');

        Camel = Camel + string[0];

    }else if(str.indexOf('_') !== -1) {

        string = str.split('_');

        Camel = Camel + string[0];
    }
    for( var i = 1; i < string.length; i++) {

        Camel = Camel + string[i][0].toUpperCase();

        for(var j = 1; j < string[i].length;j++) {

        Camel = Camel + string[i][j];

        }
    }return Camel;
    
}


function filter_list (array){

    var arr = [];

    for(var i = 0; i < array.length; i++){
        if(arr[i] < 0){
            return 'There is a negative number';
        }
    }

    for (var j = 0; j < array.length; j++){
        if(typeof(array[j])==='number'){
            arr.push(array[j]);
        }
    }return arr;

}