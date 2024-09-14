import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MilestoneService } from '../services/milestone.service';
import { MilestoneDto } from '../dtos/milestone.dto';

@ApiTags('milestones')
@Controller('milestones')
export class MilestoneController {
    constructor(private readonly milestoneService: MilestoneService) { }

    @Get('company/:companyId')
    async getMilestonesByCompanyId(@Param('companyId') companyId: string): Promise<MilestoneDto[]> {
        return this.milestoneService.getMilestonesByCompanyId(companyId);
    }
}
