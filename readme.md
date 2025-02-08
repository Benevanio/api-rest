# 🎮 API de Gerenciamento de Jogos

Uma API simples construída com **Express.js** para gerenciar uma coleção de jogos.

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **Body-Parser**

## 📌 Instalação e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/Benevanio/api-rest.git
   cd api-rest
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor:
   ```sh
   node app.js
   ```

4. Acesse no navegador ou via Postman:
   ```sh
   http://localhost:3000
   ```

## 📜 Endpoints

### 🔹 Listar todos os jogos
**GET** `/games`
```json
Resposta:
[
  { "id": 23, "title": "Call of Duty", "year": 2019, "price": 60 },
  { "id": 65, "title": "Sea of Thieves", "year": 2018, "price": 40 }
]
```

### 🔹 Obter um jogo por ID
**GET** `/game/:id`
```json
Resposta (200 OK):
{
  "id": 23,
  "title": "Call of Duty",
  "year": 2019,
  "price": 60
}
```
Caso não encontrado:
```json
Resposta (404 Not Found)
```

### 🔹 Adicionar um novo jogo
**POST** `/game`
```json
Requisição:
{
  "title": "GTA V",
  "year": 2015,
  "price": 30
}
```
Resposta:
```json
Status 200 OK
```

### 🔹 Atualizar um jogo por ID
**PUT** `/game/:id`
```json
Requisição:
{
  "title": "GTA VI",
  "year": 2025,
  "price": 70
}
```
Resposta:
```json
Status 200 OK
```

### 🔹 Remover um jogo por ID
**DELETE** `/game/:id`
```json
Resposta:
Status 200 OK
```

### 🔹 Atualizar parcialmente um jogo por ID
**PATCH** `/game/:id`
```json
Requisição:
{
  "price": 50
}
```
Resposta:
```json
Status 200 OK
```

## 📌 Observações
- A API não possui banco de dados, os dados são armazenados em um array local (**DB.games**).
- IDs são fixos e não são gerados dinamicamente.

## 🛠️ Melhorias Futuras
- Implementação de um banco de dados (MongoDB ou MySQL)
- Geração automática de IDs únicos
- Melhor tratamento de erros

📢 **Contribuições são bem-vindas!** 🚀

## 🔗 Link do Repositório
[GitHub - Benevanio/api-rest](https://github.com/Benevanio/api-rest)

