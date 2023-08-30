import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Plus from "../components/Plus";
import Script from "next/script";

export default function Home() {
  return (
    <>
      
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11318190346" />
      <Script id="google-analytics">
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-11318190346');
          `
        }
        
      </Script>
      
      <SeoHead title='Promo Kemerdekaan MyRepublic - Internet Super Cepat dan Stabil' />
      <Layout>
        <Hero />
        <Plus />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
