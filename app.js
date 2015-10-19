$(document).ready(function(){
	$('#maker').on('click', function(){
		generateNumbers();
	});
	$('#container').on('click', '.remove', function(){
		$(this).closest('.listing').slideUp("slow", function(){
			$(this).remove();
			console.log("GONE");
		});
	});
});


function generateNumbers() {
	var propId = randomNumber(1, 9999);
	var sqFoot = randomNumber(1, 9999);
	var costPerFoot = randomNumber(1, 100);

	console.log(propId, sqFoot, costPerFoot);

	addDom(propId, sqFoot, costPerFoot);
}

function addDom(id, feet, cost) {
	//$("#container").append("<tr class='listing'></tr>");
	//var $el = $("#container").children().last();
	var $table	= "<div class='listing'><div> ID: " + id + "</div>" + 
				"<div> Square Feet: " + feet + "</div>" +
				"<div>Cost per Foot: " + cost + "</div>" +
				"<div><button class='remove'>Remove</button></div>";
	$('#container').append($table);
	$('#container').children().last().hide().slideDown(500);

}


function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

