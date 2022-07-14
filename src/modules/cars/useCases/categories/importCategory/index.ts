import { ImportCategoryController } from './ImportCategory.controller'
import { ImportCategoryUseCase } from './ImportCategory.useCase'

const importCategoryUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(
   importCategoryUseCase
)

export { importCategoryController }
