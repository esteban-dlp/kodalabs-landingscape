"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function TermsPageClient() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: April 16, 2026
            </p>
          </div>

          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-7">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. Introduction</h2>
            <p>
              These Terms of Service govern your access to and use of the Koda
              Labs website and any services, projects, deliverables, products,
              or communications provided by Koda Labs.
            </p>
            <p className="mt-3">
              By accessing this website, requesting a quote, or working with
              Koda Labs, you agree to be bound by these Terms. If you do not
              agree, please do not use the website or our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">2. Our Services</h2>
            <p>
              Koda Labs provides digital services that may include landing
              pages, websites, design, front-end development, custom sections,
              multilingual setups, analytics setup, automation work, and other
              digital solutions depending on the scope of the project.
            </p>
            <p className="mt-3">
              Service descriptions shown on the website are for general
              information only. Final deliverables, scope, timelines, revisions,
              and pricing may vary depending on the client’s needs and the
              agreed proposal.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. Quotes, Scope, and Project Acceptance
            </h2>
            <p>
              A project is considered accepted once Koda Labs confirms the work
              and, where applicable, receives the required deposit, upfront
              payment, or written approval to begin.
            </p>
            <p className="mt-3">
              Any quote, package, or pricing shown on the website is subject to
              clarification of scope. Additional requests, new sections,
              expanded requirements, extra revisions, advanced integrations, or
              changes after approval may require an updated quote or additional
              fees.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              4. Pricing and Payment
            </h2>
            <p>
              Koda Labs may display starting prices or fixed package pricing on
              the website. However, unless a direct checkout is explicitly
              offered, payments may be handled through invoices, manual payment
              agreements, payment links, bank transfers, or other approved
              methods.
            </p>
            <p className="mt-3">
              You agree to pay all fees associated with your selected service or
              approved proposal. Work may be paused or withheld if required
              payments are not received on time.
            </p>
            <p className="mt-3">
              If Koda Labs adds direct online checkout, subscriptions, SaaS
              tools, or digital product sales in the future, those purchases may
              also be subject to additional billing terms shown at checkout or
              in separate product-specific terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              5. Delivery Times and Revisions
            </h2>
            <p>
              Delivery estimates shown on the website or in proposals are good-
              faith targets, not guaranteed deadlines, unless explicitly agreed
              in writing.
            </p>
            <p className="mt-3">
              Project timelines depend on timely communication, content
              submission, feedback, approvals, and access to necessary assets or
              accounts. Delays caused by missing client materials or late
              approvals may extend the timeline.
            </p>
            <p className="mt-3">
              Unless otherwise stated, revision rounds are limited to what is
              included in the selected package or proposal. Additional revisions
              may be billed separately.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              6. Client Responsibilities
            </h2>
            <p>You are responsible for providing accurate and timely:</p>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Business information</li>
              <li>Brand assets and visual references</li>
              <li>Logos, images, menus, and other content</li>
              <li>Feedback and approvals</li>
              <li>Access to domains, hosting accounts, or third-party tools when needed</li>
            </ul>

            <p className="mt-3">
              You represent that you have the right to use any materials you
              provide to Koda Labs and that those materials do not infringe the
              rights of others.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              7. Hosting, Domains, and Third-Party Services
            </h2>
            <p>
              Certain projects may include hosting, deployment assistance,
              domain guidance, analytics setup, integrations, or use of
              third-party services. Third-party services remain subject to their
              own terms, pricing, uptime, and policies.
            </p>
            <p className="mt-3">
              Koda Labs is not responsible for downtime, failures, account
              restrictions, policy changes, or pricing changes caused by domain
              registrars, hosting providers, analytics platforms, payment
              providers, or other external services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              8. Intellectual Property
            </h2>
            <p>
              Unless otherwise agreed in writing, Koda Labs retains ownership of
              its pre-existing tools, frameworks, templates, methods, design
              systems, reusable code, processes, and know-how.
            </p>
            <p className="mt-3">
              Upon full payment of the applicable project fees, the client is
              granted the right to use the final custom deliverable created for
              their business, subject to any third-party licenses or components
              included in the project.
            </p>
            <p className="mt-3">
              Koda Labs may display completed work, screenshots, project names,
              or general deliverable previews in its portfolio, social content,
              or sales materials unless the parties agree otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">9. Acceptable Use</h2>
            <p>You agree not to use the Koda Labs website or services to:</p>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Violate any law or regulation</li>
              <li>Submit false, misleading, or abusive content</li>
              <li>Attempt unauthorized access to systems or infrastructure</li>
              <li>Interfere with site functionality or security</li>
              <li>Use our services for unlawful, fraudulent, or harmful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              10. Disclaimer and Limitation of Liability
            </h2>
            <p>
              Koda Labs provides services and website content on an “as is” and
              “as available” basis. To the maximum extent permitted by law, we
              disclaim warranties of any kind, whether express or implied.
            </p>
            <p className="mt-3">
              Koda Labs will not be liable for indirect, incidental, special,
              consequential, or punitive damages, including lost profits, lost
              revenue, lost data, lost opportunities, or business interruption,
              arising out of or related to use of the website or our services.
            </p>
            <p className="mt-3">
              Our total liability for any claim related to a paid project will
              not exceed the amount actually paid to Koda Labs for the specific
              service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              11. Refunds and Cancellations
            </h2>
            <p>
              Refunds and cancellations are governed by our Refund Policy. By
              purchasing a service from Koda Labs, you also agree to the terms
              of that policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              12. Future Features and Product Expansion
            </h2>
            <p>
              Koda Labs may expand its offerings in the future to include direct
              online payments, templates, digital products, subscriptions, SaaS
              services, automation tools, or other software-based products.
              Additional product-specific terms may apply when those offerings
              become available.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              13. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. The
              updated version will be posted on this page with a revised “Last
              updated” date. Continued use of the website or services after any
              changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">14. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, you can
              contact us at:
            </p>

            <p className="mt-3 font-medium">
              <a
                href="mailto:hello@usekodalabs.com"
                className="underline underline-offset-4"
              >
                hello@usekodalabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}