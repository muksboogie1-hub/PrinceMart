import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CookieBanner } from './components/CookieBanner';
import { ProductItem } from './data/princemartData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [quoteProductPreset, setQuoteProductPreset] = useState<string>('');

  const handleOpenProductDetails = (product: ProductItem) => {
    setModalProduct(product);
  };

  const handleCloseProductDetails = () => {
    setModalProduct(null);
  };

  const handleSelectQuoteFromProduct = (product: ProductItem) => {
    setQuoteProductPreset(product.name);
    setActiveTab('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToQuote = () => {
    setQuoteProductPreset('General Hardware Inquiry');
    setActiveTab('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToProducts = () => {
    setSelectedCategory('All Products');
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500/20 selection:text-amber-900 font-sans">
      {/* Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteWithProduct={(prodName) => {
          if (prodName) setQuoteProductPreset(prodName);
          setActiveTab('quote');
        }}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onViewDetails={handleOpenProductDetails}
            onSelectQuote={handleSelectQuoteFromProduct}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onViewDetails={handleOpenProductDetails}
            onSelectQuote={handleSelectQuoteFromProduct}
            onNavigateToQuote={handleNavigateToQuote}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigateToQuote={handleNavigateToQuote}
            onNavigateToProducts={handleNavigateToProducts}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage onNavigateToQuote={handleNavigateToQuote} />
        )}

        {activeTab === 'quote' && (
          <QuotePage
            initialProduct={quoteProductPreset}
            onClearInitialProduct={() => setQuoteProductPreset('')}
          />
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={modalProduct}
        onClose={handleCloseProductDetails}
        onRequestQuote={handleSelectQuoteFromProduct}
      />

      {/* Lightweight Cookie Banner */}
      <CookieBanner />

      {/* Global Professional Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
