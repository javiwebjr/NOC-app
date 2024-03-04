import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTime = () => void;

export class CronService {
    static createdJob( cronTime: CronTime, onTick: OnTime ): CronJob {
        const job = new CronJob( cronTime, onTick );

        job.start();

        return job;
    }
} 