import { User } from 'src/user/user.entity';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: User,
  },
  params: {
    companyId: {
      field: 'companyId',
      type: 'number',
    },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    sort: [
      {
        field: 'createAt',
        order: 'ASC',
      },
    ],
  },
})
@ApiTags('user')
@Controller('/company/:companyId/user')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
