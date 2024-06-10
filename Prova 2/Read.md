<br/>
<p align="center">
  <a href="https://github.com/RobinCharles984/S206"></a>

  <p align="center">
    Prova 2 - Postman e Cypress
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

### Postman Installation

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

### Cypress Installation

1. Clone the repo

```sh
git clone [(https://github.com/RobinCharles984/S206.git)]
```

2. Install Cypress

```sh
npm install cypress
```

3. Open Cypress and create/import specs

```sh
./node_modules/.bin/cypress open
```

4. Can run cypress through terminal too

```sh
npx cypress run
```

## Usage Postman
No Postman foi usado a api Go REST:

URL base: [https://gorest.co.in]

Esta API precisa de autorização, para isso basta criar uma conta e pegar sua access token, a URL com o parâmetro fiacará assim:

URL exemplo com token: [https://gorest.co.in/public/v2/users?access-token=1234]

Este token é necessário somente para comandos PUT, DELETE e POST, mas não é necessário para comandos GET.

## Usage Cypress
No Cypress foi usado a API Computer Database:

URL Base: [https://computer-database.gatling.io/computers]

Como não necessita de autorização, basta fazer seus teste E2E como quiser.

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
* [API Computer Database](https://computer-database.gatling.io/computers)
* [API Go REST](https://gorest.co.in/)