import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono Backend!')
})

// NEW ROUTE 👇
app.get('/api/user', (c) => {
  return c.json({
    name: 'John Doe',
    role: 'Student'
  })
})

export default app