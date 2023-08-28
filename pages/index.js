import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Plus from "../components/Plus";

export default function Home() {
  return (
    <>
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
