import { Injectable } from '@angular/core';
import { Company, Result } from '../../models/model';
import { Service } from '../../shared-services/service';

@Injectable() 
export class CompanyService {

    constructor(
        private service : Service
    ) { }

    getAll() : Promise<Result> {
        return this.service.apiCall({
            verb: "post",
            uri: "company/getall"
        });
    }

    addCompany(company : Company) : Promise<Result> {
        return this.service.apiCall({
            verb: "post",
            uri: "company/add",
            body: company
        });
    }

    updateCompany(company : Company) : Promise<Result> {
        return this.service.apiCall({
            verb: "post",
            uri: "company/update",
            body: company
        });
    }

    deleteCompany(company : Company) : Promise<Result> {
        return this.service.apiCall({
            verb: "post",
            uri: "company/delete",
            body: company
        });
    }
}