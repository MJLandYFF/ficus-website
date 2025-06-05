import { useLanguage } from '../contexts/LanguageContext';

const EquipmentPage = () => {
  const { t, language, getRaw } = useLanguage();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('equipment.hero.title')}</h1>
            <p className="text-xl mb-0">
              {t('equipment.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('equipment.overview.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('equipment.overview.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('equipment.overview.productLine')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('equipment.overview.product1')}</li>
                <li>{t('equipment.overview.product2')}</li>
                <li>{t('equipment.overview.product3')}</li>
                <li>{t('equipment.overview.product4')}</li>
                <li>{t('equipment.overview.product5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('equipment.overview.quality')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                  <svg className="w-24 h-24 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  {/* <p className="text-gray-600 font-medium">{t('equipment.overview.imageText')}</p> */}
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('equipment.products.title')}</h2>
          
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('equipment.products.product1.name')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('equipment.products.product1.description')}
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  {t('equipment.products.getDetails')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('equipment.products.product2.name')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('equipment.products.product2.description')}
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  {t('equipment.products.getDetails')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('equipment.products.product3.name')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('equipment.products.product3.description')}
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  {t('equipment.products.getDetails')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Certificates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--primary-color)' }}>
            {t('certificates.title')}
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {(getRaw('certificates.images') || []).map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={t('certificates.title') + (idx + 1)}
                className="w-full max-w-xs rounded-lg shadow-lg border border-gray-200"
              />
            ))}
            </div>
                </div>
      </section>


      {/* 授权证书 Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">{t('equipment.authorizationSection.title')}</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {getRaw('equipment.authorizationSection.images').map((img: string, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={img}
                  alt={getRaw('equipment.authorizationSection.desc')[idx]}
                  className="w-full max-w-xs rounded-lg shadow-lg border border-gray-200"
                />
                <p className="mt-2 text-gray-600 text-center text-sm">{getRaw('equipment.authorizationSection.desc')[idx]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quality Assurance */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('equipment.quality.title')}</h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('equipment.quality.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('equipment.quality.feature1Title')}</h3>
              <p className="text-gray-600">
                {t('equipment.quality.feature1Description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('equipment.quality.feature2Title')}</h3>
              <p className="text-gray-600">
                {t('equipment.quality.feature2Description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('equipment.quality.feature3Title')}</h3>
              <p className="text-gray-600">
                {t('equipment.quality.feature3Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('equipment.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('equipment.cta.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            {t('equipment.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage;
