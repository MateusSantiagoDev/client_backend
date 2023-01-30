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
import { HandleException } from 'src/exceptions/handleException';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';
import { ProductEntity } from './entities/ProductEntity';
import { ProductService } from './Product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @ApiOperation({
    summary: 'Adicionar um novo Produto',
  })
  @Post()
  async create(@Body() dto: CreateProductDto): Promise<ProductEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      HandleException(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todos os Produtos',
  })
  @Get()
  async findAll(): Promise<ProductEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar um Produto pelo ID',
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<ProductEntity> {
    try {
      return await this.service.findById(id);
    } catch (err) {
      HandleException(err);
    }
  }

  @ApiOperation({
    summary: 'Atualizar um Produto pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<ProductEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      HandleException(err);
    }
  }

  @ApiOperation({
    summary: 'Excluir um Produto pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      HandleException(err);
    }
  }
}
