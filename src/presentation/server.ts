import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
    // new postgresSQLLogDataSource(),
    // new mongoLogDTS(),
);

export class Server {
    public static start() {
        console.log('Server started...');

        //Email
        const emailService = new EmailService();
        
        emailService.sendEmail({
            to: 'urissent@gmail.com',
            subject: 'TESTING',
            htmlBody: `
                <h2>Logs de Sistema NOC</h2>
                <p>Reprehenderit dolor esse commodo magna aliqua.</p>
                <p>Ver Logs adjuntos</p>
            `
        });

        // CronService.createdJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://google.com';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok` ),
        //             (error) => console.log(error),
        //         ).execute(url);
        //         // new CheckService().execute('http://localhost:3000');
        //     }
        // );

    }
}