import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'CPF do usuário',
  })
  cpf: string;

  @IsString()
  @ApiProperty({
    description: 'RG do usuário',
  })
  rg: string;

  @IsString()
  @ApiProperty({
    description: 'Contato do usuário',
  })
  contact: string;

  @IsString()
  @ApiProperty({
    description: 'role do usuário',
  })
  role: string;

  @IsString()
  @ApiProperty({
    description: 'Senha do usuário',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'confirmação da senha do usuário',
  })
  confirmPassword: string;
}
