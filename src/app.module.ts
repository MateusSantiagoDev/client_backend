import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancialModule } from './financial/Financial.module';
import { PayModule } from './pay/Pay.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/Product.module';
import { ReceiveModule } from './receive/Receive.module';
import { SangriaModule } from './sangria/sangria.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule, ProductModule, FinancialModule, SangriaModule, PayModule, ReceiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
