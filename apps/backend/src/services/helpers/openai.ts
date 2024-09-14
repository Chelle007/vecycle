import { OPENAI_API_KEY } from '@/config';
import OpenAI from 'openai';
import { ChatCompletion } from 'openai/resources';

export class OpenAIHelper {
  private openai: OpenAI;

  constructor(private _openai?: OpenAI) {
    if (_openai) {
      this.openai = _openai;
    } else {
      this.openai = this.createOpenAIInstance();
    }
  }

  private createOpenAIInstance = () =>
    new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true, // TODO: Check if this is necessary
    });

  public askChatGPTAboutImage = async ({ base64Image, maxTokens = 350, prompt }: { base64Image: string; prompt: string; maxTokens?: number }) => {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o', // Ensure this is the correct model
        max_tokens: maxTokens,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: prompt,
              },
              {
                type: 'text', // Use 'text' if base64 images are not supported
                text: base64Image,
              },
            ],
          },
        ],
      });
      // console.log("Raw response from OpenAI:", response); // Log raw response for debugging

      console.log("rawContent: " + response.choices[0].message.content);

      // Now access validityFactorBefore and validityFactorAfter

      // console.log("validityFactorBefore:", validityFactorBefore);
      // console.log("validityFactorAfter:", validityFactorAfter);

      // console.log(response.choices[0].message.content.validityFactorBefore, response.choices[0].message.content.validityFactorAfter);
      // console.log("with json parse " + JSON.parse(response.choices[0].message.content).validityFactorBefore);
      // console.log("AFTERRRRR" + JSON.parse(response.choices[0].message.content.replace(/```json|```/g, '')).validityFactorBefore);

      // validityFactorBefore ====
      // JSON.parse(response.choices[0].message.content.replace(/```json|```/g, '')).validityFactorBefore;


      // console.log(response?.validation);
      // console.log(response?.validation.validityFactorBefore, response?.validation.validityFactorAfter);
      return response;
    } catch (error) {
      console.error('Error in askChatGPTAboutImage:', error);
      throw new Error('Failed to communicate with OpenAI');
    }
  };

  public getResponseJSONString = (response: ChatCompletion) => response.choices[0].message.content;

  private cleanChatGPTJSONString = (jsonString: string) => jsonString.replace('```json', '').replace('```', '');

  public parseChatGPTJSONString = <Response>(jsonString?: string | null): Response | undefined => {
    if (!jsonString) {
      return;
    }
    const content = this.cleanChatGPTJSONString(jsonString);
    if (content) {
      try {
        const parsed = JSON.parse(content);
        return parsed;
      } catch (e) {
        console.error('Failing parsing Chat GPT response:', e);
      }
    }
  };
}
