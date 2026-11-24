# Projeto Final AV2 — Banco de Dados NoSQL (MongoDB)

**Aluna:** Bianca Vitória Guimaro Dias  
**Turma:** 2 ATI  
**Disciplina:** Banco de Dados — Colégio UNASP  
**Professor:** Brian Samuel  
**Banco de Dados:** `TechStore_Bianca_Vitoria`  
**Cenário Escolhido:** Opção C — E-Commerce de Tecnologia e Hardware

---

## 1. Justificativa Arquitetural: Por que NoSQL em vez de SQL Relacional?

Para sustentar uma aplicação moderna de e-commerce de tecnologia e hardware, o modelo orientado a documentos do **MongoDB (NoSQL)** oferece vantagens técnicas decisivas em relação aos bancos relacionais tradicionais (SQL):

1. **Flexibilidade de Esquema (_Schema-less_):**  
   Em uma loja de hardware, produtos de categorias diferentes possuem atributos técnicos completamente distintos. Um processador exige campos como `soquete`, `nucleos` e `tdp_watts`, enquanto um monitor exige `polegadas`, `resolucao` e `taxa_atualizacao_hz`. Em um banco relacional, isso obrigaria a criação de dezenas de colunas nulas (`NULL`) ou estruturas complexas de tabelas auxiliares. No MongoDB, cada documento da coleção `Produtos` armazena exatamente as suas especificações dentro do subdocumento incorporado `especificacoes`, mantendo o banco limpo e flexível.

2. **Documentos Incorporados (_Embedded Documents_) e Desempenho:**  
   Na coleção `Pedidos`, os dados do cliente (`cliente: { ... }`) e a lista de produtos comprados (`itens: [ ... ]`) são armazenados diretamente dentro do próprio documento do pedido. Isso evita múltiplos `JOINs` pesados na leitura do histórico de compras e garante a integridade histórica da venda: caso o preço de um produto seja alterado posteriormente no catálogo, o valor pago no pedido já concluído permanece intacto.

3. **Escalabilidade Horizontal:**  
   Lojas virtuais enfrentam picos repentinos de acessos simultâneos (como em campanhas promocionais e Black Friday). O MongoDB facilita a distribuição dos dados em múltiplos servidores (_sharding_), garantindo alta disponibilidade e baixa latência tanto para consultas no catálogo quanto para o registro de novos pedidos.

---

## 2. Estrutura do Projeto

- **`TechStore_Bianca_Vitoria`** (Banco de dados no cluster MongoDB)
  - **`Produtos`**: Catálogo de hardware com tipos primitivos, arrays (`tags`) e subdocumentos variáveis (`especificacoes`).
  - **`Pedidos`**: Registro transacional de vendas com documentos incorporados (`cliente`), arrays de objetos (`itens`), status de entrega e formas de pagamento.
- **`projeto_av2_bianca.mongodb.js`**: Script completo contendo as 4 etapas obrigatórias (povoamento, consultas com operadores, atualizações/remoções e pipelines de agregação analítica).
