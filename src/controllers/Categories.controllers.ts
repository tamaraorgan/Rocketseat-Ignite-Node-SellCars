import { Category } from '../model/category.model'
import { ICategoriesControllers, ICreateCategoryDTO } from './ICategories.controllers'

class CategoriesController implements ICategoriesControllers {
   private categories: Category[] = []

   constructor() {
      this.categories = []
   }

   findByName(name: string) {
      const category = this.categories.find(category => category.name === name)

      return category
   }

   list(): Category[] {
      return this.categories
   }

   create({ name, description }: ICreateCategoryDTO): void {
      // Quando usamos o new é para instanciar uma classe ou seja para poder usar ela
      const category = new Category()

      /* O método Object.assign()é usado para copiar os valores de todas as propriedades como 
      enumeráveis ​​de um ou mais objetos de origem para um destino de objeto . 
      Este método irá retornar o objeto destino . 
   */
      Object.assign(category, {
         name,
         description,
         created_at: new Date()
      })

      this.categories.push(category)
   }
}

export { CategoriesController }
