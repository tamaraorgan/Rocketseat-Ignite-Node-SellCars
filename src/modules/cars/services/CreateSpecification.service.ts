import { ISpecificationsController } from '../controllers/specifications/ISpecifications.controller'

interface IRequest {
   name: string
   description: string
}

class CreateSpecificationService {
   constructor(private specificationsController: ISpecificationsController) {}

   execute({ name, description }: IRequest) {
      const specificationAlreadyExists = this.specificationsController.findByName(name)

      if (specificationAlreadyExists) {
         throw new Error('Specification already exists!')
      }

      this.specificationsController.create({ name, description })
   }
}

export { CreateSpecificationService }
