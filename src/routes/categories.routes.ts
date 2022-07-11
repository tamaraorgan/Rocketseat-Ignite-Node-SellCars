import express from 'express'
import { CategoriesController } from '../modules/cars/controllers/categories/Categories.controller'
import { CreateCategoryService } from '../modules/cars/services/CreateCategory.service'

const categoriesRouter = express.Router()
const categoriesController = new CategoriesController()

categoriesRouter.get('/', (request, response) => {
   const categories = categoriesController.list()

   return response.json(categories)
})

categoriesRouter.post('/', (request, response) => {
   const { name, description } = request.body

   const createCategoryService = new CreateCategoryService(categoriesController)

   createCategoryService.execute({ name, description })

   return response
      .status(201)
      .json({ message: 'Category created successfully!' })
})

export { categoriesRouter }
