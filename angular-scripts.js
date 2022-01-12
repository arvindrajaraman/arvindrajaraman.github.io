const app = angular.module('app', ['ngRoute']);

app.config($routeProvider => {
    $routeProvider.when('/aboutme', {
        templateUrl: 'views/aboutme.html',
        controller: 'AboutMeController'
    }).when('/teaching', {
        templateUrl: 'views/teaching.html',
        controller: 'TeachingController'
    }).otherwise({
        redirectTo: "/aboutme"
    });
});

app.controller('HeaderController', function ($scope, $route, $routeParams, $location) {
    $scope.$location = $location;
});

app.controller('AboutMeController', function ($scope) {
    // Set height of school cards to be max of the heights
    const cardEECS = $('#cardEECS .cardContentSection');
    const cardBusiness = $('#cardBusiness .cardContentSection');

    const alignSchoolCardHeights = () => {
        const schoolCardHeight = Math.max(
            cardEECS.height(),
            cardBusiness.height());

        cardEECS.height(schoolCardHeight);
        cardBusiness.height(schoolCardHeight);
    };
    alignSchoolCardHeights();

    $(window).resize(() => {
        alignSchoolCardHeights();
    });

    // Typewriter effect on name
    const typewriterApp = document.getElementById('hello');

    let typewriter = new Typewriter(typewriterApp, {
        loop: true
    });

    const mornings = ['Good morning!', 'காலை வணக்கம்!', 'नमस्ते!'];
    const afternoons = ['Good afternoon!', 'மதிய வணக்கம்!', 'नमस्ते!'];
    const evenings = ['Good evening!', 'மாலை வணக்கம்!', 'नमस्ते!'];
    const nights = ['Good night!', 'இனிய வணக்கம்!', 'नमस्ते!'];

    let messages;
    const hour = new Date().getHours();

    if (hour >= 6 && hour <= 11) {
        messages = mornings;
    }
    else if (hour >= 12 && hour <= 16) {
        messages = afternoons;
    }
    else if (hour >= 17 && hour <= 20) {
        messages = evenings;
    }
    else {
        messages = nights;
    }

    for (let message of messages) {
        typewriter = typewriter.typeString(message)
            .pauseFor(1500)
            .deleteAll();
    }
    typewriter.start();
});

app.controller('TeachingController', function($scope) {
    $scope.courseContent = [
        {num: 1, weekOf: '1/16', description: 'Intro to AI, Agents, & Environments'},
        {num: 2, weekOf: '1/23', description: 'Uninformed & Informed Search'},
        {num: 3, weekOf: '1/30', description: 'Local Search, Games (Minimax, Alpha-Beta, MCTS, Chance)'},
        {num: 4, weekOf: '2/06', description: 'Propositional Logic, Logical Planning'},
        {num: 5, weekOf: '2/13', description: 'First-Order Logic, Intro to Naive Bayes'},
        {num: 6, weekOf: '2/20', description: 'Bayesian Syntax/Semantics, Exact Inference, Stochastic Inference'},
        {num: 7, weekOf: '2/27', description: 'Gibbs Sampling, Markov Models, Markovian Inference'},
        {num: 8, weekOf: '3/06', description: 'Dynamic Bayes Nets, Rationality, Utility Theory'},
        {num: 9, weekOf: '3/13', description: 'Decision Nets, VPI, Markov Decision Processes'},
        {num: 10, weekOf: '3/20', description: 'Spring Break', collapse: true},
        {num: 11, weekOf: '3/27', description: 'Value & Policy Iteration, Decision Trees'},
        {num: 12, weekOf: '4/03', description: 'Linear Regression, Perceptron, Naive Bayes'},
        {num: 13, weekOf: '4/10', description: 'Neural Networks'},
        {num: 14, weekOf: '4/17', description: 'Reinforcement Learning'},
        {num: 15, weekOf: '4/24', description: 'Special Topics, Course Review'},
        {num: 16, weekOf: '5/01', description: 'RRR Week', collapse: true},
        {num: 17, weekOf: '5/08', description: 'Finals Week', collapse: true}
    ]
});
