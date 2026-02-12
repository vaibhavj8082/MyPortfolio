'use server';
/**
 * @fileOverview A GenAI agent for suggesting additional relevant DevOps skills.
 *
 * - suggestDevOpsSkills - A function that suggests new DevOps skills based on input.
 * - SkillsRecommendationInput - The input type for the suggestDevOpsSkills function.
 * - SkillsRecommendationOutput - The return type for the suggestDevOpsSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillsRecommendationInputSchema = z.object({
  existingSkills: z.array(z.string()).describe('A list of the user\'s current technical skills.'),
  experienceDescription: z.string().describe('A detailed description of the user\'s professional experience and responsibilities.'),
});
export type SkillsRecommendationInput = z.infer<typeof SkillsRecommendationInputSchema>;

const SkillsRecommendationOutputSchema = z.object({
  suggestedSkills: z.array(z.string()).describe('A list of recommended additional DevOps skills and technologies relevant to the user\'s profile.'),
});
export type SkillsRecommendationOutput = z.infer<typeof SkillsRecommendationOutputSchema>;

export async function suggestDevOpsSkills(input: SkillsRecommendationInput): Promise<SkillsRecommendationOutput> {
  return skillsRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillsRecommendationPrompt',
  input: {schema: SkillsRecommendationInputSchema},
  output: {schema: SkillsRecommendationOutputSchema},
  prompt: `You are an expert DevOps career advisor. Your task is to analyze a user's existing skills and professional experience, and then suggest additional relevant DevOps skills and technologies that would enhance their professional profile or fill potential knowledge gaps.

Consider current industry trends, best practices, and common requirements in the DevOps field. Focus on suggesting skills that are complementary to their existing set and beneficial for career growth in DevOps.

Existing Skills:
{{#each existingSkills}}- {{{this}}}
{{/each}}

Professional Experience:
{{{experienceDescription}}}

Based on the above, what additional DevOps skills and technologies would you recommend? Provide only the suggested skills.`,
});

const skillsRecommendationFlow = ai.defineFlow(
  {
    name: 'skillsRecommendationFlow',
    inputSchema: SkillsRecommendationInputSchema,
    outputSchema: SkillsRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
