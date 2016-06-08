$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = pigLatin(phrase);
    $("#result").text(result);
  });
});

var pigLatin = function(phrase){
  var letters=phrase.split("")
  if(letters[0]==="a" || letters[0]==="e" || letters[0]==="i" || letters[0]==="o" || letters[0]==="u"){
    letters.push("ay");
    return letters.join("");
  } else if (letters[1]==="a" || letters[1]==="e" || letters[1]==="i" || letters[1]==="o" || letters[1]==="u") {
    letters.push(letters[0]+"ay");
    var letters2=letters.slice(1,letters.length)
    return letters2.join("")
  } else if (letters[2]==="a" || letters[2]==="e" || letters[2]==="i" || letters[2]==="o" || letters[2]==="u") {
    letters.push(letters[0] + letters [1] +"ay");
    var letters2=letters.slice(2,letters.length)
    return letters2.join("")
  }
};
