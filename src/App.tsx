/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { GOT_OLD, MACHINE, PLAYER, RESET, SCORE_LABEL, SCORE_MACHINE, SCORE_PLAYER, YOU_LOSE, YOU_WIN } from './constants';
import { Options } from './types';
import { increaseDifficulty } from './utils';


function App() {
  const [data, setData] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const [optionSelected, setOptionSelected] = useState(Options.BALL);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreMachine, setScoreMachine] = useState(0);
  const [easy, setEasy] = useState(1)
  const grid = useRef<HTMLDivElement>(null);

  const reloadGame = () => {
    setData([['', '', ''], ['', '', ''], ['', '', '']]);
    setOptionSelected(Options.BALL);
    setWinner('');
    setGameOver(false);
    if(grid && grid.current?.children[0]) {
      for(let index = 0; index < grid.current.children.length; index++) {
        grid.current?.children[index].classList.remove('win');
      }
    } 
  }

  const handleMachine = useCallback(() => {

    if(!gameOver) {
      let line: any = false;
      let column: any = false;
      if(!easy) {
        const { line: lineIcrease, column: columnIncrease }: any = increaseDifficulty(data);
        line = lineIcrease;
        column = columnIncrease;
      }
      const selectColumn = Math.floor(Math.random() * 3);
      const selectLine = Math.floor(Math.random() * 3);
      if(column !== false && line !== false) {
        handleSetValue(line, column, Options.X);
      } else {
        if(data[selectColumn][selectLine].length === 0) {
          handleSetValue(selectColumn, selectLine, Options.X);
        } else {
          handleMachine();
        }
      }

    
    }
  }, [optionSelected, gameOver, data, increaseDifficulty, easy]);


  const handleSetValue = (column: number, line: number, value: string) => {
   if(!gameOver) {
    let dataAux = data;
    dataAux[column][line] = value;
    setData(dataAux);
    setOptionSelected(state => state === Options.BALL ? Options.X : Options.BALL);
    verifyGame();
   }
  }

  const handleEndOfTheGame = (youWin: boolean) => {
    setGameOver(true);
    setWinner(youWin ? YOU_WIN : YOU_LOSE);
    if(youWin) {
      setScorePlayer(state => state + 1);
    } else {
      setScoreMachine(state => state + 1);
    }
  }

  const verifyGame = () => {
    let gameOverSync = gameOver;
    if(data[0][0] === Options.BALL && data[0][1] === Options.BALL && data[0][2] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[0].classList.add('win');
        grid.current.children[1].classList.add('win');
        grid.current.children[2].classList.add('win');
      }
    }
    if(data[0][0] === Options.X && data[0][1] === Options.X && data[0][2] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[0].classList.add('win');
        grid.current.children[1].classList.add('win');
        grid.current.children[2].classList.add('win');
      }
    }

    if(data[1][0] === Options.BALL && data[1][1] === Options.BALL && data[1][2] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[3]) {
        grid.current.children[3].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[5].classList.add('win');
      }
    }

    if(data[1][0] === Options.X && data[1][1] === Options.X && data[1][2] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[3]) {
        grid.current.children[3].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[5].classList.add('win');
      }
    }

    if(data[2][0] === Options.BALL && data[2][1] === Options.BALL && data[2][2] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[6]) {
        grid.current.children[6].classList.add('win');
        grid.current.children[7].classList.add('win');
        grid.current.children[8].classList.add('win');
      }
    }
    if(data[2][0] === Options.X && data[2][1] === Options.X && data[2][2] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[6]) {
        grid.current.children[6].classList.add('win');
        grid.current.children[7].classList.add('win');
        grid.current.children[8].classList.add('win');
      }
    }

    if(data[0][0] === Options.BALL && data[1][0] === Options.BALL && data[2][0] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[0].classList.add('win');
        grid.current.children[3].classList.add('win');
        grid.current.children[6].classList.add('win');
      }
    }
    if(data[0][0] === Options.X && data[1][0] === Options.X && data[2][0] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[0].classList.add('win');
        grid.current.children[3].classList.add('win');
        grid.current.children[6].classList.add('win');
      }
    }

    if(data[0][1] === Options.BALL && data[1][1] === Options.BALL && data[2][1] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[1].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[7].classList.add('win');
      }
    }
    
    if(data[0][1] === Options.X && data[1][1] === Options.X && data[2][1] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[1].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[7].classList.add('win');
      }
    }

    if(data[0][2] === Options.BALL && data[1][2] === Options.BALL && data[2][2] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[2].classList.add('win');
        grid.current.children[5].classList.add('win');
        grid.current.children[8].classList.add('win');
      }
    }

    if(data[0][2] === Options.X && data[1][2] === Options.X && data[2][2] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[2].classList.add('win');
        grid.current.children[5].classList.add('win');
        grid.current.children[8].classList.add('win');
      }
    }

    if(data[0][0] === Options.BALL && data[1][1] === Options.BALL && data[2][2] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[0].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[8].classList.add('win');
      }
    }

    if(data[0][0] === Options.X && data[1][1] === Options.X && data[2][2] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[0].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[8].classList.add('win');
      }
    }

    if(data[0][2] === Options.BALL && data[1][1] === Options.BALL && data[2][0] === Options.BALL) {
      handleEndOfTheGame(true);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[2].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[6].classList.add('win');
      }
    }
    if(data[0][2] === Options.X && data[1][1] === Options.X && data[2][0] === Options.X) {
      handleEndOfTheGame(false);
      gameOverSync = true;
      if(grid && grid.current?.children[0]) {
        grid.current.children[2].classList.add('win');
        grid.current.children[4].classList.add('win');
        grid.current.children[6].classList.add('win');
      }
    }

    if(
      data[0][0].length > 0 && 
      data[0][1].length > 0 && 
      data[0][2].length > 0 && 
      data[1][0].length > 0 && 
      data[1][1].length > 0 &&
      data[1][2].length > 0 &&
      data[2][0].length > 0 &&
      data[2][1].length > 0 &&
      data[2][2].length > 0 &&
      !gameOverSync
      ) {
        setWinner(GOT_OLD);
        setGameOver(true);
      }
  }
  
  useEffect(() => {
    if(optionSelected === Options.X) {
      setTimeout(() => handleMachine(), 500)
    }
  }, [optionSelected]);

  const handleSetComponent = (line: number, column: number) => {
    if(data[line][column] === Options.BALL) {
      return <div className='circle' />
    }
    if(data[line][column] === Options.X) {
      return (
        <>
          <div className="x1" />
          <div className="x2" />
        </>
      )
    }
  }

  const showOptions = () => {
    if(
      data[0][0].length === 0 && 
      data[0][1].length === 0 && 
      data[0][2].length === 0 && 
      data[1][0].length === 0 && 
      data[1][1].length === 0 &&
      data[1][2].length ===0 &&
      data[2][0].length === 0 &&
      data[2][1].length === 0 &&
      data[2][2].length === 0
      ) {
        return true;
      }
      return false;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h5>JOGO DA VELHA</h5>
        {showOptions() && (
          <div className='options'>
           <label htmlFor="level">Nível</label>
           <select className='select' id='level' value={easy} onChange={ev => setEasy(Number(ev.target.value))}>
             <option value={1}>Fácil</option>
             <option value={0}>Dificil</option>
           </select>
          </div>
        )}
        <small>{winner.length === 0 ? `${optionSelected === Options.BALL ? PLAYER : MACHINE}` : winner}</small>
        {gameOver && <button onClick={reloadGame} type="button">{RESET}</button>}
        
        <div className='grid' ref={grid}>
          <div className='el' onClick={() => {
            if(data[0][0].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(0, 0, optionSelected);
            }
          }}>{handleSetComponent(0, 0)}
          </div>
          <div className='el' onClick={() => {
            if(data[0][1].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(0, 1, optionSelected);
            }
          }}>{handleSetComponent(0, 1)}
          </div>
          <div className='el' onClick={() => {
            if(data[0][2].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(0, 2, optionSelected);
            }
          }}>{handleSetComponent(0, 2)}</div>
          <div className='el' onClick={() => {
            if(data[1][0].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(1, 0, optionSelected);
            }
          }}>{handleSetComponent(1, 0)}</div>
          <div className='el' onClick={() => {
            if(data[1][1].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(1, 1, optionSelected)
            }
          }}>{handleSetComponent(1, 1)}</div>
          <div className='el' onClick={() => {
            if(data[1][2].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(1, 2, optionSelected)
            }
          }}>{handleSetComponent(1, 2)}</div>
          <div className='el' onClick={() => {
            if(data[2][0].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(2, 0, optionSelected);
            }
          }}>{handleSetComponent(2, 0)}</div>
          <div className='el' onClick={() => {
            if(data[2][1].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(2, 1, optionSelected);
            }
          }}>{handleSetComponent(2, 1)}</div>
          <div className='el' onClick={() => {
            if(data[2][2].length === 0 && optionSelected === Options.BALL) {
              handleSetValue(2, 2, optionSelected);
            }
          }}>{handleSetComponent(2, 2)}</div>
        </div>
        <div className='footer'>
          <p>{SCORE_LABEL}</p>
          <small>{SCORE_PLAYER}: {scorePlayer}</small>
          <small>{SCORE_MACHINE}: {scoreMachine}</small>
        </div>
      </header>

    </div>
  );
}

export default App;
