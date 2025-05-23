import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsRepository } from './appointments.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from 'src/entities/appointment.entity';
import { UsersModule } from 'src/users/users.module';
import { ServiceProfileModule } from 'src/service-profile/service-profile.module';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment]),
    UsersModule,
    ServiceProfileModule,
    MailModule,
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentsRepository],
  exports: [AppointmentsRepository],
})
export class AppointmentsModule {}
