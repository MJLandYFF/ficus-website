import { useLanguage } from '../contexts/LanguageContext';

const TableBlock = ({ title, headers, data }: { title: string; headers: string[]; data: string[][] }) => (
  <div className="overflow-x-auto mb-12">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 tracking-wide">{title}</h2>
    <table className="min-w-full border border-gray-200 rounded-lg text-center bg-white shadow">
      <thead className="bg-blue-900">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-6 py-2 border-b border-gray-200 font-semibold text-base text-white">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, j) => (
              <td key={j} className="px-6 py-2 border-b border-gray-100 text-gray-800 whitespace-nowrap">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ApplicationsPage = () => {
  const { t, getRaw } = useLanguage();
  const table = getRaw('applications.customersTable');

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

      {/* 合作客户表格 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <TableBlock
            title={table.title}
            headers={table.headers}
            data={table.data}
          />
        </div>
      </section>

      {/* 成功案例区块 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t('applications.caseStudies.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-left">
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
            <div className="bg-white p-8 rounded-lg shadow-md text-left">
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
    </div>
  );
};

export default ApplicationsPage;
