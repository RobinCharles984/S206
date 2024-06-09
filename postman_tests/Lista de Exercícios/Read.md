<br/>
<p align="center">
  <a href="https://github.com/RobinCharles984/S206"></a>

  <p align="center">
    Lista de Exercícios - API Marvel
    <br/>
    <br/>
    <a href="https://github.com/RobinCharles984/S206"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/RobinCharles984/S206">View Demo</a>
    .
    <a href="https://github.com/RobinCharles984/S206/issues">Report Bug</a>
    .
    <a href="https://github.com/RobinCharles984/S206/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/RobinCharles984/S206/total) ![Contributors](https://img.shields.io/github/contributors/RobinCharles984/S206?color=dark-green) ![Issues](https://img.shields.io/github/issues/RobinCharles984/S206) ![License](https://img.shields.io/github/license/RobinCharles984/S206) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

Alguns Casos de teste para a Lista de Exercícios de S206, usando API da Marvel.

*Resposta dos Exercícios:*
1. Foram feitas 3 súites de testes, duas com 3 testes e uma com 2 testes.

2. Todos os testes dão automatizados.

3. Se localiza no meio, com testes de integração e serviços.

4. São testes funcionais.

5. Nenhum dos testes é E2E.

6. Usando o sistema de GIT do Postman.

## Built With

* Postman

## Getting Started

After following all the [Instalattion](#installation) guide and running the flask server, a host will be show in the terminal. CTRL + Click this host link to go to your prefered browser, on just copy and paste. Now follow the [Usage](#usage) guide.

### Prerequisites

* Postman

[Install last Postman version](https://www.postman.com/)

### Installation

1. Clone the repo

```sh
git clone [(https://github.com/RobinCharles984/S206.git)]
```

2. Open Postman

```sh
#Just open Postman
```

3. Import the JSON file

```sh
#Go to import at "My Workspace"
```

4. Send requests

```sh
#Click "Send"
```

## Usage

Primeiramente, o API da Marvel não existe suporte à outros tipos de request além de GET.
Além disso, existe uma regra de autorização para poder usar:

URL base: [https://gateway.marvel.com]

E agora vem a operação junto, por exemplo um GET com de personagens:

URL com get de personagens: [https://gateway.marvel.com/v1/public/characters]

Mas quando é feito um request com essa URL, é pedido uma API Key, pra ter sua API key é necessário criar uma conta na Marvel Developer(https://developer.marvel.com/)
Com sua conta criada será entregue duas chaves, uma pública e uma privada, ambas serão importantes.

Com isso será necessário os seguintes parâmetros para ter autorização:
* *Timestamp (ts)*: Pode ser deixado como 1 por padrão
* *Chave API (apikey)*: Onde ficará sua chave pública
* *Código Hash (hash)*: Um hash MD5 - feito através do timestamp + chave privada + chave púclica

Exemplo de hash: seu ts vale '1', sua chave privada é 'abcd' e sua chave pública é '1234', colocando em um encrypter MD5(https://10015.io/tools/md5-encrypt-decrypt/) o texto '1abcd1234' terá o resultado 'ffd275c5130566a2916217b101f26150', o seu resultado será seu valor hash.

URL com exemplo dos parâmetros: [http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150]

Primeiro será a URL base seguido do comando, e por fim seguido dos parâmetros obrigatórios.

Agora pode substituir o comando por todos os disponíveis da API que terá o acesso liberado.


## Roadmap

See the [open issues](https://github.com/RobinCharles984/S206/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/RobinCharles984/S206/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/RobinCharles984/S206/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

_No License_

## Authors

* **Tales Machado** - *Soft Engineer Student* - [Tales Machado](https://github.com/RobinCharles984/)

## Acknowledgements

* [Tales Machado](https://github.com/RobinCharles984/)
* [Postman](https://www.postman.com/)
* [ImgShields](https://shields.io/)
* [Marvel Developer Portal](https://developer.marvel.com/)
* [MD5 Encrypter](https://10015.io/tools/md5-encrypt-decrypt/)