import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePayDto } from './dto/create-pay-dto';
import { UpdatePayDto } from './dto/update-pay-dto';
import { PayEntity } from './entities/PayEntity';
import { PayService } from './pay.service';

  
  @ApiTags('Pay')
  @Controller('pay')
  export class PayController {
    constructor(private readonly service: PayService) {}
  
    @ApiOperation({
      summary: 'Adicionar um novo Pagamento',
    })
    @Post()
    async create(@Body() dto: CreatePayDto): Promise<PayEntity> {
      try {
        return await this.service.create(dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar todos os Pagamentos',
    })
    @Get()
    async findAll(): Promise<PayEntity[]> {
      try {
        return await this.service.findAll();
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar um Pagamento pelo ID',
    })
    @Get(':id')
    async findById(@Param('id') id: string): Promise<PayEntity> {
      try {
        return await this.service.findById(id);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Atualizar um Pagamento pelo ID',
    })
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() dto: UpdatePayDto,
    ): Promise<PayEntity> {
      try {
        return await this.service.update(id, dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Excluir um Pagamento pelo ID',
    })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<PayEntity> {
      try {
        return await this.service.delete(id);
      } catch (err) {}
    }
  }