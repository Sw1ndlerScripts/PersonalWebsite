import { useState, useMemo } from "react";
import "./App.css";

const whoAmI = [
  "",
  "a coding enthusiast",
  "a lua developer",
  "Alex"
];


    





const [word, setWord] = useState("");

const timer = ms => new Promise(res => setTimeout(res, ms))

let interval = 0

useMemo(() => {
    function typeWords() {
        if(interval < whoAmI.length - 1){
            let curWord = ""
            interval += 1;
        
            async function typeWord () {
                for(const letter of whoAmI[interval].split("")){
                    curWord = curWord + letter
                    setWord(curWord)
        
                    await timer(50);
                }
            
                if(interval <= whoAmI.length - 2) {
                    await timer(1000)
                    
                    let wordList = curWord.split("")
                    const looptimes = wordList.length
        
                    for(let i = 0; i < looptimes; i++ ){
                        wordList.pop()
                        setWord(wordList.join(""))
                        await timer(50);
                    }
                }
            }
            typeWord();
        };
    }
    typeWords()
}, [word])
