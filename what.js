document.addEventListener('DOMContentLoaded', () => {
  myArray = [
    'My heart beats for you, Light Furry.',
    'Gollum, you are my sunshine.',
    'In your love, Shemda-sasa, I find my peace.',
    'Kalaybochachi, you complete my world.',
    'With you, Light Furry, every moment is magical.',
    'Your love, Gollum, is my greatest treasure.',
    'Shemda-sasa, you are the melody of my life.',
    'In your eyes, Kalaybochachi, I see my future.',
    'You are the reason, Light Furry, for my smiles.',
    'Gollum, you are my sweetest dream.',
    'Your love, Shemda-sasa, is my inspiration.',
    'Kalaybochachi, you are the poetry in my heart.',
    'In your presence, Light Furry, I find joy.',
    'My love for you, Gollum, knows no bounds.',
    'Shemda-sasa, you are my guiding star.',
    'Your laughter, Kalaybochachi, is my favorite melody.',
    'With you, Light Furry, every day is an adventure.',
    "Gollum, you are my heart's desire.",
    'In your arms, Shemda-sasa, I find solace.',
    'You, Kalaybochachi, are my answered prayer.',
    'Your love, Light Furry, is my greatest gift.',
    'Gollum, you are the colors in my life.',
    'With you, Shemda-sasa, everything feels right.',
    'In your love, Kalaybochachi, I am complete.',
    'Light Furry, you are the sunshine of my soul.',
    'Your touch, Gollum, is my favorite sensation.',
    'Shemda-sasa, you are the love of my life.',
    'With you, Kalaybochachi, every day is a blessing.',
    'In your eyes, Light Furry, I see eternity.',
    "You, Gollum, are my heart's melody.",
    'Shemda-sasa, you make my world brighter.',
    'Your love, Kalaybochachi, is my guiding light.',
    'In your embrace, Light Furry, I find home.',
    'With you, Gollum, life is a beautiful journey.',
    'Shemda-sasa, you are the music in my soul.',
    'Your presence, Kalaybochachi, is my sanctuary.',
    'Light Furry, you are my dream come true.',
    'In your love, Gollum, I am secure.',
    "You, Shemda-sasa, are my heart's melody.",
    'Kalaybochachi, you light up my darkest days.',
    'Your love, Light Furry, is my strength.',
    'With you, Gollum, life is a celebration.',
    'In your eyes, Shemda-sasa, I find peace.',
    'Kalaybochachi, you are my greatest blessing.',
    'Your laughter, Light Furry, is my favorite symphony.',
    'In your love, Gollum, I am reborn.',
    'Shemda-sasa, you are the flame in my heart.',
    'With you, Kalaybochachi, every moment is precious.',
    'Your love, Light Furry, is my anchor.',
    'Gollum, you are my forever.',
  ];

  // Get reference to elements
  const msgBox = document.querySelector('._2A8P4');
  const sendBtn = document.querySelector('._4sWnG');
  // Loop through messages
  for (let message of myArray) {
    // Type message
    if (msgBox) {
      msgBox.innerHTML = message;
    } else {
      console.log('Message box not found');
    }

    // Click send
    sendBtn.click();

    setTimeout(() => {
      // Start sending messages
    }, 5000);
  }
});
