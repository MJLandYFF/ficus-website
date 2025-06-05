import { useLanguage } from '../contexts/LanguageContext';

const TechnologiesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('technologies.hero.title')}</h1>
            <p className="text-xl mb-0">
              {t('technologies.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('technologies.coreSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('technologies.coreSection.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('technologies.coreSection.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('technologies.coreSection.tech1')}</li>
                <li>{t('technologies.coreSection.tech2')}</li>
                <li>{t('technologies.coreSection.tech3')}</li>
                <li>{t('technologies.coreSection.tech4')}</li>
                <li>{t('technologies.coreSection.tech5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('technologies.coreSection.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">{t('technologies.coreSection.visualTitle')}</h3>
                    <p className="text-sm opacity-80">{t('technologies.coreSection.visualSubtitle')}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-300/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Technology */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('technologies.detectionSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('technologies.detectionSection.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('technologies.detectionSection.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li><strong>{t('technologies.detectionSection.hdd')}</strong></li>
                <li><strong>{t('technologies.detectionSection.tcd')}</strong></li>
                <li><strong>{t('technologies.detectionSection.fid')}</strong></li>
                <li><strong>{t('technologies.detectionSection.pdd')}</strong></li>
                <li><strong>{t('technologies.detectionSection.ecd')}</strong></li>
              </ul>
              <p className="text-gray-700">
                {t('technologies.detectionSection.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">检测技术</h3>
                    <p className="text-sm opacity-80">精准检测，可靠分析</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-20 h-20 bg-purple-300/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-indigo-400/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Data Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('technologies.softwareSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('technologies.softwareSection.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('technologies.softwareSection.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('technologies.softwareSection.feature1')}</li>
                <li>{t('technologies.softwareSection.feature2')}</li>
                <li>{t('technologies.softwareSection.feature3')}</li>
                <li>{t('technologies.softwareSection.feature4')}</li>
                <li>{t('technologies.softwareSection.feature5')}</li>
                <li>{t('technologies.softwareSection.feature6')}</li>
                <li>{t('technologies.softwareSection.feature7')}</li>
              </ul>
              <p className="text-gray-700">
                {t('technologies.softwareSection.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-green-500 via-teal-600 to-blue-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">软件分析</h3>
                    <p className="text-sm opacity-80">智能软件，数据洞察</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-green-300/25 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-teal-400/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & R&D */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('technologies.innovationSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('technologies.innovationSection.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('technologies.innovationSection.description2')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('technologies.innovationSection.focus1')}</li>
                <li>{t('technologies.innovationSection.focus2')}</li>
                <li>{t('technologies.innovationSection.focus3')}</li>
                <li>{t('technologies.innovationSection.focus4')}</li>
                <li>{t('technologies.innovationSection.focus5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('technologies.innovationSection.description3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">创新研发</h3>
                    <p className="text-sm opacity-80">持续创新，引领未来</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-18 h-18 bg-orange-300/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-pink-400/30 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('technologies.comparisonSection.title')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">{t('technologies.comparisonSection.headers.technology')}</th>
                  <th className="py-3 px-4 border-b text-left">{t('technologies.comparisonSection.headers.sensitivity')}</th>
                  <th className="py-3 px-4 border-b text-left">{t('technologies.comparisonSection.headers.range')}</th>
                  <th className="py-3 px-4 border-b text-left">{t('technologies.comparisonSection.headers.selectivity')}</th>
                  <th className="py-3 px-4 border-b text-left">{t('technologies.comparisonSection.headers.application')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">{t('technologies.comparisonSection.hdd.name')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.hdd.sensitivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.hdd.range')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.hdd.selectivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.hdd.application')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">{t('technologies.comparisonSection.tcd.name')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.tcd.sensitivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.tcd.range')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.tcd.selectivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.tcd.application')}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">{t('technologies.comparisonSection.fid.name')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.fid.sensitivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.fid.range')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.fid.selectivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.fid.application')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">{t('technologies.comparisonSection.pdd.name')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.pdd.sensitivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.pdd.range')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.pdd.selectivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.pdd.application')}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">{t('technologies.comparisonSection.ecd.name')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.ecd.sensitivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.ecd.range')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.ecd.selectivity')}</td>
                  <td className="py-3 px-4 border-b">{t('technologies.comparisonSection.ecd.application')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Patents & Intellectual Property */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('technologies.patentsSection.title')}</h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('technologies.patentsSection.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('technologies.patentsSection.detection.title')}</h3>
              <p className="text-gray-600">
                {t('technologies.patentsSection.detection.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('technologies.patentsSection.dataProcessing.title')}</h3>
              <p className="text-gray-600">
                {t('technologies.patentsSection.dataProcessing.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('technologies.patentsSection.systemIntegration.title')}</h3>
              <p className="text-gray-600">
                {t('technologies.patentsSection.systemIntegration.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('technologies.ctaSection.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('technologies.ctaSection.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            {t('technologies.ctaSection.contact')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;
