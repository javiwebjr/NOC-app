import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
    // new postgresSQLLogDataSource(),
    // new mongoLogDTS(),
);

export class Server {
    public static start() {
        console.log('Server started...');

        CronService.createdJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://google.com';
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok` ),
                    (error) => console.log(error),
                ).execute(url);
                // new CheckService().execute('http://localhost:3000');
            }
        );

    }
}