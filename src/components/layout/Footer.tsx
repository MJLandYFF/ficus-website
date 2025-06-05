import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FICUS</h3>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/equipment" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('nav.equipment')}</Link></li>
              <li><Link to="/applications" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('nav.applications')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.moreInfo')}</h3>
            <ul className="space-y-2">
              <li><Link to="/technologies" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('nav.technologies')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">{t('page.privacy')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.contact')}</h3>
            <address className="not-italic text-gray-400">
              <p>地址：中国上海市</p>
              <p>电话：+86 123 4567 8910</p>
              <p>邮箱：info@ficus-tech.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">{t('footer.copyright')}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
