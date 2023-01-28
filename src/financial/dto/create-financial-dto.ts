import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateFinancialDto {
  @IsNumber()
  @ApiProperty({
    description: 'Valor todal',
  })
  total_amount: number;

  @IsNumber()
  @ApiProperty({
    description: 'Valor no crédito',
  })
  credit: number;

  @IsNumber()
  @ApiProperty({
    description: 'Valor no débito',
  })
  debit: number;

  @IsNumber()
  @ApiProperty({
    description: 'Valor em dinheiro',
  })
  cash: number;
}
