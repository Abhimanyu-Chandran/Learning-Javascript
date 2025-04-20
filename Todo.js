const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
}

function removeTodo() {
    todoList.remove(0, name);
}

const list = ['get', 'buy', 'sell'];

for (let i = 0; i < list.length; i++) {
    const value = list[i];
    console.log(value);
}

const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}

console.log(total);

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
}
console.log(numsDoubled);