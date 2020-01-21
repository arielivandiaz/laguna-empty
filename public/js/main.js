
function isJson(str) {

    try {
        return JSON.parse(str);
    } catch (e) {
        location.reload();
        return false;
    }

}




function hide (id) {
    document.getElementById(id).style.display = "none";
}