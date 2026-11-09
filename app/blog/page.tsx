import Link from "next/link";
import { ArrowUpRight, BookOpen, Lightbulb, Megaphone, TrendingUp } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const topics = [
  { category: "CREATOR GUIDES", title: "Building a creator profile that brands can understand", text: "A practical look at presenting your niche, content style, audience and past work.", icon: BookOpen, tone: "mk-blog-lilac", tag: "For creators" },
  { category: "BRAND PLAYBOOKS", title: "How to write a campaign brief creators can act on", text: "Define the objective, audience, deliverables and creative boundaries before outreach begins.", icon: Megaphone, tone: "mk-blog-green", tag: "For brands" },
  { category: "INDUSTRY INSIGHTS", title: "Why the right creator fit matters more than follower count", text: "Explore relevance, audience alignment, content quality and campaign objectives.", icon: TrendingUp, tone: "mk-blog-peach", tag: "Insights" },
];

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="mk-page">
        <section className="mk-hero mk-short-hero">
          <div className="mk-container">
            <span className="mk-eyebrow"><span /> THE CREATORCOLAB JOURNAL</span>
            <h1>Ideas that make <em>collaboration better.</em></h1>
            <p className="mk-lead">Practical guides, thoughtful perspectives and useful ideas for creators and brands building meaningful partnerships.</p>
          </div>
        </section>

        <section className="mk-section mk-section-soft">
          <div className="mk-container">
            <div className="mk-section-heading">
              <span className="mk-eyebrow">WHAT WE'LL COVER</span>
              <h2>Useful thinking for both sides of the table.</h2>
              <p>Our journal is being prepared. These are the editorial themes we're starting with.</p>
            </div>
            <div className="mk-blog-grid">
              {topics.map((post, index) => {
                const Icon = post.icon;
                return <article className="mk-blog-card" key={post.title}>
                  <div className={`mk-blog-art ${post.tone}`}>
                    <span className="mk-blog-index">0{index + 1}</span>
                    <Icon size={39}/>
                    <span className="mk-blog-art-word">COLLAB NOTES</span>
                  </div>
                  <div className="mk-blog-content">
                    <div className="mk-blog-meta"><span>{post.category}</span><span>{post.tag}</span></div>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                    <span className="mk-coming-soon">Article coming soon <ArrowUpRight size={15}/></span>
                  </div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="mk-section">
          <div className="mk-container mk-journal-banner">
            <div className="mk-journal-icon"><Lightbulb size={24}/></div>
            <div><span className="mk-eyebrow">A NOTE FROM OUR TEAM</span><h2>Less noise. More useful ideas.</h2><p>We want the CreatorColab journal to help people make better decisions about creator partnerships — not just add another stream of marketing noise.</p></div>
            <Link href="/how-it-works" className="mk-text-link">Explore the platform <ArrowUpRight size={16}/></Link>
          </div>
        </section>
        <p className="mk-disclaimer">These are editorial previews, not published articles. New content will be added as the journal launches.</p>
      </main>
      <SiteFooter />
    </>
  );
}
