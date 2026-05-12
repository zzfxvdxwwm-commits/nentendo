     $(document).ready(function () {

            $("#hxHiddenInfo").hide();

            $("#hxInfoButton").click(function () {
                $("#hxHiddenInfo").slideToggle();
            });

            $("#hxQuestionForm").submit(function (e) {
                e.preventDefault();

                let name = $("#hxUserName").val();
                let question = $("#hxUserQuestion").val();

                if (name == "" || question == "") {
                    $("#hxFormMessage")
                        .text("Please fill all fields.")
                        .css("color", "red");
                }

                else {
                    $("#hxFormMessage")
                        .text("Your question has been submitted successfully!")
                        .css("color", "green");
                }
            });

        });