const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mongoURI = "Estou com preguiça de colocar o link do MongoDB";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error("Erro ao conectar ao MongoDB:", err));


const GameSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4() },
    title: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true }
});
const UserSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4() },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const Game = mongoose.model("Game", GameSchema);

app.get("/", (req, res) => {
    //login

});
app.get("/games", async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar os jogos" });
    }
});
app.get("/game/:id", async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (game) {
            res.json(game);
        } else {
            res.status(404).json({ error: "Jogo não encontrado" });
        }
    } catch (err) {
        res.status(400).json({ error: "ID inválido" });
    }
});

app.post("/game", async (req, res) => {
    try {
        const { title, price, year } = req.body;

        if (!title || !price || !year) {
            return res.status(400).json({ error: 'Campos título, preço e ano são obrigatórios.' });
        }

        const newGame = new Game({
            title,
            price,
            year
        });

        await newGame.save();
        res.status(201).json(newGame);
    } catch (err) {
        console.error("Erro ao adicionar jogo:", err);
        res.status(400).json({ error: "Erro ao adicionar jogo" });
    }
});

app.put("/game/:id", async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedGame) {
            res.json(updatedGame);
        } else {
            res.status(404).json({ error: "Jogo não encontrado" });
        }
    } catch (err) {
        res.status(400).json({ error: "Erro ao atualizar jogo" });
    }
});

app.delete("/game/:id", async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);
        if (deletedGame) {
            res.json({ message: "Jogo deletado com sucesso" }); 
        } else {
            res.status(404).json({ error: "Jogo não encontrado" }); 
        }
    } catch (err) {
        res.status(400).json({ error: "Erro ao deletar jogo" });
    }
});

app.post("/auth", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ error: "Usuário e/ou senha inválidos" });
        }
    } catch (err) {
        console.log(error)
    }
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
