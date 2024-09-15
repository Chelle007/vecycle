import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { OpenaiService } from '@/services/openai.service';
import { Submission } from '@/interfaces/submission.interface';
import { HttpException } from '@/exceptions/HttpException';
import { ContractsService } from '@/services/contracts.service';

export class SubmissionController {
  public openai = Container.get(OpenaiService);
  public contracts = Container.get(ContractsService);

  public submitReceipt = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body: Omit<Submission, 'timestamp'> = req.body;

      // Ensure that 'beforeImage' and 'afterImage' are provided
      if (!body.beforeImage || !body.afterImage) {
        throw new HttpException(400, 'Both beforeImage and afterImage are required');
      }

      const submissionRequest: Submission = {
        ...body,
        timestamp: Date.now(),
      };

      // Validate images
      const validationResult = await this.openai.validateImages(body.beforeImage, body.afterImage);

      if (!validationResult || 
          typeof validationResult.validityFactorBefore !== 'number' || 
          typeof validationResult.validityFactorAfter !== 'number') {
        throw new HttpException(500, 'Error validating images');
      }

      const { validityFactorBefore, validityFactorAfter } = validationResult;

      // Determine if the submission is valid
      if (validityFactorBefore > 0.7 && validityFactorAfter > 0.7) {
        if (!(await this.contracts.registerSubmission(submissionRequest))) {
          throw new HttpException(500, 'Error registering submission and sending rewards');
        }
      }

      res.status(200).json({ validation: validationResult });
    } catch (error) {
      next(error);
      return;
    }
  };
}
