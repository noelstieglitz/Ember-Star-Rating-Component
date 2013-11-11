App = Ember.Application.create();

App.Router.map( function(){

});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return App.Movies;
    }
});

App.IndexController = Ember.ArrayController.extend({
    actions : {
        rateIt : function( movie ){
            alert('rate from indexcontroller.!');
            debugger;
            this.set( 'model', 1);
        }
    }
});

App.StarRatingComponent = Ember.Component.extend({
    maxStars: 0,
    starRating: 0,
    stars: [],
    actions: {
        rateMovie: function() {
            debugger;
            //this.sendAction('submit, {
        }
    },
    /*click: function(anything){
        debugger;
        alert('click!');
    },*/
    didInsertElement: function() {
        this.initStars();
        this.setStars();
    },
    initStars: function() {
        var stars = [], i = 0;
        for(i = 0; i < this.get('maxStars'); i++){
            stars.pushObject(Em.Object.create({empty:true}));
        }
        this.set('stars', stars);
    },
    setStars: function() {
        var counts = [], i = 0;
        for(i = 0; i < this.get('starRating'); i++){
            this.get('stars').objectAt(i).set('empty', counts[i]);
        }
    }
});


App.Movies = [
    {
        id : 1,
        title : 'Blood Sport',
        starRating: 3,
        maxStarRating: 5,
        actors : [
            {
                firstName: 'Patrick',
                lastName: 'Swayze'
            },
            {
                firstName: 'Arnold',
                lastName: 'Swartznegger'
            }
        ]
    },
    {
        id : 2,
        title : 'Blood Sport II: 2 much 2 Blood',
        starRating: 4,
        maxStarRating: 5,
        actors : [
            {
                firstName: 'Pat',
                lastName: 'Swayzeinator'
            },
            {
                firstName: 'Rambo',
                lastName: 'Mcqueen'
            }
        ]
    },
    {
        id : 3,
        title : 'Blood Sport III:   O(log N) Blood Growth',
        starRating: 5,
        maxStarRating: 5,
        actors : [
            {
                firstName: 'Pat',
                lastName: 'Swayzeinator'
            },
            {
                firstName: 'Rambo',
                lastName: 'Mcqueen'
            }
        ]
    }
];

