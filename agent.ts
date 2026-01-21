import {FunctionTool, LlmAgent, GOOGLE_SEARCH} from '@google/adk';
import {z} from 'zod';

/* Mock tool implementation */
// const getCurrentTime = new FunctionTool({
//   name: 'get_current_time',
//   description: 'Returns the current time in a specified city.',
//   parameters: z.object({
//     city: z.string().describe("The name of the city for which to retrieve the current time."),
//   }),
//   execute: (city) => {
//     return {status: 'success', report: `The current time is 10:30 AM in ${city}`};
//   },
// });

export const rootAgent = new LlmAgent({
  name: 'hello_time_agent',
  model: 'gemini-2.5-flash',
  description: 'Tells the current time in a specified city.',
  instruction: `You are a helpful assistant that tells the current time in a city.
                Use the 'getCurrentTime' tool for this purpose.`,
  tools: [GOOGLE_SEARCH],
});