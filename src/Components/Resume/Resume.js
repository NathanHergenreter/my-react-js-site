
function Resume() {
    return (
    <div>
        {/* Introduction Section */}
        <div className="container">
            <h1>Nathan Hergenreter</h1>
            <p>
                Hello and welcome to my website! I am Nathan, a recent graduate from a Master's program in Computer Science in Iowa State.
                I have long had an interest in programming in general, going back to my days of modding video games starting in my teenage years in the early 2010's.
                My first experience with real programming was after high school in programming classes at my community college where I learned C.
                I quickly developed a love for coding from my classwork as I was deeply drawn in by the potential of programming as a tool for creative work.
            </p>
            <p>
                With my newfound love for programming, I finally decided upon a major - Computer Science. After getting an Associate's degree, I transferred to Iowa State to do my Bachelor's. 
                Here, I had my mind opened to the greater world of software development as I learned about algorithms, programming paradigms, and more about software development in the industry.
                I also got to experience programming in new ways by working with languages that were new to me such as Java and Javascript and got to work on class projects with other people like me.
            </p>
            <p>
                After an unsuccessful 6 months of job searching following my graduation in December 2019 and with things uncertain due to the COVID pandemic, I decided to take the opportunity to go back to school and get a Master's.
                Late in my Bachelor's, I started learning more about machine learning and artificial intelligence and had a couple of classes in these areas, starting a budding interest in the field within me.
                With my Master's program, I was given an opportunity to gain an education in this field as well as an opportunity to do research in such an exciting area.
            </p>
            <p>
                Although finishing the degree proved one of the most challenging experiences of my life - requiring me doing what ended up being a year of research as well as a thesis -
                my Master's program gave me knowledge in AI/ML and experience in doing research that I deeply appreciate having gained. 
                I strongly feel that the experience has improved me as a person in ways that I could not have gotten from my Bachelor's or industry experience.
            </p>
            <p>
                And that is my story as a software developer in summary!
                If you read the whole thing, I appreciate it! If not, the more important information about me is down below.
                The remainder of this page is my resume where you can learn more about my experience with software development and programming in general.
                All of my core background is given here, from my education to my relevant work experience to my projects I have worked on.
            </p>
        </div>
        {/* Experience Section */}
        <div className="bg-alt"><div className="container">
            <h3>Experience</h3>
            <h5>Fullstack Software Development Intern at Thinix</h5>
            <ul>
                <li><strong>Skills:</strong> C#/.NET, Moq, SQL, Angular, Typescript, HTML/CSS, Jest, OpenWRT, C, Umbraco</li>
                <li>Duration: Fall 2022 - Now</li>
                <li>Frontend and backend web development for company product iStatus</li>
                <li>Worked in an Agile environment practicing daily scrum and weekly sprints</li>
                <li>Worked on making responsive UI/UX in Angular, tested using Jest</li>
                <li>Contributed to adding to backend .NET API and both user and developer/support features, made unit/integration tests with Moq</li>
                <li>Worked in embedded software development and testing for network monitoring hardware</li>
                <li>Worked on migrating multiple Umbraco-based websites for parent company RDI</li>
                <li>Worked on creating Umbraco-based splash page for hotels for company product Thinix Splash</li>
            </ul>
        </div></div>
        {/* Education Section */}
        <div className="container">
            <h3>Education</h3>
            <h5>Master's in Computer Science at Iowa State University</h5>
            <ul>
                <li>Duration: Spring 2021 - Fall 2023</li>
                <li>Focus in Artificial Intelligence and Machine Learning</li>
                <li>Thesis: <em>Seen/Unseen Classification Using Feature Vector Analysis</em> (see below)</li>
                <li>Worked part-time as a fullstack software development intern</li>
            </ul>
            <h5>Bachelor's in Computer Science at Iowa State University</h5>
            <ul>
                <li>Duration: Fall 2017 - Fall 2019</li>
                <li>Focus in general software engineering skills</li>
            </ul>
        </div>
        {/* Research Section */}
        <div className="bg-alt"><div className="container">
            <h3>Research</h3>
            <h5>Seen/Unseen Classification Using Feature Vector Analysis</h5>
            <ul>
                <li><strong>Skills</strong>: Python, Keras/Tensorflow deep-learning libraries, NumPy, Google Colab</li>
                <li>Duration: Summer 2022 - Summer 2023</li>
                <li>Utilized deep-learning CNN models to first classify images</li>
                <li>Then, using the classification data from the CNN models to make a new model, determined if a new image is one of the original classes trained on</li>
                <li>Spent months developing and testing models, coming up with ways to make improvements in order to maximize classification accuracy</li>
                <li>Wrote thesis (Title: <em>Seen/Unseen Classification Using Feature Vector Analysis</em>) describing method, experiments, and results</li>
            </ul>
        </div></div>
        {/* Projects Section */}
        <div className="container">
            <h3>Personal Projects</h3>
            <h5>ReactJs Website</h5>
            <ul>
                <li><strong>Skills</strong>: ReactJs, Javascript, HTML/CSS</li>
                <li>Personal site project to gain experience in ReactJs and frontend web development (This is the site you are on!)</li>
                <li>Followed guides to make nifty components (e.g. calculator, tic-tac-toe playable in browser) to learn ReactJs logic</li>
                <li>Creating site from scratch enabled opportunity to learn how to come up with a vision for the site's appearance and implement it</li>
            </ul>
            <h5>Unity Strategy Game Project</h5>
            <ul>
                <li><strong>Skills</strong>: C#, Unity Engine, Cg/HLSL</li>
                <li>Solo-developed strategy game built in Unity</li>
                <li>Learned working on designing a large project from scratch, implementing programming paradigms such as OOP, and additional untypical/non-programming related skills such as graphics langauges, UI icon design, and 3D modeling</li>
                <li>Areas worked on include: game logic (similar to backend web development), UI/UX, custom graphics</li>
            </ul>
        </div>
    </div>
    );
}

export default Resume;