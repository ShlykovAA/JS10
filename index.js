console.log("Hello!!!");

const btn = document.getElementById('btn');
const div1 = document.getElementById('testdiv');
const div2 = document.getElementById('div2');

const onClick = (event) => {
    console.log(event);
};

btn.addEventListener('click', onClick);
div1.addEventListener('click', onClick);
div2.addEventListener('click', onClick);

