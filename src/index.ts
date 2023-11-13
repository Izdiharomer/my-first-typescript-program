//access element id="result" class="output"

const result = document.getElementById('result') as HTMLElement;
result.style.backgroundColor = 'red';

const output = document.getElementsByClassName('output')[0] as HTMLElement
output.style.backgroundColor = 'yellow';

const items = document.querySelectorAll('.item') as NodeListOf<HTMLLIElement>
items.forEach(item =>  {
    item.style.backgroundColor = 'green'
})