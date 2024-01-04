import calculatorPNG from '../../Assets/Images/calculator.png';

import './FunThingsHome.css'

function FunThingsHome() {
    return (
    <div className='bg-main'>
        <div className='container'>
            <h1>Fun Things</h1>
            <p>Here are some fun things I've made in ReactJs.</p>
            <p>
                Generally these are little gadgets (<em>maybe</em> following a tutorial, maybe not) to give me some practice with ReactJs's features. 
                They also give me an opportunity to work on my styling - feel free to critique them, I probably won't be hearing whatever feedback you have in your head anyway :).
            </p>
        </div>
        <div className='container text-center'>
            <a href='/fun-things/calculator'><img className='mx-auto d-block py-3 hero-image' src={calculatorPNG} alt='Calculator'></img></a>
            <a href='/fun-things/calculator'><h4 className='fun-thing-text'>Calculator</h4></a>
            <a href='/fun-things/calculator'><p className='fun-thing-text'>
                This is a simple calculator. It functions just as a normal calculator does, which I'm hoping you already know how to use.
            </p></a>
        </div>
        <div className='container text-center'>
            <a href='/fun-things/tic-tac-toe'><img className='mx-auto d-block py-3 hero-image' src={calculatorPNG} alt='Tic-Tac-Toe'></img></a>
            <a href='/fun-things/tic-tac-toe'><h4 className='fun-thing-text'>Tic-Tac-Toe</h4></a>
            <a href='/fun-things/tic-tac-toe'><p className='fun-thing-text'>
                Tic-Tac-Toe! I hope you know the rules because I don't feel like telling you.
            </p></a>
        </div>
    </div>
    );
}

export default FunThingsHome;