import placeholderPicture from '../../Assets/Images/avatar-default.svg';

import './Home.css';

function Home() {
    return (
    <div className='bg-alt'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 align-self-center mb-5'>
                    <h1 className='hello-title'>Hello World</h1>
                    <h5 className='py-3'>
                        Welcome to my ReactJs website! Here, you can see my progress in learning ReactJs from scratch and learn some facts about me.
                    </h5>
                    <p>
                        Feel free to browse through the site and check out whatever piques your interest! See my <a href='/resume'>Resume</a> page for more info on me and my background.
                    </p>
                    <p>
                        I've also made some fun components to play with, go ahead and check them out if you have time!
                    </p>
                </div>
                <div className='col-6 text-center'>
                    <img className='placeholder-avatar' src={placeholderPicture} alt='Me'></img>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;