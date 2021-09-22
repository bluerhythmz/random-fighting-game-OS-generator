import { useState } from "react";
import "./App.css";

function App() {
  const [excuse, setExcuse] = useState("");
  const [gameLength, setGameLength] = useState(2);

  const fightingGameArr = [
    "Under ",
    "Night ",
    "Mortal ",
    "Kombat ",
    "Killer ",
    "Instinct ",
    "In-Birth ",
    "EXE: ",
    "Late ",
    "[cl-r] ",
    "Street ",
    "Fighter ",
    "King of ",
    "Strike ",
    "Impact ",
    "DragonBall ",
    "FighterZ ",
    "Naruto ",
    "Ultimate ",
    "Ninja ",
    "Storm ",
    "Guilty ",
    "Gear ",
    "Strive ",
    "Rev ",
    "Accent ",
    "Core ",
    "Plus R ",
    "Dengeki ",
    "Bunko ",
    "Climax ",
    "Nitroplus ",
    "Blasters ",
    "Koihime ",
    "Enbu ",
    "2nd ",
    "3rd ",
    "Bloody ",
    "Roar ",
    "Melty ",
    "Blood ",
    "Injustice ",
    "Million Arthur ",
    "Arcana ",
    "Heart ",
    "Love ",
    "SkullGirls ",
    "Samurai ",
    "Shodown ",
    "Last ",
    "Blade ",
    "Marvel ",
    "vs ",
    "Capcom ",
    "All Stars ",
    "Rival ",
    "Schools ",
    "Tekken ",
    "Dead ",
    "Alive ",
  ];

  const numbers = Array.from(Array(21).keys()).slice(1);

  let randomNumber = numbers[Math.floor(Math.random() * (numbers.length - 1))];

  const excuses = [
    "There's too much to learn in the new ",
    "There isn't enough player expression in the new ",
    "There are too many guest characters in the new ",
    "There's too many characters in the new ",
    "There are no defensive mechanics in the new ",
    "Too much lore in the new ",
    "Not enough tag mechanics in the new ",
    "Too many 50/50 mixups in the new ",
    "The gameplay is too simple in the new ",
    "They removed all the combo options in the new ",
  ];

  let randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

  const randomGameName = () => {
    let gameName = "";
    for (let i = 0; i < gameLength; i++) {
      let randomNum = Math.floor(Math.random() * (fightingGameArr.length - 1));
      let randomWord = fightingGameArr[randomNum];
      gameName += randomWord;
      randomNum = Math.floor(Math.random() * fightingGameArr.length - 1);
    }
    return gameName;
  };

  const handleClick = () => {
    setExcuse(randomExcuse + randomGameName() + randomNumber);
    randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value < 2 || value > 10) return;
    setGameLength(value);
  };

  return (
    <div className="App">
      <h1>Fighting Game OS Generator</h1>
      <div className="settings">
        <div className="input-box">
          <label htmlFor="length">Game Name Length:</label>
          <input
            type="number"
            onChange={handleChange}
            value={gameLength}
            name="length"
            id="game-length"
          />
        </div>
        <button onClick={handleClick}>Generate</button>
      </div>
      <div className="excuse-box">
        <h2>Generated OS:</h2>
        <p>{excuse}</p>
      </div>
    </div>
  );
}

export default App;
