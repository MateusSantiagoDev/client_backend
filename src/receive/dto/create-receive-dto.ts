import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateReceiveDto {
  @IsString()
  @ApiProperty({
    description: 'Identificação do recebimento',
  })
  title: string;

  @IsNumber()
  @ApiProperty({
    description: 'Valor a receber',
  })
  value: number;

  @IsString()
  @ApiProperty({
    description: 'Data do recebimento',
  })
  date: string;

  @IsString()
  @ApiProperty({
    description: 'Observação sobre o recebimento',
  })
  note: string;
}
