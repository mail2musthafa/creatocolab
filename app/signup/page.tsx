import Link from "next/link";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
export default function Page(){return <><SiteHeader/><main className="simple-page"><div className="container simple-page-inner"><span className="eyebrow">CREATORBRIDGE</span><h1>Start your next collaboration.</h1><p>Choose whether you are joining as a creator, brand or agency. Account creation will be connected to the API in the next implementation phase.</p><div className="simple-actions"><Link className="button button-dark" href="/signup">Get started</Link><Link className="button button-outline" href="/">Back to home</Link></div></div></main><SiteFooter/></>}
