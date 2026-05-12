window.onload = function () {

    var form = document.querySelector("form");
    var inputs = document.querySelectorAll("input");

    form.onsubmit = function (e) {
        e.preventDefault();

        var email = inputs[0].value;
        var password = inputs[1].value;
        var confirmPassword = inputs[2].value;

        if (password === "" || confirmPassword === "") {
            alert("Please fill both password fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords must be the same!");
            return;
        }

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        window.location.href = "nintendo.html";
    };

};