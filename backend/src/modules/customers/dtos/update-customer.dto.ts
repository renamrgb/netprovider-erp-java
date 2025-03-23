import { IsEmail, IsEnum, IsOptional, IsString, MinLength, Matches } from 'class-validator';
import { CustomerType, CustomerStatus } from '../entities/customer.entity';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  businessName?: string;

  @IsOptional()
  @IsEnum(CustomerType)
  type?: CustomerType;

  @IsOptional()
  @IsEnum(CustomerStatus)
  status?: CustomerStatus;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  mobilePhone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  addressNumber?: string;

  @IsOptional()
  @IsString()
  addressComplement?: string;

  @IsOptional()
  @IsString()
  neighborhood?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[A-Z]{2}$/, { message: 'Estado deve ser um código de 2 letras maiúsculas (exemplo: SP)' })
  state?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d{8}$|^\d{5}-\d{3}$/, { message: 'CEP deve estar no formato 00000000 ou 00000-000' })
  zipCode?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  isAccessEnabled?: boolean;
} 