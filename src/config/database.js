require('dotenv').config();

module.exports = {
  /* MySQL */
  dialect: 'mysql', // Define o dialect como MySQL
  host: process.env.DATABASE_HOST || '127.0.0.1', // Usa o valor do .env ou 127.0.0.1 como padrão
  port: process.env.DATABASE_PORT || 3306, // Porta padrão para o MySQL
  username: process.env.DATABASE_USERNAME || 'root', // Usuário padrão
  password: process.env.DATABASE_PASSWORD || '', // Senha padrão no XAMPP é vazia
  database: process.env.DATABASE || 'database_development', // Nome do banco de dados
  dialectOptions: {
    timezone: 'America/Sao_Paulo', // Configuração de fuso horário
  },
  timezone: 'America/Sao_Paulo', // Configuração de fuso horário

  /* Configurações globais */
  define: {
    timestamps: true, // Cria automaticamente os campos createdAt e updatedAt
    underscored: true, // Usa snake_case em vez de camelCase para colunas
    underscoredAll: true, // Aplica snake_case a todas as tabelas e colunas
    createdAt: 'created_at', // Nomeia o campo de criação como created_at
    updatedAt: 'updated_at', // Nomeia o campo de atualização como updated_at
  },
};
