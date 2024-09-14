import axios from "axios";
import { ReceiptData } from "./type"; // Ensure this type is updated as shown
import { backendURL } from "../config";

export type Response = {
  validation: {
    validityFactorBefore: number; // Validity factor for the "before" image
    validityFactorAfter: number;  // Validity factor for the "after" image
    descriptionOfAnalysis: string; // The analysis provided by the AI
  };
};

export const submitReceipt = async (data: ReceiptData): Promise<Response> => {
  try {
    const response = await axios.post(`${backendURL}/submitReceipt`, data);
    return response.data;
  } catch (error: unknown) {
    console.error("Error posting data:", error);
    throw error;
  }
};
