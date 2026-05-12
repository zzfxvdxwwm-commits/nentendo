// نخلي الكود يشتغل بعد ما الصفحة تحمل
window.onload = function () {

    var form = document.querySelector("form");

    form.onsubmit = function (e) {
        e.preventDefault();

        var password = document.getElementById("pp").value;

        if (password === "") {
            alert("Please enter your password");
        } else {
            // تحويل لصفحة الهوم
            window.location.href = "nintendo.html";
        }
    };

};