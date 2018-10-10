// ==UserScript==
// @name         Add buttom to check all publicador
// @version      0.2
// @description  Adiciona um botao para executar chamadas ajax que abilita todos os conteudos do publicador
// @author       Alan Martini
// @match        */publicador/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	var $ = window.jQuery;
	$( document ).ready(function() {
        const uaid = $('body').data('publicuaid');
        var pageObjects = ["objetivos","resolva","visualize","leia","assista","exercite","pratique","explore","emresumo"];

        function chamaAjax(page) {
            var data = {
                uaid: uaid,
                finalizado: 'G',
                comentario: '',
                action: 'comentar',
                area: page,
                pessoaid: 1
            };

            var urlApi = "../carregaComentarios.php?uaid="+uaid;
            $.ajax({url: urlApi, data: data, method: "POST", success: console.log('foi'+page)})
        }
        $('body').on('click', '#acionaTudo', function(e) {
            e.preventDefault();

            $('.ctn-loading-unidade').css('visibility', 'visible');

            pageObjects.forEach(chamaAjax);
            setTimeout(function(){
                location.reload();
            }, 1500);
        });

        $('body').append('<button style="margin: 0 10px; position: fixed; top: 50px; left: 0; padding: 20px;" id="acionaTudo">Tacale Pau</button>');

    })
})();

