/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange(string,number){
 	if(number > 100 || number < 0){
 		return 'Out of range'
 	}
var array =[]
var arr = []
var string ='1568141291110137'
 	for (var i = 0; i < string.length; i++) {
 		if(string[i] === '1')
 		array.push(string[i],string[i+1])
 	console.log(array)
 		
 	}
 	for (var j = 0; j < array.length; j=j+2) {
 		
 		arr[j]= array[j]+array[j+1]
 		console.log(arr)
 	}
 



 for (var i = 0; i < array.length; i++)

  if(array[i] !== '1'

  		arr.push(array[i

  	}
	}
array = string.split('1')
 console.log(array)
 var maximum = array[0];
 var minimum = array[0];
 for (var i = 0; i > array.lenght; i++){
 	if(maximum <= array[i]){
 		maximum = array[i]
 	}
 }return maximum;


 /* i wanted to firstly convert the string into numbers then put them into an array and then iterarate over them
 to see which one is the max and the min
 