6. Modelo de Dados (Firebase Firestore)

O sistema utilizará o Firebase Firestore como banco de dados, adotando uma estrutura baseada em coleções e documentos.

As coleções foram definidas de acordo com as funcionalidades do sistema, permitindo o gerenciamento de usuários, serviços, agendamentos, comunicação e avaliações.

Coleção: users

Armazena os dados dos usuários do sistema, incluindo clientes e técnicos.

Campos:

id (string) – identificador único do usuário
nome (string)
email (string)
telefone (string)
tipo (string) – "cliente" ou "tecnico"
createdAt (timestamp)
Coleção: services

Armazena os serviços oferecidos pelos técnicos.

Campos:

id (string)
tecnicoId (string) – referência ao usuário técnico
nome (string) – ex: "Troca de tela", "Troca de bateria"
descricao (string)
preco (number)
createdAt (timestamp)

Exemplos de serviços cadastrados:

Troca de tela
Troca de bateria
Troca de carcaça
Formatação de sistema
Reparo de placa
Coleção: appointments (agendamentos)

Armazena os agendamentos realizados pelos usuários.

Campos:

id (string)
clienteId (string)
tecnicoId (string)
servicoId (string)
data (date)
horario (string)
status (string) – "em_analise", "em_andamento", "concluido"
createdAt (timestamp)
Coleção: messages

Responsável pelo chat entre cliente e técnico.

Campos:

id (string)
chatId (string) – identificador da conversa
remetenteId (string)
destinatarioId (string)
mensagem (string)
timestamp (timestamp)
Coleção: reviews (avaliações)

Armazena as avaliações realizadas pelos usuários após a conclusão do serviço.

Campos:

id (string)
clienteId (string)
tecnicoId (string)
servicoId (string)
nota (number) – de 1 a 5
comentario (string)
createdAt (timestamp)
Relacionamentos entre Dados

O modelo de dados estabelece os seguintes relacionamentos:

Um usuário (cliente) pode realizar vários agendamentos
Um usuário (técnico) pode oferecer vários serviços
Um agendamento está vinculado a um cliente, um técnico e um serviço
Um serviço pode possuir múltiplas avaliações
Um usuário pode enviar e receber múltiplas mensagens
Considerações

O uso do Firebase Firestore permite:

Armazenamento escalável de dados
Sincronização em tempo real (utilizada no chat)
Integração com autenticação via Firebase Authentication
Facilidade de integração com aplicações mobile desenvolvidas em React Native
