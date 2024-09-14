import { HttpException } from '@/exceptions/HttpException';
import { openAIHelper } from '@/server';
import { isBase64Image } from '@/utils/data';
import { Service } from 'typedi';

@Service()
export class OpenaiService {
  public async validateImages(beforeImage: string, afterImage: string): Promise<unknown> {
    // Validate that both images are in base64 format
    if (!isBase64Image(beforeImage)) throw new HttpException(400, 'Invalid format for before image');
    if (!isBase64Image(afterImage)) throw new HttpException(400, 'Invalid format for after image');

    const prompt = `
      Analyze the two images provided: one is a "before" image representing raw material, and the other is an "after" image representing the result of recycling that raw material.

      You are an API that must always respond with the following JSON object:
      {
        "validityFactorBefore": {validityFactorNumber},  // A number between 0-1. 1 if the "before" image meets the criteria for being raw material; 0 if not.
        "validityFactorAfter": {validityFactorNumber},   // A number between 0-1. 1 if the "after" image meets the criteria for being the result of recycling the raw material; 0 if not.
        "descriptionOfAnalysis": "{analysis}"            // Provide a clear and concise analysis of both images, explaining why they meet or fail the criteria. This analysis should be simple enough for the user to understand, especially if an image doesn't meet the criteria. The analysis is meant for users engaged in sustainable practices like recycling, so focus on the key points without excessive detail.
      }

      You must return this JSON object directly, without any apologies, explanations, or additional text.
    `;

    const gptResponse = await openAIHelper.askChatGPTAboutImage({
      beforeImage,
      afterImage,
      prompt,
    });

    const responseContent = gptResponse.choices[0].message.content;
    console.log("GPT Response Content:", responseContent);

    return this.parseChatGPTJSONString(responseContent);
  }

  private parseChatGPTJSONString(jsonString: string): unknown {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Error parsing GPT response:', error);
      throw new HttpException(500, 'Failed to parse OpenAI response');
    }
  }
}
