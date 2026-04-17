"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function RefundPageClient() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Refund Policy
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
            <h2 className="mb-3 text-xl font-semibold">1. Overview</h2>
            <p>
              Koda Labs provides custom digital services, including landing
              pages, websites, design, development, automation, and related
              digital deliverables. Because most of our work is custom and time-
              based, refunds are handled differently from physical goods or
              instant-download consumer products.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              2. No Direct Website Checkout at This Time
            </h2>
            <p>
              At this time, Koda Labs may not process all purchases through a
              direct on-site checkout flow. Many engagements begin through a
              consultation, quote, invoice, payment link, or another manually
              agreed payment method.
            </p>
            <p className="mt-3">
              This Refund Policy applies to payments made for Koda Labs services
              unless a separate written agreement, proposal, invoice term, or
              product-specific policy states otherwise.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. Custom Service Payments
            </h2>
            <p>
              Payments made for custom service work are generally non-refundable
              once work has started. This includes situations where time has
              already been spent on planning, research, design, setup,
              communication, revisions, development, or deployment preparation.
            </p>
            <p className="mt-3">
              If a deposit or upfront payment is required to reserve production
              time, that payment may also be non-refundable once the project has
              been accepted, scheduled, or started.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              4. Possible Refund Situations
            </h2>
            <p>
              A full or partial refund may be considered only in limited cases,
              such as:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                You paid for a project, but Koda Labs has not started work yet
              </li>
              <li>
                Koda Labs is unable to deliver the agreed service for reasons
                solely under our control
              </li>
              <li>
                A duplicate payment or clear billing error occurred
              </li>
            </ul>

            <p className="mt-3">
              Any approved refund may be reduced to reflect time already spent,
              administrative costs, third-party expenses, or work already
              completed.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              5. Non-Refundable Situations
            </h2>
            <p>The following are generally non-refundable:</p>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Custom design or development work after work has started</li>
              <li>Completed milestones or approved deliverables</li>
              <li>Revision rounds already used</li>
              <li>Change-of-mind cancellations after project kickoff</li>
              <li>
                Delays caused by the client, including missing content, assets,
                approvals, or feedback
              </li>
              <li>Third-party purchases such as domains, plugins, licenses, or tools</li>
              <li>Hosting, infrastructure, or third-party setup fees already incurred</li>
              <li>Custom add-ons or rush delivery work</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              6. Future Digital Products or SaaS
            </h2>
            <p>
              If Koda Labs later introduces direct online checkout, SaaS
              subscriptions, templates, downloadable products, or other digital
              offerings, those purchases may be subject to additional or
              product-specific refund terms shown at checkout or in the relevant
              product agreement.
            </p>
            <p className="mt-3">
              Unless otherwise stated, subscriptions may renew automatically and
              non-custom digital purchases may follow a separate product policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              7. How to Request a Refund Review
            </h2>
            <p>
              To request a refund review, email us with your full name, project
              or invoice reference, payment date, amount paid, and a short
              explanation of the issue.
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

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              8. Review and Processing Time
            </h2>
            <p>
              Refund requests are reviewed case by case. If approved, refunds
              are processed using the original payment method where possible, or
              another reasonable method if necessary. Processing times may vary
              depending on the payment provider or banking system involved.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              9. Changes to This Policy
            </h2>
            <p>
              Koda Labs may update this Refund Policy from time to time to
              reflect changes in our business model, payment methods, products,
              or legal requirements. The updated version will be posted on this
              page with a revised “Last updated” date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}