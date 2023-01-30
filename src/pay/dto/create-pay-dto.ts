import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreatePayDto {
  @IsString()
  @ApiProperty({
    description: 'Identificação do pagamento',
  })
  title: string;

  @IsNumber()
  @ApiProperty({
    description: 'Valor do pagamento',
  })
  value: number;

  @IsString()
  @ApiProperty({
    description: 'Data do pagamento',
  })
  date: string;

  @IsString()
  @ApiProperty({
    description: 'Observação sobre o pagamento',
  })
  node: string;
}
