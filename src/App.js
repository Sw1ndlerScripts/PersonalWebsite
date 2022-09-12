import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));




  useEffect(() => {
    let interval = 0;
    const whoAmI = ["", "a coding enthusiast", "a lua developer", "Alex"];
    function typeWords() {
      if (interval < whoAmI.length - 1) {
        let curWord = "";
        interval += 1;

        async function typeWord() {
          for (const letter of whoAmI[interval].split("")) {
            curWord = curWord + letter;
            setWord(curWord);
            if (curWord === "Alex") {

              setTimeout(() => {
                const item = document.getElementsByClassName("imWord")[0]
                item.classList.add("Animate")
              }, 50);

            }
            await timer(50);
          }

          if (interval <= whoAmI.length - 2) {
            await timer(1000);

            let wordList = curWord.split("");
            const looptimes = wordList.length;

            for (let i = 0; i < looptimes; i++) {
              wordList.pop();
              setWord(wordList.join(""));
              await timer(50);
            }
          }
        }
        typeWord();
      }
    }

    typeWords();
    setInterval(typeWords, 3200);
  }, [setWord]);






  return (
    <div className="main">
      <img
        className="pfp"
        src="https://cdn.discordapp.com/attachments/822525621283454996/1018328604544864436/unknown.png"
        alt="pfp"
      />

  
      <h1 className="heyThere">Hey There!</h1>

      <code className = "im">
        I'm&nbsp;

        <span className="imWord" > {word} </span>

        <span className="cursor">|</span>
      </code>

    </div>
  );
}

export default App;
