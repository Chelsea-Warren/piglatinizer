$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("#button").click(function(){
    let input=$(".input").val();
    alert(input);

    let val=pig(input);
    console.log(val);
});

function pig(word){

return(word[0]+ "ay");

}






});
