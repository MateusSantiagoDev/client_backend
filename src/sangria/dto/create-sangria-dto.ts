import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSangriaDto {
  @IsNumber()
  @ApiProperty({
    description: 'Valor da sangria',
  })
  value: number;

  @IsString()
  @ApiProperty({
    description: 'Data da sangria',
  })
  date: string;

  @IsString()
  @ApiProperty({
    description: 'Motivo da sangria',
  })
  note: string;
}
