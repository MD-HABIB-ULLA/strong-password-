document.getElementById('g-btn').addEventListener('click', function () {
    const constants = {
        abcd: "abcdefghijklmnopqrstuvwxyz",
        num: "1234567890",
        symbol: "!@#$%^&*()_-+={}[]|/.,;:~",
        ABCD: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    let password = "";

    while (password.length <= 12) {
        const randomNumber = Math.floor(Math.random() * Object.keys(constants).length);
        const randomString = Object.values(constants)[randomNumber];
        const randomIndex = Math.floor(Math.random() * randomString.length);
        const randomCharacter = randomString[randomIndex];
        password += randomCharacter;
    }
    document.getElementById("in-pass").value = password;

})

document.getElementById("copy-button").addEventListener("click", function() {
    var inputField = document.getElementById("in-pass");
    inputField.select();
    document.execCommand("copy");
    inputField.blur();
});
