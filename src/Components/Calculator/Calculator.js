import './Calculator.css';

function Calculator() {
    return (
    <div className="bg-main">
        <div className="container">
            <h1>Calculator</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center h-100">
            <table className="table" style={{width: 'auto'}}>
                <tbody>
                    <tr>
                        <td className="hoverable-column option">C</td>
                        <td className="option"></td>
                        <td className="option"></td>
                        <td className="hoverable-column operation">÷</td>
                    </tr>
                    <tr>
                        <td className="hoverable-column number">7</td>
                        <td className="hoverable-column number">8</td>
                        <td className="hoverable-column number">9</td>
                        <td className="hoverable-column operation">*</td>
                    </tr>
                    <tr>
                        <td className="hoverable-column number">4</td>
                        <td className="hoverable-column number">5</td>
                        <td className="hoverable-column number">6</td>
                        <td className="hoverable-column operation"><span>&#8722;</span></td>
                    </tr>
                    <tr>
                        <td className="hoverable-column number">1</td>
                        <td className="hoverable-column number">2</td>
                        <td className="hoverable-column number">3</td>
                        <td className="hoverable-column operation">+</td>
                    </tr>
                    <tr>
                        <td className="number"></td>
                        <td className="hoverable-column number">0</td>
                        <td className="number"></td>
                        <td className="hoverable-column equals">=</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default Calculator;