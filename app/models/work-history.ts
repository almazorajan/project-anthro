
import { EmploymentStatus, Company } from './model';

export class WorkHistory {

    position: string;
    company: Company;
    dateFrom: Date;
    dateTo: Date;
    isPresent: boolean;
    employmentStatus: EmploymentStatus;
    salary: number;
    reasonForLeaving: string;

    constructor() {

        this.position = "";
        this.company = new Company();
        this.dateFrom = new Date();
        this.dateTo = new Date();
        this.isPresent = false;
        this.employmentStatus = new EmploymentStatus();
        this.salary = 0;
        this.reasonForLeaving = "";

    }

}