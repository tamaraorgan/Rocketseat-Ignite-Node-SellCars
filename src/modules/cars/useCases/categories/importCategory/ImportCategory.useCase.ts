import fs from 'fs'
import { parse } from 'csv-parse'

class ImportCategoryUseCase {
   execute(file: any): void {
      const stream = fs.createReadStream(file.path)

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile.on('data', async line => {
         console.log(line)
      })
   }
}
export { ImportCategoryUseCase }
