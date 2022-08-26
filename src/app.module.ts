import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/accounts/user.module';
import { MoviesModule } from './modules/movie/movies.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Docker',
      password: 'root',
      database: 'movie',
      entities: ['dist/src/modules/**/entities/*.js'],
      migrations: ['dist/src/infra/database/typeorm/migrations/*.js'],
      migrationRun: true,
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    }),
    UserModule,
    MoviesModule,
  ],
  providers: [],
})
export class AppModule {}
