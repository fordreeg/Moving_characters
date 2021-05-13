const container = document.createElement('div'),
      wrap = document.createElement('div'),
      input = document.createElement('input'),
      button = document.createElement('button'),
      ul = document.createElement('ul');

container.classList.add('container');
wrap.classList.add('wrap');
input.classList.add('input');
button.classList.add('btn');
button.innerHTML = 'Click';
ul.classList.add('list');

document.body.append(container);
container.append(wrap);
container.append(ul);
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

  item.addEventListener('click', (e) => {

    if(e.target === item) {
      document.onmousemove = setPositionChar;
      document.onclick = setTimeout(() => {document.onclick = stop});
    }
  });

  function stop() {
    document.onclick = null;
    document.onmousemove = null;
  }

  function setPositionChar(event) {
    item.style.transform = `translate(${(event.clientX - item.offsetLeft) - 4}px,${(event.clientY - item.offsetTop) - 30}px)`;
  }

};

function displayText(str) {
  ul.innerHTML = '';

  if (str) {
    let arrChars = str.split('');

    for (let key of arrChars) {
      let li = document.createElement('li');
      li.classList.add('letter');

      li.style.cssText = `  
                            display: inline-block;
                            cursor: move;
                            font-size: 25px; 
                            margin-left: 4px;
                            `;
      li.innerHTML = key;
      ul.append(li);
    }
  } else {
    alert('Enter text');
  }
  
}
