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


  moveAt(event.pageX, event.pageY)


  document.addEventListener('mousemove', onMouseMove);

  item.addEventListener('mouseover', () => {
    console.log('dd');
  });
  function moveAt(pageX, pageY) {

    item.style.left = pageX - item.offsetWidth / 2 + 'px';
    item.style.top = pageY - item.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  item.addEventListener('mouseup', (e) => {

    document.removeEventListener('mousemove', onMouseMove);
    item.addEventListener('mouseup', null);
  });
};


function displayText(str) {

  output.innerHTML = '';

  if (str) {
    let arrChars = str.split('');

    for (let key of arrChars) {
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