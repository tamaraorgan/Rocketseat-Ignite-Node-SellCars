import express from 'express'

import { CategoriesRepositories } from '../repositories/categories.repositories'


const categoriesRouter = express.Router()
const categoriesRepositories = new CategoriesRepositories()


categoriesRouter.get('/', (request, response) => {
   const categories = categoriesRepositories.list()

   return response.json(categories)
})

categoriesRouter.post('/', (request, response) => {
   const { name, description } = request.body

   const categoryAlreadyExists = categoriesRepositories.findByName(name)

   if(categoryAlreadyExists) {
      return response.status(400).json({error: "Category already exists!"})
   }

   categoriesRepositories.create({name, description})

   return response
      .status(201)
      .json({ message: 'Category created successfully!' })
})

export { categoriesRouter }
