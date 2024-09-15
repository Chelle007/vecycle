import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { CompanyService } from '@/services/company.service';
import { HttpException } from '@/exceptions/HttpException';
import { Company } from '@/entities/company.entity';

export class CompanyController {
    private companyService = Container.get(CompanyService);

    public getCompanyById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const companyId: string = req.params.id;
            const company: Company = await this.companyService.getCompanyById(companyId);

            if (!company) {
                throw new HttpException(404, 'Company not found');
            }

            res.status(200).json(company);
        } catch (error) {
            next(error);
        }
    };
}
