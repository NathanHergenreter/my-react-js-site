import Calculator from "../Calculator/Calculator";

function FunThingsHome() {
    return (
    <div className="bg-main">
        <div className="container">
            <h1>Fun Things</h1>
            <p>Here are some fun things I've made in ReactJs.</p>
            <p>
                Generally these are little gadgets (<em>maybe</em> following a tutorial, maybe not) to give me some practice with ReactJs's features. 
                They also give me an opportunity to work on my styling - feel free to critique them, I probably won't be hearing whatever feedback you have in your head anyway :).
            </p>
        </div>
        <Calculator />
    </div>
    );
}

export default FunThingsHome;