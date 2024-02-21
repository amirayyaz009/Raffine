import type { Metadata } from 'next';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@documenso/ui/primitives/accordion';

import { PricingTable } from '~/components/(marketing)/pricing-table';

export const metadata: Metadata = {
  title: 'Pricing',
};

export const dynamic = 'force-dynamic';

export type PricingPageProps = {
  searchParams?: {
    planId?: string;
    email?: string;
    name?: string;
    cancelled?: string;
  };
};

export default function PricingPage() {
  return (
    <div className="mt-6 sm:mt-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold lg:text-5xl">Pricing</h1>

        <p className="text-foreground mt-4 text-lg leading-normal">
          Designed for every stage of your journey.
        </p>
        <p className="text-foreground text-lg leading-normal">Get started today.</p>
      </div>

      <div className="mt-12">
        <PricingTable />
      </div>

      <div className="mx-auto mt-36 max-w-2xl">
        {/* FAQ Section */}

        <h2 className="text-4xl font-semibold">FAQs</h2>

        <Accordion type="multiple" className="mt-8">
          <AccordionItem value="data-handling">
            <AccordionTrigger className="text-left text-lg font-semibold">
              How do you handle my data?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Securely. Our data centers are located in Frankfurt (Germany), giving us the best
              local privacy laws. We are very aware of the sensitive nature of our data and follow
              best practices to ensure the security and integrity of the data entrusted to us.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-prefer-documenso">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Why should I prefer Raffine over DocuSign or some other signing tool?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Raffine is a community effort to create an open and vibrant ecosystem around a tool,
              everybody is free to use and adapt. By being truly open we want to create trusted
              infrastructure for the future of the internet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="where-can-i-get-support">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Where can I get support?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              We are happy to assist you at{' '}
              <Link
                className="text-documenso-700 font-bold"
                target="_blank"
                rel="noreferrer"
                href="mailto:support@raffine.site"
              >
                support@raffine.site{' '}
              </Link>
              please message either Lucas or Timur to get added to the channel if you are not
              already a member.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
