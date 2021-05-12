const btn = document.querySelector('.btn'),
      inputVal = document.querySelector('#input'),
      label = document.querySelector('label'),
      output = document.querySelector('.output');


btn.addEventListener('click', () => {
  displayText(inputVal.value);
  inputVal.value = '';

  document.querySelectorAll('.char').forEach(item => {

    item.addEventListener('mousedown', (e) => {
      move(e);
    });

  });

});


function move (event) {

  let item = event.target;

  item.style.position = 'absolute';
  item.style.zIndex = '1000';

  document.addEventListener('mousemove', (e) => {

    moveAt(item, e.pageX, e.pageY)
  });

  function moveAt(target, pageX, pageY) {

    target.style.left = pageX - target.offsetWidth / 2 + 'px';
    target.style.top = pageY - target.offsetHeight / 2 + 'px';
  }

  item.addEventListener('mouseup', (e) => {

    document.removeEventListener('mousemove', (e) => {
      moveAt(item, e.pageX, e.pageY)
      item.onmouseup = null;
    });
    
  });
};


function displayText(str) {

  output.innerHTML = '';

  if (str) {
    let arrChar = str.split('');

    for (let key of arrChar) {
      let span = document.createElement('span');
      span.classList.add('char');

      span.style.cssText = `
                              display: inline-block;
                              cursor: pointer; 
                              font-size: 19px; 
                              margin-right: 2px;
                            `;
      span.innerHTML = key;
      output.append(span);
    }
  } else {
    alert('Enter text');
  }
  
}