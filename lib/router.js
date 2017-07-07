Router.configure({
    layoutTemplate: "layout"
});

Router.map( function() {
    this.route( "agendamentos", {
        path: "/agendamentos",
        onBeforeAction: function() {
            if( !Meteor.user() && !Meteor.loggingIn() )
                this.redirect( "/" );
            else this.next();
        }
    } );
    this.route( "novoAnimal", {
        path: "/novo-animal",
        onBeforeAction: function() {
            if( !Meteor.user() && !Meteor.loggingIn() )
                this.redirect( "/" );
            else this.next();
        }
    } );
    this.route( "cadastro", {
        path: "/cadastro",
        onBeforeAction: function() {
            if( !Meteor.user() && !Meteor.loggingIn() )
                this.redirect( "/" );
            else this.next();
        }
    } );
    this.route( "consulta", {
        path: "/consulta",
        onBeforeAction: function() {
            if( !Meteor.user() && !Meteor.loggingIn() )
                this.redirect( "/" );
            else this.next();
        }
    } );
    this.route( "produtos", {
        path: "/produtos",
        // onBeforeAction: function() {
        //     if( !Meteor.user() && !Meteor.loggingIn() )
        //         this.redirect( "/" );
        //     else this.next();
        // }
    } );
    this.route( "dados", {
        path: "/dados",
        onBeforeAction: function() {
            if( !Meteor.user() && !Meteor.loggingIn() )
                this.redirect( "/" );
            else this.next();
        }
    } );
    this.route( "index", { path: "/" } );
});
