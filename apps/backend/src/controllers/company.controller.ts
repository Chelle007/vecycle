import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.entity';

@ApiTags('companies')
@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Get(':id')
    async getCompanyById(@Param('id') id: string): Promise<Company> {
        return this.companyService.getCompanyById(id);
    }
}
