// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

	function symbolToNum(string){
		var x = string.split('')
		var y = string.split('')
		var str = '';
		var count1 = 1;
		var arr = [];
		for (var k = 0; k < x.length; k++){
			if(x[k] === x[k+1]){
				arr.push(x[k])
			}
		}
		console.log(arr)
			str = str + 1
			
			
		for(var i = 0; i < string.length; i++) {
			console.log(x)
			console.log(arr[i])
		if(x[0] === arr[i]) {
			count1++
			str = str + count1
			arr.push(x[i])
			x.splice(i,1)
			
		}else if(x[i] !== arr[i]){
			str= str + 1
			x.splice(i,1)
		}
			
	}return str;
	}