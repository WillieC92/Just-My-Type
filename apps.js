document.addEventListener("DOMContentLoaded", function () {
    let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eat',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate',
    ];

    let sentenceIndex = 0;
    
    let letterIndex = 0;
    let currentLetterDiv = $("target-letter");
    // currentLetterDiv.text(currentLetter);
    $("#words").append(sentences[sentenceIndex]);

    let currentSentence = sentences[0];
    let currentLetter = currentSentence[0];
    let start;
    let finish;
    let errors = 0
    
    $("#sentence").append(currentSentence); 
    $("target-letter").append(currentLetter);
    $("#keyboard-upper-container").hide();
    
    $(document).keyup(function (e){
        let keyUp = e.which;
        if (keyUp ===16){
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
        $("highlight").remove("highlight");     
    });
    
    $(document).keydown(function (e){
        let keyDown = e.which;
        if (keyDown ===16){
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
        
    });
    $(document).keypress(function (e) {
        let keyPress = e.which;
        $("#" + keyPress).addClass("highlight");
        let currentSentence = sentences[sentenceIndex];
        let currentLetter = currentSentence[letterIndex];
        
        if(start === undefined){
            start = e.timeStamp;
        }
    });
    $("#highlightBlock").css("left", "+=17.5px");
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});