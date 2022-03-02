import {
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  IsOptional,
  IsString,
  MaxLength,
  IsNotEmpty,
  isEmail,
  IsEmail,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CrudValidationGroups } from '@nestjsx/crud';
import { User } from 'src/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('companies')
export class Company extends BaseEntity {
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
  @IsEmail({ groups: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @OneToMany(() => User, (user) => user.company)
  @Type(() => User)
  users: User[];
}
