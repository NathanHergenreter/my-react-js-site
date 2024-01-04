import { useState } from 'react';

import './Calculator.css';

function Calculator() {
    const [currentValue, setCurrentValue] = useState(0);
    const [currentNumber, setCurrentNumber] = useState('');
    const [currentOperation, setCurrentOperation] = useState('');
    const [currentEquation, setCurrentEquation] = useState('');

    /**
     * Callback for clicking on one of the number buttons
     * Adds the clicked number to the end of the current number string
     * @param {*} number The number corresponding to the button that was clicked
     */
    function handleNumber(number) {
        let newNumber = currentNumber.length < 5 ? currentNumber + number : currentNumber.slice(1, 5) + number;

        setCurrentNumber(newNumber);
    }

    /**
     * Clears the calculator, includes the current number and operation as well as the equation history
     */
    function handleClear() {
        setCurrentValue(0);
        setCurrentNumber('');
        setCurrentOperation('');
        setCurrentEquation('');
    }

    /**
     * Handles pressing an operation button
     * If no first number is set, stores the currently entered number and the operation that was pressed
     * @param {} operation 
     */
    function handleOperation(operation) {
        setCurrentOperation(operation);

        if(currentValue === 0) {
            setCurrentValue(parseFloat(currentNumber));
            setCurrentEquation(currentEquation + ' ' + currentNumber + ' ' + operation); // Update equation history with first number and operation
        }
        else {
            performOperation();
        }

        setCurrentNumber('');
    }

    /**
     * Performs the entered operation on the two entered numbers to produce a result
     * Clears the existing equation state so that further numbers can be entered and operations performed
     * Displays the result on screen
     * 
     * On-click callback for the equals sign button
     */
    function performOperation() {
        setCurrentEquation(currentEquation + ' ' + currentNumber); // Update equation history with second number

        let newValue = 0;
        switch(currentOperation) {
            case '+':
                newValue = currentValue + parseFloat(currentNumber);
                break;
            case '-':
                newValue = currentValue - parseFloat(currentNumber);
                break;
            case '*':
                newValue = currentValue * parseFloat(currentNumber);
                break;
            case '/':
                newValue = currentValue / parseFloat(currentNumber);
                break;
            default:
                break;
        }

        setCurrentValue(0); // Reset the 'current' value to be 0, this indicates that we still need to select an operation and a second number
        setCurrentOperation('');
        setCurrentNumber(newValue.toString())
    }

    return (
    <div className='bg-main'>
        <div className="bg-bold">
            <div className='container'>
                <h1>Calculator</h1>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-6 my-auto'>
                    <p>
                        This is a somewhat functional calculator. It was mostly for styling practice and learning how to code logic in ReactJs (my first proper component!).
                    </p>
                    <p>
                        It's not exactly 100% correct functionality-wise, and the number displays jump around a bit. But, I got kinda tired of working on it so I'll leave it like this until the (unlikely) point I feel like working on it again.
                    </p>
                </div>
                <div className='col-6'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <table className='calculator-table' style={{width: 'auto'}}>
                            <tbody>
                                <tr>
                                    <td className='calculator-button history' colSpan={4}>{currentEquation}</td>
                                </tr>
                                <tr>
                                    <td className='calculator-button display' colSpan={4}>{currentNumber}</td>
                                </tr>
                                <tr>
                                    <td className='calculator-button hoverable option' onClick={handleClear}>C</td>
                                    <td className='calculator-button option'></td>
                                    <td className='calculator-button option'></td>
                                    <td className='calculator-button hoverable operation' onClick={() => handleOperation('/')}>÷</td>
                                </tr>
                                <tr>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(7)}>7</td>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(8)}>8</td>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(9)}>9</td>
                                    <td className='calculator-button hoverable operation' onClick={() => handleOperation('*')}>*</td>
                                </tr>
                                <tr>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(4)}>4</td>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(5)}>5</td>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(6)}>6</td>
                                    <td className='calculator-button hoverable operation' onClick={() => handleOperation('-')}><span>&#8722;</span></td>
                                </tr>
                                <tr>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(1)}>1</td>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(2)}>2</td>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(3)}>3</td>
                                    <td className='calculator-button hoverable operation' onClick={() => handleOperation('+')}>+</td>
                                </tr>
                                <tr>
                                    <td className='calculator-button number'></td>
                                    <td className='calculator-button hoverable number' onClick={() => handleNumber(0)}>0</td>
                                    <td className='calculator-button number'></td>
                                    <td className='calculator-button hoverable equals' onClick={performOperation}>=</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Calculator;