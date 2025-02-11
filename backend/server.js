import express from 'express'
import cors from 'cors'
import { bunnyRouter, chatRoutes, userRoutes, postRoutes, pimpRoutes } from './routes/index.js'

const app = express()
app.use(
  cors({
    origin: '*',
  }),
)

app.use(express.json())

app.use('/bunny', bunnyRouter)
app.use('/chat', chatRoutes)
app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/pimps', pimpRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World',
  })
})
