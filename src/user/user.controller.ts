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
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserEntity } from './entities/entity-user';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({
    summary: 'Criar um novo usuário',
  })
  @Post()
  async create(@Body() dto: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os usuários',
  })
  @Get()
  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar um usuário pelo ID',
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserEntity> {
    try {
      return await this.service.findById(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Atualizar um usuário pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UserEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Excluir um usuário pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {}
  }
}
