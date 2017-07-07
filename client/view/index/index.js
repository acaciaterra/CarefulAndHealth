Template.index.events({
    'submit form': function( e, b ) {

        if ( !$( "#divNome input" ).val()  ) {
            $( "#divNome" ).css( "border-bottom", "1px solid red" );
            e.preventDefault();
        } else {
            $( "#divNome" ).css( "border-bottom", "1px solid #eee" );
        }

        if ( !$( "#divEmail input" ).val()  ) {
            $( "#divEmail" ).css( "border-bottom", "1px solid red" );
            e.preventDefault();
        } else {
            $( "#divEmail" ).css( "border-bottom", "1px solid #eee" );
        }

        if ( !$( "#divMensagem textarea" ).val()  ) {
            $( "#divMensagem" ).css( "border-bottom", "1px solid red" );
            e.preventDefault();
        } else {
            $( "#divMensagem" ).css( "border-bottom", "1px solid #eee" );
            // Insere apenas se todos os dados estão validados
            MensagemContato.insert({
                "nomeCliente": $( "#nome" ).val(),
                "emailCliente": $( "#email" ).val(),
                "mensagemCliente": $( "#mensagem" ).val(),
            });
        }
    }
});
