document.querySelector('tr').onclick = function(e) {
  var target = e.target;
  var cnt = target.closest('td').querySelector('.text');
  if (target.className === 'plus') {
    cnt.innerText = parseInt(cnt.innerText, 10)+1;
  } else if (target.className === 'minus') {
    cnt.innerText = parseInt(cnt.innerText, 10)-1;
  } else return;
};
