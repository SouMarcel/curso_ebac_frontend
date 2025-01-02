$(document).ready(function() {
    // Adicionar tarefa na lista
    $('#adicionar').click(function() {
    const tarefa = $('#tarefa').val().trim();

    if (tarefa === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    $('#lista-tarefas').append(`<li>${tarefa}</li>`);

    // Limpar o campo de entrada
    $('#tarefa').val('');
    });

    // Adicionar efeito de "riscar" ao clicar na tarefa
    $('#lista-tarefas').on('click', 'li', function() {
    $(this).toggleClass('completed');
    });
});
