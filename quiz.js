const question = 'かねこそらの誕生日は？';
const answer = [
'2月7日',
'アルマゲドン', 
'1月14日',
'うんち'
];
const correct = '1月14日'

const $button = document.getElementsByTagName('button');

console.log(document.getElementById('js-question').textContent);  
document.getElementById('js-question').textContent = question;
$button[0].textContent = answer[0];
$button[1].textContent = answer[1];
$button[2].textContent = answer[2];
$button[3].textContent = answer[3];

$button[0].addEventListener('click', () =>{
    if(correct === document.getElementById('js-answer1').textContent ){
        window.alert('正解');
        }else{
            window.alert('不正解');
        }
});


$button[1].addEventListener('click', () =>{
    if(correct === document.getElementById('js-answer2').textContent ){
        window.alert('正解');
        }else{
            window.alert('不正解');
        }
});

$button[2].addEventListener('click', () =>{
    if(correct === document.getElementById('js-answer3').textContent ){
        window.alert('正解');
        }else{
            window.alert('不正解');
        }
});

$button[3].addEventListener('click', () =>{
    if(correct === document.getElementById('js-answer4').textContent ){
        window.alert('正解');
        }else{
            window.alert('不正解');
        }
});
