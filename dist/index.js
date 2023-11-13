"use strict";
const result = document.getElementById('result');
result.style.backgroundColor = 'red';
const output = document.getElementsByClassName('output')[0];
output.style.backgroundColor = 'yellow';
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.style.backgroundColor = 'green';
});
//# sourceMappingURL=index.js.map