#!/bin/bash

echo "=== Iniciando o ambiente de desenvolvimento do NetProvider ERP ==="

# Verificar se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "Docker não encontrado. Por favor, instale o Docker primeiro."
    exit 1
fi

# Verificar se o Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose não encontrado. Por favor, instale o Docker Compose primeiro."
    exit 1
fi

# Subir os containers de infraestrutura
echo "Iniciando a infraestrutura (PostgreSQL, Redis, Kafka)..."
docker-compose -f docker-compose.dev.yml up -d

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
    echo "npm não encontrado. Por favor, instale o Node.js e npm primeiro."
    echo "Ambiente parcialmente iniciado (somente infraestrutura)."
    echo "Para acessar o Adminer (gerenciador de banco de dados), visite: http://localhost:8080"
    echo "Usuário: netprovider, Senha: netprovider123, Servidor: postgres, Banco de dados: netprovider"
    exit 0
fi

# Instalar dependências do backend
echo "Instalando dependências do backend..."
cd backend
npm install
echo "Dependências do backend instaladas."

# Instalar dependências do frontend
echo "Instalando dependências do frontend..."
cd ../frontend
npm install
echo "Dependências do frontend instaladas."

echo "=== Ambiente de desenvolvimento inicializado com sucesso ==="
echo ""
echo "Para iniciar o backend em modo de desenvolvimento, execute:"
echo "cd backend && npm run start:dev"
echo ""
echo "Para iniciar o frontend em modo de desenvolvimento, execute:"
echo "cd frontend && npm run dev"
echo ""
echo "Para acessar o Adminer (gerenciador de banco de dados), visite: http://localhost:8080"
echo "Usuário: netprovider, Senha: netprovider123, Servidor: postgres, Banco de dados: netprovider" 