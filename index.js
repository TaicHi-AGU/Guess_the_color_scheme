var color = ['red', 'orange', 'yellow', 'yellowgreen', 'green', 'skyblue', 'blue', 'purple', 'pink', 'white'];

var input_ans = [4];

function enterColor11(idname) { //入力した色をセルに反映
    var obj = document.getElementById(idname);
    const num = document.form11.color11.selectedIndex;
    const colorIndex = document.form11.color11.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[0] = colorIndex
}

function enterColor12(idname) {
    var obj = document.getElementById(idname);
    const num = document.form12.color12.selectedIndex;
    const colorIndex = document.form12.color12.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[1] = colorIndex
}

function enterColor21(idname) {
    var obj = document.getElementById(idname);
    const num = document.form21.color21.selectedIndex;
    const colorIndex = document.form21.color21.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[2] = colorIndex
}

function enterColor22(idname) {
    var obj = document.getElementById(idname);
    const num = document.form22.color22.selectedIndex;
    const colorIndex = document.form22.color22.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[3] = colorIndex
}

var ans = []; //問題の答え
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = arr.length;

while (a) { //配列をシャッフル
    var j = Math.floor(Math.random() * a);
    var t = arr[--a];
    arr[a] = arr[j];
    arr[j] = t;
}

console.log("解答の色のインデックス")
for (let i = 0; i < 4; i++) { //4つ選ぶ
    ans[i] = arr[i];
    console.log(ans[i]);
}

window.onload = function () { //入力された際にenterColor()を実行
    let select1 = document.querySelector('[name="color11"]');
    let select2 = document.querySelector('[name="color12"]');
    let select3 = document.querySelector('[name="color21"]');
    let select4 = document.querySelector('[name="color22"]');

    select1.onchange = event => {
        enterColor11('box11-Id');
    }
    select2.onchange = event => {
        enterColor12('box12-Id');
    }
    select3.onchange = event => {
        enterColor21('box21-Id');
    }
    select4.onchange = event => {
        enterColor22('box22-Id');
    }
};

function print_input() {
    console.log("選んだ色のインデックス")
    for (let i = 0; i < 4; i++) { //4つ選ぶ
        console.log(input_ans[i]);
    }
}