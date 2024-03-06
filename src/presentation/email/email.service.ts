import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  constructor() {}

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;
    try {
      const sentInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments,
      });
      
      console.log(sentInformation);

      return true;
    } catch (error) {
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = 'Logs del servidor';
    const htmlBody = `
      <h2>Logs de Sistema NOC</h2>
      <p>Reprehenderit dolor esse commodo magna aliqua.</p>
      <p>Ver Logs </p>
    `;

    const attachments: Attachment[] = [
      { filename: 'logs-all.log', path: './logs/logs-all.log' },
      // { filename: 'logs-all.log', path: './logs/logs-all.log' },
      // { filename: 'logs-all.log', path: './logs/logs-all.log' },
    ];

    return this.sendEmail({
      to, subject, attachments, htmlBody
    })
  }

}
