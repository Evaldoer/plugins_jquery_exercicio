$(document).ready(function () {
   
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            cpf: { required: true, minlength: 14 },
            endereco: { required: true },
            cep: { required: true, minlength: 9 }
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Insira um e-mail válido."
            },
            telefone: "Por favor, insira seu telefone.",
            cpf: {
                required: "Por favor, insira seu CPF.",
                minlength: "O CPF deve ter 14 caracteres."
            },
            endereco: "Por favor, insira seu endereço completo.",
            cep: {
                required: "Por favor, insira seu CEP.",
                minlength: "O CEP deve ter 9 caracteres."
            }
        }
    });
});