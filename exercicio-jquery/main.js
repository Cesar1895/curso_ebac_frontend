$(document).ready(function(){
    $('#tarefas').submit(function(e){
        e.preventDefault()
        const nomeTarefa = $('#nome-tarefa').val()
        if(nomeTarefa){
            $('#lista-tarefas').append(`<li>${nomeTarefa}</li>`)
            $('#nome-tarefa').val('')
        }
    })
    $('#lista-tarefas').on('click', 'li', function(){
        $(this).toggleClass('completa')
    })
})