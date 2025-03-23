import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, Matches } from 'class-validator';
import { CustomerType, CustomerStatus } from '../entities/customer.entity';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  businessName?: string;

  @IsNotEmpty()
  @IsString()
  document: string;

  @IsEnum(CustomerType)
  type: CustomerType;

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

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  addressNumber: string;

  @IsOptional()
  @IsString()
  addressComplement?: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Z]{2}$/)
  state: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{8}$|^\d{5}-\d{3}$/)
  zipCode: string;

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