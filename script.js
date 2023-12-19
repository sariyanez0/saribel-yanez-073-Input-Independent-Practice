$("button").click(function() {
    var user=$(".userInput").val();
    console.log(user);
    alert(user);
    
    $(".vote-result").text(user);
    $("img").show();
	
});


$(".button").click(function() {
    var user2=$(".userInput2").val();
    console.log(user2);
    
    $(".vote-result2").text(user2);	
});

$(".button1").click(function() {
    var user3=$(".userInput3").val();
    console.log(user3);
    alert("Thank you for voting!!");
    
    $(".vote-result3").text(user3);	
});