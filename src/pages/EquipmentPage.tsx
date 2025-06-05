import { useLanguage } from '../contexts/LanguageContext';

const EquipmentPage = () => {
  const { t } = useLanguage();
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
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">{t('equipment.overview.imageText')}</p>
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
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <svg className="w-20 h-20 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    <p className="text-gray-600 font-medium">{t('equipment.products.product1.name')}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-200/40 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-200/30 rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">{t('equipment.products.product1.name')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('equipment.products.product1.description')}
                </p>
                <h4 className="font-semibold text-lg mb-2">{t('equipment.products.product1.featuresTitle')}</h4>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                  <li>{t('equipment.products.product1.feature1')}</li>
                  <li>{t('equipment.products.product1.feature2')}</li>
                  <li>{t('equipment.products.product1.feature3')}</li>
                  <li>{t('equipment.products.product1.feature4')}</li>
                  <li>{t('equipment.products.product1.feature5')}</li>
                </ul>
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
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2">
                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <svg className="w-20 h-20 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600 font-medium">{t('equipment.products.product2.name')}</p>
                  </div>
                  <div className="absolute top-4 left-4 w-14 h-14 bg-green-200/40 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-200/30 rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">{t('equipment.products.product2.name')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('equipment.products.product2.description')}
                </p>
                <h4 className="font-semibold text-lg mb-2">{t('equipment.products.product2.featuresTitle')}</h4>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                  <li>{t('equipment.products.product2.feature1')}</li>
                  <li>{t('equipment.products.product2.feature2')}</li>
                  <li>{t('equipment.products.product2.feature3')}</li>
                  <li>{t('equipment.products.product2.feature4')}</li>
                  <li>{t('equipment.products.product2.feature5')}</li>
                </ul>
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <svg className="w-20 h-20 mx-auto mb-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600 font-medium">{t('equipment.products.product3.name')}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-purple-200/40 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-yellow-200/30 rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">{t('equipment.products.product3.name')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('equipment.products.product3.description')}
                </p>
                <h4 className="font-semibold text-lg mb-2">{t('equipment.products.product3.featuresTitle')}</h4>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                  <li>{t('equipment.products.product3.feature1')}</li>
                  <li>{t('equipment.products.product3.feature2')}</li>
                  <li>{t('equipment.products.product3.feature3')}</li>
                  <li>{t('equipment.products.product3.feature4')}</li>
                  <li>{t('equipment.products.product3.feature5')}</li>
                </ul>
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

      {/* Custom Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('equipment.custom.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('equipment.custom.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('equipment.custom.services')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('equipment.custom.service1')}</li>
                <li>{t('equipment.custom.service2')}</li>
                <li>{t('equipment.custom.service3')}</li>
                <li>{t('equipment.custom.service4')}</li>
                <li>{t('equipment.custom.service5')}</li>
                <li>{t('equipment.custom.service6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('equipment.custom.conclusion')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">{t('equipment.custom.imageText')}</p>
                </div>
                <div className="absolute top-6 right-6 w-14 h-14 bg-orange-200/40 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-18 h-18 bg-yellow-200/30 rounded-full"></div>
              </div>
            </div>
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
