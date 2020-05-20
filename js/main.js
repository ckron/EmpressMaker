function OnButtonClick(e) {
    if(e.id == "create_text") {
        let inText = document.getElementById("in_text");
        let outText = document.getElementById("out_text");
        let connectText = document.getElementById("select_pulldown").value;

        outText.value = inText.value + connectText + inText.value;
    } else if(e.id == "copy_clipboard") {
        let copyTextArea = document.getElementById("out_text");

        copyTextArea.select();
        document.execCommand("copy");
    }
}

function OnChange(e) {
    if(e.id == "select_pulldown") {
        let inText = document.getElementById("in_text");
        let outText = document.getElementById("out_text");
        let connectText = document.getElementById("select_pulldown").value;

        outText.value = inText.value + connectText + inText.value;
    }
}