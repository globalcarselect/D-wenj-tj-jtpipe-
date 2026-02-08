'use client';

import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUsCarousel from '@/components/AboutUsCarousel';
import CompanyScale from '@/components/CompanyScale';
import ProductDiversity from '@/components/ProductDiversity';
import QualityCertifications from '@/components/QualityCertifications';
import NewsSection from '@/components/NewsSection';
import CaseStudies from '@/components/CaseStudies';
import ExportData from '@/components/ExportData';
import ForeignTradeTeam from '@/components/ForeignTradeTeam';
import CustomerReviews from '@/components/CustomerReviews';
import SocialMediaEntry from '@/components/SocialMediaEntry';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { ContentProvider } from '@/contexts/ContentContext';

export default function Home() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-gray-50">
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <Header />
        <main>
          <HeroCarousel />
          <AboutUsCarousel />
          <CompanyScale />
          <ProductDiversity />
          <NewsSection />
          <CaseStudies />
          <QualityCertifications />
          <ExportData />
          <ForeignTradeTeam />
          <CustomerReviews />
          <SocialMediaEntry />
          <QuickLinks />
        </main>
        <Footer />
      </div>
    </ContentProvider>
  );
}