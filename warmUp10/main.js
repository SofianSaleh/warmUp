var count = 0;

$('#button1').on('click', function(){
	
count++
	if(count % 2 === 0) {

		 $('ul').append('<li class="class1">'+ $('#input1').val()+'</li>')

	}else {

		 $('ul').append('<li class="class2">'+ $('#input1').val()+'</li>')

	}

});
