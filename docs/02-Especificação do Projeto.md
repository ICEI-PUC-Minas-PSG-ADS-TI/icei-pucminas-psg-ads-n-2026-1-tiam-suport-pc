# ESPECIFICAÇÃO DO PROJETO

## Definição do Problema

Usuários enfrentam dificuldades para encontrar assistências técnicas confiáveis próximas, comparar serviços disponíveis e acompanhar o andamento dos reparos. Muitas vezes, precisam recorrer a locais distantes, com custos mais elevados e sem garantia de qualidade.

Além disso, técnicos e pequenas empresas possuem dificuldade em divulgar seus serviços e atrair novos clientes.

---

## Justificativa

O crescimento do uso de dispositivos eletrônicos aumenta a demanda por manutenção. No entanto, ainda há uma carência de soluções centralizadas que conectem clientes a prestadores de serviço de forma eficiente.

O aplicativo proposto busca resolver esse problema, oferecendo praticidade, transparência e melhor comunicação entre as partes envolvidas.

---

## Personas

### Persona 1 – Cliente

**Nome:** Carlos Henrique
**Idade:** 48 anos
**Profissão:** Motorista autônomo

**Descrição:**
Possui pouco conhecimento técnico e enfrenta dificuldades para encontrar assistências próximas e confiáveis.

**Objetivos:**

* Encontrar serviços próximos
* Comparar preços
* Acompanhar reparos

---

### Persona 2 – Técnico

**Nome:** Eduardo Costa Moreira
**Idade:** 51 anos
**Profissão:** Técnico em eletrônicos

**Descrição:**
Dono de assistência técnica que deseja aumentar sua visibilidade e organizar melhor seus atendimentos.

**Objetivos:**

* Atrair clientes
* Organizar agenda
* Melhorar reputação

---

## Histórias de Usuário

### Cliente

* Como cliente, quero localizar assistências próximas para encontrar opções rápidas
* Como cliente, quero visualizar serviços para comparar opções
* Como cliente, quero agendar atendimento para facilitar o processo
* Como cliente, quero acompanhar o status do reparo para saber quando ficará pronto
* Como cliente, quero avaliar serviços para ajudar outros usuários
* Como cliente, quero conversar com o técnico para tirar dúvidas

---

### Técnico

* Como técnico, quero cadastrar meus serviços para divulgar meu trabalho
* Como técnico, quero definir minha agenda para organizar atendimentos
* Como técnico, quero gerenciar agendamentos para controlar minha demanda
* Como técnico, quero atualizar o status do reparo para informar o cliente
* Como técnico, quero responder mensagens para melhorar o atendimento

---

## Requisitos

### Requisitos Funcionais

| ID     | Descrição                             | Prioridade |
| ------ | ------------------------------------- | ---------- |
| RF-001 | Cadastro e login de usuários          | ALTA       |
| RF-002 | Cadastro de serviços por técnicos     | ALTA       |
| RF-003 | Definição de agenda                   | ALTA       |
| RF-004 | Geolocalização de assistências        | ALTA       |
| RF-005 | Visualização de serviços e avaliações | ALTA       |
| RF-006 | Agendamento de atendimentos           | ALTA       |
| RF-007 | Acompanhamento do reparo              | ALTA       |
| RF-008 | Comunicação via chat                  | ALTA       |
| RF-009 | Avaliação de assistências             | MÉDIA      |

---

### Requisitos Não Funcionais

| ID      | Descrição                                     | Prioridade |
| ------- | --------------------------------------------- | ---------- |
| RNF-001 | Sistema deve funcionar em dispositivos móveis | ALTA       |
| RNF-002 | Interface simples e intuitiva                 | ALTA       |
| RNF-003 | Segurança dos dados                           | ALTA       |
| RNF-004 | Tempo de resposta de até 20 segundos          | MÉDIA      |
| RNF-005 | Chat em tempo real ou próximo disso           | ALTA       |

---

## Restrições

| ID    | Restrição                    |
| ----- | ---------------------------- |
| R-001 | Projeto acadêmico sem custos |
| R-002 | Sem cobrança para uso        |
| R-003 | Prazo até final do semestre  |
| R-004 | Backend simples              |
| R-005 | Apenas mobile                |
| R-006 | Inicialmente Android         |
| R-007 | Dependência de internet      |

---

## Diagrama de Casos de Uso

![Texto alternativo](docs/img/Diagrama_Caso_uso.png)

---

## Matriz de Rastreabilidade

| História            | Requisito |
| ------------------- | --------- |
| Buscar assistências | RF-004    |
| Ver serviços        | RF-005    |
| Agendar             | RF-006    |
| Acompanhar          | RF-007    |
| Chat                | RF-008    |
| Cadastro técnico    | RF-002    |
| Agenda              | RF-003    |

---



# Gerenciamento de Projeto

O gerenciamento do projeto será realizado com base nas boas práticas do PMBOK v6, considerando as principais áreas de conhecimento como escopo, tempo, custo, qualidade, recursos, comunicação e riscos.

Por se tratar de um projeto acadêmico, o foco está na organização eficiente das atividades, garantindo que o sistema seja desenvolvido dentro do prazo estabelecido, mantendo qualidade e alinhamento com os objetivos propostos.

As áreas de escopo, cronograma e custos são tratadas de forma integrada, uma vez que qualquer alteração no escopo pode impactar diretamente o tempo de desenvolvimento e o esforço necessário da equipe.

---

## Gerenciamento de Tempo

O controle do tempo será realizado por meio de planejamento semanal das atividades, seguindo a metodologia ágil Scrum.

O projeto foi dividido em etapas principais:

* Levantamento de requisitos
* Definição de personas e histórias de usuário
* Modelagem do sistema (casos de uso e requisitos)
* Prototipação das telas
* Desenvolvimento das funcionalidades
* Testes e ajustes finais

Cada etapa será distribuída ao longo do semestre, permitindo acompanhamento contínuo da evolução do projeto.

O cronograma visual é representado por um gráfico de Gantt, que auxilia na organização das tarefas e no controle dos prazos.

![Gráfico de Gantt](img/02-project-timeline.png)

---

## Gerenciamento de Equipe

A equipe será organizada com base na metodologia Scrum, visando melhorar a produtividade, comunicação e divisão de responsabilidades.

A estrutura do time será composta por:

* **Scrum Master:** responsável por garantir a organização do projeto e remover impedimentos
* **Product Owner:** responsável por definir as funcionalidades e prioridades do sistema
* **Equipe de Desenvolvimento:** responsável pela implementação do aplicativo mobile
* **Responsável pelo Design:** responsável pela criação das interfaces e experiência do usuário

As tarefas serão organizadas em um quadro Kanban (Trello), com as seguintes etapas:

* Backlog
* Em desenvolvimento
* Em teste
* Concluído

Essa organização permite melhor acompanhamento do progresso e maior controle das entregas.

![Simple Project Timeline](img/02-project-timeline.png)

---

## Gestão de Orçamento

A definição do orçamento do projeto foi realizada com base na estimativa de esforço da equipe, tempo de desenvolvimento e recursos necessários para a implementação da aplicação.

Foram considerados os principais custos envolvidos em um projeto de desenvolvimento de software mobile, incluindo mão de obra, infraestrutura e ferramentas.

| Recursos Necessários | Descrição                                                 | Valor Estimado (R$) |
| -------------------- | --------------------------------------------------------- | ------------------- |
| Recursos Humanos     | Desenvolvimento do aplicativo (frontend, lógica e testes) | 20.000,00           |
| Design               | Criação da interface e experiência do usuário             | 3.000,00            |
| Hardware             | Equipamentos utilizados no desenvolvimento                | 2.500,00            |
| Software             | Ferramentas, bibliotecas e ambientes de desenvolvimento   | 1.500,00            |
| Serviços             | Internet, APIs e possíveis integrações externas           | 1.500,00            |
| **TOTAL**            |                                                           | **28.500,00**       |



---
