const container = document.createElement('div'),
      wrap = document.createElement('div'),
      input = document.createElement('input'),
      button = document.createElement('button'),
      output = document.createElement('div');

container.classList.add('container');
wrap.classList.add('wrap');
input.classList.add('input');
button.classList.add('btn');
button.innerHTML = 'Click';
output.classList.add('output');

document.body.prepend(container);
container.append(wrap);
container.append(output);
wrap.append(input);
wrap.append(button);

button.addEventListener('click', () => {

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