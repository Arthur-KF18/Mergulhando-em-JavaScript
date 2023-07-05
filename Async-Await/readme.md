# O que é o Async/await?

- No dia a dia do desenvolvimento web, utilizamos muito dados externos, como por exemplo, __recebidos através de um endpoint de uma API REST(um microsserviço) ou resultados de algum outro processamento__
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
- Quando enviamos uma requisição de dados a uma API, __temos uma promessa de que estes dados irão chegar, mas enquanto isso não acontece, o sistema deve continuar rodando__. Por exemplo, __se o servidor caiu, uma promessa de dados não pode se cumprir, e temos de lidar com isto__.
- __As Promises trabalham neste contexto - elas são a ferramenta que o JavaScript utiliza para lidar com código assíncrono.__
- Existem algumas formas de se trabalhar com __processamento assíncrono (ou seja, Promises)__ em JavaScript: utilizando o método `.then()`, as palavras-chave `async e await` ou o `objeto Promise` e seus métodos. Aqui, vamos focar no uso de `.then()`, `async/await` e no uso do método `Promise.all.`

## O que é o Promises com .then() e como utilizar?

- Como falamos de API do tipo REST, vamos ver um exemplo usando a __Fetch API do JS para buscar dados e convertê-los para o formato JSON__ 
  - Esta API __funciona nativamente nos navegadores e foi integrada ao Node.js na versão 18, tem alguns métodos internos e já retorna por padrão uma Promise que vai resolver a requisição, tendo ou não sucesso.__

##### O que é a Fetch API?

- A Fetch API __fornece uma interface para a extração de recursos (incluindo através da rede), ou seja, a requisição `http://`__
- Conceitos e uso:
  - A API Fetch __utiliza os objectos `Request` e `Response` (e outros elementos envolvidos nos pedidos de rede), bem como conceitos relacionados, como `CORS` e a semântica do cabeçalho `HTTP Origin`.__ 
  - Para podermos fazer uma requisição e extração de um recurso, __utilizamos o método `fetch()`__. Ele é um método global tanto no contexto de `window` e de `worker`. __Isto faz com que ele seja disponível em quaisquer contextos que queremos requisitar os recursos__
  - O método `fetch()` tem um único argumento obrigatório: __O caminho do recurso que queremos requisitar__. Isto __retorna em uma promessa, que nos traz a reposta da nossa requisição__
  - O `Fetch` é ativado assim que o servidor responde com cabeçalhos - __mesmo que a resposta do servidor seja um estado de erro HTTP. Você também pode opcionalmente passar um objeto de opções de inicialização como o segundo argumento.__
  - Uma vez que uma resposta é recuperada, há vários métodos disponíveis para definir o conteúdo do corpo e como ele deve ser tratado.

  - Podemos criar um __pedido e uma resposta diretamente usando os construtores `Request()` e `Response()`, mas não é comum fazer isso diretamente__. Em vez disso, é mais provável que eles sejam __criados como resultados de outras ações da API__ (por exemplo, `FetchEvent.respondWith()` de `service workers`).

##### Conceitos básicos do Fetch()

- A API Fetch __fornece uma interface para a obtenção de recursos (incluindo através da rede)__. Ela parecerá familiar para qualquer pessoa que tenha usado XMLHttpRequest, mas __fornece um conjunto de recursos mais poderoso e flexível__.

- __Em poucas palavras__
  - No coração do `Fetch` estão as __abstracções de Interface de Pedidos(`requests`), Respostas(`response`) e Cabeçalhos HTTP(`headers`), juntamente com um método `fetch()` para iniciar pedidos assíncronos de recursos__. Como os principais componentes do HTTP são abstraídos como objectos JavaScript,__é fácil para outras APIs utilizarem essa funcionalidade.__
  - `Service Workers` é um exemplo de uma API que faz uso intenso de `Fetch`.
  - O `Fetch` leva a natureza assíncrona de tais solicitações um passo adiante.__A API é totalmente baseada em promessas.__

##### Usando a Fetch API

- A API Fetch fornece uma __interface JavaScript para aceder e manipular partes do protocolo, tais como pedidos e respostas, ou `requests` e `responses`. Também fornece um método global `fetch()` que fornece uma forma fácil e lógica de obter recursos de forma assíncrona através da rede.__
- invés do `XMLHttpRequest` __que é baseada em `callbacks`__, Fetch é __baseado em promessas e disponibiliza uma melhor alternativa que pode ser facilmente usada em `service workers`. Além disso, ela integra conceitos avançados de HTTP como CORS e outras extensões HTTP__
- Uma requisição básica do `Fetch` é mais ou menos assim:

```javascript
// Declara a função assíncrona `logMovies`
  async function logMovies() {
    // a variável `response` irá aguardar a conexão com a base de filmes `movies.json`
    const response = await fetch("http://example.com/movies.json");
    // a variável `movies` irá guardar a variável `response` da conexão em formato `json`
    const movies = await response.json();
    // Imprime os dados no console, que foram transformados pelo `.json()`
    console.log(movies);
  }
```

- Aqui estamos buscando __um arquivo `JSON` na rede, analisando-o e imprimindo os dados no console__. O uso mais simples de `fetch()` recebe um argumento - __o caminho para o recurso que você deseja buscar - e não retorna diretamente o corpo da resposta `JSON`, mas, em vez disso, retorna uma promessa que é resolvida com um objeto `Response`.__

- O objeto `Response`, por sua vez,__não contém diretamente o corpo real da resposta `JSON`, mas é uma representação de toda a resposta HTTP__. Portanto, __para extrair o conteúdo do corpo `JSON` do objeto `Response`, usamos o método `json()`, que retorna uma segunda promessa que é resolvida com o resultado da análise do texto do corpo da resposta como `JSON`.__

- Agora que entendemos melhor de como a API do Fetch funciona e suas requisições, além de sua comunicação, requerimento de dados via protocolos HTTP, e a transformação destes através do método `json()`, iremos utilizar o seguinte exemplo:

```javascript
  function getUser(userId){
    const userData = fetch(`https://api.com/user/${userId}`)
    .then(response => response.json())
    .then(data => console.log(data.name))
  }

  getuser(1); // "Nome Sobrenome"
```

- Destrinchando o código acima: __a função `getUser()` recebe um id de usuário como parâmetro, para que seja passado para o endpoint REST fictício. A função `fetch()` recebe como parâmetro o endpoint e retorna uma Promise__

#### Como funcionam as Promises?

- Promises têm um método chamado `.then()`, que __recebe uma função `callback` e retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do retorno destes dados.__
- Assim, __podemos escrever o código do que irá acontecer em seguida, com os dados recebidos pela Promise, e o JavaScript vai aguardar a resolução da Promise sem pausar o fluxo do programa.__
- O resultado __pode ou não estar pronto ainda, e não há forma de pegar o valor de uma Promise de modo síncrono__; 
  - __Só é possível requisitar à Promise que execute uma função quando o resultado estiver disponível - seja ele o que foi solicitado (os dados da API, por exemplo), ou uma mensagem de erro caso algo tenha dado errado com a requisição (o servidor pode estar fora do ar, por exemplo).__
- No exemplo acima, ao iniciarmos uma cadeia de promessas - __no caso, para fazer uma requisição HTTP__ - enquanto a resposta está pendente __ela retorna um `Promise object`. O objeto, por sua vez, define uma instância do método `then`__
- Ao invés de passar o retorno da função `callback` diretamente para a função inicial, __ela é passada para `.then()`__. Quando o resultado da requisição HTTP chega, __o corpo da requisição é convertido para JSON e este valor convertido é passado para o próximo método `.then()`.__

```javascript
// ...
  const userData = fetch(`https://api.com/user/${userId}`)
    .then(response => response.json())
    .then(data => console.log(data.name))
// ...
```

- A cadeia de funções `fetch().then().then()` __não significa que há múltiplas funções `callbacks` sendo usadas com o mesmo objeto de resposta, e sim que cada instância de `.then()` retorna, por sua vez, um `new Promise().`__ Toda a cadeia __é lida de forma síncrona na primeira execução, e em seguida executada de forma assíncrona.__
