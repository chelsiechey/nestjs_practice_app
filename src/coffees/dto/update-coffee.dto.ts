import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// Partial Type marks all fields as optional and inherits validation rules
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
