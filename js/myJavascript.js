
function Changesizefont() {
    document.getElementById("id1").style.fontSize = "50px"
}
function printNumber() {
    let number = ""
    for (let i = 0; i < 10; i++) {
        number += "This is number" + i + "<br>";
    }
    document.write(number);
}
function ifElse(number) {
    if (number > 10) {
        return document.getElementById("display").innerHTML = "number > 10"
    } else {
        return document.getElementById("display").innerHTML = "number < 10"
    }
}
function switchCase(x) {
    switch (x) {
        case 0:
            return document.getElementById("parameter").innerHTML = "off"
        case 1:
            return document.getElementById("parameter").innerHTML = "on"
        default:
            return document.getElementById("parameter").innerHTML = "valid value"
    }
}
