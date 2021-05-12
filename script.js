const btn = document.querySelector('.btn'),
      input = document.querySelector('#input'),
      output = document.querySelector('.output');

btn.addEventListener('click', () => {

  displayText(input.value);
  input.value = '';

  document.querySelectorAll('.letter').forEach(item => {
    moveChar(item);  

  });

});

function moveChar(item) {

  item.addEventListener('click', () => {

    document.onmousemove = setPositionChar;

    item.addEventListener('dblclick', () => {
    
      document.onmousemove = null;
    });

    function setPositionChar(event) {

      item.style.position = 'absolute';
      item.style.left = event.pageX - item.offsetWidth - 3 + 'px';
      item.style.top = event.pageY - item.offsetHeight + 3  + 'px';
    }
  });
  
};

function displayText(str) {

  output.innerHTML = '';

  if (str) {
    let arrChars = str.split('');

    for (let key of arrChars) {
      let span = document.createElement('span');
      span.classList.add('letter');

      span.style.cssText = `
                              cursor: move; 
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