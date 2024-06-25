

function openPage(pageID) {
    var pages = ["startPage", "aboutUs", "ponySpaß", "contact"];
    for (var i = 0; i < pages.length; i++) {
        var element = document.getElementById(pages[i]);
        if (pages[i] === pageID) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function linkToInstagram(){
    window.location.href = "https://www.instagram.com/dieponytanten/";

}
