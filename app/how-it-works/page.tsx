import Link from "next/link";
import { ArrowRight, Search, FileText, MessageCircle, CheckCircle2, Camera, ClipboardCheck, Users, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const creatorSteps = [
  { icon: Users, title: "Create your creator profile", text: "Introduce yourself, choose your content categories, add your social links and showcase your best work." },
  { icon: Search, title: "Discover relevant opportunities", text: "Explore brand campaigns that align with your niche, audience, location and creative interests." },
  { icon: MessageCircle, title: "Connect and agree", text: "Discuss the brief, deliverables, timelines and expectations before accepting a collaboration." },
  { icon: Camera, title: "Create and share your work", text: "Work on the agreed content and keep the campaign's progress and feedback organised." },
];

const brandSteps = [
  { icon: FileText, title: "Create a campaign brief", text: "Explain your campaign goals, target audience, deliverables, timeline and budget." },
  { icon: Search, title: "Discover your creator shortlist", text: "Explore creator profiles and identify people whose content and audience fit your campaign." },
  { icon: MessageCircle, title: "Discuss the collaboration", text: "Connect with creators, compare proposals and agree on the scope before work begins." },
  { icon: ClipboardCheck, title: "Review and track delivery", text: "Keep deliverables, feedback, approvals and campaign progress in one organised view." },
];

function StepList({ items }: { items: typeof creatorSteps }) {
  return <div className="mk-step-list">{items.map((item, index) => {
    const Icon = item.icon;
    return <article className="mk-step" key={item.title}>
      <span className="mk-step-index">0{index + 1}</span>
      <span className="mk-step-icon"><Icon size={21}/></span>
      <div><h3>{item.title}</h3><p>{item.text}</p></div>
    </article>;
  })}</div>;
}

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mk-page">
        <section className="mk-hero mk-short-hero">
          <div className="mk-container">
            <span className="mk-eyebrow"><span /> HOW CREATORCOLAB WORKS</span>
            <h1>From first connection to <em>great collaboration.</em></h1>
            <p className="mk-lead">A clearer journey for both sides. Find the right people, agree on the work and keep every campaign moving forward.</p>
            <div className="mk-hero-actions">
              <Link href="/signup?type=creator" className="mk-button mk-button-dark">Join as a creator <ArrowRight size={17}/></Link>
              <Link href="/signup?type=brand" className="mk-button mk-button-light">Join as a brand</Link>
            </div>
          </div>
        </section>

        <section className="mk-section mk-section-soft">
          <div className="mk-container">
            <div className="mk-section-heading">
              <span className="mk-eyebrow">ONE MARKETPLACE. TWO EXPERIENCES.</span>
              <h2>Choose your side of the collaboration.</h2>
              <p>The journey is designed around what creators and brands each need to accomplish.</p>
            </div>
            <div className="mk-two-audience">
              <article className="mk-journey-card">
                <div className="mk-journey-heading"><span className="mk-journey-symbol">✳</span><div><span className="mk-eyebrow">THE CREATOR JOURNEY</span><h2>Make your work discoverable.</h2></div></div>
                <StepList items={creatorSteps}/>
                <Link href="/signup?type=creator" className="mk-text-link">Start as a creator <ArrowRight size={16}/></Link>
              </article>
              <article className="mk-journey-card mk-journey-brand">
                <div className="mk-journey-heading"><span className="mk-journey-symbol">↗</span><div><span className="mk-eyebrow">THE BRAND JOURNEY</span><h2>Find the right creative fit.</h2></div></div>
                <StepList items={brandSteps}/>
                <Link href="/signup?type=brand" className="mk-text-link">Start as a brand <ArrowRight size={16}/></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="mk-section">
          <div className="mk-container">
            <div className="mk-section-heading">
              <span className="mk-eyebrow">THE SHARED WORKFLOW</span>
              <h2>Five moments. One connected journey.</h2>
              <p>A simple view of how a collaboration can move from an idea to a completed campaign.</p>
            </div>
            <div className="mk-flow">
              {[
                ["01", "Discover", "Find the right match", Search],
                ["02", "Brief", "Set the expectations", FileText],
                ["03", "Agree", "Confirm the details", MessageCircle],
                ["04", "Create", "Bring the idea to life", Camera],
                ["05", "Review", "Close the campaign", CheckCircle2],
              ].map(([number, title, text, Icon]: any) => <div className="mk-flow-item" key={number}>
                <span>{number}</span><Icon size={22}/><strong>{title}</strong><small>{text}</small>
              </div>)}
            </div>
          </div>
        </section>

        <section className="mk-bottom-cta">
          <div className="mk-container mk-bottom-cta-inner">
            <div><span className="mk-eyebrow">YOUR NEXT STEP STARTS HERE</span><h2>Ready to find your people?</h2></div>
            <Link href="/signup" className="mk-button mk-button-lime">Get started <ArrowRight size={17}/></Link>
          </div>
        </section>
        <p className="mk-disclaimer">This workflow describes the intended CreatorColab experience. Individual features are being developed and are not all available yet.</p>
      </main>
      <SiteFooter />
    </>
  );
}
