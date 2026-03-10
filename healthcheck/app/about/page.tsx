import { Metadata } from "next";
import MedicalDisclaimer from "@/components/layout/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "About — Methodology & Medical Disclaimer",
  description:
    "Learn about HealthCheck's science-based quiz methodology, data sources, and important medical disclaimers. Our self-assessments are educational tools, not diagnoses.",
};

export default function AboutPage() {
  return (
    <div className="py-10 mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">
        About HealthCheck
      </h1>

      <div className="mt-8">
        <MedicalDisclaimer />
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-3 text-gray-600">
          HealthCheck provides free, science-based health self-assessment quizzes
          to help individuals identify potential nutrient deficiencies and health
          concerns. Our goal is to empower people with knowledge so they can have
          more informed conversations with their healthcare providers.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Methodology</h2>
        <p className="mt-3 text-gray-600">
          Each quiz is developed based on published clinical screening criteria,
          peer-reviewed research, and established diagnostic guidelines from
          organizations like the WHO, NIH, and major medical journals. We
          reference the specific scientific basis for each quiz on its page.
        </p>
        <p className="mt-3 text-gray-600">
          Our quizzes use a symptom-and-risk-factor scoring model. Each question
          evaluates a specific clinical indicator, and responses are scored on a
          0–3 scale reflecting severity or frequency. The total score maps to
          risk tiers (Low, Mild, Moderate, High) based on the clustering of
          symptoms and risk factors.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Limitations</h2>
        <ul className="mt-3 list-disc list-inside space-y-2 text-gray-600">
          <li>
            These are screening tools, not diagnostic instruments. They cannot
            replace blood tests, physical examinations, or professional medical
            assessment.
          </li>
          <li>
            Results are based entirely on self-reported symptoms, which are
            inherently subjective and may overlap between different conditions.
          </li>
          <li>
            No self-assessment quiz can account for your complete medical
            history, medications, or unique health circumstances.
          </li>
          <li>
            A &quot;Low Risk&quot; result does not guarantee the absence of a deficiency,
            and a &quot;High Risk&quot; result does not confirm a diagnosis.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">
          Medical Disclaimer
        </h2>
        <div className="mt-3 text-gray-600 space-y-3">
          <p>
            The content on HealthCheck is provided for informational and
            educational purposes only. It is not intended to be a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always seek the advice of your physician or other qualified health
            provider with any questions you may have regarding a medical
            condition. Never disregard professional medical advice or delay in
            seeking it because of something you have read on this website.
          </p>
          <p>
            If you think you may have a medical emergency, call your doctor or
            emergency services immediately. HealthCheck does not recommend or
            endorse any specific tests, physicians, products, procedures,
            opinions, or other information that may be mentioned on the site.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Data &amp; Privacy</h2>
        <p className="mt-3 text-gray-600">
          HealthCheck does not collect, store, or transmit any of your quiz
          answers. All quiz processing happens entirely in your browser. We do
          not use cookies for tracking, and we do not share any personal data
          with third parties.
        </p>
      </section>
    </div>
  );
}
