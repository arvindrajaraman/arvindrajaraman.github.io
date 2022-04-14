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
        {num: 1, weekOf: '1/16', description: 'Intro to AI, Agents, Environments, Uninformed Search', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section01.pdf', wsaLink: 'https://drive.google.com/file/d/1_HqTOV2qlP3q-pUZ6_jIawGQ3Op9OPLF/view?usp=sharing', sLink: 'https://docs.google.com/presentation/d/1oUdKz2GbNzSguxL_S3FGVbv2XhIUeRrCjjanrUc2r4g/edit?usp=sharing'},
        {num: 2, weekOf: '1/23', description: 'Informed Search & Heuristics', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section02.pdf', wsaLink: 'https://drive.google.com/file/d/1L92PvSdHxPXE9zYoGugDoGXJAG_X2uy8/view?usp=sharing', sLink: 'https://docs.google.com/presentation/d/1bS09U2ELYdNeN0cjZaxSGAI5oeYxC5HQCLNrJK6oQf8'},
        {num: 3, weekOf: '1/30', description: 'Local Search', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section03.pdf', wsaLink: 'https://drive.google.com/file/d/1_-qQh8sG4B3qOARXBQc5D0I4T9o3z_pE/view?usp=sharing', sLink: 'https://docs.google.com/presentation/d/1bllCTekLEXvRD8WFpeRxnEkNJziRZlhIHa46_enzXk8/edit?usp=sharing'},
        {num: 4, weekOf: '2/06', description: 'Games: Minimax, Alpha-Beta Pruning', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section04.pdf', wsaLink: 'https://drive.google.com/file/d/1C7tMa-1VUtfNaNIoWOSxaaoZ2NA9AeXT/view?usp=sharing', sLink: 'https://docs.google.com/presentation/d/1u467Y7xnhRsULSThQBMZDEVbvvYNh6M6Gxrhudn64c0/edit'},
        {num: 5, weekOf: '2/13', description: 'Propositional Logic', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section05.pdf', wsaLink: 'https://drive.google.com/file/d/1-Wuym43stki7ki3gmUcuWhdTZ1RORFZF/view?usp=sharing', sLink: 'https://docs.google.com/presentation/d/1nq5mHuWhPrNY78H-8Ugqvv3fY4LZWdLaTvXj2LEF_j4/edit?usp=sharing'},
        {num: 6, weekOf: '2/20', description: 'Bayes Nets & Probability', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section06.pdf', wsaLink: 'https://drive.google.com/file/d/1Y3h2tEm2vALpq_bLif9q0Vz3JHPF9Wsq/view?usp=sharing', sLink: 'https://docs.google.com/presentation/d/13HRvyd5cwf8fuZkbOGYwu4391iq6DHfYTl3yYPWkcdM/edit?usp=sharing'},
        {num: 7, weekOf: '2/27', description: 'Variable Elimination & Sampling Methods', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section07.pdf', wsaLink: '', sLink: 'https://docs.google.com/presentation/d/1Uqj8QWH5B6a4ln-dPvyeyfHoBIPOvZ7cuw-Dayb8QHU/edit?usp=sharing'},
        {num: 8, weekOf: '3/06', description: 'Dynamic Bayes Nets & Sampling', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section08.pdf', wsaLink: '', sLink: 'https://docs.google.com/presentation/d/1tFwI0RDkzgij9b3Qqz0Eo1xJCvUdmBRwePe6ZluyPUM/edit?usp=sharing'},
        {num: 9, weekOf: '3/13', description: 'Hidden Markov Models & Bayes Nets', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section09.pdf', wsaLink: '', sLink: 'https://docs.google.com/presentation/d/1SxFuTQPPPc_ZOKcgYIxe9aoMlSnt66NUPmOI6sKtXdc/edit?usp=sharing'},
        {num: 10, weekOf: '3/20', description: 'Spring Break', collapse: true},
        {num: 11, weekOf: '3/27', description: 'Utility & Rationality Theory, Decision Networks & VPI', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section11.pdf', sLink: 'https://docs.google.com/presentation/d/1p1ORAtdlkMvgGGfy1pT07DLgoQiJ9AgWIEEe2t7rR-k/edit?usp=sharing'},
        {num: 12, weekOf: '4/03', description: 'Markov Decision Processes', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section12.pdf', sLink: 'https://docs.google.com/presentation/d/1vvkVUvIDOG0-BWh6xT0sddlzkh_B6QUfg9CQX4gAXd8/edit?usp=sharing'},
        {num: 13, weekOf: '4/10', description: 'Naive Bayes & Neural Networks', wsLink: 'https://inst.eecs.berkeley.edu/~cs188/sp22/assets/section/section13.pdf', sLink: 'https://docs.google.com/presentation/d/1fH1ENEsEzQnV_KtI1IoXi3yBn8bLEq-CgaMKC9hgTHs/edit?usp=sharing'},
        {num: 14, weekOf: '4/17', description: 'Reinforcement Learning'},
        {num: 15, weekOf: '4/24', description: 'Special Topics, Course Review'},
        {num: 16, weekOf: '5/01', description: 'RRR Week', collapse: true},
        {num: 17, weekOf: '5/08', description: 'Finals Week', collapse: true}
    ]
});
