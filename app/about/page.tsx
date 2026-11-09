import Link from "next/link";
import { ArrowRight, HeartHandshake, Lightbulb, Target, Users, Sparkles, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const principles = [
  { icon: Users, title: "People before numbers", text: "Great partnerships start with understanding the person behind the profile, their creativity and the community they have built." },
  { icon: ShieldCheck, title: "Clarity at every step", text: "Campaign expectations, deliverables, timelines and communication should be easy to understand." },
  { icon: HeartHandshake, title: "Partnerships that last", text: "We want to make it easier for creators and brands to build relationships beyond a single campaign." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mk-page">
        <section className="mk-hero mk-about-hero">
          <div className="mk-container">
            <span className="mk-eyebrow"><span /> THE STORY BEHIND CREATORCOLAB</span>
            <h1>Good things happen when <em>creativity connects.</em></h1>
            <p className="mk-lead">CreatorColab is being built to bring creators and brands closer together — making discovery, collaboration and campaign management feel more human and more organised.</p>
            <div className="mk-hero-actions">
              <Link href="/creators" className="mk-button mk-button-dark">Discover creators <ArrowRight size={17}/></Link>
              <Link href="/how-it-works" className="mk-button mk-button-light">See how it works</Link>
            </div>
            <div className="mk-hero-art">
              <div className="mk-art-orbit mk-orbit-one" />
              <div className="mk-art-orbit mk-orbit-two" />
              <div className="mk-art-center"><Sparkles size={35}/><strong>Ideas meet opportunity.</strong><span>CREATORCOLAB</span></div>
              <div className="mk-art-chip mk-chip-one">Creators <span>✳</span></div>
              <div className="mk-art-chip mk-chip-two">Brands <span>↗</span></div>
              <div className="mk-art-chip mk-chip-three">Better together <span>♥</span></div>
            </div>
          </div>
        </section>

        <section className="mk-section">
          <div className="mk-container mk-story-grid">
            <div>
              <span className="mk-eyebrow">WHY WE'RE BUILDING THIS</span>
              <h2>Influence is personal. Collaboration should be too.</h2>
            </div>
            <div className="mk-story-copy">
              <p>Creators bring ideas, perspectives and communities to the table. Brands bring products, stories and opportunities. The best work happens when both sides find the right fit.</p>
              <p>But finding each other, agreeing on expectations and keeping a campaign organised can involve too many disconnected conversations. CreatorColab aims to bring that journey into one thoughtful marketplace.</p>
            </div>
          </div>
        </section>

        <section className="mk-section mk-section-soft">
          <div className="mk-container">
            <div className="mk-section-heading">
              <span className="mk-eyebrow">WHAT GUIDES US</span>
              <h2>Built around better collaboration.</h2>
              <p>Three principles shape the experience we want to create.</p>
            </div>
            <div className="mk-card-grid mk-three">
              {principles.map((item, i) => {
                const Icon = item.icon;
                return <article className="mk-info-card" key={item.title}>
                  <span className="mk-card-number">0{i + 1}</span>
                  <div className="mk-icon-box"><Icon size={22}/></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="mk-section">
          <div className="mk-container mk-two-audience">
            <article className="mk-audience-card mk-creator-card">
              <span className="mk-eyebrow">FOR CREATORS</span>
              <h2>Your creativity deserves the right opportunities.</h2>
              <p>Build your presence, showcase your work and discover brand collaborations that align with your content and audience.</p>
              <Link href="/creators" className="mk-text-link">Explore the creator experience <ArrowRight size={16}/></Link>
            </article>
            <article className="mk-audience-card mk-brand-card">
              <span className="mk-eyebrow">FOR BRANDS</span>
              <h2>Find voices that make your brand matter.</h2>
              <p>Discover relevant creators, communicate your campaign needs and organise collaborations with more clarity.</p>
              <Link href="/brands" className="mk-text-link">Explore the brand experience <ArrowRight size={16}/></Link>
            </article>
          </div>
        </section>

        <section className="mk-bottom-cta">
          <div className="mk-container mk-bottom-cta-inner">
            <div><span className="mk-eyebrow">LET'S MAKE SOMETHING MEANINGFUL</span><h2>Find your next great collaboration.</h2></div>
            <Link href="/signup" className="mk-button mk-button-lime">Join CreatorColab <ArrowRight size={17}/></Link>
          </div>
        </section>
        <p className="mk-disclaimer">CreatorColab is under development. Page descriptions reflect the intended product direction; features will become available as they are released.</p>
      </main>
      <SiteFooter />
    </>
  );
}
