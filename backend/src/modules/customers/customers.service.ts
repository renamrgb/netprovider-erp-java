import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Customer, CustomerStatus } from './entities/customer.entity';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const existingCustomer = await this.customersRepository.findOne({
      where: { document: createCustomerDto.document },
    });

    if (existingCustomer) {
      throw new ConflictException('Documento já cadastrado no sistema');
    }

    const customer = this.customersRepository.create(createCustomerDto);

    // Criptografa a senha se fornecida
    if (customer.password) {
      customer.password = await bcrypt.hash(customer.password, 10);
    }

    return this.customersRepository.save(customer);
  }

  async findAll(
    status?: CustomerStatus,
    search?: string,
  ): Promise<Customer[]> {
    const query = this.customersRepository.createQueryBuilder('customer');

    if (status) {
      query.andWhere('customer.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(customer.name ILIKE :search OR customer.document ILIKE :search OR customer.email ILIKE :search)',
        { search: `%${search}%` },
      );
    }

    return query.orderBy('customer.name', 'ASC').getMany();
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customersRepository.findOne({
      where: { id },
    });

    if (!customer) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    return customer;
  }

  async findByDocument(document: string): Promise<Customer> {
    const customer = await this.customersRepository.findOne({
      where: { document },
    });

    if (!customer) {
      throw new NotFoundException(`Cliente com documento ${document} não encontrado`);
    }

    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.findById(id);
    
    // Verificar se o documento está sendo alterado e se já existe
    if (updateCustomerDto.document && updateCustomerDto.document !== customer.document) {
      const existingCustomer = await this.customersRepository.findOne({
        where: { document: updateCustomerDto.document },
      });
      
      if (existingCustomer) {
        throw new ConflictException('Documento já cadastrado no sistema');
      }
    }

    // Se a senha estiver sendo atualizada, criptografa-la
    if (updateCustomerDto.password) {
      updateCustomerDto.password = await bcrypt.hash(updateCustomerDto.password, 10);
    }

    Object.assign(customer, updateCustomerDto);
    
    return this.customersRepository.save(customer);
  }

  async remove(id: string): Promise<void> {
    const customer = await this.findById(id);
    await this.customersRepository.remove(customer);
  }

  async updateLastLogin(id: string): Promise<void> {
    await this.customersRepository.update(id, {
      lastLogin: new Date(),
    });
  }

  async validateCustomerCredentials(document: string, password: string): Promise<Customer> {
    try {
      const customer = await this.findByDocument(document);
      
      if (!customer.password || !customer.isAccessEnabled) {
        return null;
      }
      
      const isPasswordValid = await bcrypt.compare(password, customer.password);
      
      if (!isPasswordValid) {
        return null;
      }
      
      return customer;
    } catch (error) {
      return null;
    }
  }
} 