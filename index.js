// API de intergração com o email com NodeJS, desenvolvido por Mateus Abdias

// Usando a biblioteca nodemailer
const nodemailer = require('nodemailer');

// Utilizando o host, port, secure e auth do outlook (o próprio site da API disponibiliza)
const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: '587',
    secure: false,
    auth: {
        user: '', //Digite o seu e-mail
        pass: '' // Digite a sua senha
    }
});

// Criando e enviando um email
// JavaScript assíncrono 
// Essa função tenta enviar o e-mail, se ela não conseguir ela retorna um erro
transport.sendMail({
    from:'Pessoa que está enviando <digite o seu email>',
    to: '', // Digite o e-mail que você quer enviar a mensagem
    subject: '', // Titulo do email
    text: '' // Corpo do e-mail (pode ser em formato html)
})
.then(() => console.log('Email enviado'))
.catch((err) => console.log('Erro ao enviar: ', err));