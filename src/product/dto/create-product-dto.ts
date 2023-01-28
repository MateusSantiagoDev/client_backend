import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'Quantidade do produto',
  })
  amount: number;

  @IsNumber()
  @ApiProperty({
    description: 'Preço do produto',
  })
  price: number;

  @IsString()
  @ApiProperty({
    description: 'Validade do produto',
  })
  validity: string;

  @IsString()
  @ApiProperty({
    description: 'Código do produto',
  })
  code: string;
}
