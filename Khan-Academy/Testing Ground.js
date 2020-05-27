var header = document.getElementById("header")
var content = document.getElementById("content")
var body = document.getElementById("body")
var ChangingHeader = function() {
    if (header.style.display === "none") {
        header.style.display = "block"
        content.style.width = "79%"
        body.style.margin = "0px"
    }
    else {
        header.style.display = "none"
        content.style.width = "100%"
        body.style.marginLeft = "5px"
    }
    
}
var testingButton = document.getElementById("testingbutton")
testingButton.addEventListener("click", ChangingHeader)