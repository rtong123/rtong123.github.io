function emailMe(){
    window.open('mailto:rbcatong@gmail.com');
}

function linkMe(){
    window.open("https://www.linkedin.com/in/rebecca-tong/");
}

function tweetMe(){
    window.open("https://twitter.com/rbcatong");
}


function openGit(){
    window.open("https://github.com/rbcatong")
}


function showProjects(){
    document.getElementById("projects").style.display = "block";
    //show projects hide everything else 
}

function showResume(){
    window.open("https://drive.google.com/file/d/1Q9A-NH4RAbueomny-T0rv_PYMZUaz2D6/view?usp=sharing")
}


function clickContact(){
    // i want to show the icons and hide eeverything else on the page. 
        document.getElementById("first_section").style.display = "none";
        document.getElementsByClassName("icons").style.display = "block"
        document.getElementById("about-me").style.display = "none"
    }

function showBlog(){
    window.open("rbcatong.wordpress.com")

}