const quotes = [
{
  quote: "늦었다고 생각할 때가 진짜 늦었다",
  author: "명수팍"
},
{
  quote: "내가 너로 완전히 뒤덮여 흔적도 없길",
  author: "치즈가루"
},
{
  quote: "일찍 일어나는 새가 피곤하다",
  author: "명수팍"
},
{
  quote: "맛있다 김말이 필요없음",
  author: "떡볶이 맛집"
},
{
  quote: "오래 고아와 이쁘다 너는 그렇다",
  author: "설렁탕"
},
{
  quote: "고기까지가 끝인가보오 이제 나는",
  author: "비냉"
},
{
  quote: "넌 굶주린 세상에 가장 아름다운 장면",
  author: "짜장면"
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;