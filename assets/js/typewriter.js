var app = document.getElementById('app')

var Typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

Typewriter
    .pauseFor(2000)
    .typeString('I&apos;m a <span style="color:#39c088">Frontend Web Developer</span>')
    .pauseFor(1000)
    .deleteChars(22)
    
    .typeString('<span style="color:#5480f1">Digital Marketer</span>')
    .pauseFor(1000)
    .deleteChars(18)

    .typeString('n <span style="color:#e44c65">IT Specialist</span>')
    .pauseFor(1000)
    .deleteChars(15)

    .typeString('<span style="color:skyblue"> Lifelong Learner</span>')
    .pauseFor(1000)
    .deleteChars(16)

    .typeString('<span style="color:#39c088">Problem Solver</span>')
    .pauseFor(1000)
    .deleteChars(14)

    .typeString('<span style="color:greenyellow">Jack of All Trades</span>')
    .pauseFor(1000)
    .deleteChars(18)

    .start()