import { useLanguage } from '../contexts/LanguageContext';

interface Region {
  name: string;
  cities: string;
  description: string;
}

const AboutPage = () => {
  const { t, getRaw } = useLanguage();
  const whyChooseUs = getRaw('about.whyChooseUs');

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
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                  <svg className="w-24 h-24 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
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
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                  <svg className="w-24 h-24 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
                <div className="absolute top-6 right-6 w-14 h-14 bg-green-200/30 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-18 h-18 bg-blue-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: 'var(--primary-color)' }}>
            {whyChooseUs.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* 痛点标题 */}
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-8 bg-white rounded-full"></span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {whyChooseUs.painTitle}
                  </h3>
                </div>
                <p className="text-white text-lg md:text-xl">
                  {whyChooseUs.painDesc.split(/(1ppb|百万级损失|million-level loss!)/).map((part: string, i: number) =>
                    part === '1ppb' || part === '百万级损失' || part === 'million-level loss!' ?
                      <span key={i} className="font-bold bg-white/20 px-2 py-1 rounded">{part}</span> : part
                  )}
                </p>
              </div>
              
              {/* 解决方案列表 */}
              <div className="p-6 md:p-8">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
                  {whyChooseUs.solutionTitle}
                </h4>
                <div className="grid gap-4 md:gap-6">
                  {whyChooseUs.solutions.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 text-base md:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Business Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--primary-color)' }}>
            {t('about.globalSection.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {t('about.globalSection.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(getRaw('about.globalSection.regions') as Region[]).map((region, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary-color)' }}>
                  {region.name}
                </h3>
                <p className="text-gray-600 mb-2 font-medium">
                  {region.cities}
                </p>
                <p className="text-gray-500 text-sm">
                  {region.description}
                </p>
              </div>
            ))}
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
