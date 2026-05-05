04 - PROJETO DE INTERFACE
1. Visão Geral

O projeto de interface do aplicativo foi desenvolvido com foco na usabilidade, simplicidade e eficiência na interação entre usuários e técnicos.

O principal objetivo é permitir que o usuário localize assistências técnicas, visualize serviços, realize agendamentos e acompanhe o status dos reparos de forma clara e intuitiva.

A interface foi estruturada considerando os requisitos funcionais e não funcionais definidos no projeto, priorizando facilidade de navegação, organização das informações e redução do número de etapas para execução das tarefas.

2. Padrão de Navegação

A navegação do sistema foi definida com base em uma estrutura simples e objetiva, utilizando:

Navegação por abas inferiores (Bottom Tab Navigation)
Navegação entre telas (Stack Navigation)

O menu principal do sistema é composto pelas seguintes seções:

Home
Serviços
Agendamentos
Chat
Perfil

Essa estrutura permite acesso rápido às funcionalidades principais do sistema.

3. Descrição das Interfaces
3.1 Tela de Login

Responsável pelo acesso ao sistema.

Funcionalidades:

Entrada de e-mail e senha
Acesso ao cadastro de novos usuários
3.2 Tela de Cadastro

Permite o registro de novos usuários.

Campos:

Nome
E-mail
Senha
Telefone
Tipo de usuário (cliente ou técnico)
3.3 Tela Inicial (Home)

Apresenta as assistências técnicas disponíveis próximas ao usuário.

Funcionalidades:

Listagem de assistências
Campo de busca
Filtros de pesquisa
3.4 Tela de Serviços

Exibe os serviços oferecidos pelos técnicos.

Informações apresentadas:

Nome do serviço
Descrição
Preço
Avaliações
3.5 Tela de Agendamento

Permite ao usuário agendar um atendimento.

Funcionalidades:

Seleção de data
Seleção de horário
Confirmação do agendamento
3.6 Tela de Acompanhamento

Permite acompanhar o andamento do serviço.

Informações:

Status do reparo (em análise, em andamento, concluído)
Histórico do atendimento
3.7 Tela de Chat

Permite a comunicação entre cliente e técnico.

Funcionalidades:

Envio e recebimento de mensagens
Comunicação em tempo quase real
3.8 Tela de Avaliação

Permite ao usuário avaliar o serviço realizado.

Funcionalidades:

Atribuição de nota
Registro de comentário
4. Relação com os Requisitos
Requisito	Interface
RF-001	Login e Cadastro
RF-004	Tela Inicial
RF-005	Tela de Serviços
RF-006	Tela de Agendamento
RF-007	Tela de Acompanhamento
RF-008	Tela de Chat
RF-009	Tela de Avaliação
5. Fluxo de Navegação

O fluxo principal do usuário no sistema ocorre conforme descrito abaixo:

Início → Login/Cadastro → Tela Inicial → Seleção de Assistência → Visualização de Serviços → Agendamento → Acompanhamento → Chat → Avaliação → Fim

6. Wireframes

Os wireframes foram desenvolvidos com o objetivo de representar a estrutura das telas e a organização dos elementos da interface.

Eles contemplam:

Disposição dos componentes
Hierarquia das informações
Fluxo de navegação entre telas

A ferramenta utilizada para a criação dos wireframes foi o Figma.

7. Considerações de Usabilidade

A interface foi projetada com base em princípios de usabilidade, considerando:

Navegação simples e objetiva
Redução de etapas para execução de tarefas
Organização clara das informações
Feedback visual das ações do usuário
Facilidade de uso para usuários com diferentes níveis de conhecimento técnico
