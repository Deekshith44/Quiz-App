const quizdata=[
    {
        question:'How old can human live?',
        a:'100Years',
        b:'250Years',
        c:'1000years',
        d:'150years',
        correct:'a'
    },
    {
        question:'What is the capital of India',
        a:'Channai',
        b:'Delhi',
        c:'Mumabi',
        d:'Bangalore',
        correct:'b'
    },
    {
        question:'What is the capital of Karnataka',
        a:'Channai',
        b:'Delhi',
        c:'Mumabi',
        d:'Bangalore',
        correct:'d'
    },
    {
        question:'What is the capital of Japan',
        a:'Tokya',
        b:'Busan',
        c:'MuNozomi',
        d:'Teuiop',
        correct:'a'
    }
];



const questionEl=document.getElementById('qtn');
const atext=document.getElementById('a_text');
const btext=document.getElementById('b_text');
const ctext=document.getElementById('c_text');
const dtext=document.getElementById('d_text');
const answerEls=document.querySelectorAll('.answer');
const submitBtn=document.getElementById('submit');
const quiz=document.getElementById('quiz');

let currentQuiz=0;
let score=0;


function loadQuiz()
{
    deselectAnswer();
    const currentQuizdata=quizdata[currentQuiz];
    questionEl.innerText=currentQuizdata.question;
    atext.innerText=currentQuizdata.a;
    btext.innerText=currentQuizdata.b;
    ctext.innerText=currentQuizdata.c;
    dtext.innerText=currentQuizdata.d;

}

loadQuiz();

function deselectAnswer()
{
    answerEls.forEach(answerEl=>answerEl.checked=false);
}

function getSelected()
{
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked)
        {
            answer=answerEl.id;
        }
    })
      
    return answer;
}


submitBtn.addEventListener('click',()=>{
    const answer=getSelected();
    if(answer)
    {
        if(answer===quizdata[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;

        if(currentQuiz<quizdata.length)
{
    loadQuiz();
}
else
{
    quiz.innerHTML=`
    <h2>Your answer ${score}/${quizdata.length} question correctly</h2>
    <button onclick="location.reload()">Reload</button>` ;
}
    }
});



