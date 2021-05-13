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
    item.classList.add('active');
    document.onmousemove = setPositionChar;

    const activeChar = ul.querySelector(`.active`);
    const currentChar = e.target;


    document.addEventListener('contextmenu', (event) => {
      
      if (event.target !== item) {

        event.preventDefault();

        const currentElement = event.target;

        const isMoveable = activeChar !== currentElement && 
                          currentElement.classList.contains(`letter`);
      
        if (isMoveable) {
          
          let nextElement;
  
          if(currentElement === activeChar.nextElementSibling)  {
            nextElement = currentElement.nextElementSibling;
          } else {
            nextElement = currentElement
          }
  
          ul.insertBefore(activeChar, nextElement);
          item.classList.remove('active');
          document.onmousemove = null;
  
        } else {
          item.classList.remove('active');
          document.onmousemove = null;
        }
      }
    });
  });

  function setPositionChar(event) {

    item.style.transform = `translate(${(event.clientX - item.offsetLeft) + 7}px,${(event.clientY - item.offsetTop) - 10}px)`;
  }

};

function displayText(str) {

  ul.innerHTML = '';

  if (str) {
    let arrChars = str.split('');

    for (let key of arrChars) {
      let li = document.createElement('li');
      li.classList.add('letter');


      li.style.cssText = `  display: inline-block;
                            cursor: move;
                            font-size: 19px; 
                            margin-left: 3px;
                            `;
      li.innerHTML = key;
      ul.append(li);
    }
  } else {
    alert('Enter text');
  }
  
}
