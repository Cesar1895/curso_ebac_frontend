$(document).ready(function() {
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#cadastroForm').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages:{
            nome:'Por favor, insira o seu nome',
            telefone: 'Insira um número',
            email: 'Insira um e-mail',
            endereco: 'Insira se endereço',
            cep: 'Insira seu CEP',
            cpf:'Insira seu CPF'
        },  
        errorClass: 'custom-error',
        errorElement: 'div', 
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element).closest('.form-group').removeClass('has-error');
        }
    });
});
