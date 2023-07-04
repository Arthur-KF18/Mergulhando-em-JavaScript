# O que é o Async/await?

- No dia a dia do desenvolvimento web, utilizamos muito dados externos, como por exemplo, __recebidos atrav's de um endpoint de uma API REST(um microsserviço) ou resultados de algum outro processamento__
- Quando isso ocorre, __temos que esperar os dados **chegarem antes de utilizar esse resultado**
- Costumamos chamar de programação assíncrona __o ato de executar uma tarefa em "segundo plano", sem nosso controle direto disso.__ Sem explicitamente trabalhar com threads e coordená-las. Escrevendo basicamente da __forma tradicional que temos__
- Porém é importante frisar que o __javascript executa uma coisa por vez, de forma síncrona__.
- O javascript assíncrono vai separar o código em duas partes: __coisas que rodam agora e coisas que vão rodar depois de algo acontecer__
- Trabalhando com front-end, vemos que uma boa parte do que ocorre no __âmbito do navegador é `event-driven`__. Ou seja, o __código aguarda algum evento acontecer (por exemplo, o usuário clicar em um botão) antes de executar qualquer código.__ Alguns outros eventos como clique do mouse, toque na tela, cursor passar em cima de algum elemento, são interações do usuário com a página. Mas além delas, __há muitas outras situações que podem ser síncronas ou assíncronas__
  - Por exemplo, podemos pensar em comunicação. Uma ligação telefônica é uma comunicação síncrona, as informações chegam e saem logo em sequência, perguntas e respostas também se encaixam nisso. Porém uma conversa online, no Whatsapp ou telegram, é assíncrona. A pessoa, o usuário do outro lado vai receber a informação, e enquanto não temos a resposta, vamos realizar outras ações, como ir a algum lugar ou estudar
- Com o código, o processo é parecido:__um código síncrono é aquele de ocorre em sequência, uma instrução após a outra__, como por exemplo :
 
 ```javascript
    function soma(num1, num2) {
      return num1 + num2;
    }

    console.log(soma(2,2))
    // resultado esperado: 4
 ```

- Aqui o javascript executou uma linha atrás da outra, o que é normal comparado ao que pedimos por exemplo. Isso tem uma mudança muito drástica quando __precisamos de dados de uma API, ao mesmo tempo, quando é preciso aguardar a requisição e resposta da API. Não podemos bloquear o funcionamento de todo o nosso programa__; seria a mesma coisa que enviar uma mensagem pelo WhatsApp e ficar esperando a resposta sem fazer mais nada nesse meio tempo.
- É para esse tipo de situação, que requer __processamento assíncrono que existem as `Promises`, ou, literalmente, promessas__. O sentido de __Promise em JavaScript é similar ao literal__: Uma pessoa te passa o contato do Telegram e pede para que você mande uma mensagem pra ela, prometendo que vai responder... O que não temos como saber se vai acontecer.
-Quando enviamos uma requisição de dados a uma API, temos uma promessa de que estes dados irão chegar, mas enquanto isso não acontece, o sistema deve continuar rodando. Por exemplo, __se o servidor caiu, uma promessa de dados não pode se cumprir, e temos de lidar com isto.