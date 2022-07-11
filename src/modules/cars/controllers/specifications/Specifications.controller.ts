import { Specification } from '../../model/Specification.model'
import {
   ISpecificationsController,
   ICreateSpecificationDTO
} from './ISpecifications.controller'

class SpecificationsController implements ISpecificationsController {
   private specifications: Specification[] = []

   constructor() {
      this.specifications = []
   }

   findByName(name: string) {
      const specification = this.specifications.find(
         specification => specification.name === name
      )

      return specification
   }

   list(): Specification[] {
      return this.specifications
   }

   create({ name, description }: ICreateSpecificationDTO): void {
      const specification = new Specification()

      Object.assign(specification, {
         name,
         description,
         created_at: new Date()
      })

      this.specifications.push(specification)
   }
}

export { SpecificationsController }
