#  Plano de Testes de Software

## 1. Visão Geral
Este plano tem como objetivo validar as funcionalidades do sistema, garantindo que os requisitos funcionais sejam atendidos de forma adequada. Os testes foram realizados com **usuários reais** em cenários que simulam o uso cotidiano do aplicativo.

---

## 2. Público e Metodologia

###  Público Participante
*   **Quantidade:** 5 usuários reais (público-alvo).
*   **Dispositivos:** Smartphones reais (Android) para simular o ambiente de uso real.

### Metodologia
Foi aplicada a técnica de **Testes Guiados**, onde os participantes seguiram instruções específicas para validar funcionalidades individualmente, permitindo a observação direta de dificuldades e erros de fluxo.

---

## 3. Cenários de Teste

| ID | Cenário | Objetivo | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| **01** | **Cadastro e Login** | Validar criação de conta e acesso. | Cadastro concluído e acesso liberado sem erros. |
| **02** | **Geolocalização** | Exibir técnicos próximos ao usuário. | Lista de técnicos filtrada por proximidade geográfica. |
| **03** | **Lista de Serviços** | Verificar detalhes dos serviços. | Exibição clara de nome, descrição e preço. |
| **04** | **Agendamento** | Validar reserva de atendimento. | Registro do agendamento com status "Em análise". |
| **05** | **Acompanhamento** | Monitorar o status do serviço. | Exibição correta das etapas (Análise > Confirmado > etc). |
| **06** | **Chat em Tempo Real** | Validar comunicação Cliente/Técnico. | Envio e recebimento de textos e imagens com sucesso. |
| **07** | **Avaliação** | Registrar feedback do serviço. | Nota e comentário salvos com sucesso no perfil do técnico. |

---

## 4. Detalhamento dos Passos

> [!NOTE]
> Abaixo estão os fluxos seguidos pelos usuários durante a execução de cada cenário.

*   **Cenário 1:** Tela de cadastro ➔ Inserção de dados ➔ Login.
*   **Cenário 2:** Home ➔ Permissão de GPS ➔ Visualização de técnicos no mapa/lista.
*   **Cenário 4:** Seleção de serviço ➔ Escolha de data/horário ➔ Confirmação.
*   **Cenário 6:** Abrir Chat ➔ Digitar mensagem ➔ Anexar imagem ➔ Enviar.

---

## 5. Ferramentas Utilizadas
O ambiente de teste foi composto pelas seguintes tecnologias:

*   **Hardware:** Dispositivos móveis reais (Sistema Android).
*   **Framework:** React Native.
*   **Backend/Database:** Firebase (Realtime Database & Storage).

---

## 6. Considerações Finais
Os testes validaram que as funcionalidades principais atendem aos requisitos definidos. A abordagem guiada foi fundamental para identificar pontos de ajuste na interface, garantindo que o fluxo entre o agendamento e a conclusão do serviço ocorra sem impedimentos técnicos.

---
*Documento atualizado em: 14/05/2026*
