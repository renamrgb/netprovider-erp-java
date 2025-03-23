# NetProvider - Sistema ERP para Provedores de Internet

## Visão Geral

O NetProvider é um sistema ERP (Enterprise Resource Planning) completo desenvolvido especificamente para provedores de internet. Ele oferece um conjunto abrangente de funcionalidades para gerenciar todos os aspectos do negócio, desde o controle de estoque até o gerenciamento financeiro e suporte ao cliente.

## Funcionalidades Principais

- **Controle de Estoque**: Gerenciamento completo de equipamentos, peças e materiais
- **Gestão Financeira**: Geração de boletos, carnês, controle de pagamentos e relatórios financeiros
- **Área do Cliente**: Portal de autoatendimento para clientes verificarem faturas, planos e solicitarem suporte
- **Controle de Planos**: Gerenciamento de planos de internet, pacotes e promoções
- **Monitoramento de Rede**: Integração com equipamentos de rede para monitoramento e diagnóstico
- **Gestão de Ordem de Serviço**: Controle de instalações, manutenções e atendimentos
- **Dashboard Gerencial**: Visão consolidada de indicadores de desempenho do negócio

## Arquitetura

O sistema foi desenvolvido seguindo uma arquitetura de microserviços modulares, utilizando o padrão CQRS (Command Query Responsibility Segregation) e Event Sourcing para garantir escalabilidade, manutenibilidade e resiliência.

### Tecnologias Utilizadas

- **Backend**: Node.js com NestJS
- **Frontend**: React com Next.js
- **Mobile**: React Native
- **Banco de Dados**: PostgreSQL
- **Mensageria**: Apache Kafka
- **Cache**: Redis
- **Proxy/Gateway**: NGINX
- **Containerização**: Docker e Docker Compose

### Estrutura do Projeto

O projeto segue uma estrutura de monorepo para facilitar o desenvolvimento e a integração entre os diferentes componentes:

```
provider-erp/
├── backend/         # Serviços de backend em NestJS
├── frontend/        # Aplicação web em Next.js
├── mobile/          # Aplicação móvel em React Native
├── infrastructure/  # Configurações de infraestrutura (Docker, K8s)
└── docs/            # Documentação detalhada do sistema
```

## Event Sourcing e CQRS

### Event Sourcing

O sistema utiliza o padrão Event Sourcing para armazenar todas as mudanças de estado como uma sequência de eventos. Isso proporciona:

1. **Auditoria Completa**: Histórico detalhado de todas as alterações
2. **Reconstrução de Estado**: Capacidade de reconstruir o estado do sistema em qualquer ponto no tempo
3. **Desacoplamento**: Separação entre o registro de eventos e a projeção desses eventos

### CQRS (Command Query Responsibility Segregation)

O padrão CQRS separa as operações de leitura (queries) das operações de escrita (commands):

1. **Commands**: Alteram o estado do sistema e geram eventos
2. **Queries**: Leem dados das projeções otimizadas para consulta
3. **Event Handlers**: Processam eventos e atualizam as projeções

Esta separação permite otimizar cada camada para seu propósito específico, melhorando a performance e a escalabilidade.

## Módulos do Sistema

### Módulo de Usuários e Autenticação
- Gerenciamento de usuários do sistema (administradores, técnicos, atendentes, etc.)
- Autenticação segura com JWT e controle de acesso baseado em papéis (RBAC)
- Auditoria de ações dos usuários

### Módulo de Clientes
- Cadastro completo de clientes (pessoas físicas e jurídicas)
- Histórico de atendimentos, pagamentos e serviços contratados
- Gestão de documentos e contratos

### Módulo de Estoque
- Controle de entrada e saída de equipamentos e materiais
- Gestão de fornecedores
- Alertas de estoque baixo e relatórios de inventário
- Rastreabilidade de equipamentos instalados em clientes

### Módulo Financeiro
- Geração e controle de faturas e boletos
- Integração com gateways de pagamento
- Conciliação bancária
- Relatórios financeiros e DRE
- Gestão de inadimplência

### Módulo de Planos e Serviços
- Configuração de planos de internet e serviços adicionais
- Gestão de promoções e descontos
- Regras de negócio para upgrades e downgrades

### Módulo de Rede
- Monitoramento de equipamentos de rede
- Diagnóstico de problemas de conectividade
- Mapeamento da topologia da rede
- Integração com sistemas de monitoramento (SNMP, etc.)

### Módulo de Ordens de Serviço
- Agendamento de instalações e manutenções
- Roteirização de técnicos
- Acompanhamento em tempo real de atendimentos
- Avaliação de qualidade dos serviços prestados

## Segurança

O sistema implementa múltiplas camadas de segurança:

- Criptografia de dados sensíveis em repouso e em trânsito
- Autenticação multifator
- Controle de acesso baseado em papéis (RBAC)
- Conformidade com LGPD e outras regulamentações de proteção de dados
- Auditorias de segurança e logs detalhados de atividades

## Instalação e Execução

### Pré-requisitos
- Docker e Docker Compose
- Git

### Passos para Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/netprovider.git
cd netprovider
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

3. Inicie os serviços com Docker Compose:
```bash
docker-compose up -d
```

4. Acesse o sistema:
- Frontend: http://localhost:80
- API: http://localhost:80/api
- Área do cliente: http://localhost:80/cliente

## Contribuição

Para contribuir com o projeto, siga estes passos:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença [a definir]. 