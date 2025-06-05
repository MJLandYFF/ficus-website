import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative h-full w-full">
            {/* Animated Background Gradients - will rotate */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${count === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-full w-full bg-gradient-to-br from-blue-900 via-gray-900 to-black relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(120,119,198,0.2),transparent)]"></div>
              </div>
            </div>
            <div className={`absolute inset-0 transition-opacity duration-1000 ${count === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-full w-full bg-gradient-to-br from-gray-800 via-blue-900 to-black relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3),transparent)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(34,197,94,0.2),transparent)]"></div>
              </div>
            </div>
            <div className={`absolute inset-0 transition-opacity duration-1000 ${count === 2 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-full w-full bg-gradient-to-br from-purple-900 via-gray-900 to-black relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.3),transparent)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(168,85,247,0.2),transparent)]"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/equipment" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition-colors text-center"
              >
                {t('home.exploreSolutions')}
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-md transition-colors text-center"
              >
                {t('home.contactUs')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-yellow-500 mb-2">+5000</p>
              <p className="text-gray-600">{t('home.stats.projects')}</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-yellow-500 mb-2">77</p>
              <p className="text-gray-600">{t('home.stats.employees')}</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-yellow-500 mb-2">+50</p>
              <p className="text-gray-600">{t('home.stats.experience')}</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-yellow-500 mb-2">21</p>
              <p className="text-gray-600">{t('home.stats.distributors')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('home.aboutSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('home.aboutSection.text1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('home.aboutSection.text2')}
              </p>
              <a 
                href="/about" 
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                {t('home.aboutSection.learnMore')}
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm1 5a1 1 0 000 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">企业历史与发展</p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('home.equipmentSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('home.equipmentSection.text1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('home.equipmentSection.text2')}
              </p>
              <a 
                href="/equipment" 
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                {t('home.equipmentSection.learnMore')}
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">精密分析设备</p>
                </div>
                <div className="absolute top-6 right-6 w-20 h-20 bg-blue-200/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-yellow-200/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-200/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t('home.applicationsSection.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('home.applicationsSection.industrial.title')}</h3>
              <p className="text-gray-600">
                {t('home.applicationsSection.industrial.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('home.applicationsSection.laboratory.title')}</h3>
              <p className="text-gray-600">
                {t('home.applicationsSection.laboratory.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('home.applicationsSection.environmental.title')}</h3>
              <p className="text-gray-600">
                {t('home.applicationsSection.environmental.description')}
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a 
              href="/applications" 
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              {t('home.applicationsSection.viewAll')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('home.ctaSection.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('home.ctaSection.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            {t('home.ctaSection.contact')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
