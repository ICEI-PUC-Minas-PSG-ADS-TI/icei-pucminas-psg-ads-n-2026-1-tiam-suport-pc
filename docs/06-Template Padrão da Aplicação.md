# 06 - MODELO DE DADOS (FIREBASE FIRESTORE)

O sistema utiliza o Firebase Firestore como banco de dados NoSQL, adotando uma estrutura baseada em colecoes e documentos. A organizacao foi projetada para otimizar o gerenciamento de usuarios, servicos, agendamentos, comunicacao e avaliacoes.

---

## 1. Estrutura de Colecoes

### Colecao: users
Armazena as informacoes de clientes e tecnicos autenticados.

| Campo | Tipo | Descricao |
| :--- | :--- | :--- |
| **id** | string | Identificador unico do usuario (UID do Firebase Auth). |
| **nome** | string | Nome completo do usuario. |
| **email** | string | Endereco de e-mail utilizado no login. |
| **telefone** | string | Numero de contato do usuario. |
| **tipo** | string | Define a permissao: "cliente" ou "tecnico". |
| **createdAt** | timestamp | Data e hora de criacao da conta. |

### Colecao: services
Armazena o catalogo de servicos oferecidos pelos profissionais.

| Campo | Tipo | Descricao |
| :--- | :--- | :--- |
| **id** | string | Identificador unico do servico. |
| **tecnicoId** | string | Referencia ao UID do tecnico proprietario do servico. |
| **nome** | string | Ex: "Troca de tela", "Troca de bateria", "Reparo de placa". |
| **descricao** | string | Detalhes sobre o servico prestado. |
| **preco** | number | Valor base do servico. |
| **createdAt** | timestamp | Data de cadastro do servico. |

### Colecao: appointments
Gerencia os agendamentos e o fluxo de trabalho.

| Campo | Tipo | Descricao |
| :--- | :--- | :--- |
| **id** | string | Identificador unico do agendamento. |
| **clienteId** | string | Referencia ao UID do cliente solicitante. |
| **tecnicoId** | string | Referencia ao UID do tecnico responsavel. |
| **servicoId** | string | Referencia ao ID do servico selecionado. |
| **data** | date | Data agendada para o atendimento. |
| **horario** | string | Horario definido para o serviço. |
| **status** | string | "em_analise", "em_andamento" ou "concluido". |
| **createdAt** | timestamp | Registro de quando o agendamento foi criado. |

### Colecao: messages
Responsavel pela persistencia das conversas em tempo real.

| Campo | Tipo | Descricao |
| :--- | :--- | :--- |
| **id** | string | Identificador unico da mensagem. |
| **chatId** | string | ID da conversa (composto pelos IDs de cliente e tecnico). |
| **remetenteId** | string | ID de quem enviou a mensagem. |
| **destinatarioId** | string | ID de quem recebera a mensagem. |
| **mensagem** | string | Conteudo textual da comunicacao. |
| **timestamp** | timestamp | Horario exato do envio. |

### Colecao: reviews
Armazena o feedback de satisfacao apos a conclusao do servico.

| Campo | Tipo | Descricao |
| :--- | :--- | :--- |
| **id** | string | Identificador unico da avaliacao. |
| **clienteId** | string | UID do cliente avaliador. |
| **tecnicoId** | string | UID do tecnico avaliado. |
| **servicoId** | string | ID do servico que foi avaliado. |
| **nota** | number | Valor numerico de 1 a 5. |
| **comentario** | string | Observacoes textuais do cliente. |

---

## 2. Relacionamentos entre Dados

*   **Usuario (Cliente) x Agendamento:** Relacao 1:N (Um cliente realiza varios agendamentos).
*   **Usuario (Tecnico) x Servico:** Relacao 1:N (Um tecnico oferece varios tipos de manutencao).
*   **Agendamento x Entidades:** Vinculo obrigatorio entre um Cliente, um Tecnico e um Servico especifico.
*   **Servico x Avaliacao:** Relacao 1:N (Um servico pode acumular diversas notas e feedbacks).
*   **Mensagens:** Relacionamento bidirecional baseado no identificador unico do chat entre duas partes.

---

## 3. Beneficios da Arquitetura Firestore

*   **Sincronizacao:** Atualizacao instantanea da interface para chats e status de agendamento.
*   **Escalabilidade:** Suporte ao crescimento do volume de usuarios e servicos sem perda de performance.
*   **Seguranca:** Integracao nativa com Firebase Authentication para protecao dos documentos.

---
*Documento atualizado em: 14/05/2026*
