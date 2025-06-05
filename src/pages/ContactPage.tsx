import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { addSubmission } from '../data/dataManager';
import MapComponent from '../components/ui/MapComponent';

const ContactPage = () => {
  const { t, getRaw } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    privacyAgreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAgreed) {
      alert(t('contact.form.privacyRequired') || '请同意隐私政策');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 添加提交记录到后端API
      const newSubmission = await addSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        subject: formData.subject,
        message: formData.message,
        privacyAgreed: formData.privacyAgreed
      });

      if (newSubmission) {
        console.log('表单提交成功，新记录ID:', newSubmission.id);
        setSubmitStatus('success');
        // 重置表单
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          privacyAgreed: false
        });
      } else {
        throw new Error('提交失败：未能保存数据');
      }
    } catch (error) {
      console.error('表单提交失败:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.hero.title')}</h1>
            <p className="text-xl mb-0">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">{t('contact.info.title')}</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{t('contact.info.headquarters')}</h3>
                <address className="not-italic text-gray-700">
                  <p className="mb-2">{t('contact.info.address1')}</p>
                  <p className="mb-2">{t('contact.info.address2')}</p>
                  <p className="mb-2">{t('contact.info.postal')}</p>
                </address>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{t('contact.info.phoneTitle')}</h3>
                <p className="text-gray-700 mb-2">{t('contact.info.phone')}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{t('contact.info.emailTitle')}</h3>
                <p className="text-gray-700 mb-2">联系邮箱：sales@ficus.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">{t('contact.info.hoursTitle')}</h3>
                <p className="text-gray-700 mb-2">{t('contact.info.weekdays')}</p>
                <p className="text-gray-700 mb-2">{t('contact.info.weekends')}</p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">{t('contact.form.title')}</h2>
              
              {/* 成功提示 */}
              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
                  <div className="font-medium">提交成功！</div>
                  <div className="text-sm">我们已收到您的消息，将在24小时内回复您。</div>
                </div>
              )}
              
              {/* 错误提示 */}
              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                  <div className="font-medium">提交失败</div>
                  <div className="text-sm">请稍后重试，或直接联系我们的客服。</div>
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.company')}</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.subject')}</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  >
                    <option value="">{t('contact.form.selectSubject')}</option>
                    <option value="general">{t('contact.form.generalInquiry')}</option>
                    <option value="sales">{t('contact.form.productInquiry')}</option>
                    <option value="support">{t('contact.form.technicalSupport')}</option>
                    <option value="partnership">{t('contact.form.partnership')}</option>
                    <option value="other">{t('contact.form.other')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2 flex-shrink-0"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700 leading-relaxed">
                    {t('contact.form.privacyAgreement1')}<a href="/privacy" className="text-yellow-600 hover:underline">{t('contact.form.privacyPolicy')}</a>{t('contact.form.privacyAgreement2')}
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-bold py-3 px-6 rounded-md transition-colors"
                  >
                    {isSubmitting ? '提交中...' : t('contact.form.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('contact.offices.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('contact.offices.china')}</h3>
              <p className="text-gray-700 mb-2">{t('contact.offices.chinaAddress')}</p>
              <p className="text-gray-700 mb-2">{t('contact.offices.chinaPhone')}</p>
              <p className="text-gray-700">{t('contact.offices.chinaEmail')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('contact.offices.europe')}</h3>
              <p className="text-gray-700 mb-2">{t('contact.offices.europeAddress')}</p>
              <p className="text-gray-700 mb-2">{t('contact.offices.europePhone')}</p>
              <p className="text-gray-700">{t('contact.offices.europeEmail')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('contact.offices.usa')}</h3>
              <p className="text-gray-700 mb-2">{t('contact.offices.usaAddress')}</p>
              <p className="text-gray-700 mb-2">{t('contact.offices.usaPhone')}</p>
              <p className="text-gray-700">{t('contact.offices.usaEmail')}</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.map.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{t('contact.map.addressTitle')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('contact.map.address')}<br />
                    {t('contact.map.address2')}
                  </p>
                  <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">{t('contact.map.trafficTitle')}</h3>
                  <ul className="text-gray-700 space-y-1">
                    {getRaw('contact.map.trafficList').map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <MapComponent 
                    address="中国 上海市嘉定区城北路1585弄 上海天华人工智能科创园 11号楼101"
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('contact.faq.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('contact.faq.question1')}</h3>
              <p className="text-gray-700">
                {t('contact.faq.answer1')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('contact.faq.question2')}</h3>
              <p className="text-gray-700">
                {t('contact.faq.answer2')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('contact.faq.question3')}</h3>
              <p className="text-gray-700">
                {t('contact.faq.answer3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('contact.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('contact.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+862158888888" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors text-lg"
            >
              {t('contact.cta.callNow')}
            </a>
            <a 
              href="mailto:info@ficus-tech.com" 
              className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-md transition-colors text-lg"
            >
              {t('contact.cta.sendEmail')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
