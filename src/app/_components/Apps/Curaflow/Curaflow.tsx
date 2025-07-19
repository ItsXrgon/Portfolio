import {
	ElectronOriginal,
	ExpressOriginal,
	JavascriptOriginal,
	NextjsOriginal,
	NodejsOriginal,
	ReactOriginal,
	TailwindcssOriginal,
	TypescriptOriginal,
} from "devicons-react";

import { Flex, Image, Label } from "@/components";

import AppHeader from "./AppHeader";
import Section from "./Section";
import "./index.css";

export default function Curaflow() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full h-full gap-4 overflow-y-auto bg-gray-50 p-4 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700 font-curaflow curaflow-scrollbar"
		>
			<AppHeader />
			<Flex isColumn gap="2" align="center" isWrapped>
				<Image
					icon="curaflow_hero_en"
					width={1000}
					height={1000}
					alt=""
				/>
				<Image
					icon="curaflow_hero_ar"
					width={1000}
					height={1000}
					alt=""
				/>
			</Flex>
			<Section title="Project Overview">
				CRMS for the clinics, it helps the clinics to manage their
				patients, appointments, employees, and medical records. The
				system also provides a dashboard for the clinic owner to monitor
				the clinic&apos;s performance and the employees&apos;
				performance with the ability to generate reports and view
				statistics.
				<br />
				<br />
				This was made with{" "}
				<a
					href="https://github.com/ammarmbe"
					target="_blank"
					className="text-blue-500 underline hover:text-blue-700"
				>
					Ammarmbe (Github)
				</a>{" "}
				as a commissioned project for a clinic in Egypt, called 60+
				Seniors clinic which shares the logo of this app for that
				reason.
			</Section>
			<Section title="Project Status">
				This project is completed and delivered to the client, and the
				system is currently in use by the clinic and maintained by us
				but is not open-sourced due to the client&apos;s request so we
				can&apos;t provide a live demo or a repository for this project.
			</Section>
			<Section title="Features by Category">
				<Flex isColumn gap="4">
					<div>
						<Label className="font-semibold text-blue-600 mb-2 block">
							Patients
						</Label>
						<ul className="list-disc list-inside space-y-1 text-gray-700">
							<li>Add, Edit, Delete Patients</li>
							<li>View Patient&apos;s Medical Records</li>
							<li>View Patient&apos;s Appointments</li>
							<li>View Patient&apos;s Prescriptions</li>
							<li>
								View and manage Patient&apos;s Invoices and
								Payments
							</li>
						</ul>
					</div>
					<div>
						<Label className="font-semibold text-blue-600 mb-2 block">
							Appointments
						</Label>
						<ul className="list-disc list-inside space-y-1 text-gray-700">
							<li>Add, Edit, Delete Appointments</li>
							<li>
								View Appointments by Date, Patient, or Employee
							</li>
							<li>Cancel or fast forward appointments</li>
							<li>
								Fill in the patient&apos;s medical record during
								the appointment
							</li>
							<li>
								Fill custom forms during the appointment (e.g.
								Patient data form) to be saved in the
								patient&apos;s medical record
							</li>
						</ul>
					</div>
					<div>
						<Label className="font-semibold text-blue-600 mb-2 block">
							Employees
						</Label>
						<ul className="list-disc list-inside space-y-1 text-gray-700">
							<li>Add, Edit, Delete Employees</li>
							<li>
								View Employees by Role or Department (e.g.
								Doctors, or Customer Service)
							</li>
							<li>
								Create a schedule for the employees with ability
								to add overtime or vacation
							</li>
							<li>
								Create an account with custom role and
								permissions for each employee and track their
								activity
							</li>
							<li>
								Create a list of medical services and nested
								categories and assign the services to the
								doctors with the ability to add different prices
								for each doctor
							</li>
						</ul>
					</div>

					<div>
						<Label className="font-semibold text-blue-600 mb-2 block">
							Admin
						</Label>
						<ul className="list-disc list-inside space-y-1 text-gray-700">
							<li>
								View charts and statistics for the clinic&apos;s
								performance and the employees&apos; performance
							</li>
							<li>
								Create, Edit, Delete forms to be filled during
								the appointment
							</li>
							<li>
								Send bulk SMSs or Emails to patients or a subset
								of patients based on filters
							</li>
							<li>
								View calendar for the appointments and the
								employees to track their schedule
							</li>
							<li>
								Send announcements to all employees or a subset
								of them based on filters
							</li>
							<li>Customise system settings</li>
						</ul>
					</div>
				</Flex>
			</Section>

			<Section title="Development Process">
				<Flex isColumn gap="4">
					<div>
						<Label className="font-semibold text-blue-600 mb-2 block">
							General
						</Label>
						<Label>
							We used React and TS for the frontend and Node.js
							for the backend, the database was NeonDB. The
							frontend was made with TailwindCSS and designed with
							Figma by{" "}
							<a
								href="https://github.com/ammarmbe"
								target="_blank"
								className="text-blue-500 underline hover:text-blue-700"
							>
								Ammarmbe (Github)
							</a>
							.
						</Label>
					</div>
					<div>
						<Label className="font-semibold text-blue-600 mb-2 block">
							Analytics
						</Label>
						<Label>
							We used Apache Echarts for the charts and statistics
							with customised themes and designs. The data was
							fetched from the backend and was processed and
							transformed to be displayed in the charts.
						</Label>
					</div>
				</Flex>
			</Section>

			<Section title="Tech Stack">
				<Flex isColumn gap="4">
					<div>
						<Label className="font-semibold text-blue-600 mb-3 block">
							Backend
						</Label>
						<Flex isWrapped gap="4">
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<JavascriptOriginal size={48} />
								<Label>JavaScript</Label>
							</Flex>
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<NodejsOriginal size={48} />
								<Label>Nodejs</Label>
							</Flex>
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<ExpressOriginal size={48} />
								<Label>Express.js</Label>
							</Flex>
						</Flex>
					</div>
					<div>
						<Label className="font-semibold text-blue-600 mb-3 block">
							Frontend
						</Label>
						<Flex isWrapped gap="4">
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<TypescriptOriginal size={48} />
								<Label>TypeScript</Label>
							</Flex>
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<NextjsOriginal size={48} />
								<Label>NEXT.js</Label>
							</Flex>
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<ElectronOriginal size={48} />
								<Label>Electron</Label>
							</Flex>
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<ReactOriginal size={48} />
								<Label>React</Label>
							</Flex>
							<Flex
								gap="1"
								align="center"
								className="bg-gray-50 p-2 rounded-lg"
							>
								<TailwindcssOriginal size={48} />
								<Label>Tailwind</Label>
							</Flex>
						</Flex>
					</div>
				</Flex>
			</Section>
		</Flex>
	);
}
