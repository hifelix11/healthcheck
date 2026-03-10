import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-gray-900">HealthCheck</h3>
            <p className="mt-2 text-sm text-gray-500">
              Free, science-based health self-assessments. Educational screening
              tools — not medical diagnoses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-teal-700">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/vitamins-minerals"
                  className="hover:text-teal-700"
                >
                  All Quizzes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-700">
                  About &amp; Methodology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <p className="mt-2 text-sm text-gray-500">
              These self-assessments are educational screening tools, not medical
              diagnoses. Always consult a qualified healthcare professional.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} HealthCheck. All rights reserved.
          For educational purposes only.
        </div>
      </div>
    </footer>
  );
}
