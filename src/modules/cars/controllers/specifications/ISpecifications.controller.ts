import { Specification } from '../../model/Specification.model'

//DTO -> Data Transfer object - pega os valores da rota e transfere para o controllers
interface ICreateSpecificationDTO {
   name: string
   description: string
}

interface ISpecificationsController {
   findByName(name: string): Specification
   list(): Specification[]
   create({ name, description }: ICreateSpecificationDTO): void
}

export { ISpecificationsController, ICreateSpecificationDTO }
