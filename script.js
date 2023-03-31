const darkMode = document.querySelector('.dark-mode');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-menu a');
let bntTop = document.getElementById('btn-top');
    let verif = true;

    // Dark mode
    darkMode.addEventListener('click', function(){
       this.classList.toggle('open');

        if(verif){
            document.documentElement.style.setProperty('--back-body', '#f3f1ef');
            document.documentElement.style.setProperty('--black', 'white');

            verif=false;
        }
        else{
            document.documentElement.style.setProperty('--back-body', '');
            document.documentElement.style.setProperty('--black', '');

            verif=true;
        }
    });

    // Navbar collapse
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
links.forEach(el => {
    el.addEventListener('click', function(){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
});

// Button go top
window.onscroll = function(){ Scroll()};

function Scroll(){
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        bntTop.style.display = 'block';
        bntTop.classList.add('anim-top');
    }
    else{ 
        bntTop.style.display = 'none';
    }
}


  function GoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  




/*
function(e) {
  return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
}

**********
function() {
  var n = !0;
  return e("html, body").animate({
    scrollTop: l
  }, i.options.duration, i.options.easing, function() {
    if (n) {
      n = !1;
      var e = i.options.onScrollEnd;
      "function" == typeof e && e()
    }
  }), !1
}
*/