const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

// Route de base pour vérifier que le serveur tourne
app.get('/', (req, res) => {
  res.json({ message: 'API opérationnelle' })
})

// Route pour récupérer les tâches
app.get('/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Faire le TP DevOps', done: false },
    { id: 2, title: 'Pousser sur GitHub', done: false }
  ])
})

module.exports = app

// On démarre le serveur seulement si ce fichier est exécuté directement
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`)
  })
}