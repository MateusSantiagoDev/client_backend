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
import { CreateFinancialDto } from './dto/create-financial-dto';
import { UpdateFinancialDto } from './dto/update-financial-dto';
import { FinancialEntity } from './entities/financialEntity';


  
  @ApiTags('Product')
  @Controller('product')
  export class FinancialController {
    constructor(private readonly service: FinancialService) {}
  
    @ApiOperation({
      summary: 'Adicionar um novo Produto',
    })
    @Post()
    async create(@Body() dto: CreateFinancialDto): Promise<FinancialEntity> {
      try {
        return await this.service.create(dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar todos os Produtos',
    })
    @Get()
    async findAll(): Promise<FinancialEntity[]> {
      try {
        return await this.service.findAll();
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar um Produto pelo ID',
    })
    @Get(':id')
    async findById(@Param('id') id: string): Promise<FinancialEntity> {
      try {
        return await this.service.findById(id);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Atualizar um Produto pelo ID',
    })
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() dto: UpdateFinancialDto,
    ): Promise<FinancialEntity> {
      try {
        return await this.service.update(id, dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Excluir um Produto pelo ID',
    })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<FinancialEntity> {
      try {
        return await this.service.delete(id);
      } catch (err) {}
    }
  }