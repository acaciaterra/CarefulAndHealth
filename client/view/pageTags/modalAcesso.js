Template.modalAcesso.events({
    'submit #cadastro': function( e, b ) {
        // e.preventDefault();
        UsuariosInformacoes.insert({
            "nomeusuario": $( "#nomecadastro" ).val(),
            "email": $( "#emailcadastro" ).val(),
            "senha": $( "#senhacadastro" ).val(),
        });
    }
});

Template.modalAcesso.events({
    'click #login-buttons-facebook': function( e, b ) {
        $( "#myModal" ).modal( "hide" );
        Meteor.loginWithFacebook( {}, function() {
            dados = Meteor.user();
            Session.set({
                email: dados.emails[0].address,
                nome: dados.username
            });
            Router.go( "/consulta" );
        });
    }
});
