import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CircleHelp, CreditCard, FileText, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const creatorItems = [
  "Creator profile and portfolio",
  "Creator discovery opportunities",
  "Campaign brief and collaboration details",
  "A clear view of agreed deliverables",
];

const brandItems = [
  "Brand and campaign setup",
  "Creator discovery and shortlisting",
  "Campaign communication",
  "Deliverable and progress tracking",
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mk-page">
        <section className="mk-hero mk-short-hero">
          <div className="mk-container">
            <span className="mk-eyebrow"><span /> CREATORCOLAB PRICING</span>
            <h1>Clear terms make <em>better partnerships.</em></h1>
            <p className="mk-lead">We're shaping a pricing model that works for creators and brands. We will publish the actual fees and terms before paid bookings open.</p>
            <div className="mk-pricing-status"><span className="mk-status-dot"/> Pricing details are being finalised for launch.</div>
          </div>
        </section>

        <section className="mk-section mk-section-soft">
          <div className="mk-container">
            <div className="mk-section-heading">
              <span className="mk-eyebrow">DESIGNED FOR BOTH SIDES</span>
              <h2>One marketplace. Two ways to participate.</h2>
              <p>Here's the product scope we're working towards. These are not paid plans or a published price list.</p>
            </div>
            <div className="mk-pricing-grid">
              <article className="mk-price-card">
                <div className="mk-price-icon"><Users size={22}/></div>
                <span className="mk-eyebrow">FOR CREATORS</span>
                <h2>Build your presence.</h2>
                <p className="mk-price-description">A place to showcase your content, discover relevant opportunities and manage brand conversations.</p>
                <div className="mk-price-placeholder">Launch pricing <strong>To be announced</strong></div>
                <div className="mk-price-divider"/>
                <h3>Planned experience</h3>
                {creatorItems.map(item => <div className="mk-price-feature" key={item}><BadgeCheck size={16}/>{item}</div>)}
                <Link href="/signup?type=creator" className="mk-button mk-button-dark mk-full-button">Creator sign-up <ArrowRight size={16}/></Link>
              </article>

              <article className="mk-price-card mk-price-featured">
                <div className="mk-price-icon"><BriefcaseBusiness size={22}/></div>
                <span className="mk-eyebrow">FOR BRANDS</span>
                <h2>Build your next campaign.</h2>
                <p className="mk-price-description">A structured way to discover creators, share briefs and organise campaign collaborations.</p>
                <div className="mk-price-placeholder">Campaign fees <strong>To be announced</strong></div>
                <div className="mk-price-divider"/>
                <h3>Planned experience</h3>
                {brandItems.map(item => <div className="mk-price-feature" key={item}><BadgeCheck size={16}/>{item}</div>)}
                <Link href="/signup?type=brand" className="mk-button mk-button-dark mk-full-button">Brand sign-up <ArrowRight size={16}/></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="mk-section">
          <div className="mk-container mk-pricing-note">
            <div className="mk-note-icon"><CreditCard size={23}/></div>
            <div><span className="mk-eyebrow">NO SURPRISES</span><h2>Know the terms before you commit.</h2><p>Before paid bookings open, we will explain any platform fees, payment processing charges, applicable taxes, payout timing, cancellation rules and refund terms. We won't ask you to rely on assumptions or hidden pricing.</p></div>
          </div>
        </section>

        <section className="mk-faq-section">
          <div className="mk-container">
            <div className="mk-section-heading"><span className="mk-eyebrow">PRICING QUESTIONS</span><h2>What we can tell you today.</h2></div>
            <div className="mk-faq-list">
              <details><summary>Are these final prices? <CircleHelp size={17}/></summary><p>No. Pricing is still being evaluated. The figures and fees will be published here before paid transactions are enabled.</p></details>
              <details><summary>Will creators and brands pay the same fees? <CircleHelp size={17}/></summary><p>The pricing model for each side is being evaluated separately. We will clearly explain who pays each fee and when it applies.</p></details>
              <details><summary>Will there be any hidden payment charges? <CircleHelp size={17}/></summary><p>Our pricing information will identify applicable platform charges, payment processing costs and taxes before a booking is confirmed.</p></details>
            </div>
          </div>
        </section>
        <p className="mk-disclaimer">Pricing and feature descriptions are preliminary. No subscription, commission or payment terms are currently being offered through this preview page.</p>
      </main>
      <SiteFooter />
    </>
  );
}
