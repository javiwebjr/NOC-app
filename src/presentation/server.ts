import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgre-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
    // new MongoLogDatasource(),
    // new PostgresLogDataSource(),
);
const mongoLogRepository = new LogRepositoryImpl(
    // new FileSystemDatasource(),
    new MongoLogDatasource(),
    // new PostgresLogDataSource(),
);
const postgresLogRepository = new LogRepositoryImpl(
    // new FileSystemDatasource(),
    // new MongoLogDatasource(),
    new PostgresLogDataSource(),
);

export class Server {
    public static start() {
        console.log('Server started..asda....');

        //Email
        // const emailService = new EmailService();
        // emailService.sendEmail({
        //     to: 'urissent@gmail.com',
        //     subject: 'TESTING',
        //     htmlBody: `
        //         <h2>Logs de Sistema NOC</h2>
        //         <p>Reprehenderit dolor esse commodo magna aliqua.</p>
        //         <p>Ver Logs </p>
        //     `
        // });

        // emailService.sendEmailWithFileSystemLogs(['urissent@gmail.com', 'alexdetailsv@gmail.com']);

        // CronService.createdJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://googaasle.com';
        //         new CheckServiceMultiple(
        //             [fsLogRepository, mongoLogRepository, postgresLogRepository],
        //             () => console.log(`${url} is ok` ),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // );

    }
}