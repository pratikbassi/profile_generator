const readline = require('readline');
let questions = ['GIVE NAME', 'GIVE FAVORITE FOOD', 'GIVE FAVORITE ANIMAL', 'GIVE CREDIT CARD NUMBER', 'GIVE MOTHER MAIDEN NAME'];
let store = [];

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(questions[0], (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  store.push(answer);
  rl.pause()

  rl.question(questions[1], (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    store.push(answer);
    rl.pause();

    rl.question(questions[2], (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      store.push(answer);
      rl.pause();

      rl.question(questions[3], (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        store.push(answer);
        rl.pause();

        rl.question(questions[4], (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          store.push(answer);
          rl.pause();
          console.log(`HELLO ${store[0]} you like eating ${store[2]} ${store[1]}! Your mother: ${store[4]} would be ASHAMED of you! We here at PETA will be charging your credit card: ${store[3]} to make up for it!`)
        
          })
        })
      })
    })
  })

