import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import {
  IsOptional,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsMobilePhone,
} from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Company } from 'src/company/company.entity';
import { ApiProperty } from '@nestjs/swagger';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  address: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @IsMobilePhone(['en-US', 'uk-UA'], {
    message: 'Example: +12494322456',
    always: true,
  })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', nullable: true })
  mobile: string;

  @ManyToOne(() => Company, (company) => company.users)
  company: Company;

  @Column({ nullable: false })
  companyId?: number;

  @CreateDateColumn()
  createAt: Date;
}
