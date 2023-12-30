import { useState } from 'react';

import './Calculator.css';

function Calculator() {
    const [currentValue, setCurrentValue] = useState(0);
    const [currentNumber, setCurrentNumber] = useState('');
    const [currentOperation, setCurrentOperation] = useState('');

    function handleNumber(number) {
        let newNumber = currentNumber.length < 5 ? currentNumber + number : currentNumber.slice(1, 5) + number;

        setCurrentNumber(newNumber);
    }

    function handleClear() {
        setCurrentNumber('');
    }

    function handleOperation(operation) {
        console.log('Pre', currentValue);
        if(!currentValue) {
            setCurrentValue(parseFloat(currentNumber));
            setCurrentOperation(operation);
            console.log(currentValue); // TODO - remove
            console.log(currentOperation); // TODO - remove
            handleClear();
            return;
        }

        switch(operation) {
            case '+':
                setCurrentValue(currentValue + parseFloat(currentNumber));
                break;
            case '-':
                setCurrentValue(currentValue - parseFloat(currentNumber));
            case '*':
                setCurrentValue(currentValue * parseFloat(currentNumber));
                break;
            case '/':
                setCurrentValue(currentValue / parseFloat(currentNumber));
        }

        setCurrentNumber(currentValue.toString());
    }

    function handleEquals() {
        setCurrentNumber(parseFloat(currentNumber))
    }

    return (
    <div className='bg-main'>
        <div className='container'>
            <h1>Calculator</h1>
        </div>
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <table className='table' style={{width: 'auto'}}>
                <tbody>
                    <tr>
                        <td className='display' colSpan={4}>{currentNumber}</td>
                    </tr>
                    <tr>
                        <td className='hoverable-column option' onClick={handleClear}>C</td>
                        <td className='option'></td>
                        <td className='option'></td>
                        <td className='hoverable-column operation' onClick={() => handleOperation('/')}>÷</td>
                    </tr>
                    <tr>
                        <td className='hoverable-column number' onClick={() => handleNumber(7)}>7</td>
                        <td className='hoverable-column number' onClick={() => handleNumber(8)}>8</td>
                        <td className='hoverable-column number' onClick={() => handleNumber(9)}>9</td>
                        <td className='hoverable-column operation' onClick={() => handleOperation('*')}>*</td>
                    </tr>
                    <tr>
                        <td className='hoverable-column number' onClick={() => handleNumber(4)}>4</td>
                        <td className='hoverable-column number' onClick={() => handleNumber(5)}>5</td>
                        <td className='hoverable-column number' onClick={() => handleNumber(6)}>6</td>
                        <td className='hoverable-column operation' onClick={() => handleOperation('-')}><span>&#8722;</span></td>
                    </tr>
                    <tr>
                        <td className='hoverable-column number' onClick={() => handleNumber(1)}>1</td>
                        <td className='hoverable-column number' onClick={() => handleNumber(2)}>2</td>
                        <td className='hoverable-column number' onClick={() => handleNumber(3)}>3</td>
                        <td className='hoverable-column operation' onClick={() => handleOperation('+')}>+</td>
                    </tr>
                    <tr>
                        <td className='number'></td>
                        <td className='hoverable-column number' onClick={() => handleNumber(0)}>0</td>
                        <td className='number'></td>
                        <td className='hoverable-column equals'>=</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default Calculator;