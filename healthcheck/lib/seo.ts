import { Metadata } from "next";
import { Quiz } from "./types";

export function generateQuizMetadata(quiz: Quiz): Metadata {
  const title = `${quiz.title} — Free Self-Assessment | HealthCheck`;
  return {
    title,
    description: quiz.description,
    openGraph: {
      title,
      description: quiz.description,
      type: "website",
      siteName: "HealthCheck",
    },
  };
}

export const CATEGORY_LABELS: Record<string, string> = {
  "vitamins-minerals": "Vitamins & Minerals",
  "sleep-energy": "Sleep & Energy",
  "mental-health": "Mental Health",
  "gut-digestion": "Gut & Digestion",
  "heart-cardiovascular": "Heart & Cardiovascular",
  "fitness-movement": "Fitness & Movement",
  "nutrition-diet": "Nutrition & Diet",
  "hormones-metabolism": "Hormones & Metabolism",
  "skin-hair": "Skin & Hair",
  "immune-system": "Immune System",
  "body-signals": "Body Signals",
  "lifestyle-longevity": "Lifestyle & Longevity",
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "vitamins-minerals":
    "Assess your risk for common vitamin and mineral deficiencies with our science-based screening quizzes.",
  "sleep-energy":
    "Evaluate your sleep quality and energy levels with evidence-based assessments.",
  "mental-health":
    "Screen for common mental health concerns with validated self-assessment tools.",
  "gut-digestion":
    "Check your digestive health with our gut-focused screening quizzes.",
  "heart-cardiovascular":
    "Assess cardiovascular risk factors with our heart health screenings.",
  "fitness-movement":
    "Evaluate your fitness level and movement patterns.",
  "nutrition-diet":
    "Review your nutritional habits and dietary balance.",
  "hormones-metabolism":
    "Screen for hormonal imbalances and metabolic concerns.",
  "skin-hair":
    "Assess skin and hair health indicators.",
  "immune-system":
    "Evaluate your immune system function and resilience.",
  "body-signals":
    "Learn to interpret what your body is telling you.",
  "lifestyle-longevity":
    "Assess lifestyle factors that impact long-term health and longevity.",
};
