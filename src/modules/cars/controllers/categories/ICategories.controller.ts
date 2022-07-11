import { Category } from '../../model/category.model'

//DTO -> Data Transfer object - pega os valores da rota e transfere para o controllers
interface ICreateCategoryDTO {
   name: string
   description: string
}

interface ICategoriesController {
   findByName(name: string): Category
   list(): Category[]
   create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesController, ICreateCategoryDTO }
