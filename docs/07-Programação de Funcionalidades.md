PROGRAMAÇÃO DE FUNCIONALIDADES
1. Visão Geral

A implementação do sistema será realizada com base nos requisitos funcionais definidos na especificação do projeto. As funcionalidades serão desenvolvidas utilizando React Native no frontend e Firebase como backend, incluindo autenticação, banco de dados e comunicação em tempo real.

Cada funcionalidade será implementada de forma modular, garantindo organização do código e facilidade de manutenção.

2. Implementação das Funcionalidades
RF-001 – Cadastro e Login de Usuários

Descrição:
Permite que usuários realizem cadastro e autenticação no sistema utilizando e-mail e senha.

Tecnologias utilizadas:

Firebase Authentication
React Native

Estrutura de dados:

Coleção: users

Funcionalidades implementadas:

Cadastro de usuário
Login com e-mail e senha
Persistência de sessão
RF-002 – Cadastro de Serviços

Descrição:
Permite que técnicos cadastrem serviços oferecidos.

Tecnologias utilizadas:

Firebase Firestore

Estrutura de dados:

Coleção: services

Funcionalidades implementadas:

Cadastro de serviços
Edição de serviços
Listagem de serviços
RF-003 – Definição de Agenda

Descrição:
Permite que técnicos organizem seus atendimentos por meio dos agendamentos recebidos.

Tecnologias utilizadas:

Firebase Firestore

Estrutura de dados:

Coleção: appointments

Funcionalidades implementadas:

Visualização de agendamentos
Atualização de status
RF-004 – Geolocalização de Assistências

Descrição:
Permite ao usuário localizar técnicos próximos com base em sua localização.

Tecnologias utilizadas:

API de localização do dispositivo
Firebase Firestore

Funcionalidades implementadas:

Captura de localização (latitude e longitude)
Filtragem de técnicos por proximidade
RF-005 – Visualização de Serviços

Descrição:
Permite ao usuário visualizar serviços oferecidos pelos técnicos.

Tecnologias utilizadas:

Firebase Firestore

Funcionalidades implementadas:

Listagem de serviços
Exibição de descrição e preço
Visualização de avaliações
RF-006 – Agendamento de Atendimentos

Descrição:
Permite que o usuário agende serviços com técnicos.

Tecnologias utilizadas:

Firebase Firestore

Estrutura de dados:

Coleção: appointments

Funcionalidades implementadas:

Seleção de data e horário
Criação de agendamento
Confirmação pelo técnico
RF-007 – Acompanhamento do Reparo

Descrição:
Permite acompanhar o status do serviço.

Tecnologias utilizadas:

Firebase Firestore

Funcionalidades implementadas:

Visualização de status do serviço
Atualização de status pelo técnico

Status utilizados:

Em análise
Confirmado
Em andamento
Concluído
RF-008 – Comunicação via Chat

Descrição:
Permite comunicação entre cliente e técnico.

Tecnologias utilizadas:

Firebase Firestore

Estrutura de dados:

Coleção: messages

Funcionalidades implementadas:

Envio de mensagens de texto
Envio de imagens
Atualização em tempo real
RF-009 – Avaliação de Serviços

Descrição:
Permite ao usuário avaliar serviços realizados.

Tecnologias utilizadas:

Firebase Firestore

Estrutura de dados:

Coleção: reviews

Funcionalidades implementadas:

Registro de nota (1 a 5)
Registro de comentário

Regra:

Avaliação disponível apenas após conclusão do serviço
3. Estrutura de Dados Utilizada

O sistema utiliza as seguintes coleções no Firebase Firestore:

users
services
appointments
messages
reviews

Essas estruturas permitem armazenar e recuperar informações de forma eficiente, garantindo suporte às funcionalidades do sistema.
