"use server";

import {
  suggestDevOpsSkills,
  type SkillsRecommendationInput,
  type SkillsRecommendationOutput,
} from "@/ai/flows/skills-recommendation-flow";

type SuggestionResult = SkillsRecommendationOutput & { error?: string };

export async function getSkillSuggestions(
  input: SkillsRecommendationInput
): Promise<SuggestionResult> {
  try {
    const output = await suggestDevOpsSkills(input);
    return output;
  } catch (e: any) {
    console.error("AI Skill Suggestion Error:", e);
    // Provide a user-friendly error message
    return {
      suggestedSkills: [],
      error:
        e.message ||
        "An error occurred while fetching skill recommendations. Please try again.",
    };
  }
}
