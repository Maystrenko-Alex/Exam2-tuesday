import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Button } from './Button';

function App() {
  const firstInputName = 'max value:';
  const secondInputName = 'start value:';
  const errorMessage = 'Incorrect value';
  const message = `${'enter values and press "set"'}`;
  const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('max-value')));
  const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('start-value')));
  const [count, setCount] = useState<number>(startValue);
  const [error, setError] = useState<boolean>(false);
  const errorValue = startValue<0 || startValue> maxValue;


  const setUpCount = () => {
    console.log(Number(localStorage.getItem('max-value')), Number(localStorage.getItem('start-value')));
    (count >= maxValue)
      ? setError(true)
      : setCount(count + 1);
  }


  const setStorage = () => {
    localStorage.setItem('start-value', JSON.stringify(startValue))
    localStorage.setItem('max-value', JSON.stringify(maxValue))
    }
  
    const resetCount = () => {
    setCount(startValue)
    setError(false)
  }

  return (
    <div className="App">
      <div className='counter_block'>
        <div className='settings_block'>
          <div style={{ marginBottom: '20px' }}>
            <div>
              {firstInputName}
            </div>
            <div>
              <input
                type={'number'}
                step={1}
                size={3}
                maxLength={3}
                value={maxValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))}
                className={errorValue ? 'valueErrorStyle' : ''}
              />
            </div>
          </div>
          <div>
            <div>
              {secondInputName}
            </div>
            <div>
              <input
                type='number'
                step='1'
                value={startValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (!errorValue) { 
                    setStartValue(Number(e.currentTarget.value))
                    }
                  }}
                className={errorValue ? 'valueErrorStyle' : ''}
              />
            </div>
          </div>
        </div>
        <div className='btn_block' >
          <Button
            title='set'
            callBack={setStorage}
            disabled={(startValue<0 || startValue> maxValue)}
          />
        </div>
      </div>
      <div className='counter_block'>
        <div className='settings_block' style={{ minHeight: '40%' }}>
          <span style={error ? {color: 'red'}:  { textAlign: 'center' }}>{error? errorMessage : count}</span>
        </div>
        <div className='btn_block'>
          <Button 
            title='inc' 
            callBack={setUpCount} 
            disabled={error} />
          <Button title='reset' callBack={resetCount}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
