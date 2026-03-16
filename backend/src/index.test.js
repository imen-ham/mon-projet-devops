const request = require('supertest')
const app = require('./index')

test('GET / retourne un message de succès', async () => {
  const res = await request(app).get('/')
  expect(res.statusCode).toBe(200)
  expect(res.body.message).toBe('API opérationnelle')
})

test('GET /tasks retourne une liste de tâches', async () => {
  const res = await request(app).get('/tasks')
  expect(res.statusCode).toBe(200)
  expect(Array.isArray(res.body)).toBe(true)
})