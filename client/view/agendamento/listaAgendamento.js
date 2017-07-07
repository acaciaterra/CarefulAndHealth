
Template.agendamentos.helpers({
    agendamentos: function() {
        return AnimaisAgendamentos.find();
    }
});

Template.agendamentos.events({
    'click .deleteItem': function() {
        AnimaisAgendamentos.remove( this._id );
    }
});
