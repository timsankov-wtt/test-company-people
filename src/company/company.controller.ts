import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Crud({
  model: {
    type: Company,
  },
  query: {
    join: {
      users: { eager: true },
    },
  },
})
@ApiTags('company')
@Controller('company')
export class CompanyController implements CrudController<Company> {
  constructor(public service: CompanyService) {}
}
