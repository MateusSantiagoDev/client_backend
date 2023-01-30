import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancialModule } from './financial/Financial.module';
import { PayModule } from './pay/pay.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/Product.module';
import { SangriaModule } from './sangria/sangria.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule, ProductModule, FinancialModule, SangriaModule, PayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
