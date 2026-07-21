import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
// import { PrismaClient } from "../../generated/prisma/client";
import { PrismaClient } from "@prisma/client";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private configService: ConfigService) {
    // const databaseUrl = configService.get<string>('DATABASE_URL');
  
    super({
      // datasources: {
      //   db: {
      //     url: databaseUrl,
      //   },
      // },
    });
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