// Burger menu
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
burger.addEventListener('click', () => {
  if (header.classList.contains('opened')) {
    header.classList.remove('opened');
    document.body.style.overflow = 'auto';
  } else {
    header.classList.add('opened');
    document.body.style.overflow = 'hidden';
  }
})

//Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

// Forms submit
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let project = e.target.querySelector('input[name="project"]').value;
    let tg = e.target.querySelector('input[name="telegram"]').value;
    fetch(`tg.php?project=${project}&telegram=${tg}`)
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          document.querySelectorAll('.inputs').forEach(inp => inp.innerHTML = '<img src="img/done.svg" class="done" alt="">');
        }
      })
  })
})

// Lang
const lang = document.querySelector('.lang');
const lang2 = document.querySelector('.lang2');
lang.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  lang2.classList.add('lang2-click');  
})
document.body.addEventListener('click', (e) => {
  if (lang2.classList.contains('lang2-click')) {
    lang2.classList.remove('lang2-click');
    console.log('dfdf')
  }
})
