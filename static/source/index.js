/*handle hash change*/

window.addEventListener('hashchange', function() {
    handleHashChange();
});
document.addEventListener('DOMContentLoaded', function() {
    handleHashChange();
});

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    const section = hash ? hash : 'home';
    setPanel(section);
}
//####################################################################

/*drop down Menue */
function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        const dropdownMenu = document.getElementById("dropdownMenu");
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        }
    }
}
//####################################################################


/*change to another panel/page */
function setPanel(section){
    document.getElementById('home').style.display="none";
    document.getElementById('angebot').style.display="none";
    document.getElementById('about').style.display="none";
    document.getElementById('gallery').style.display="none";
    document.getElementById('contact').style.display="none";
    if(section=="gallery"){
        document.getElementById('sidebar').style.width="3%";
    }
    else{
        document.getElementById('sidebar').style.width="5%";
    }
    document.getElementById(section).style.display="block";
}

function goToPage(page){
    window.location.href="#"+page;
    window.scrollTo(0, 0);
}
//####################################################################



/*gallery image-viewer*/
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var imgs = document.getElementsByClassName("clickable");
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;

        document.getElementById("sidebar").classList.add("background-layer");
        document.querySelector(".navbar").classList.add("background-layer");
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";

    document.getElementById("sidebar").classList.remove("background-layer");
    document.querySelector(".navbar").classList.remove("background-layer");
}
//####################################################################

/*link to instagram of ponytanten*/
document.getElementById("instaLink").onclick = function() {
    goToInstagram();
};
document.getElementById("instaBtnLink").onclick = function() {
    goToInstagram();
};
function goToInstagram(){
    var userConfirmation = confirm("Bist du sicher, dass du zu Instagram wechseln möchtest?");
    if (userConfirmation) {
        window.location.href = "https://www.instagram.com/dieponytanten/";
    }
}
//####################################################################


/*collapsable text for description*/
document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const moreText = button.previousElementSibling.querySelector('.more');
            const dots = button.previousElementSibling.querySelector('.dots');
            
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                dots.style.display = "none";
                button.textContent = "Weniger lesen";
            } else {
                moreText.style.display = "none";
                dots.style.display = "inline";
                button.textContent = "Mehr lesen";
            }
        });
    });
//####################################################################

/*scroll to top Button*/
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
    
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
//####################################################################

/*toggle LVM Panel*/
function toggleLVMPanel() {
    var panel = document.getElementById("lvm-panel");
    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block";
        document.addEventListener("click", outsideClickListener);
    } else {
        panel.style.display = "none";
        document.removeEventListener("click", outsideClickListener);
    }
}

function outsideClickListener(event) {
    var panel = document.getElementById("lvm-panel");
    var logo = document.querySelector("footer img");

    if (!panel.contains(event.target) && event.target !== logo) {
        panel.style.display = "none";
        document.removeEventListener("click", outsideClickListener);
    }
}
//####################################################################

/*goto ponys auto scroll*/
document.querySelector('a[href="#ponys"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('ponys').scrollIntoView({ behavior: 'smooth' });
});
//####################################################################


/*animated show of navigation and back-to-home buttons*/
document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll('.navBtn');
    const backHomeElements = document.querySelectorAll('.backHome');

    function checkPosition() {
        // Überprüfe die Positionen der Navigationstasten
        navButtons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                btn.classList.add('navBtnLoc');
            } else {
                btn.classList.remove('navBtnLoc');
            }
        });

        // Überprüfe die Positionen aller backHome-Elemente
        backHomeElements.forEach(backHome => {
            const rect = backHome.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                backHome.classList.add('lockBackHome');
            } else {
                backHome.classList.remove('lockBackHome');
            }
        });
    }
    window.addEventListener('scroll', checkPosition);
    checkPosition();
});
//####################################################################

