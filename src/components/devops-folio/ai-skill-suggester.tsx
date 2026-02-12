"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles } from "lucide-react";
import { getSkillSuggestions } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

type Props = {
  existingSkills: string[];
  experienceDescription: string;
};

export function AiSkillSuggester({
  existingSkills,
  experienceDescription,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSuggestSkills = async () => {
    setLoading(true);
    setSuggestedSkills([]);
    try {
      const result = await getSkillSuggestions({
        existingSkills,
        experienceDescription,
      });
      if (result.error) {
        toast({
          variant: "destructive",
          title: "AI Error",
          description: result.error,
        });
      } else if (result.suggestedSkills) {
        setSuggestedSkills(result.suggestedSkills);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An unexpected error occurred",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 text-center">
      <div className="flex justify-center">
        <Button
          onClick={handleSuggestSkills}
          disabled={loading}
          size="lg"
          className="group bg-gradient-to-r from-primary to-secondary text-primary-foreground transition-transform hover:scale-105"
        >
          {loading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
          )}
          Suggest New Skills with AI
        </Button>
      </div>

      {loading && (
        <p className="mt-4 animate-pulse text-sm text-muted-foreground">
          Analyzing your profile and searching for recommendations...
        </p>
      )}

      {suggestedSkills.length > 0 && (
        <Card className="mt-6 border-primary/50 bg-secondary/50 text-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl text-accent-foreground">
              <Sparkles className="h-5 w-5" />
              Recommended Skills to Learn
            </CardTitle>
            <CardDescription>
              Based on your profile, here are some technologies that could
              enhance your skillset.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="default"
                  className="px-3 py-1 text-base transition-transform hover:scale-110"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
