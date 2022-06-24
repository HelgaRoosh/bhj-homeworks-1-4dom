const reveal = document.querySelectorAll('.reveal');

function scrolling() {
  reveal.forEach(item => {
    const { top, bottom} = item.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        item.classList.remove('reveal_active');
    } else {
        item.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', scrolling);