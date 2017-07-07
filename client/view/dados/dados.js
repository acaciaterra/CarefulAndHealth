Template.dados.rendered = function() {
    emailUsuario = Session.get( "email" );

    usuario = UsuariosInformacoes.find( { email: emailUsuario } );
    if( usuario.count() < 0 ) {
        UsuariosInformacoes.insert({
            "nomeusuario": emailUsuario,
            "email": Session.get( "nome" ),
            "senha": "notdefined",
        });

    } else {
        informacoes = UsuariosInformacoes.fetch();
        console.log(informacoes);
    }
}
