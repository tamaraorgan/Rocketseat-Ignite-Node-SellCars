import express from 'express'
import { SpecificationsController } from '../modules/cars/controllers/specifications/Specifications.controller'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecification.service'

const specificationsRouter = express.Router()
const specificationsController = new SpecificationsController()

specificationsRouter.get('/', (request, response) => {
   const specification = specificationsController.list()

   return response.json(specification)
})

specificationsRouter.post('/', (request, response) => {
   const { name, description } = request.body

   const createSpecificationService = new CreateSpecificationService(
      specificationsController
   )

   createSpecificationService.execute({ name, description })

   return response
      .status(201)
      .json({ message: 'Specification created successfully!' })
})

export { specificationsRouter }
