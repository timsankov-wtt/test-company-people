import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [ConfigModule.forRoot(), CompanyModule],
})
export class AppModule {}
