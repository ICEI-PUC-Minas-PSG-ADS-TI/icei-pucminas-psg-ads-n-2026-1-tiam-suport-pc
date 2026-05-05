PLANO DE TESTES DE SOFTWARE
1. Visão Geral

Este plano de testes tem como objetivo validar as funcionalidades do sistema desenvolvido, garantindo que os requisitos funcionais sejam atendidos de forma adequada.

Os testes foram realizados com usuários reais, utilizando cenários que simulam o uso do aplicativo no dia a dia, com foco na verificação das principais funcionalidades.

2. Público Participante

Os testes foram realizados com a participação de 5 usuários reais, representando o público-alvo da aplicação.

Os participantes utilizaram o sistema em dispositivos móveis reais, permitindo avaliar o comportamento da aplicação em um ambiente próximo ao uso real.

3. Metodologia de Testes

Os testes foram conduzidos de forma guiada, onde os participantes receberam instruções específicas para executar determinadas tarefas dentro do aplicativo.

Essa abordagem permitiu validar cada funcionalidade individualmente, além de observar dificuldades, erros e pontos de melhoria na interface e no fluxo do sistema.

4. Cenários de Teste
Cenário 1 – Cadastro e Login

Objetivo:
Verificar se o usuário consegue criar uma conta e acessar o sistema.

Passos:

Acessar a tela de cadastro
Inserir os dados solicitados
Realizar o cadastro
Efetuar login com as credenciais criadas

Resultado esperado:
O usuário deve conseguir se cadastrar e acessar o sistema sem erros.

Cenário 2 – Busca de Técnicos (Geolocalização)

Objetivo:
Verificar se o sistema exibe técnicos próximos ao usuário.

Passos:

Acessar a tela inicial
Permitir acesso à localização
Visualizar a lista de técnicos disponíveis

Resultado esperado:
O sistema deve apresentar técnicos próximos com base na localização do usuário.

Cenário 3 – Visualização de Serviços

Objetivo:
Verificar se o usuário consegue visualizar os serviços disponíveis.

Passos:

Selecionar um técnico
Acessar a lista de serviços

Resultado esperado:
Os serviços devem ser exibidos com nome, descrição e preço.

Cenário 4 – Agendamento de Serviço

Objetivo:
Verificar se o usuário consegue agendar um atendimento.

Passos:

Selecionar um serviço
Escolher data e horário
Confirmar o agendamento

Resultado esperado:
O agendamento deve ser registrado com status inicial "em análise".

Cenário 5 – Acompanhamento do Serviço

Objetivo:
Verificar se o usuário consegue acompanhar o status do serviço.

Passos:

Acessar a área de agendamentos
Visualizar o status do serviço

Resultado esperado:
O sistema deve exibir corretamente o status (em análise, confirmado, em andamento, concluído).

Cenário 6 – Comunicação via Chat

Objetivo:
Verificar a comunicação entre cliente e técnico.

Passos:

Acessar o chat
Enviar mensagem de texto
Enviar imagem

Resultado esperado:
As mensagens devem ser enviadas e recebidas corretamente em tempo real.

Cenário 7 – Avaliação de Serviço

Objetivo:
Verificar se o usuário consegue avaliar o serviço realizado.

Passos:

Acessar um serviço concluído
Inserir nota e comentário
Confirmar avaliação

Resultado esperado:
A avaliação deve ser registrada com sucesso.

5. Ferramentas de Testes

Os testes foram realizados utilizando:

Dispositivos móveis reais (Android)
Aplicação desenvolvida em React Native
Firebase (backend e banco de dados)
6. Considerações

Os testes permitiram validar as principais funcionalidades do sistema, demonstrando que o aplicativo atende aos requisitos definidos.

A utilização de testes guiados possibilitou uma avaliação mais precisa das funcionalidades, além de identificar possíveis melhorias na usabilidade do sistema.
