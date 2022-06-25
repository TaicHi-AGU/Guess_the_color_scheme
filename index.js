var color = ['red', 'orange', 'yellow', 'yellowgreen', 'green', 'skyblue', 'blue', 'purple', 'pink', 'white'];

var input_ans = [4]; //入力した解答を保存

function enterColor1(idname) { //入力した色をセルに反映(左上)
    var obj = document.getElementById(idname);
    const num = document.form1.color1.selectedIndex;
    const colorIndex = document.form1.color1.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[0] = colorIndex
}

function enterColor2(idname) { //入力した色をセルに反映(右上)
    var obj = document.getElementById(idname);
    const num = document.form2.color2.selectedIndex;
    const colorIndex = document.form2.color2.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[1] = colorIndex
}

function enterColor3(idname) { //入力した色をセルに反映(左下)
    var obj = document.getElementById(idname);
    const num = document.form3.color3.selectedIndex;
    const colorIndex = document.form3.color3.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[2] = colorIndex
}

function enterColor4(idname) { //入力した色をセルに反映(右下)
    var obj = document.getElementById(idname);
    const num = document.form4.color4.selectedIndex;
    const colorIndex = document.form4.color4.options[num].value;
    obj.style.backgroundColor = color[colorIndex];
    input_ans[3] = colorIndex
}

var ans = []; //問題の解答を保存
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = arr.length;

while (a) { //配列をシャッフル
    var j = Math.floor(Math.random() * a);
    var t = arr[--a];
    arr[a] = arr[j];
    arr[j] = t;
}

console.log("解答の色のインデックス")
for (let i = 0; i < 4; i++) { //先頭4つを答えに採用
    ans[i] = arr[i];
    console.log(ans[i]);
}

window.onload = function () { //入力された際にenterColor()を実行
    let select1 = document.querySelector('[name="color1"]');
    let select2 = document.querySelector('[name="color2"]');
    let select3 = document.querySelector('[name="color3"]');
    let select4 = document.querySelector('[name="color4"]');

    select1.onchange = event => {
        enterColor1('box1-Id');
    }
    select2.onchange = event => {
        enterColor2('box2-Id');
    }
    select3.onchange = event => {
        enterColor3('box3-Id');
    }
    select4.onchange = event => {
        enterColor4('box4-Id');
    }
};

function print_input() { //選択インデックス確認用(コンソール)
    console.log("選んだ色のインデックス")
    for (let i = 0; i < 4; i++) {
        console.log(input_ans[i]);
    }
    judge_result(input_ans, ans);
}

function judge_result(input_ans, ans) {
    var hit = 0;
    var blow = 0;

    for (let i = 0; i < 4; i++) { //hit, blowを求める処理
        for (let j = 0; j < 4; j++) {
            if (ans[i] == input_ans[j]) {
                if (i == j) {
                    hit++;
                }
                else {
                    blow++
                }
            }
        }
    }
    
    console.log("hit");
    console.log(hit);
    console.log("blow");
    console.log(blow);
}