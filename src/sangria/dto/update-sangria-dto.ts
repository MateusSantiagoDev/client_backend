import { PartialType } from "@nestjs/swagger";
import { CreateSangriaDto } from "./create-sangria-dto";

export class UpdateSangriaDto extends PartialType(CreateSangriaDto) {}