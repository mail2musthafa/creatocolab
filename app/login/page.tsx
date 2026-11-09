import Link from "next/link";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
export default function Page(){return <><SiteHeader/><main className="simple-page"><div className="container simple-page-inner"><span className="eyebrow">CREATORBRIDGE</span><h1>Welcome back.</h1><p>Authentication is not connected yet. The backend foundation is included so email, phone and social login can be implemented next.</p><div className="simple-actions"><Link className="button button-dark" href="/signup">Get started</Link><Link className="button button-outline" href="/">Back to home</Link></div></div></main><SiteFooter/></>}
