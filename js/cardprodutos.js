// Função para retornar os produtos disponíveis para o template

$(document).ready(function() {
	var produtos = { input: [
        {nome: "Caixa de Areia", imageSrc: "imagens/caixadeareia.jpg", alt: "Foto de uma caixa de areia sanitária para gatos"},
		{nome: "Cama para Cachorro", imageSrc: "imagens/camacachorro.jpg", alt: "Foto de uma cama para cachorro em formato de pata de cachorro"},
		{nome: "Coleiras Caninas", imageSrc: "imagens/coleiras.jpg", alt: "Foto com coleiras para cachorro com pingente de osso"},
		]
   };
	var source = $("#produtosTemplate").html();
	var buildTemplate = Handlebars.compile(source);
	var output = buildTemplate(produtos);
	$("#produtoscard").html(output);
});
