Template.cardAnimais.events({
    'click .agendar': function() {
        dados = AnimaisDados.find( { _id: this._id } ).fetch();
        $( "#animal" ).val( dados[0].nomeAnimal );
    }
});

Template.modalAgendamento.events({
    'submit form': function( e, b ) {
        // e.preventDefault();
        var buscar = "Não";

        if( $( "#flagBuscarAnimal:checked" ).length > 0 ) buscar = "Sim";

        AnimaisAgendamentos.insert({
            "flagBuscarAnimal": buscar,
            "nomeAnimal": $( "#animal" ).val(),
            "observacoes": $( "#observacoes" ).val(),
            "dataAgendamento": $( "#calendario" ).val(),
            "tipoAgendamento": $( "input[type='radio']:checked" ).val(),
            "formaPagamento": $( "#pagamento option:selected" ).text(),
        });
    }
});
