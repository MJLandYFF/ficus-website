import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t, getRaw } = useLanguage();
  const [count, setCount] = useState(0);
  
  const advantages = getRaw('home.advantages') || [];
  const advantageTitles = getRaw('home.advantageTitles') || [];
  
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 whitespace-normal md:whitespace-nowrap">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/equipment" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition-colors text-center w-full sm:w-auto"
              >
                {t('home.exploreSolutions')}
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-md transition-colors text-center w-full sm:w-auto"
              >
                {t('home.contactUs')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((card: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col items-start text-left hover:shadow-2xl transition">
                <h3 className="text-2xl font-extrabold mb-4 w-full text-center" style={{ color: 'var(--primary-color)' }}>
                  {advantageTitles[idx] || ''}
                </h3>
                <div className="space-y-4 text-gray-700 text-base leading-relaxed w-full">
                  {card.map((item: any, i: number) => (
                    <div key={i}>
                      <span className="font-semibold text-gray-900">{item.title}：</span>
                      {item.desc}
            </div>
                  ))}
            </div>
            </div>
            ))}
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
              <p className="text-gray-700 mb-6">
                {t('home.aboutSection.text3')}
              </p>
              <a 
                href="/about" 
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                {t('home.aboutSection.learnMore')}
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="/certs/aboutUs.png"
                alt="关于我们"
                className="w-full max-w-xs md:max-w-md h-auto rounded-xl shadow-lg object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Scope Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('home.businessScope.title')} <span className="font-normal text-lg align-middle text-gray-500"></span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* 第一组 */}
            <div className="flex flex-col items-center space-y-8">
              {/* CQC系统的设计与集成 */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 hover:from-purple-950 hover:to-purple-800 transition rounded-xl p-4 flex flex-col items-center w-40 h-32 shadow-lg group">
                {/* 流程/拼图图标 */}
                <svg className="w-8 h-8 mb-2 text-yellow-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zm0 10h6v6h-6v-6zm-6 0h6v6H8v-6z"/></svg>
                <p className="text-base text-center font-medium text-white">{t('home.businessScope.cqc')}</p>
              </div>
              {/* 气体分析仪的销售、研发与维修维保 */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 hover:from-purple-950 hover:to-purple-800 transition rounded-xl p-4 flex flex-col items-center w-40 h-32 shadow-lg group">
                {/* 仪器/购物车图标 */}
                <svg className="w-8 h-8 mb-2 text-green-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61l1.38-7.39H6"/></svg>
                <p className="text-base text-center font-medium text-white">{t('home.businessScope.sales')}</p>
              </div>
            </div>
            {/* 第二组 */}
            <div className="flex flex-col items-center space-y-8">
              {/* 技术与售后支持 */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 hover:from-purple-950 hover:to-purple-800 transition rounded-xl p-4 flex flex-col items-center w-40 h-32 shadow-lg group">
                {/* 客服/耳机图标 */}
                <svg className="w-8 h-8 mb-2 text-cyan-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a11 11 0 00-11 11v3a4 4 0 004 4h1v-7H5a7 7 0 0114 0h-1v7h1a4 4 0 004-4v-3A11 11 0 0012 1z"/></svg>
                <p className="text-base text-center font-medium text-white">{t('home.businessScope.support')}</p>
              </div>
              {/* IQC系统和分析小屋的集成 */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 hover:from-purple-950 hover:to-purple-800 transition rounded-xl p-4 flex flex-col items-center w-40 h-32 shadow-lg group">
                {/* 分析/实验室图标 */}
                <svg className="w-8 h-8 mb-2 text-pink-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 2v6l-2 2v7a5 5 0 0010 0v-7l-2-2V2"/><path d="M12 17v1"/></svg>
                <p className="text-base text-center font-medium text-white">{t('home.businessScope.iqc')}</p>
              </div>
            </div>
            {/* 第三组 */}
            <div className="flex flex-col items-center space-y-8">
              {/* 气体分析解决方案 */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 hover:from-purple-950 hover:to-purple-800 transition rounded-xl p-4 flex flex-col items-center w-40 h-32 shadow-lg group">
                {/* 灯泡/方案图标 */}
                <svg className="w-8 h-8 mb-2 text-orange-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a7 7 0 017 7c0 3.87-3.13 7-7 7s-7-3.13-7-7a7 7 0 017-7zm0 14v4m-4 0h8"/></svg>
                <p className="text-base text-center font-medium text-white">{t('home.businessScope.solution')}</p>
                </div>
              {/* 纯化器测试和管道五项测试 */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 hover:from-purple-950 hover:to-purple-800 transition rounded-xl p-4 flex flex-col items-center w-40 h-32 shadow-lg group">
                {/* 检测/盾牌图标 */}
                <svg className="w-8 h-8 mb-2 text-purple-200 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z"/></svg>
                <p className="text-base text-center font-medium text-white">{t('home.businessScope.purifier')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      {/* <section className="py-20 bg-white">
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
              <div className="rounded-lg shadow-xl w-full h-48 sm:h-60 md:h-80 bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
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
      </section> */}

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
