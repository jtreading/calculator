/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import styles from './CalculatorComponent.module.css';

export default function CalculatorComponent() {
  const [result, setResult] = useState(0);
  const [prev, setPrev] = useState(null);
  const [mode, setMode] = useState('equals');

  const handleNum = (num) => {
    if (prev !== null) {
      if (result === 0 || result === prev) {
        setResult(num);
      } else {
        setResult(Number(`${result}${num}`));
      }
    }
    if (prev === null) {
      if (result === 0) {
        setResult(num);
      } else {
        setResult(Number(`${result}${num}`));
      }
    }
  };

  const evaluate = () => {
    switch (mode) {
      case 'add':
        setResult(Number(prev + result));
        break;
      case 'subtract':
        setResult(Number(prev - result));
        break;
      case 'divide':
        setResult(Number(prev / result));
        break;
      case 'multiply':
        setResult(Number(prev * result));
        break;
    }
  };

  const handleFunction = (fn) => {
    switch (fn) {
      case '/':
        setMode('divide');
        setPrev(result);
        break;
      case 'x':
        setMode('multiply');
        setPrev(result);
        break;
      case '-':
        setMode('subtract');
        setPrev(result);
        break;
      case '+':
        setMode('add');
        setPrev(result);
        break;
      case '=':
        evaluate();
        setMode('equals');
        break;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.calcCard}>
        <div className={styles.resultContainer}>
          <h3 className={styles.result}>{result}</h3>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(7)}>7</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(8)}>8</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(9)}>9</button>
          <button type="button" className={styles.primaryFunctionButton} onClick={() => handleFunction('/')}>&#247;</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(4)}>4</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(5)}>5</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(6)}>6</button>
          <button type="button" className={styles.primaryFunctionButton} onClick={() => handleFunction('x')}>x</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(1)}>1</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(2)}>2</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(3)}>3</button>
          <button type="button" className={styles.primaryFunctionButton} onClick={() => handleFunction('-')}>-</button>
          <button type="button" className={styles.numberButton} onClick={() => handleNum(0)}>0</button>
          <button type="button" className={styles.primaryFunctionButton} onClick={() => handleNum('.')}>.</button>
          <button type="button" className={styles.primaryFunctionButton} onClick={() => handleFunction('+')}>+</button>
          <button type="button" className={styles.primaryFunctionButton} onClick={() => handleFunction('=')}>=</button>
        </div>
      </div>
    </div>
  );
}
