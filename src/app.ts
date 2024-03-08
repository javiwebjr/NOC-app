import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDataBase } from "./data/mongoDB";
import { Server } from "./presentation/server";

( async () => {
    main();
})();

async function main() {
    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });
    //!MONGO
    // await newLog.save();
    // const logs = await LogModel.find();
    // console.log(logs);

    //!PRISMA
    // const prisma = new PrismaClient();

    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Text message',
    //         origin: 'App.ts'
    //     }
    // });

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'MEDIUM'
    //     }
    // });

    // const newLog = await LogModel.create({
    //     message: 'Test Message 232',
    //     origin: 'App.ts',
    //     level: 'medium'
    // });

    

    // console.log(envs);


    Server.start();
}