// Variables

let btn  = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: `"Success is not final: failure is not fatal. It is the courage to continue that counts."`,
    person: `Winston S. Churchill`
},{
    quote: `"I find that the harder I work, the more luck I seem to have."`,
    person: `Thomas Jefferson`
},{
    quote: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
    person: `Colin Powell`
},{
    quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
    person: `Franklin D. Roosevelt`
},{
    quote: `"The road to success and the road to failure are almost exactly the same."`,
    person:`Colin R. Davis`
},{
    quote: `"I failed my way to success."`,
    person:`Thomas Edison`
},{
    quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    person:`James Cameron`
},{
    quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
    person:`Robert Frost`
},{
    quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
    person:`Dr. Seuss`
},{
    quote: `"It is better to be hated for what you are than to be loved for what you are not."`,
    person: `Andre Gide, (Source - Autumn Leaves)`
}
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random() *quotes.length);

    quote.innerText =quotes[random].quote;
    person.innerText = quotes[random].person;

});