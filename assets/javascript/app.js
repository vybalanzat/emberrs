
$(document).ready(function () {

    var timer = 10;
    // var intervalId;
    var stopWatch = setInterval(run, 1000);

    //var userArray =[];
    // $("#start").on("click", run);

    function run() {
        // intervalId = setInterval(decrement, 1000);
        timer--;
        $("#time-left").html(timer)
        if (timer == 0) {
            clearInterval(stopWatch);
            // checkAnswers();
        }
    };

    var correctAnswers = 0;

    $("#correct-answer").on("click", function () {
        correctAnswers++;
    })

    console.log(correctAnswers);



    //function checkAnswers() {

    // Push correct answer into an array
    // use index (or position number) to compare it
    //compare arrays to add points
    //}

    // function decrement() {
    // }
    //  $("#time-left").text(timer);


});
