import React from "react";

import { Flex, Label } from "@/app/UIComponents";
import UIImage from "@/utils/Icon";

export default function Curaflow() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full gap-4 overflow-y-scroll bg-white p-4"
		>
			<Flex isColumn gap="4">
				<UIImage icon="curaflow_title" width={200} height={200} />
				<Label.Mid300>
					CRMS for the clinics, it helps the clinics to manage their
					patients, appointments, employees, and medical records. The
					system also provides a dashboard for the clinic owner to
					monitor the clinic's performance and the employees'
					performance with the ability to generate reports and view
					statistics.
					<br />
					<br />
					This was made with{" "}
					<a
						href="https://github.com/ammarmbe"
						target="_blank"
						className="text-blue-500 underline"
					>
						Ammarmbe (Github)
					</a>{" "}
					as a commisioned project for a clinic in Egypt, called 60+
					Seniors clinic which shares the logo of this app for that
					reason.
					<br />
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2" align="center">
				<UIImage icon="curaflow_hero_en" width={1000} height={1000} />
				<UIImage icon="curaflow_hero_ar" width={1000} height={1000} />
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>Status</Label.Big400>
				<Label.Mid300>
					This project is completed and delivered to the client, and
					the system is currently in use by the clinic and maintained
					by the us but is not open-sourced due to the client's
					request so we can't provide a live demo or a repository for
					this project.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>Features by category</Label.Big400>
				<Flex isColumn gap="1">
					<Label.Big300>Patients</Label.Big300>
					<Label.Mid300>
						- Add, Edit, Delete Patients
						<br />
						- View Patient's Medical Records
						<br />
						- View Patient's Appointments
						<br />
						- View Patient's Prescriptions
						<br />
						- View and manage Patient's Invoices and Payments
						<br />
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Appointments</Label.Big300>
					<Label.Mid300>
						- Add, Edit, Delete Appointments
						<br />
						- View Appointments by Date, Patient, or Employee
						<br />
						- Cancel or fast forward appointments
						<br />
						- Fill in the patient's medical record during the
						appointment
						<br />
						- Fill custom forms during the appointment (e.g. Patient
						data form) to be saved in the patient's medical record
						<br />
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Employees</Label.Big300>
					<Label.Mid300>
						- Add, Edit, Delete Employees
						<br />
						- View Employees by Role or Department (e.g. Doctors, or
						Customer Service)
						<br />
						- Create a schedule for the employees with ability to
						add overtime or vacation.
						<br />
						- Create an account with custom role and permissions for
						each employee and track their activity.
						<br />
						- Create a list of medical services and nested
						categories and assign the services to the doctors with
						the ability to add different prices for each doctor.
						<br />
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Admin</Label.Big300>
					<Label.Mid300>
						- View charts and statistics for the clinic's
						performance and the employees' performance.
						<br />
						- Create, Edit, Delete forms to be filled during the
						appointment.
						<br />
						- Send bulk SMSs or Emails to patients or a subset of
						patients based on filters.
						<br />
						- View calendar for the appointments and the employees
						to track their schedule.
						<br />
						- Send announcements to all employees or a subset of
						them based on filters.
						<br />
						- Customise system settings.
						<br />
					</Label.Mid300>
				</Flex>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>How we made this?</Label.Big400>
				<Flex isColumn gap="1">
					<Label.Big300>General</Label.Big300>
					<Label.Mid300>
						We used React and TS for the frontend and Node.js for
						the backend, the database was NeonDB. The frontend was
						made with TailwindCSS and designed with Figma by{" "}
						<a
							href="https://github.com/ammarmbe"
							target="_blank"
							className="text-blue-500 underline"
						>
							Ammarmbe (Github)
						</a>{" "}
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Analytics</Label.Big300>
					<Label.Mid300>
						We used Apache Echarts for the charts and statistics
						with customised themes and designs. The data was fetched
						from the backend and was processed and transformed to be
						displayed in the charts.
					</Label.Mid300>
				</Flex>
			</Flex>
		</Flex>
	);
}
