let button = document.getElementById("theBoxes");
button.addEventListener("click",myFunction);

function myFunction(params) {
    let n = document.getElementById('number').value;
    for (let index = 1; index <= n; index++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = index;
    }
}