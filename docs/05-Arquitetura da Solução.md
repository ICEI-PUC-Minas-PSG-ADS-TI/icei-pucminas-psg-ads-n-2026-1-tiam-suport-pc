05 - ARQUITETURA DA SOLUÇÃO
1. Visão Geral da Arquitetura

O sistema será composto por uma aplicação mobile desenvolvida em React Native, responsável pela interface com o usuário, e por um backend responsável pelo processamento das requisições, aplicação das regras de negócio e armazenamento de dados.

A comunicação entre o aplicativo e o backend será realizada por meio de requisições HTTP utilizando APIs.

A arquitetura adotada segue o modelo cliente-servidor, no qual:

O cliente (aplicativo mobile) realiza requisições ao servidor
O servidor processa as requisições e retorna as respostas
O banco de dados é responsável pelo armazenamento das informações do sistema
2. Arquitetura do Sistema

A solução é composta por três camadas principais:

2.1 Camada de Apresentação (Frontend)

Responsável pela interação com o usuário.

Tecnologia utilizada:

React Native

Principais funções:

Exibição das interfaces do sistema
Captura de dados inseridos pelo usuário
Comunicação com o backend por meio de APIs
2.2 Camada de Aplicação (Backend)

Responsável pela lógica de negócio do sistema.

Tecnologia utilizada:

Firebase (Authentication e Firestore)

Principais funções:

Processamento das requisições
Aplicação das regras de negócio
Autenticação de usuários
Gerenciamento de agendamentos
Controle de status dos serviços

O sistema utilizará autenticação baseada em e-mail e senha, gerenciada pelo Firebase Authentication.

2.3 Camada de Dados (Banco de Dados)

Responsável pelo armazenamento das informações do sistema.

Tecnologia utilizada:

Firebase Firestore

O Firestore é um banco de dados NoSQL orientado a documentos, adequado para aplicações mobile devido à sua escalabilidade, flexibilidade e integração com serviços em tempo real.

Principais dados armazenados:

Usuários
Técnicos
Serviços
Agendamentos
Mensagens
Avaliações
3. Tecnologias Utilizadas

As tecnologias adotadas no desenvolvimento do sistema são:

React Native (desenvolvimento da aplicação mobile)
Firebase (backend, autenticação e banco de dados)
GitHub (controle de versão)
Figma (prototipação de interfaces)
Trello (gerenciamento de tarefas)
4. Fluxo de Funcionamento

O funcionamento do sistema ocorre conforme as etapas descritas a seguir:

O usuário acessa o aplicativo
Realiza login ou cadastro
O aplicativo envia os dados ao backend
O backend valida as informações e retorna a resposta
O usuário navega pelas funcionalidades do sistema
As ações realizadas (agendamentos, mensagens, atualizações de status) são processadas pelo backend
Os dados são armazenados e recuperados do banco de dados conforme necessário
5. Modelo de Dados (Descrição)

O sistema é composto pelas seguintes entidades principais:

Usuário
Técnico
Serviço
Agendamento
Mensagem
Avaliação

As entidades foram definidas com base nos requisitos funcionais do sistema, garantindo suporte às funcionalidades principais.

Relacionamentos:

Um usuário pode realizar vários agendamentos
Um técnico pode oferecer vários serviços
Um agendamento está associado a um usuário e a um técnico
Um serviço pode receber múltiplas avaliações
6. Hospedagem

Para fins acadêmicos, a aplicação poderá ser executada em ambiente local durante o desenvolvimento.

O backend será hospedado utilizando os serviços do Firebase, que oferecem infraestrutura escalável e integração direta com aplicações mobile.

7. Qualidade de Software

A qualidade do sistema será baseada nas características definidas pela norma ISO/IEC 25010.

Foram consideradas as seguintes características:

Usabilidade
Interface simples e intuitiva
Facilidade de navegação
Desempenho
Tempo de resposta adequado
Carregamento eficiente das telas
Confiabilidade
Funcionamento estável do sistema
Tratamento de erros
Segurança
Proteção dos dados dos usuários
Autenticação segura
