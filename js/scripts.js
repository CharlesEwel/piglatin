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
  }
};
