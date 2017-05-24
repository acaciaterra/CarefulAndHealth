// Função para retornar os animais cadastrados para o template

$(document).ready(function() {
	var animais = { input: [
        {nome: "Sabrina, a cabra", imageSrc: "imagens/cabra.jpg", alt: "Foto da Sabrina, a cabra"},
		{nome: "Sebastião", imageSrc: "imagens/sebastiao.jpg", alt: "Foto do cachorro Sebastião"},
		{nome: "Murphy", imageSrc: "imagens/Murphy.jpg", alt: "Foto da gata Murphy"},
		]
   };
	var source = $("#animaisTemplate").html();
	var buildTemplate = Handlebars.compile(source);
	var output = buildTemplate(animais);
	$("#animaiscard").html(output);

	// Tooltip utilizado no botão de excluir animal
	// Está aqui porque ele precisa esperar o
	// template ser completamente carregado
	$('[data-toggle="tooltip"]').tooltip();
});
