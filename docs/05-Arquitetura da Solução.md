# 05 - ARQUITETURA DA SOLUÇÃO

## 1. Visao Geral da Arquitetura

O sistema e composto por uma aplicacao mobile desenvolvida em React Native (interface) e um backend responsavel pelo processamento de regras de negocio e armazenamento de dados.

A comunicacao ocorre via requisicoes HTTP utilizando APIs, seguindo o modelo cliente-servidor:
*   **Cliente:** Realiza requisicoes atraves do aplicativo mobile.
*   **Servidor:** Processa as requisicoes e gerencia as respostas.
*   **Banco de Dados:** Responsavel pela persistencia das informacoes.

---

## 2. Camadas do Sistema

| Camada | Tecnologia | Funcoes Principais |
| :--- | :--- | :--- |
| **Apresentacao (Frontend)** | React Native | Exibicao de interfaces e captura de dados do usuario. |
| **Aplicacao (Backend)** | Firebase Auth/Functions | Regras de negocio, autenticacao e controle de status. |
| **Dados (Database)** | Firebase Firestore | Armazenamento NoSQL orientado a documentos. |

---

## 3. Tecnologias Utilizadas

*   **Desenvolvimento Mobile:** React Native
*   **Infraestrutura Backend:** Firebase (Auth e Firestore)
*   **Controle de Versao:** GitHub
*   **Prototipagem:** Figma
*   **Gestao de Projetos:** Trello

---

## 4. Fluxo de Funcionamento

1.  **Acesso:** O usuario acessa o aplicativo e realiza login/cadastro.
2.  **Validacao:** O aplicativo envia os dados ao backend para autenticacao.
3.  **Interacao:** O usuario navega e executa acoes (agendamentos, mensagens).
4.  **Processamento:** O backend processa as acoes e aplica as regras de negocio.
5.  **Persistencia:** Os dados sao armazenados ou recuperados do Firestore conforme demanda.

---

## 5. Modelo de Dados

### Entidades Principais
*   Usuario, Tecnico, Servico, Agendamento, Mensagem e Avaliacao.

### Relacionamentos
*   Um usuario pode realizar multiplos agendamentos.
*   Um tecnico pode oferecer diversos servicos.
*   Um agendamento vincula obrigatoriamente um usuario a um tecnico.
*   Um servico pode acumular multiplas avaliacoes de diferentes usuarios.

---

## 6. Hospedagem

*   **Ambiente de Desenvolvimento:** Execucao em ambiente local (Localhost/Emuladores).
*   **Infraestrutura de Producao:** Servicos em nuvem do Firebase para escalabilidade e integracao em tempo real.

---

## 7. Qualidade de Software (ISO/IEC 25010)

| Caracteristica | Requisito de Qualidade |
| :--- | :--- |
| **Usabilidade** | Interface simples, intuitiva e navegacao facilitada. |
| **Desempenho** | Tempos de resposta adequados e carregamento eficiente. |
| **Confiabilidade** | Estabilidade do sistema e tratamento de erros resiliente. |
| **Seguranca** | Autenticacao segura e protecao integral dos dados. |

---
*Documento atualizado em: 14/05/2026*
