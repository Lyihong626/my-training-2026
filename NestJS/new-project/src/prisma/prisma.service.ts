import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    //Prisma 7 必须传入 adapter
    constructor() {
        const pool = new Pool({
            // connectionString: process.env.DATABASE_URL,
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '123456',  
            database: 'task-management',
        });
        const adapter = new PrismaPg(pool);
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
        console.log('---------Prisma connected database-----------');
    }

    async onModuleDestroy() {
        await this.$disconnect();
        console.log('-----------Prisma disconnected---------------');
    }
}