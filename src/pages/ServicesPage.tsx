import { useLanguage } from '../contexts/LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.hero.title')}</h1>
            <p className="text-xl mb-0">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('services.overviewSection.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('services.overviewSection.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('services.overviewSection.services')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('services.overviewSection.service1')}</li>
                <li>{t('services.overviewSection.service2')}</li>
                <li>{t('services.overviewSection.service3')}</li>
                <li>{t('services.overviewSection.service4')}</li>
                <li>{t('services.overviewSection.service5')}</li>
                <li>{t('services.overviewSection.service6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('services.overviewSection.conclusion')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">服务总览</p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-green-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Commissioning */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('services.installation.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('services.installation.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('services.installation.services')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('services.installation.service1')}</li>
                <li>{t('services.installation.service2')}</li>
                <li>{t('services.installation.service3')}</li>
                <li>{t('services.installation.service4')}</li>
                <li>{t('services.installation.service5')}</li>
                <li>{t('services.installation.service6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('services.installation.goal')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">安装调试</p>
                </div>
                <div className="absolute top-6 right-6 w-14 h-14 bg-blue-200/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-indigo-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Technical Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('services.training.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('services.training.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('services.training.services')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('services.training.service1')}</li>
                <li>{t('services.training.service2')}</li>
                <li>{t('services.training.service3')}</li>
                <li>{t('services.training.service4')}</li>
                <li>{t('services.training.service5')}</li>
                <li>{t('services.training.service6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('services.training.support')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <p className="text-gray-600 font-medium">培训支持</p>
                </div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-pink-200/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Calibration */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('services.maintenance.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('services.maintenance.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('services.maintenance.services')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('services.maintenance.service1')}</li>
                <li>{t('services.maintenance.service2')}</li>
                <li>{t('services.maintenance.service3')}</li>
                <li>{t('services.maintenance.service4')}</li>
                <li>{t('services.maintenance.service5')}</li>
                <li>{t('services.maintenance.service6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('services.maintenance.flexibility')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">维护校准</p>
                </div>
                <div className="absolute top-6 left-6 w-16 h-16 bg-orange-200/30 rounded-full animate-spin"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-red-200/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrades & Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('services.upgrades.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('services.upgrades.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('services.upgrades.services')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('services.upgrades.service1')}</li>
                <li>{t('services.upgrades.service2')}</li>
                <li>{t('services.upgrades.service3')}</li>
                <li>{t('services.upgrades.service4')}</li>
                <li>{t('services.upgrades.service5')}</li>
                <li>{t('services.upgrades.service6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('services.upgrades.updates')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">升级更新</p>
                </div>
                <div className="absolute top-4 right-4 w-14 h-14 bg-teal-200/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('services.customDevelopment.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('services.customDevelopment.description')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('services.customDevelopment.services')}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>{t('services.customDevelopment.service1')}</li>
                <li>{t('services.customDevelopment.service2')}</li>
                <li>{t('services.customDevelopment.service3')}</li>
                <li>{t('services.customDevelopment.service4')}</li>
                <li>{t('services.customDevelopment.service5')}</li>
                <li>{t('services.customDevelopment.service6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('services.customDevelopment.cooperation')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-xl w-full h-80 bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-medium">定制开发</p>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-violet-200/40 rounded-full animate-bounce"></div>
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-purple-200/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t('services.servicePlans.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{t('services.servicePlans.basic.title')}</h3>
              <p className="text-gray-600 mb-6">{t('services.servicePlans.basic.description')}</p>
              <ul className="text-left mb-8 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.basic.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.basic.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.basic.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.basic.feature4')}</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors w-full"
              >
                {t('services.servicePlans.basic.contact')}
              </a>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg shadow-lg border border-yellow-200 hover:shadow-xl transition-shadow transform scale-105">
              <div className="bg-yellow-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">{t('services.servicePlans.advanced.badge')}</div>
              <h3 className="text-2xl font-bold mb-4">{t('services.servicePlans.advanced.title')}</h3>
              <p className="text-gray-600 mb-6">{t('services.servicePlans.advanced.description')}</p>
              <ul className="text-left mb-8 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.advanced.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.advanced.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.advanced.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.advanced.feature4')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.advanced.feature5')}</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition-colors w-full"
              >
                {t('services.servicePlans.advanced.contact')}
              </a>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{t('services.servicePlans.custom.title')}</h3>
              <p className="text-gray-600 mb-6">{t('services.servicePlans.custom.description')}</p>
              <ul className="text-left mb-8 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.custom.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.custom.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.custom.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.custom.feature4')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('services.servicePlans.custom.feature5')}</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors w-full"
              >
                {t('services.servicePlans.custom.contact')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('services.ctaSection.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('services.ctaSection.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            {t('services.ctaSection.contact')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
