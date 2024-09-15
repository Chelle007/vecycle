import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity'; // Adjust the path as needed

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>,
    ) { }

    async getCompanyById(id: string): Promise<Company> {
        const company = await this.companyRepository.findOne({ where: { company_id: id } });

        if (!company) {
            throw new NotFoundException(`Company with ID ${id} not found`);
        }
        return company;
    }
}
