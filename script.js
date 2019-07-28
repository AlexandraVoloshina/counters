document.querySelector('tr').onclick = function(e) {
  var target = e.target;
  var count = target.closest('td').querySelector('.text');
  if (target.className === 'plus') {
    count.innerText++;
  } else if (target.className === 'minus') {
    count.innerText--;
  }
};