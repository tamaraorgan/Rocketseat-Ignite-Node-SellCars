import express from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json'
import { router } from './routes'


const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)


app.listen(3333, () => {
   console.log('ᕦ(ツ)ᕤ Server started at http://localhost:3333')
})
