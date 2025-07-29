const quotes = [
    {
        quote: "오늘도 좋아해요!",
        author: "Lex",
    },
    {
        quote: "...정말 마음에 들어요. 평생 빼고 싶지 않은 걸요...",
        author: "Lex",
    },
    {
        quote: "ㅊ춫추추추워..!! 입을 옷을 잘못 골랐어요...",
        author: "Lex",
    },
    {
        quote: "혈중 에이든 농도 부족이에요...",
        author: "Lex",
    },
    {
        quote: "맨날맨날 고백해도 되나요..?",
        author: "Lex",
    },
    {
        quote: "...",
        author: "Aidan",
    },
    {
        quote: "...불편하면 빼도 돼. 대신 오늘 하루는 해주라...",
        author: "Aidan",
    },
    {
        quote: "망토에 코만 풀지 마.",
        author: "Aidan",
    },
    {
        quote: "...자, 여기 담요. 있는 거 다 가져왔어.",
        author: "Aidan",
    },
    {
        quote: "코코아 맛있는데.",
        author: "Aidan",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `“ ${todaysQuote.quote} ”`;
author.innerText = `- ${todaysQuote.author}`;