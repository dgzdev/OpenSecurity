const express = require("express");
const app = express();
const port = 3000;

// Importando rotas e controladores
const indexRoutes = require("./routes/index");
const indexController = require("./controllers/indexController");

// Serve arquivos estáticos da pasta 'public'
app.use(express.static("public"));

// Trust Proxy
app.set('trust proxy', true)

// Rota inicial
app.use("/", indexRoutes);

// Inicia o servidor
app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
