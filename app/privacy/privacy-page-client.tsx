"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function PrivacyPageClient() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Privacy Policy
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
              Koda Labs respects your privacy and is committed to protecting the
              personal information you share with us. This Privacy Policy
              explains how we collect, use, store, and protect information when
              you visit our website, contact us, request a quote, or work with
              us on a project.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              2. Information We Collect
            </h2>
            <p>We may collect information you voluntarily provide, including:</p>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Business name</li>
              <li>Project details and requirements</li>
              <li>Messages sent through contact or inquiry forms</li>
              <li>Any files, brand assets, or materials you send us</li>
            </ul>

            <p className="mt-3">
              We may also collect limited technical information automatically,
              such as browser type, device type, pages visited, approximate
              location, referrer, and general website usage data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Respond to inquiries and provide consultations</li>
              <li>Prepare proposals, quotes, and project plans</li>
              <li>Deliver websites, landing pages, and other digital services</li>
              <li>Communicate project updates and support messages</li>
              <li>Improve our website, content, and service quality</li>
              <li>Protect our business against abuse, fraud, or misuse</li>
              <li>Comply with legal obligations when required</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              4. Payments and Billing Information
            </h2>
            <p>
              At this time, Koda Labs may handle payments manually through
              invoices, bank transfer, payment links, or other agreed methods
              outside of direct on-site checkout. If you proceed with a paid
              service, we may collect or receive billing-related information
              necessary to issue invoices, confirm payment, and manage the
              project relationship.
            </p>
            <p className="mt-3">
              We do not currently state that credit card information is stored
              directly by our website unless and until a direct checkout system
              is implemented. If direct online payments are added in the future,
              this Privacy Policy may be updated to reflect the payment provider
              and data handling practices involved.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              5. Cookies and Analytics
            </h2>
            <p>
              We may use cookies, analytics tools, and similar technologies to
              understand how visitors use our website, improve performance, and
              measure interest in our services. These tools may collect
              non-sensitive usage information such as page views, device
              information, and session behavior.
            </p>
            <p className="mt-3">
              You can usually control cookies through your browser settings,
              though disabling them may affect parts of the website experience.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              6. How We Share Information
            </h2>
            <p>
              We do not sell your personal information. We may share information
              only when reasonably necessary, such as with:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Hosting providers and website infrastructure partners</li>
              <li>Email and communication providers</li>
              <li>Analytics or performance tools</li>
              <li>Contractors or collaborators working on your project</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <p className="mt-3">
              Any such sharing is limited to what is reasonably necessary for
              operating the business, delivering services, or complying with
              legal requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">7. Data Retention</h2>
            <p>
              We retain personal information only for as long as reasonably
              necessary for the purposes described in this Policy, including
              communication, project records, support history, invoicing,
              compliance, and dispute resolution.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">8. Data Security</h2>
            <p>
              We take reasonable administrative, technical, and organizational
              measures to protect your information. However, no method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">9. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights related to
              access, correction, deletion, or objection to certain processing
              of your personal information. To make a request, contact us using
              the email below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              10. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites, platforms,
              or services. We are not responsible for the privacy practices,
              content, or policies of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              11. Children’s Privacy
            </h2>
            <p>
              Our services are not directed to children under 13, and we do not
              knowingly collect personal information from children under 13. If
              we learn that such information has been submitted, we will take
              reasonable steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our services, business practices, legal requirements,
              or future payment and platform features. The updated version will
              be posted on this page with a revised “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">13. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, you can contact us at:
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