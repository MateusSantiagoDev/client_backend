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
import { CreateReceiveDto } from './dto/create-receive-dto';
import { UpdateReceiveDto } from './dto/update-receive-dto';
import { ReceiveEntity } from './entities/ReceiveEntity';
import { ReceiveService } from './Receive.service';


  
  @ApiTags('Receive')
  @Controller('receive')
  export class ReceiveController {
    constructor(private readonly service: ReceiveService) {}
  
    @ApiOperation({
      summary: 'Adicionar um novo recebimento',
    })
    @Post()
    async create(@Body() dto: CreateReceiveDto): Promise<ReceiveEntity> {
      try {
        return await this.service.create(dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar todos os recebimentos',
    })
    @Get()
    async findAll(): Promise<ReceiveEntity[]> {
      try {
        return await this.service.findAll();
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Visualizar um recebimento pelo ID',
    })
    @Get(':id')
    async findById(@Param('id') id: string): Promise<ReceiveEntity> {
      try {
        return await this.service.findById(id);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Atualizar um recebimento pelo ID',
    })
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() dto: UpdateReceiveDto,
    ): Promise<ReceiveEntity> {
      try {
        return await this.service.update(id, dto);
      } catch (err) {}
    }
  
    @ApiOperation({
      summary: 'Excluir um recebimento pelo ID',
    })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ReceiveEntity> {
      try {
        return await this.service.delete(id);
      } catch (err) {}
    }
  }