import { useId, type ReactNode } from "react";
import { Container } from "@/components/ui/container";
import type { SiteSettings } from "@/lib/cms/types";
import { BackToTop } from "./back-to-top";
import { FooterCopyright } from "./footer-copyright";
import { FooterInvitation } from "./footer-invitation";
import { FooterLink } from "./footer-link";
import { FooterWordmark } from "./footer-wordmark";
import { NewsletterForm } from "./newsletter-form";

interface SiteFooterProps {
  settings: SiteSettings;
}

/** `tel:` URIs only accept digits and a leading plus. */
function toTelHref(phone: string) {
  return `tel:${phone.replace(/(?!^\+)[^\d]/g, "")}`;
}

/** CMS addresses are single strings; break them at commas or newlines for a postal layout. */
function toAddressLines(address: string) {
  return address
    .split(/\n|,/)
    .map((line) => line.trim())
    .filter(Boolean);
}

interface FooterColumnProps {
  title: string;
  /** Renders a `nav` landmark labelled by the column title. */
  navigation?: boolean;
  children: ReactNode;
}

function FooterColumn({ title, navigation = false, children }: FooterColumnProps) {
  const id = useId();
  const Wrapper = navigation ? "nav" : "div";
  return (
    <Wrapper
      aria-labelledby={navigation ? id : undefined}
      className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-x-4 border-t border-ivory/15 pt-6 pb-10 md:block md:pb-14 lg:pb-0"
    >
      <h2 id={id} className="eyebrow pt-[0.2rem] text-ivory/50 md:pt-0">
        {title}
      </h2>
      <div className="md:mt-8">{children}</div>
    </Wrapper>
  );
}

const primaryLinkClass =
  "min-h-11 font-serif text-heading-sm font-light text-ivory/85 hover-fine:text-ivory md:min-h-10";
const secondaryLinkClass = "min-h-11 text-body text-ivory/70 hover-fine:text-ivory md:min-h-9";

export function SiteFooter({ settings }: SiteFooterProps) {
  const { name, tagline, contact } = settings;
  const newsletterTitleId = useId();

  return (
    <footer data-header-theme="dark" className="relative bg-ink text-ivory">
      <Container>
        <div className="grid-site gap-y-20 pt-section-sm pb-20 md:pb-28">
          <FooterInvitation name={name} className="col-span-4 md:col-span-8 lg:col-span-7" />

          <section
            aria-labelledby={newsletterTitleId}
            className="col-span-4 md:col-span-6 lg:col-span-5 xl:col-span-4 xl:col-start-9"
          >
            <h2 id={newsletterTitleId} className="eyebrow text-ivory/60">
              The {name} Letter
            </h2>
            <p className="mt-8 font-serif text-heading-sm font-light text-pretty text-ivory/90 md:mt-10">
              Seasonal dispatches from the collection: new houses, quiet journeys and the people who
              make them.
            </p>
            <NewsletterForm className="mt-10" />
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          <FooterColumn title="Explore" navigation>
            <ul className="-mt-2.5 md:-mt-2">
              {settings.primaryNavigation.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <FooterLink href={item.href} className={primaryLinkClass}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={name} navigation>
            <ul className="-mt-2.5 md:-mt-2">
              {settings.secondaryNavigation.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <FooterLink href={item.href} className={primaryLinkClass}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <address className="-mt-2.5 not-italic md:-mt-1.5">
              <ul>
                <li>
                  <FooterLink href={`mailto:${contact.email}`} className={secondaryLinkClass}>
                    {contact.email}
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href={toTelHref(contact.phone)} className={secondaryLinkClass}>
                    {contact.phone}
                  </FooterLink>
                </li>
              </ul>
              <p className="mt-4 text-body text-ivory/50">
                {toAddressLines(contact.address).map((line, index, lines) => (
                  <span key={`${index}-${line}`} className="block">
                    {line}
                    {index < lines.length - 1 ? <span className="sr-only">,</span> : null}
                  </span>
                ))}
              </p>
            </address>
          </FooterColumn>

          <FooterColumn title="Follow">
            <ul className="-mt-2.5 md:-mt-1.5">
              {settings.social.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} external className={secondaryLinkClass}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <FooterWordmark name={name} caption={tagline} className="mt-20 md:mt-32" />

        {/* Mobile: legal links on their own row, copyright and back-to-top sharing the last. */}
        <div className="flex flex-wrap items-center justify-between gap-x-10 border-t border-ivory/15 pt-4 pb-6 text-caption text-ivory/55 md:flex-nowrap md:justify-start md:pt-6 md:pb-10">
          <FooterCopyright name={name} className="order-2 md:order-1" />
          {settings.legalNavigation.length > 0 ? (
            <nav aria-label="Legal" className="order-1 w-full md:order-2 md:w-auto">
              <ul className="flex flex-wrap gap-x-8">
                {settings.legalNavigation.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <FooterLink
                      href={item.href}
                      className="min-h-11 text-ivory/55 hover-fine:text-ivory"
                    >
                      {item.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <BackToTop className="order-3 md:ml-auto" />
        </div>
      </Container>
    </footer>
  );
}
