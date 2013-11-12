App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return movies;
    }
});

App.IndexController = Ember.ArrayController.extend({
    actions : {
        rateMovie : function( movie, rating ){
            if(!rating){
                return;
            }

            //TODO - update the model
            debugger;
        }
    }
});

App.StarRatingComponent = Ember.Component.extend({
    maxStars: 0,
    starRating: 0,
    stars: [],
    click: function(ev){
        var rating = this.$(ev.target).attr('id');
        this.set('starRating', rating);
        debugger;
        this.sendAction('action',this.get('param'), rating);
    },
    didInsertElement: function() {
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
        var newRating = this.get('starRating');
        if(newRating){
            this.initStars();
            var counts = [], i = 0;
            for(i = 0; i <newRating; i++){
                this.get('stars').objectAt(i).set('empty', counts[i]);
            }
        }
    }.observes('starRating')
});

movies= [
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

