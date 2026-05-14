# PROJETO DE INTERFACE

## Visão Geral

O projeto de interface do aplicativo foi desenvolvido com foco na usabilidade, simplicidade e eficiência na interação entre usuários e técnicos.

O principal objetivo é permitir que o usuário localize assistências técnicas, visualize serviços, realize agendamentos e acompanhe o status dos reparos de forma clara e intuitiva.

A interface foi estruturada considerando os requisitos funcionais e não funcionais definidos no projeto, priorizando facilidade de navegação, organização das informações e redução do número de etapas para execução das tarefas.
##Link do Figma -> https://crate-beam-42440876.figma.site/
---

## Padrão de Navegação

A navegação do sistema foi definida com base em uma estrutura simples e objetiva, utilizando:

- Navegação por abas inferiores (Bottom Tab Navigation)
- Navegação entre telas (Stack Navigation)

O menu principal do sistema é composto pelas seguintes seções:

- Home
- Serviços
- Agendamentos
- Chat
- Perfil

Essa estrutura permite acesso rápido às funcionalidades principais do sistema.

---

## Descrição das Interfaces

### Tela de Login

Responsável pelo acesso ao sistema.

#### Funcionalidades

- Entrada de e-mail e senha
- Acesso ao cadastro de novos usuários

---

### Tela de Cadastro

Permite o registro de novos usuários.

#### Campos

- Nome
- E-mail
- Senha
- Telefone
- Tipo de usuário (cliente ou técnico)

---

### Tela Inicial (Home)

Apresenta as assistências técnicas disponíveis próximas ao usuário.

#### Funcionalidades

- Listagem de assistências
- Campo de busca
- Filtros de pesquisa

---

### Tela de Serviços

Exibe os serviços oferecidos pelos técnicos.

#### Informações apresentadas

- Nome do serviço
- Descrição
- Preço
- Avaliações

---

### Tela de Agendamento

Permite ao usuário agendar um atendimento.

#### Funcionalidades

- Seleção de data
- Seleção de horário
- Confirmação do agendamento

---

### Tela de Acompanhamento

Permite acompanhar o andamento do serviço.

#### Informações

- Status do reparo (em análise, em andamento, concluído)
- Histórico do atendimento

---

### Tela de Chat

Permite a comunicação entre cliente e técnico.

#### Funcionalidades

- Envio e recebimento de mensagens
- Comunicação em tempo quase real

---

### Tela de Avaliação

Permite ao usuário avaliar o serviço realizado.

#### Funcionalidades

- Atribuição de nota
- Registro de comentário

---

## Relação com os Requisitos

| Requisito | Interface |
|---|---|
| RF-001 | Login e Cadastro |
| RF-004 | Tela Inicial |
| RF-005 | Tela de Serviços |
| RF-006 | Tela de Agendamento |
| RF-007 | Tela de Acompanhamento |
| RF-008 | Tela de Chat |
| RF-009 | Tela de Avaliação |

---

## Fluxo de Navegação

O fluxo principal do usuário no sistema ocorre conforme descrito abaixo:

```text
Início → Login/Cadastro → Tela Inicial → Seleção de Assistência → Visualização de Serviços → Agendamento → Acompanhamento → Chat → Avaliação → Fim
