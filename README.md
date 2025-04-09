# Basic Calculator 

Este é um projeto simples de **calculadora web**, desenvolvido com **HTML**, **CSS** e **JavaScript**, e containerizado usando **Docker**.

A calculadora realiza operações matemáticas básicas (adição, subtração, multiplicação e divisão) com uma interface visual agradável. Ideal para estudos de lógica e também como exemplo de containerização de aplicações front-end estáticas.

# Construa a imagem Docker
docker build -t calculator .

# Agora rode o contêiner com:
docker run -p 8080:8080 calculadora

# Acesse no navegador
http://localhost:8080