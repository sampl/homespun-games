const games = [
  {
    name: "Flip cup",
    link: "https://en.wikipedia.org/wiki/Flip_cup",
    summary: "Drinking game where the first team to flip all their cups over with just a finger wins.",
    ages: "Adults only",
    materials: [
      "table",
      "beer",
      "cups",
    ],
  },
  {
    name: "Pictionary",
    link: "https://en.wikipedia.org/wiki/Pictionary",
    summary: "Try to get your team to guess a secret word by drawing it",
    ages: "All ages",
    materials: [
      "paper",
      "pencil",
    ],
  },
  {
    name: "Fictionary",
    link: "https://en.wikipedia.org/wiki/Fictionary",
    summary: "Try to guess which word definitions are real, and which were made up by other players",
    ages: "All ages",
    materials: [
      "paper",
      "pencil",
      "book",
    ],
  },
  {
    name: "Hearts",
    link: "https://en.wikipedia.org/wiki/Hearts",
    summary: "Take turns discarding cards; lowest number of points wins",
    ages: "Teens and adults",
    materials: [
      "table",
      "cards",
    ],
  },
  {
    name: "Poker",
    link: "https://en.wikipedia.org/wiki/Poker",
    summary: "Bet against each other to see who has the best hand",
    ages: "Teens and adults",
    materials: [
      "table",
      "cards",
      "coins",
    ],
  },
  {
    name: "Euchre",
    link: "https://en.wikipedia.org/wiki/Euchre",
    summary: "Teams of players play cards in \"tricks\", first team to ten wins",
    ages: "Teens and adults",
    materials: [
      "table",
      "cards",
    ],
  },
  {
    name: "Rummy",
    link: "https://en.wikipedia.org/wiki/Rummy",
    summary: "Add and discard cards from a pile, building sets in your hand to score points",
    ages: "Teens and adults",
    materials: [
      "table",
      "cards",
    ],
  },
  {
    name: "Paper Football",
    link: "https://en.wikipedia.org/wiki/Paper_football",
    summary: "Flick an origami football across the table. Score points when it hangs over the edge (but doesn't fall off).",
    ages: "All ages",
    materials: [
      "table",
      "paper",
    ],
  },
  {
    name: "Tic-tac-toe",
    link: "https://en.wikipedia.org/wiki/Tic-tac-toe",
    summary: "Take turns drawing X's and O's on a grid, trying to get three in a row",
    ages: "All ages",
    materials: [
      "paper",
    ],
  },
  {
    name: "Concentration",
    link: "https://en.wikipedia.org/wiki/Concentration_(game)",
    summary: "Try to find card pairs by turning them over and remembering which card is where.",
    ages: "All ages",
    materials: [
      "table",
      "cards",
    ],
  },
  {
    name: "Hangman",
    link: "https://en.wikipedia.org/wiki/Hangman_(game)",
    summary: "Try to find a secret word by guessing one letter at a time",
    ages: "All ages",
    materials: [
      "paper",
      "pencil",
    ],
  },
  {
    name: "Dots and Boxes",
    link: "https://en.wikipedia.org/wiki/Dots_and_Boxes",
    summary: "Take turns filling in one line on grid paper, trying to ________",
    ages: "All ages",
    materials: [
      "paper",
      "pencil",
    ],
  },
  {
    name: "Fishbowl",
    link: "https://icebreakerideas.com/fishbowl-game/",
    summary: "Write a bunch of words on paper slips. Players draw a word and give hints to their team, first by describing, then acting it out, then describing it with one word.",
    ages: "Teens and adults",
    materials: [
      "paper",
      "pencil",
    ],
  },
  {
    name: "Landmines",
    link: "http://www.thecollegesurvivalhandbook.com/2012/02/how-to-play-land-mines-drinking-game.html",
    summary: "Spin a quarter, take a drink, and pick up the quarter with one hand. When you finish a beer, place it on the table to make quarter spinning harder for other players.",
    ages: "Adults only",
    materials: [
      "table",
      "beer",
      "coins",
    ],
  },
  {
    name: "Charades",
    link: "https://en.wikipedia.org/wiki/Charades",
    summary: "Get your teammates to guess a word by silently acting it out",
    ages: "All ages",
    materials: [
      "paper",
      "pencil",
    ],
  },
  {
    name: "Telestrations",
    link: "https://en.wikipedia.org/wiki/Telestrations",
    summary: "The first player writes down a word, the next guesses the word based on the drawing, the next player draws the word, etc",
    ages: "Teens and adults",
    materials: [
      "paper",
      "pencil",
    ],
  },
  {
    name: "Mao",
    link: "https://en.wikipedia.org/wiki/Mao_(card_game)",
    summary: "Card game where players learn the rules as they play",
    ages: "Teens and adults",
    materials: [
      "cards",
    ],
  },
  {
    name: "Would you rather",
    link: "https://en.wikipedia.org/wiki/Would_you_rather",
    summary: "Take turns asking each other questions like \"would you rather be a duck or a horse\"?",
    ages: "All ages",
    materials: [],
  },
  {
    name: "Truth or dare",
    link: "https://en.wikipedia.org/wiki/Truth_or_dare%3F",
    summary: "Take turns choosing between answering a question honestly or doing a dare that other players choose.",
    ages: "Kids and teens",
    materials: [],
  },
  {
    name: "I spy",
    link: "https://en.wikipedia.org/wiki/I_spy",
    summary: "Pick something in the room. Other players try to guess it asking yes or no questions.",
    ages: "All ages",
    materials: [],
  },
  {
    name: "Twenty questions",
    link: "https://en.wikipedia.org/wiki/Twenty_Questions",
    summary: "Choose an object anywhere in the world. Other players try to guess it asking only yes or no questions.",
    ages: "All ages",
    materials: [],
  },
  {
    name: "Two truths and a lie",
    link: "https://en.wikipedia.org/w/index.php?title=Two_Truths_and_a_Lie&redirect=no",
    summary: "Tell other players two facts about you and one lie; they try to guess the lie.",
    ages: "All ages",
    materials: [],
  }
]