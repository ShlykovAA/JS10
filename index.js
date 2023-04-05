console.log("Hello!!!");

const gitData = async () => {
    const res = await fetch('https://dummyjson.com/products/2');
    const data = await res.json();
    const elem = document.getElementById('github-data');
    if(res.ok) {
        elem.classList.add('git-ok');
        elem.innerHTML = JSON.stringify(data);
    } else {
        elem.classList.add('git-error');
        elem.innerHTML = JSON.stringify(data);
    }
}
gitData()

const divList = document.querySelectorAll('div');

for (let div of divList) {
    div.classList.add('background-for-div')
}

setTimeout(()=>{
    for (let div of divList) {
        div.classList.add('background-for-div2')
    } 
},3000)