// Login com o faceboooook
ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '204434716749806',
    secret: 'a1f11ed39365b7c127f633c20e3fb97d'
});

Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});

// Sempre que o servidor iniciar irá inserir estes dados no banco caso esteja vazio
if( AnimaisAgendamentos.find().count() === 0 ) {

    AnimaisAgendamentos.insert({
        "nomeAnimal": "Sabrina, a cabra",
        "dataAgendamento": "17/06/2017",
        "formaPagamento": "Dinheiro",
        "flagBuscarAnimal": "Não",
        "tipoAgendamento": "Veterinário",
    });

    AnimaisAgendamentos.insert({
        "nomeAnimal": "Murphy",
        "dataAgendamento": "18/06/2017",
        "formaPagamento": "Dinheiro",
        "flagBuscarAnimal": "Sim",
        "tipoAgendamento": "Veterinário",
    });

    AnimaisAgendamentos.insert({
        "nomeAnimal": "Rex",
        "dataAgendamento": "29/06/2017",
        "formaPagamento": "Cartão de Crédito",
        "flagBuscarAnimal": "Não",
        "tipoAgendamento": "Banho e Tosa",
    });
}

if( AnimaisDados.find().count() === 0 ) {

    AnimaisDados.insert({
        "nomeAnimal": "Sabrina, a cabra",
        "idade": "1",
        "tipoAnimal": "cabra",
        "foto": "http://dolcedogg.com.br/magento/blog/wp-content/uploads/2015/10/cabra-de-laco-SouVegetariano.jpg",
        "observacoes": "spam spam spam",
    });

    AnimaisDados.insert({
        "nomeAnimal": "Cedrico",
        "idade": "2",
        "tipoAnimal": "gato",
        "foto": "http://99px.ru/sstorage/53/2011/03/mid_12598_5436.jpg",
        "observacoes": "spam spam spam",
    });

    AnimaisDados.insert({
        "nomeAnimal": "Rex",
        "idade": "1",
        "tipoAnimal": "coelho",
        "foto": "http://olhar-43.net/fotinhas/coelhinho-branco2.jpg",
        "observacoes": "Banho e Tosa + spam spam spam",
    });
}

if( ProdutosInformacoes.find().count() === 0 ) {

    ProdutosInformacoes.insert({
        "nomeProduto": "Caixinha de areia",
        "fotoProduto": "https://cdn.awsli.com.br/300x300/102/102530/produto/9712143/1db201894f.jpg",
        "observacoes": "spam spam spam",
    });

    ProdutosInformacoes.insert({
        "nomeProduto": "Cama para pet",
        "fotoProduto": "https://http2.mlstatic.com/D_Q_NP_907701-MLB20375570264_082015-Q.jpg",
        "observacoes": "spam spam spam",
    });

    ProdutosInformacoes.insert({
        "nomeProduto": "Coleira",
        "fotoProduto": "https://s-media-cache-ak0.pinimg.com/originals/d6/0b/2a/d60b2a9f07be827a0815754883bb366c.jpg",
        "observacoes": "spam spam spam",
    });
}

if( MensagemContato.find().count() === 0 ) {

    MensagemContato.insert({
        "nomeCliente": "Pedro",
        "emailCliente": "pedro@email.com",
        "mensagemCliente": "blablabla",
    });

    MensagemContato.insert({
        "nomeCliente": "Maria",
        "emailCliente": "maria@email.com",
        "mensagemCliente": "blablabla",
    });

    MensagemContato.insert({
        "nomeCliente": "Zézinho",
        "emailCliente": "zezinho@email.com",
        "mensagemCliente": "blablabla",
    });
}

if( UsuariosInformacoes.find().count() === 0 ) {

    UsuariosInformacoes.insert({
        "nomeusuario": "Pedro",
        "email": "pedro@email.com",
        "senha": "blablabla",
    });
    UsuariosInformacoes.insert({
        "nomeusuario": "Acacia Terra",
        "email": "terra.acacia@gmail.com",
        "senha": "blablabla",
    });
}
