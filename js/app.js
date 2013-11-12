App = Ember.Application.create();

App.Router.map( function(){

});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find(App.Movie);
    }
});

App.IndexController = Ember.ArrayController.extend({
    actions : {
        rateMovie : function( movie, rating ){
            debugger;
            var movie = this.store.find(App.Movie, movie.id);
            movie.set('starRating', rating);
        }
    }
});

App.StarRatingComponent = Ember.Component.extend({
    maxStars: 0,
    starRating: 0,
    stars: [],
    click: function(anything){
        var rating = this.$(anything.target).attr('id');
        this.sendAction('action',this.get('param'), rating);
    },
    didInsertElement: function() {
        this._super();
        this.initStars();
        this.setStars();
    },
    initStars: function() {
        var stars = [], i = 0;
        for(i = 0; i < this.get('maxStars'); i++){
            stars.pushObject(Em.Object.create({empty:true, index:i+1}));
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

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Movie = DS.Model.extend({
    title: DS.attr('string'),
    maxStarRating: DS.attr('number', {defaultValue: 5}),
    starRating: DS.attr('string')
});

App.Movie.FIXTURES = [
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

