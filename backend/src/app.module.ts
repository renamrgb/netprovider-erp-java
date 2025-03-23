import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [
    // Configuração das variáveis de ambiente
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    
    // Configuração do TypeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'postgres'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'netprovider'),
        password: configService.get('DB_PASSWORD', 'netprovider123'),
        database: configService.get('DB_DATABASE', 'netprovider'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('DB_SYNCHRONIZE', 'false') === 'true',
        logging: configService.get('DB_LOGGING', 'false') === 'true',
        ssl: configService.get('DB_SSL', 'false') === 'true'
          ? { rejectUnauthorized: false }
          : false,
      }),
    }),
    
    // Módulos da aplicação
    UsersModule,
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 