# NetProvider ERP

## Sobre o Projeto

NetProvider é um sistema ERP (Enterprise Resource Planning) desenvolvido especificamente para provedores de internet. O sistema oferece um conjunto completo de funcionalidades para gerenciar todos os aspectos de uma empresa provedora de serviços de internet.

## Arquitetura

O projeto utiliza uma arquitetura de microserviços baseada em Event Sourcing e CQRS (Command Query Responsibility Segregation), proporcionando escalabilidade, resiliência e manutenibilidade.

### Principais componentes:

- **API Gateway**: Ponto de entrada único para todas as requisições do cliente
- **Serviços Backend**:
  - Gestão de Inventário
  - Sistema Financeiro
  - Gestão de Clientes
  - Controle de Rede
  - Gestão de Planos
- **Frontend Angular**: Interface web para administradores e operadores
- **Aplicativo Mobile**: Interface para técnicos e clientes

### Diagrama de Arquitetura

(Diagrama será adicionado posteriormente)

## Event Sourcing

O NetProvider ERP implementa o padrão Event Sourcing, o que significa que:

1. Todas as mudanças no estado do sistema são capturadas como uma sequência de eventos
2. Os eventos são armazenados perpetuamente
3. O estado atual pode ser reconstruído a partir dos eventos
4. Isso proporciona um histórico completo e auditável de todas as alterações

### Benefícios do Event Sourcing

- **Auditoria completa**: Cada alteração no sistema é registrada como um evento imutável
- **Reconstrução de estado**: Possibilidade de reconstruir o estado do sistema em qualquer ponto do tempo
- **Desacoplamento**: Os serviços podem evoluir independentemente
- **Escalabilidade**: Capacidade de escalar componentes de leitura e escrita separadamente

## Tecnologias

- **Backend**: Java 21 com Spring Boot
- **Frontend**: Angular 16
- **Mobile**: Kotlin
- **Banco de Dados**: PostgreSQL (dados relacionais), MongoDB (dados não estruturados)
- **Mensageria**: Kafka
- **Containerização**: Docker
- **Proxy/Roteamento**: NGINX

## Funcionalidades

- Controle de estoque completo
- Sistema financeiro integrado (boletos, carnês, pagamentos)
- Área do cliente
- Gestão de planos
- Comunicação com equipamentos de rede
- Relatórios e dashboards
- Segurança e criptografia de dados sensíveis

## Segurança

- Criptografia end-to-end para dados sensíveis
- Conformidade com regulamentações de proteção de dados (LGPD/GDPR)
- Autenticação multifator
- Auditoria completa de ações no sistema

## Começando

(Instruções de setup serão adicionadas à medida que o projeto for desenvolvido)

## Licença

(Licença a definir) 