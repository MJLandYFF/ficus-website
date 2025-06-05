import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.heroTitle')}</h1>
            <p className="text-xl mb-0">
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('about.historySection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('about.historySection.text1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('about.historySection.text2')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('about.historySection.text3')}
              </p>
              <p className="text-gray-700">
                {t('about.historySection.text4')}
              </p>
            </div>            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <p className="text-gray-700 font-medium">{t('about.historySection.imageText')}</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('about.missionSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('about.missionSection.text1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('about.missionSection.text2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('about.missionSection.mission1')}</li>
                <li>{t('about.missionSection.mission2')}</li>
                <li>{t('about.missionSection.mission3')}</li>
                <li>{t('about.missionSection.mission4')}</li>
                <li>{t('about.missionSection.mission5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('about.missionSection.text3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 font-medium">企业使命与愿景</p>
                </div>
                <div className="absolute top-6 right-6 w-14 h-14 bg-green-200/30 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-18 h-18 bg-blue-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('about.teamSection.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">张明</h3>
              <p className="text-gray-600 mb-3">{t('about.teamSection.ceo')}</p>
              <p className="text-gray-700 px-4">
                {t('about.teamSection.ceoDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">李华</h3>
              <p className="text-gray-600 mb-3">{t('about.teamSection.cto')}</p>
              <p className="text-gray-700 px-4">
                {t('about.teamSection.ctoDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">王丽</h3>
              <p className="text-gray-600 mb-3">{t('about.teamSection.intlDirector')}</p>
              <p className="text-gray-700 px-4">
                {t('about.teamSection.intlDirectorDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('about.globalSection.title')}</h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('about.globalSection.description')}
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg shadow-xl w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-green-100/20"></div>
              <div className="relative z-10 text-center">
                <svg className="w-32 h-32 mx-auto mb-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 font-semibold text-lg">全球业务分布</p>
                <p className="text-gray-600 mt-2">遍布亚洲、欧洲、北美等地区</p>
              </div>
              <div className="absolute top-8 left-8 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-12 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-16 w-5 h-5 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold text-xl">{t('about.globalSection.asia')}</p>
              <p className="text-gray-600">{t('about.globalSection.asiaCount')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold text-xl">{t('about.globalSection.europe')}</p>
              <p className="text-gray-600">{t('about.globalSection.europeCount')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold text-xl">{t('about.globalSection.northAmerica')}</p>
              <p className="text-gray-600">{t('about.globalSection.northAmericaCount')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold text-xl">{t('about.globalSection.others')}</p>
              <p className="text-gray-600">{t('about.globalSection.othersCount')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('about.ctaSection.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('about.ctaSection.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            {t('about.ctaSection.contact')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
