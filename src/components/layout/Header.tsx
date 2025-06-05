import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  // 检查是否为当前活动路径
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // 获取导航链接的样式类
  const getNavLinkClass = (path: string) => {
    const baseClass = "transition-colors";
    const activeClass = "text-yellow-400 font-semibold";
    const hoverClass = "hover:text-yellow-400";
    
    return isActivePath(path) 
      ? `${baseClass} ${activeClass}` 
      : `${baseClass} ${hoverClass}`;
  };

  // 获取移动端导航链接的样式类
  const getMobileNavLinkClass = (path: string) => {
    const baseClass = "block py-2 transition-colors";
    const activeClass = "text-yellow-400 font-semibold";
    const hoverClass = "hover:text-yellow-400";
    
    return isActivePath(path) 
      ? `${baseClass} ${activeClass}` 
      : `${baseClass} ${hoverClass}`;
  };

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 text-white z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
        : 'bg-black'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className={`text-2xl font-bold transition-colors ${
              isActivePath("/") ? "text-yellow-300" : "text-yellow-400 hover:text-yellow-300"
            }`}>FICUS</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link to="/" className={getNavLinkClass("/")}>{t('nav.home')}</Link>
            <Link to="/about" className={getNavLinkClass("/about")}>{t('nav.about')}</Link>
            <Link to="/equipment" className={getNavLinkClass("/equipment")}>{t('nav.equipment')}</Link>
            <Link to="/applications" className={getNavLinkClass("/applications")}>{t('nav.applications')}</Link>
            <Link to="/services" className={getNavLinkClass("/services")}>{t('nav.services')}</Link>
            <Link to="/contact" className={getNavLinkClass("/contact")}>{t('nav.contact')}</Link>
          </nav>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'zh' 
                  ? 'text-yellow-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              中文
            </button>
            <span className="text-gray-500">/</span>
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en' 
                  ? 'text-yellow-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link to="/" className={getMobileNavLinkClass("/")} onClick={toggleMenu}>{t('nav.home')}</Link>
            <Link to="/about" className={getMobileNavLinkClass("/about")} onClick={toggleMenu}>{t('nav.about')}</Link>
            <Link to="/equipment" className={getMobileNavLinkClass("/equipment")} onClick={toggleMenu}>{t('nav.equipment')}</Link>
            <Link to="/applications" className={getMobileNavLinkClass("/applications")} onClick={toggleMenu}>{t('nav.applications')}</Link>
            <Link to="/services" className={getMobileNavLinkClass("/services")} onClick={toggleMenu}>{t('nav.services')}</Link>
            <Link to="/contact" className={getMobileNavLinkClass("/contact")} onClick={toggleMenu}>{t('nav.contact')}</Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center space-x-2 py-2 text-sm border-t border-gray-700 mt-2">
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'zh' 
                    ? 'text-yellow-400 font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                中文
              </button>
              <span className="text-gray-500">/</span>
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'en' 
                    ? 'text-yellow-400 font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
