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
  if( letters[0].toUpperCase()==="A" || letters[0].toUpperCase()==="E" || letters[0].toUpperCase()==="I" || letters[0].toUpperCase()==="O" || letters[0].toUpperCase()==="U"){
    letters.push("ay");
    return letters.join("");
  } else if (letters[1]==="a" || letters[1]==="e" || letters[1]==="i" || letters[1]==="o" || (letters[1]==="u" && letters[0].toUpperCase()!="Q") || letters[1]==="y") {
    letters.push(letters[0]+"ay");
    var letters2=letters.slice(1,letters.length)
    return letters2.join("")
  } else if (letters[2]==="a" || letters[2]==="e" || letters[2]==="i" || letters[2]==="o" || (letters[2]==="u" && letters[1]!="q") || letters[2]==="y") {
    letters.push(letters[0] + letters [1] +"ay");
    var letters2=letters.slice(2,letters.length)
    return letters2.join("")
  } else if (letters[3]==="a" || letters[3]==="e" || letters[3]==="i" || letters[3]==="o" || letters[3]==="u" || letters[3]==="y") {
    letters.push(letters[0] + letters [1]+letters[2] +"ay");
    var letters2=letters.slice(3,letters.length)
    return letters2.join("")
  }
};
