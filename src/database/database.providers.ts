import { Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        Inject: [ConfigService],
        useFactory:()=>{
          const dataSource = new DataSource({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: '0983239989',
              database: 'back_nest_angular'
            });

            return dataSource.initialize();

        }
    }
    
]