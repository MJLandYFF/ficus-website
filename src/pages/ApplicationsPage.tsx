import { useLanguage } from '../contexts/LanguageContext';

const ApplicationsPage = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('applications.hero.title')}</h1>
            <p className="text-xl mb-0">
              {t('applications.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Applications Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('applications.overview.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('applications.overview.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.overview.fieldsList')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('applications.overview.field1')}</li>
                <li>{t('applications.overview.field2')}</li>
                <li>{t('applications.overview.field3')}</li>
                <li>{t('applications.overview.field4')}</li>
                <li>{t('applications.overview.field5')}</li>
                <li>{t('applications.overview.field6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('applications.overview.conclusion')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">应用概览</p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-indigo-200/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Gas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('applications.industrialGas.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('applications.industrialGas.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.industrialGas.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('applications.industrialGas.application1')}</li>
                <li>{t('applications.industrialGas.application2')}</li>
                <li>{t('applications.industrialGas.application3')}</li>
                <li>{t('applications.industrialGas.application4')}</li>
                <li>{t('applications.industrialGas.application5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('applications.industrialGas.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-13a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V3a1 1 0 011-1h1zm4 4a1 1 0 011 1v5a1 1 0 01-1 1h-1a1 1 0 01-1-1V7a1 1 0 011-1h1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">工业气体应用</p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Semiconductor */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('applications.semiconductor.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('applications.semiconductor.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.semiconductor.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('applications.semiconductor.application1')}</li>
                <li>{t('applications.semiconductor.application2')}</li>
                <li>{t('applications.semiconductor.application3')}</li>
                <li>{t('applications.semiconductor.application4')}</li>
                <li>{t('applications.semiconductor.application5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('applications.semiconductor.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <p className="text-gray-600 font-medium">半导体制造</p>
                </div>
                <div className="absolute top-4 left-4 w-14 h-14 bg-purple-200/40 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('applications.pharmaceutical.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('applications.pharmaceutical.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.pharmaceutical.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('applications.pharmaceutical.application1')}</li>
                <li>{t('applications.pharmaceutical.application2')}</li>
                <li>{t('applications.pharmaceutical.application3')}</li>
                <li>{t('applications.pharmaceutical.application4')}</li>
                <li>{t('applications.pharmaceutical.application5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('applications.pharmaceutical.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">医药生物技术</p>
                </div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-red-200/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-pink-200/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Monitoring */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('applications.environmental.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('applications.environmental.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.environmental.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('applications.environmental.application1')}</li>
                <li>{t('applications.environmental.application2')}</li>
                <li>{t('applications.environmental.application3')}</li>
                <li>{t('applications.environmental.application4')}</li>
                <li>{t('applications.environmental.application5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('applications.environmental.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">环境监测</p>
                </div>
                <div className="absolute top-4 left-4 w-14 h-14 bg-green-200/40 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-teal-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Laboratory */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('applications.research.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('applications.research.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.research.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('applications.research.application1')}</li>
                <li>{t('applications.research.application2')}</li>
                <li>{t('applications.research.application3')}</li>
                <li>{t('applications.research.application4')}</li>
                <li>{t('applications.research.application5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('applications.research.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-.108 0-.214.005-.32.01L3.5 6H.75a.75.75 0 000 1.5h.634l.549 2.748a3 3 0 105.993.752l2.817-2.817a.75.75 0 101.06-1.06l-2.817 2.817a3.001 3.001 0 00.751-5.994L6.998 1.5H9.75a.75.75 0 000-1.5H9v4.804z" />
                  </svg>
                  <p className="text-gray-600 font-medium">科研实验室</p>
                </div>
                <div className="absolute top-6 left-6 w-14 h-14 bg-yellow-200/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-orange-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t('applications.caseStudies.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold mb-4">{t('applications.caseStudies.case1.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('applications.caseStudies.case1.challenge')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.caseStudies.case1.solution')}
              </p>
              <p className="text-gray-700">
                {t('applications.caseStudies.case1.result')}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold mb-4">{t('applications.caseStudies.case2.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('applications.caseStudies.case2.challenge')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('applications.caseStudies.case2.solution')}
              </p>
              <p className="text-gray-700">
                {t('applications.caseStudies.case2.result')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('applications.ctaSection.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('applications.ctaSection.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            {t('applications.ctaSection.contact')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;
