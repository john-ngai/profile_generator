const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const questions = [
  'Q1: What\'s your name? Nicknames are also acceptable :)  ',
  'Q2: What\'s an activity you like doing?  ',
  'Q3: What do you listen to while doing that?  ',
  'Q4: Which meal is your favourite (eg: dinner, brunch, etc.)  ',
  'Q5: What\'s your favourite thing to eat for that meal?  ',
  'Q6: Which sport is your absolute favourite?  ',
  'Q7: What is your superpower? In a few words, tell us what you are amazing at!  '
];

const answers = [];

const question1 = () => {
  rl.question(questions[0], (answer) => {
    answers.push(answer);
    console.log(`Q1 - Your Answer: ${answer} \n`);
    question2();
  });
}

const question2 = () => {
  rl.question(questions[1], (answer) => {
    answers.push(answer);
    console.log(`Q2 - Your Answer: ${answer} \n`);
    question3();
  });
}

const question3 = () => {
  rl.question(questions[2], (answer) => {
    answers.push(answer);
    console.log(`Q3 - Your Answer: ${answer} \n`);
    question4();
  });
}

const question4 = () => {
  rl.question(questions[3], (answer) => {
    answers.push(answer);
    console.log(`Q4 - Your Answer: ${answer} \n`);
    question5();
  });
}

const question5 = () => {
  rl.question(questions[4], (answer) => {
    answers.push(answer);
    console.log(`Q5 - Your Answer: ${answer} \n`);
    question6();
  });
}

const question6 = () => {
  rl.question(questions[5], (answer) => {
    answers.push(answer);
    console.log(`Q6 - Your Answer: ${answer} \n`);
    question7();
  });
}

const question7 = () => {
  rl.question(questions[6], (answer) => {
    answers.push(answer);
    console.log(`Q7 - Your Answer: ${answer} \n`);
    console.log('Thank you for answering all the questions!\nHere is your generated profile:\n\n'
    );
    profileGenerator(answers);
    rl.close();
  });
}

const profileGenerator = (array) => {
  let name = answers[0];
  let activity = answers[1];
  let music = answers[2];
  let meal = answers[3];
  let food = answers[4];
  let sport = answers[5];
  let superpower = answers[6];
  let profile = `${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}!`;
  console.log(profile);
}

question1();
