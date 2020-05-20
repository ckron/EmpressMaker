function OnButtonClick(obj) {
    if(obj.id == "create_text") {
        let inText = document.getElementById("in_text");
        let outText = document.getElementById("out_text");

        outText.value = inText.value + "だからこそ、" + inText.value;
    } else if(obj.id == "copy_clipboard") {
        let copyTextArea = document.getElementById("out_text");

        copyTextArea.select();
        document.execCommand("copy");
    }
}