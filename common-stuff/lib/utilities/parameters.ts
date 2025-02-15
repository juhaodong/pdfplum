import { PDFOptions } from "puppeteer";
import { ParsedQs } from "qs";

export interface ParsedParameters {
  adjustHeightToFit: boolean;
  chromiumPdfOptions: PDFOptions;
  data: ParsedQs;
  headless: boolean;
  outputFileName: string;
  templateBucket: string;
  templatePrefix: string;
  templateId: string;
  networkIdleTime: number;
  shouldWaitForIsReady: boolean;
}
