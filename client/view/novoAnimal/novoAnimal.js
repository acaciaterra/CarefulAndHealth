Template.novoAnimal.events({
    'submit form': function( e, b ) {
        // e.preventDefault();
        AnimaisDados.insert({
            "nomeAnimal": $( "#nome" ).val(),
            "idade": $( "#idade" ).val(),
            "tipoAnimal": $( "#tipoanimal option:selected" ).val(),
            "foto": $( "#foto" ).val(),
            "observacoes": $( "#sintomas" ).val(),
        });
    }
});
