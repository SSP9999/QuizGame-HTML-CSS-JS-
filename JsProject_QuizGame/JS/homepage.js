let a=0;
let answers=[];

let data = {
    allquestions:[
        {
            num:'questions1',
            id:1,
            question:"what is a color of orange fruit",
            answer:"orange",
            options:['orange','blue','green','black']
        },
        {
            num:'questions2',
            id:2,
            question:"what is the color of blueberry",
            answer:"black",
            options:['orange','blue','green','black']
        },
        {
            num:'questions3',
            id:3,
            question:"what is the color of tangerine fruit",
            answer:"orange",
            options:['orange','blue','green','black']
        },
        {
            num:'questions4',
            id:4,
            question:"what is the color of fresh grass",
            answer:"green",
            options:['orange','blue','green','black']
        },
        {
            num:'questions5',
            id:5,
            question:"what is the color of standy by in trafic signal",
            answer:"orange",
            options:['orange','blue','green','black']
        },
        {
            num:'questions6',
            id:6,
            question:"what is the color of go in trafic signal",
            answer:"green",
            options:['orange','blue','green','black']
        },
        {
            num:'questions7',
            id:7,
            question:"what is the new black",
            answer:"orange",
            options:['orange','blue','green','black']
        },
        {
            num:'questions8',
            id:8,
            question:"what is goku's gi color",
            answer:"orange",
            options:['orange','blue','green','black']
        },
        {
            num:'questions9',
            id:9,
            question:"what is gohan's gi color",
            answer:"orange",
            options:['orange','blue','green','black']
        },
        {
            num:'questions10',
            id:10,
            question:"what is vegeta's armor color",
            answer:"blue",
            options:['orange','blue','green','black']
        },
        {
            num:'questions11',
            id:11,
            question:"what is zoro's hair color",
            answer:"green",
            options:['orange','blue','green','black']
        },
        {
            num:'questions12',
            id:12,
            question:"what is luffy's hair color",
            answer:"black",
            options:['orange','blue','green','black']
        },
        {
            num:'questions13',
            id:13,
            question:"what is nami's hair color",
            answer:"orange",
            options:['orange','blue','green','black']
        },
        {
            num:'questions14',
            id:14,
            question:"what is sasuke's hair color",
            answer:"black",
            options:['orange','blue','green','black']
        },
        {
            num:'questions15',
            id:15,
            question:"what is midoriya's hair color",
            answer:"green",
            options:['orange','blue','green','black']
        },
        {
            num:'questions16',
            id:16,
            question:"what is ichigo's hair color",
            answer:"black",
            options:['orange','blue','green','black']
        },
        {
            num:'questions17',
            id:17,
            question:"what is madara's hair color",
            answer:"black",
            options:['orange','blue','green','black']
        },
        {
            num:'questions18',
            id:18,
            question:"what is omnitrex color",
            answer:"green",
            options:['orange','blue','green','black']
        },
        {
            num:'questions19',
            id:19,
            question:"what is ocean color",
            answer:"blue",
            options:['orange','blue','green','black']
        },
        {
            num:'questions20',
            id:20,
            question:"what is rasengan color",
            answer:"blue",
            options:['orange','blue','green','black']
        },
    ]
}
while(a!=5){
    a++;
    let x=Math.trunc(Math.random()*20);
    let k=data.allquestions[x]
    answers.unshift(k.answer);
    let [l,m,n,o]=k.options;
    let quest=k.question;
    let c=`<div class="questions">${quest}</div><br>
            <div class="alloptions">
            <input class="options" type="radio" name="radio${a}"><span class="ans">${l}</span>
            <input class="options" type="radio" name="radio${a}"><span class="ans">${m}</span>
            <input class="options" type="radio" name="radio${a}"><span class="ans">${n}</span>
            <input class="options" type="radio" name="radio${a}"><span class="ans">${o}</span>
            <div><br>`
    document.querySelector('.wrap').insertAdjacentHTML('afterbegin',c);

}
let ans = 0 ;
let result = 0;
function submit(){
    console.log('hi')
    for(let i=0;i<document.querySelectorAll('.options').length;i++){
        let all = document.querySelectorAll('.options')[i].checked;
       
        if(all == true){
            console.log(document.querySelectorAll('.ans')[i].innerHTML,answers[ans])
            if(document.querySelectorAll('.ans')[i].innerHTML == answers[ans]){
                console.log('correct')
                result++;
            }else{
                console.log('not correct')
            }
            ans++;
        }
    }
    document.querySelector('.result').classList.toggle('op');
    document.querySelector('.wrap').classList.toggle('op2');
    document.querySelector('.out').innerHTML = `${result}/5`;

}
document.querySelector('.btn').addEventListener('click',submit);