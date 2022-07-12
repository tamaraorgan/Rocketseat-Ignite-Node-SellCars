import express from 'express'

import { createCategoryController } from '../modules/cars/useCases/categories/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/categories/listCategories'


const categoriesRouter = express.Router()

categoriesRouter.get('/', (request, response) => {
   return listCategoriesController.handle(request, response)
})

categoriesRouter.post('/', (request, response) => {
   return createCategoryController.handle(request, response)
})

export { categoriesRouter }
