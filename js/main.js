'use strict';

{
    function update(){
        document.querySelector('h1').textContent = 'Changed!';
        document.querySelector('#target').textContent = 'Changed!';
        document.getElementById('target').textContent = 'Changed!';
        document.querySelector('p').textContent = 'Changed!';
        document.querySelectorAll('p')[1].textContent = 'Changed!';
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです`;
        });
    }

    setTimeout(update, 1000);
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        targetNode.textContent = 'Changed!';
        targetNode.title = 'this is titile!';
        targetNode.style.color = 'red';
        targetNode.style.backgroundColor = 'skyblue';
        targetNode.className = 'my-color';
        targetNode.className = 'my-color my-border';
        targetNode.classList.add('my-color');
        if(targetNode.classList.contains('my-color') === true){
            targetNode.classList.remove('my-color');
        }else{
            targetNode.classList.add('my-color');
        }
        targetNode.classList.toggle('my-color');  //classNameよりもclassListのほうが便利

    targetNode.textContent = 'くまさん';
    targetNode.textContent = targetNode.dataset.translation;

    const item2 = document.createElement('li'); //要素を作る方法
    item2.textContent = 'item2';

    // const ulNode = document.querySelector('ul'); //ul要素の追加 要素名の文字列
    const ul = document.querySelector('ul');　//文字列と定数名
    ul.appendChild(item2);


    const item0 = document.querySelectorAll('li')[0]; //要素の取得
    const copy = item0.cloneNode(true); //falseだと要素の中身を殻にすることになる

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2); //おや要素に対してコピーをitem2の前に挿入する

    domから要素を削除してみる
    const item1 = document.querySelectorAll('li')[1];

    item1.remove();
    親node.removeChild(削除するNode)
    document.querySelector('ul').removeChild(item1);

        const li = document.createElement('li');
        const text = document.querySelector('input');  //input要素の取得
        li.textContent = text.value; //text.valueでなんでも入るようにする
        document.querySelector('ul').appendChild(li);

        text.value = '';
        text.focus();

        const li = document.createElement('li');
        const color = document.querySelector('select');
        li.textContent = `${color.value} - ${color.selectedIndex}`;
        document.querySelector('ul').appendChild(li);

        const colors = document.querySelectorAll('input');
        let selectedColor; //選択された値を保持する

        colors.forEach(color => { //ループ処理
            if(color.checked === true){　//要素がチェっクされていたらその値をselectedColorを代入
                selectedColor = color.value;
            }
        });

        const li = document.createElement('li');
        li.textContent = selectedColor;
        document.querySelector('ul').appendChild(li);

        const colors = document.querySelectorAll('input');
        const selectedColors = [];

        colors.forEach(color => {
            if(color.checked === true){
                selectedColors.push(color.value);
            }
        });

        const li = document.createElement('li');
        // li.textContent = selectedColors.join(',');
        li.textContent = selectedColors;
        document.querySelector('ul').appendChild(li);
    });

    document.querySelector('button').addEventListener('dblclick', () => {
        console.log('Double Clicked');
    });

    // document.addEventListener('mousemove', e => {
    //     // console.log('moved!');
    //     console.log(e.clientX, e.clientY);
    // });

    document.addEventListener('keydown', e => {
        console.log(e.key);
    });

    const text = document.querySelector('textarea');

    text.addEventListener('focus',()=>{ //focusがあたった時
        console.log('focus');
    });

    text.addEventListener('blur',()=>{　//focusが外れた時
        console.log('blur');
    });

    text.addEventListener('input',()=>{ //内容が更新された時
        // console.log('input');
        console.log(text.value.length); //文字数を取得可能
    });

    text.addEventListener('change',()=>{　//更新が確定した時
        console.log('change');
    });

    document.querySelector('form').addEventListener('submit', e  => {
        e.preventDefault(); //基底の動作をキャンセル可能にする
        console.log('submit');
    });

    document.querySelector('ul').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
          e.target.classList.toggle('done');
        }
      });
    
}