function OnButtonClick() {
    let inText = document.getElementById("in_text");
    let outText = document.getElementById("out_text");

    outText.value = inText.value + "だからこそ、" + inText.value;
}