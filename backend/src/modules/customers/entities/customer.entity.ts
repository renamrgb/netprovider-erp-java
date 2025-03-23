import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export enum CustomerType {
  INDIVIDUAL = 'individual',
  BUSINESS = 'business',
}

export enum CustomerStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
  PENDING = 'pending',
}

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  businessName?: string;

  @Column({ unique: true })
  document: string; // CPF (individual) or CNPJ (business)

  @Column({
    type: 'enum',
    enum: CustomerType,
    default: CustomerType.INDIVIDUAL,
  })
  type: CustomerType;

  @Column({
    type: 'enum',
    enum: CustomerStatus,
    default: CustomerStatus.PENDING,
  })
  status: CustomerStatus;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  mobilePhone?: string;

  @Column()
  address: string;

  @Column()
  addressNumber: string;

  @Column({ nullable: true })
  addressComplement?: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column({ nullable: true })
  notes?: string;

  @Column({ nullable: true })
  @Exclude()
  password?: string; // Para acesso à área do cliente

  @Column({ default: false })
  isAccessEnabled: boolean; // Indica se o cliente pode acessar a área do cliente

  @Column({ nullable: true })
  lastLogin?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 