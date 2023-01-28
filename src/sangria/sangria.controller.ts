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
import { CreateSangriaDto } from './dto/create-sangria-dto';
import { UpdateSangriaDto } from './dto/update-sangria-dto';
import { SangriaEntity } from './entities/SangriaEntity';
import { SangriaService } from './sangria.service';

  
  @ApiTags('Sangria')
  @Controller('sangria')
  export class SangriaController {
    constructor(private readonly service: SangriaService) {}
  
    @ApiOperation({
      summary: 'Adicionar um novo valor',
    })
    @Post()
    async create(@Body() dto: CreateSangriaDto): Promise<SangriaEntity> {
      try {
        return await this.service.create(dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar todos os valores',
    })
    @Get()
    async findAll(): Promise<SangriaEntity[]> {
      try {
        return await this.service.findAll();
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar um valor pelo ID',
    })
    @Get(':id')
    async findById(@Param('id') id: string): Promise<SangriaEntity> {
      try {
        return await this.service.findById(id);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Atualizar um valor pelo ID',
    })
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() dto: UpdateSangriaDto,
    ): Promise<SangriaEntity> {
      try {
        return await this.service.update(id, dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Excluir um valor pelo ID',
    })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<SangriaEntity> {
      try {
        return await this.service.delete(id);
      } catch (err) {}
    }
  }
  