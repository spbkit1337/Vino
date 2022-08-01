let toggled = false;
const nav = document.getElementsByClassName('nav-mobile')[0];
const btn = document.getElementsByClassName('nav-tgl')[0];
const ul = document.getElementsByClassName('ul-mobile')[0];

btn.onclick = function(evt) {
  if (!toggled) {
    toggled = true;
    evt.target.classList.add('toggled');
    nav.classList.add('active');
    ul.classList.add('active');
  } else {
    toggled = false;
    evt.target.classList.remove('toggled');
    nav.classList.remove('active');
    ul.classList.remove('active');
   

  }
}

