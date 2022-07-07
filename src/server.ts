import express from 'express'

import { categoriesRouter } from './routes/categories.routes'

const app = express()

app.use(express.json())
app.use('/categories', categoriesRouter)

app.listen(3333, () => {
   console.log('ᕦ(ツ)ᕤ Server started at http://localhost:3333')
})
