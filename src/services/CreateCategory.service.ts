import { ICategoriesControllers } from '../controllers/ICategories.controllers'

interface IRequest {
   name: string
   description: string
}
// o service é responsável pela regra de negócio
// Inversão de dependência - onde chama o controller para ter acesso ao  private categories: Category[] = []
class CreateCategoryService {
   constructor(private categoriesController: ICategoriesControllers) {}

   execute({ name, description }: IRequest) {
      const categoryAlreadyExists = this.categoriesController.findByName(name)

      if (categoryAlreadyExists) {
         throw new Error('Category already exists!')
      }

      this.categoriesController.create({ name, description })
   }
}

export { CreateCategoryService }