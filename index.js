var readLine = require("readline-sync")
const chalk = require("chalk")


console.log(chalk.bold.rgb(255,228,225)("\n            HARRY POTTER QUIZ\n" ))
var userName = readLine.question(chalk.rgb(255,228,225)("Enter your name : "))
console.log(chalk.bold.rgb(255,228,225)("\nHola!!! Welcome to the Wizarding World.\nAnswer the questions correctly and prove you're a true Potter-head \n"))


console.log(chalk.rgb(221,160,221).underline("\nLevel 1:\n") + chalk.rgb(221,160,221)("-10 multiple choice questions.\n-Each question carries 1 point.\n-Type the number of the correct option\n-Do not press enter\n-Score above 6 and get qualified for Level 2\n"))
 

var score=0


var guide =[
  {
    question:"1. How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
    answer:["He transfigures into a shark","He kisses a mermaid","He eats gillyweed","He performs a bubble-head charm"],
    rightAns:"He eats gillyweed"
  },
  {
    question:"2. What is the name of Fred and George’s joke shop?",
    answer:["Weasley Joke Emporium","Weasleys’ Wizard Wheezes","Fred & George’s Wonder Emporium","Zonko’s Joke Shop"],
    rightAns:"Weasleys’ Wizard Wheezes"
  },
  {
    question:"3. Who guards the entrance to the Gryffindor common room?",
    answer:["The Grey Lady","The Fat Friar","The Bloody Baron","The Fat Lady"],
    rightAns:"The Fat Lady"
  },
  {
    question:"4. Who is NOT a member of the Order of the Phoenix?",
    answer:["Cornelius Fudge","Mad-eye Moody","Professor Snape","Remus Lupin"],
    rightAns:"Cornelius Fudge"
  },
  {
    question:"5. Where does Hermione brew her first batch of Polyjuice Potion?",
    answer:["Moaning Myrtle’s Bathroom","The Hogwarts Kitchen","The Room of Requirement","The Gryffindor Common Room"],
    rightAns:"Moaning Myrtle’s Bathroom"
  },
  {
    question:"6. What does one say to close the Marauder’s Map and make it blank again?",
    answer:["Mischief Managed","Nothing to See Here","All Done","Hello Professor"],
    rightAns:"Mischief Managed",
  },
  {
    question:"7. The three kinds of balls used in Quidditch are Bludgers, Snitches, and…",
    answer:["Wiffles","Boccis","Quaffles","Foozles"],
    rightAns:"Quaffles",
  },
  {
    question:"8.How many Weasley siblings are there?",
    answer:["5","7","10","3"],
    rightAns:"7"

  },
  {
    question:"9. From what King’s Cross platform does the Hogwarts Express leave?",
    answer:["Eight and One-quarter","Nine and Three-quarters","Five and a Half","Eleven"],
    rightAns:"Nine and Three-quarters"

  },
  {
    question:"10. Who has given Harry Potter the Invisibility cloak?",
    answer:["Dobby","Professor Snape","Mad-eye Moody","Dumbledore"],
    rightAns:"Dumbledore"
  }
]


var guideTwo=[
  {
    question:"\n1. A wizard who cannot do magic is known as Bleaker.\n",
    answer:"n"
   
  },
  {
    question:"\n2. Doxies are not a form a currency in the wizarding world\n",
    answer:"y"
  },
  {
    question:"\n3. Firebolt is the model of the first broom Harry ever receives\n",
    answer:"n",
  },
  {
    question:"\n4. Mrs. Weasley give Harry a new sweater for Christmas every year.\n",
    answer:"y"
  },
  {
    question:"\n5. Dumbledore’s Army meet in The Gryffindor Common Room in ‘Harry Potter and the Order of the Phoenix’.\n",
    answer:"n"
  },
  {
    question:"\n6. Hermione uses Expelliarmus! to defeat the Devil’s Snare plant.\n ",
    answer:"n"
  }
]


var guideThree=[
  {
    question:"1. Who is the original owner of the Sorting Hat?\(Enter the full name\)\n",
    answer:"Godric Gryffindor"
  },
  {
    question:"\n2. What wood is Harry Potter’s wand made out of?\n",
    answer:"holly"

  },
  {
    question:"\n3. Which founding member of Hogwarts argued the school should only cater to purebloods?(Enter the full name\)\n",
    answer:"Salazar Slytherin"
  },
  {
    question:"\n4. What is the name of the wizarding newspaper based in London?\n",
    answer:"The Daily Prophet"
  }
]


var highScores = [
  {
    name:"Hannah",
  score:22
  },
  {
    name : "Shruthi",
    score:16
  }

]


//LEVEL 1
for(i=0 ; i<guide.length ; i++)
{
  display( guide[i].question , guide[i].answer , guide[i].rightAns)
}

function display(question , answer , rightAns)
{
  console.log(chalk.rgb(255,218,185).bold(question))
  var userAns = readLine.keyInSelect(answer)
  if(answer[userAns] === rightAns)
  {
    console.log(chalk.green("\nYay!!! right answer"))
    score++;
  }
  else
  {
    console.log(chalk.red("\nOops!!!you're wrong"))
  }
  console.log(chalk.rgb(255,255,102)("Your score: " + score+"\n"))
}


//CHECKING FOR LEVEL 2 AND LEVEL 3
console.log(chalk.rgb(255,105,180)("Your score after Level 1 : " 
+ score + "\n"))
var finalScore = score
if(score > 6)
{
  score=0
  console.clear()
  console.log(chalk.rgb(255,105,180)("Hurray!!! you are qualified for Level 2\n"))
  console.log(chalk.rgb(221,160,221).underline("Level 2:\n"))
  console.log(chalk.rgb(221,160,221)( "-Read the statement.If it is true type 'y' and if it is false type 'n' and press enter\n-You get two points for answering correctly and no negative marking for wrong answer\n-get qualified for level 3 by scoring more than 8 points\n-All The Best!!\n\n"))
  for(var i=0 ; i<guideTwo.length ; i++)
  {
   
    levelTwo( guideTwo[i].question , guideTwo[i].answer)

  }
  console.log(chalk.rgb(255,105,180)("You scored" + score + "in Level 2\n"+ "Your total score : "+finalScore))
  if( score >= 8)
  {
    
    score = 0
    console.clear()
    console.log(chalk.rgb(255,105,180)("CONGRATULATIONS!!! YOU ARE QUALIFIED FOR LEVEL 3\n\n"))
    console.log(chalk.rgb(221,160,221).underline("Level 3:\n"))
  console.log(chalk.rgb(221,160,221)( "-4 questions, each carrying 3 points\n-Type in your answer and press enter\n\-Best of luck!!\n\n"))
  for(var i=0; i<guideThree.length ; i++){
  levelThree(guideThree[i].question , guideThree[i].answer)
  }
  }
  else
{
  console.log(chalk.chalk.rgb(221,160,221)("You did not score the minimum points to get qualified for next level.\nTry again next time.\nBest of luck."))
}
  console.log(chalk.rgb(255,105,180)("YOUR TOTAL SCORE: " + finalScore))
}

else
{
  console.log(chalk.rgb(221,160,221)("You did not score the minimum points to get qualified for next level."))
}


//LEVEL 2
function levelTwo(question , answer)
{
  console.log(chalk.rgb(255,218,185)(question))
  var userAns = readLine.question("Your Answer: ")
  if(userAns === answer)
  {
    console.log(chalk.green("\nYippee!!! Right answer"))
    score=score+2
    finalScore = 2 + finalScore
  }
  else{
    console.log(chalk.red("\nOhh noo!!! Wrong answer"))
  }
  console.log(chalk.rgb(255,255,102)("Your current score : "+ score))
  console.log(chalk.rgb(255,255,102)("Your total score : "+finalScore ))
}


//LEVEL 3
function levelThree(question , answer)
{
  console.log(chalk.rgb(255,218,185)(question))
  var userAns = readLine.question("Your Answer: ")
  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("\nYahoo!!! Right answer"))
    score=score+3
    finalScore = 3 + finalScore
  }
  else
  {
    console.log(chalk.red("\nOpsiee!!! Wrong answer"))
  }
  console.log(chalk.rgb(255,255,102)("Your current score : "+ score))
  console.log(chalk.rgb(255,255,102)("\nYour total score : "+finalScore ))
}

//checking if highScore is beaten
if(finalScore > highScores[0].score)
{
  console.log(chalk.rgb(221,160,221)("\nCongratulations!!you have beaten the highscore.Send me a screenshot of your score"))
}
else{
  console.log(chalk.rgb(221,160,221)("\nYou did not beat the highscore.\nTry again next time."))
}

//highScores.push({userName : highScores.name , finalScore : highScores.score})

//displaying highScore
{
  console.log(chalk.rgb(221,160,221).underline("\nPoints Table:\n"))
  for(var i=0; i<highScores.length ; i++)
  {
    console.log(chalk.rgb(221,160,221)((i+1) +". "+ highScores[i].name +" : " + highScores[i].score))
  }
}