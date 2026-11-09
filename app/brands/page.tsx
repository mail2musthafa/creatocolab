import Link from "next/link";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
export default function Page(){return <><SiteHeader/><main className="simple-page"><div className="container simple-page-inner"><span className="eyebrow">CREATORBRIDGE</span><h1>Your next campaign starts with the right people.</h1><p>Create a brand profile, publish a campaign brief and manage creator partnerships from one workspace.</p><div className="simple-actions"><Link className="button button-dark" href="/signup">Get started</Link><Link className="button button-outline" href="/">Back to home</Link></div></div></main><SiteFooter/></>}
