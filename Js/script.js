// document.getElementById()

let val;

val = document.getElementById('document-title');

// changing css

val = document.getElementById('document-title').style.background = '#87cefac4';

val = document.getElementById('document-title').style.padding = '20px';

val = document.getElementById('document-title').style.marginTop = '50px';

val = document.getElementById('document-title').textContent = 'There is a Legend on the make ~ ';

val = document.getElementById('document-title');

val.innerText = 'He will rise from the scratches';

val = document.querySelector('ol');

val = document.querySelector('ul li');

val.style.background = 'teal';

val = document.querySelector('li:nth-child(4)');

val.innerText = 'Laravel 8';

console.log(val);

