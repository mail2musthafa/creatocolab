import Link from "next/link";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
export default function Page(){return <><SiteHeader/><main className="simple-page"><div className="container simple-page-inner"><span className="eyebrow">CREATORBRIDGE</span><h1>Discover creators who make your brand feel human.</h1><p>Explore creator profiles, audience context and collaboration styles. The searchable creator directory will connect to verified platform data in a later phase.</p><div className="simple-actions"><Link className="button button-dark" href="/signup">Get started</Link><Link className="button button-outline" href="/">Back to home</Link></div></div></main><SiteFooter/></>}
