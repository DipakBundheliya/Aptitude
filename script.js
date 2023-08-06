let questionItem = [
  {
    que: "The unit digit in the product (784 x 618 x 917 x 463) is:",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    ans: "a",
  },
  {
    que: "-84 x 29 + 365 = ?",
    a: "2436",
    b: "2801",
    c: "-2801",
    d: "-2071",
    ans: "d",
  },
  {
    que: "Which of the following has the most number of divisors?",
    a: "99",
    b: "101",
    c: "176",
    d: "182",
    ans: "c",
  },
  {
    que: "The average age of husband, wife and their child 3 years ago was 27 years and that of wife and the child 5 years ago was 20 years. The present age of the husband is:",
    a: "35 years",
    b: "35 years",
    c: "35 years",
    d: "No one",
    ans: "b",
  },
  {
    que: "(25)7.5 x (5)2.5 ÷ (125)1.5 = 5?",
    a: "8.5",
    b: "13",
    c: "16",
    d: "17.5",
    ans: "b",
  },
  {
    que: "A and B can do a piece of work in 30 days, while B and C can do the same work in 24 days and C and A in 20 days. They all work together for 10 days when B and C leave. How many days more will A take to finish the work?",
    a: "18 days",
    b: "24 daya",
    c: "30 days",
    d: "36 days",
    ans: "a",
  },
  {
    que: "A man walked diagonally across a square lot. Approximately, what was the percent saved by not walking along the edges?",
    a: "20",
    b: "24",
    c: "30",
    d: "33",
    ans: "c",
  },
  {
    que: "In a 100 m race, A can give B 10 m and C 28 m. In the same race B can give C:",
    a: "18 m",
    b: "20 m",
    c: "27 m",
    d: "9 m",
    ans: "b",
  },
  {
    que: "The angle between the minute hand and the hour hand of a clock when the time is 4.20, is:",
    a: "0 degree",
    b: "10 degree",
    c: "5 degree",
    d: "20 degree",
    ans: "b",
  },
  {
    que: "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
    a: "21/46",
    b: "25/117",
    c: "1/50",
    d: "3/25",
    ans: "a",
  },
  {
    que: "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
    a: "1/3",
    b: "3/4",
    c: "7/19",
    d: "8/21",
    ans: "a",
  },
  {
    que: "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
    a: "10/21",
    b: "11/21",
    c: "2/7",
    d: "5/7",
    ans: "a",
  },
  {
    que: "Find the odd man out. 10, 14, 16, 18, 21, 24, 26",
    a: "26",
    b: "24",
    c: "21",
    d: "18",
    ans: "c",
  },
  {
    que: "Find out the wrong number in the given sequence of numbers. 6, 13, 18, 25, 30, 37, 40",
    a: "25",
    b: "30",
    c: "37",
    d: "40",
    ans: "d",
  },
  {
    que: "Find out the wrong number in the given sequence of numbers. 46080, 3840, 384, 48, 24, 2, 1",
    a: "1",
    b: "2",
    c: "24",
    d: "384",
    ans: "c",
  },
  {
    que: "3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day?",
    a: "9",
    b: "10",
    c: "11",
    d: "12",
    ans: "d",
  },
  {
    que: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
    a: "81 min",
    b: "108 min",
    c: "144 min",
    d: "192 min",
    ans: "c",
  },
  {
    que: "A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:",
    a: "4",
    b: "5",
    c: "6",
    d: "10",
    ans: "b",
  },
  {
    que: "A man took loan from a bank at the rate of 12% p.a. simple interest. After 3 years he had to pay Rs. 5400 interest only for the period. The principal amount borrowed by him was:?",
    a: "2000",
    b: "10,000",
    c: "15,000",
    d: "20,000",
    ans: "c",
  },
  {
    que: "A man walked diagonally across a square lot. Approximately, what was the percent saved by not walking along the edges?",
    a: "20",
    b: "24",
    c: "30",
    d: "33",
    ans: "c",
  },
];

let question = document.querySelectorAll(".question");

let container = document.querySelector(".container");

let index = 0,
  indexQue = 0,
  indexOpt = 0,
  right = 0,
  wrong = 0;

const loadQuestion = () => {
  let repeatQue = document.createElement("div");
  repeatQue.className = "box";
  repeatQue.innerHTML = `
  <h1 class="question">${indexQue + 1}. ${questionItem[indexQue].que}</h1>
  <div class="row">
      <input type="radio"  value="a" name="option${indexQue}" class="option">
      <label for="" >${questionItem[indexQue].a} </label>
  </div>
  <div class="row">
      <input type="radio"  value="b" name="option${indexQue}" class="option">
      <label for="" >${questionItem[indexQue].b} </label>
  </div>
  <div class="row">
      <input type="radio"  value="c" name="option${indexQue}" class="option">
      <label for="" >${questionItem[indexQue].c} </label>
  </div>
  <div class="row">
      <input type="radio"  value="d" name="option${indexQue}" class="option">
      <label for="" >${questionItem[indexQue].d} </label>
  </div> `;
  indexQue++;
  container.appendChild(repeatQue);
};

let printQuestions = () => {
  questionItem.forEach(() => {
    loadQuestion();
  });
};
printQuestions();

let option = document.querySelectorAll(".option");
let j = 0;
let result = () => {
  option.forEach((input) => {
    if (input.checked) {
      if (input.value == questionItem[j++].ans) right++;
      else wrong++;
    }
  });

  document.querySelector("body").innerHTML = `<div class="result">
  <h1>You have been cleared this exam</h1>
  <h2>Your score is ${right} out of ${questionItem.length}</h2>
  <h3>Your wrong answer are/is ${wrong} and you have not attempt ${
    questionItem.length - (right + wrong)
  } question </h3>
  </div>`;
};

// console.log(option[0].checked);
console.log(option);

// console.log(question.length);
// const reset = () => {
//   option.forEach((option) => {
//     option.checked = false;
//   });
// };
// const loadQuestion = () => {
//   reset();
//   question.innerHTML = questionItem[index].que;
//   option[0].nextElementSibling.innerHTML = questionItem[index].a;
//   option[1].nextElementSibling.innerHTML = questionItem[index].b;
//   option[2].nextElementSibling.innerHTML = questionItem[index].c;
//   option[3].nextElementSibling.innerHTML = questionItem[index].d;
// };
// loadQuestion();
// const changeQue = () => {
//   let answer = getAnswer();
//   if (answer == questionItem[index].ans) {
//     right++;
//   } else {
//     wrong++;
//   }
//   if (index == questionItem.length - 1) {
//     document.querySelector(
//       ".box"
//     ).innerHTML = `<h1>you completed test successfully!</h1>
//                    <h2>You score is ${right} out of ${questionItem.length}.</h2>`;
//   } else {
//     if (answer != "undefined") {
//       index++;
//       loadQuestion();
//     }
//   }
// };

// let getAnswer = () => {
//   let selectOpt = "undefined";
//   option.forEach((input) => {
//     if (input.checked) selectOpt = input.value;
//   });
//   if (selectOpt == "undefined") {
//     alert("please select one answer");
//     return selectOpt;
//   } else return selectOpt;
// };
