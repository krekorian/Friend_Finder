$(document).ready(function () {
    updateFormEnabled()
    $("#submit").on("click", function (event) {
        event.preventDefault();

        console.log($("ID==" + "#id"));

        var answerArray = [];
        for (i = 0; i < ($(".chosen-select").length); i++) {
            if ($(".chosen-select")[i].value == "") {
                console.log("NaaaaaN");
            } else {
                console.log($(".chosen-select")[i].value);
                answerArray.push((".chosen-select")[i].value);
            }
            // console.log($(".chosen-select")[i].value);
        }
        console.log("answers:::" + answerArray);

    });



    $(document).change(updateFormEnabled);
});


function updateFormEnabled() {
    if (verifyAdSettings()) {
        console.log("actioning true");
        // $('#submit').attr('enabled', 'enabled');
        document.getElementById('submit').disabled = false;
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}

function verifyAdSettings() {
    var allAnswered = true;
    for (i = 0; i < ($(".chosen-select").length); i++) {
        if ($(".chosen-select")[i].value == "") {
            console.log("returning false");
            return false;
        }
        // console.log($(".chosen-select")[i].value);
    }
    console.log("returning true");
    return true
}