import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">隐私政策</h1>
            <p className="text-xl mb-0">
              FICUS致力于保护您的个人信息和隐私权。本隐私政策说明我们如何收集、使用和保护您的信息。
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2>信息收集</h2>
              <p>
                我们可能会收集以下类型的信息：
              </p>
              <ul>
                <li>个人识别信息（如姓名、电子邮件地址、电话号码、公司名称等）</li>
                <li>技术信息（如IP地址、浏览器类型、设备信息等）</li>
                <li>使用数据（如网站访问记录、点击行为等）</li>
                <li>营销和通信偏好</li>
              </ul>
              <p>
                我们通过以下方式收集信息：
              </p>
              <ul>
                <li>当您直接提供给我们（如填写表单、发送电子邮件等）</li>
                <li>当您使用我们的网站时自动收集</li>
                <li>从第三方或公开来源获取</li>
              </ul>

              <h2>信息使用</h2>
              <p>
                我们可能会将收集的信息用于以下目的：
              </p>
              <ul>
                <li>提供、维护和改进我们的产品和服务</li>
                <li>处理您的请求和咨询</li>
                <li>发送相关的营销和促销信息</li>
                <li>分析和改进我们的网站和用户体验</li>
                <li>遵守法律义务</li>
              </ul>

              <h2>信息共享</h2>
              <p>
                我们可能会在以下情况下共享您的信息：
              </p>
              <ul>
                <li>与我们的服务提供商和业务合作伙伴共享，以帮助我们提供服务</li>
                <li>在法律要求的情况下</li>
                <li>在公司重组、合并或出售的情况下</li>
                <li>在获得您的同意的情况下</li>
              </ul>
              <p>
                我们不会出售或出租您的个人信息给第三方用于营销目的。
              </p>

              <h2>数据安全</h2>
              <p>
                我们采取适当的技术和组织措施来保护您的个人信息，防止未经授权的访问、使用或披露。这些措施包括：
              </p>
              <ul>
                <li>使用加密技术保护数据传输</li>
                <li>实施访问控制措施</li>
                <li>定期审查和更新安全措施</li>
                <li>员工培训和保密协议</li>
              </ul>
              <p>
                尽管我们努力保护您的信息，但请注意，没有任何互联网传输或电子存储方法是100%安全的。
              </p>

              <h2>Cookie和类似技术</h2>
              <p>
                我们使用Cookie和类似技术来收集和存储信息，以提供更好的用户体验。这些技术帮助我们：
              </p>
              <ul>
                <li>记住您的偏好和设置</li>
                <li>了解网站使用情况</li>
                <li>提供个性化内容和广告</li>
                <li>改进网站性能</li>
              </ul>
              <p>
                您可以通过浏览器设置控制Cookie的使用，但这可能会影响某些网站功能的可用性。
              </p>

              <h2>您的权利</h2>
              <p>
                根据适用的数据保护法律，您可能拥有以下权利：
              </p>
              <ul>
                <li>访问您的个人信息</li>
                <li>更正不准确的信息</li>
                <li>删除您的个人信息</li>
                <li>限制或反对处理</li>
                <li>数据可携带性</li>
                <li>撤回同意</li>
                <li>投诉权</li>
              </ul>
              <p>
                如需行使这些权利，请通过以下联系方式与我们联系。
              </p>

              <h2>儿童隐私</h2>
              <p>
                我们的网站和服务不面向16岁以下的儿童。我们不会故意收集16岁以下儿童的个人信息。如果您发现我们可能收集了儿童的个人信息，请立即联系我们，我们将采取措施删除这些信息。
              </p>

              <h2>国际数据传输</h2>
              <p>
                您的信息可能会被传输到并存储在您所在国家/地区以外的服务器上。我们将采取适当的措施确保您的信息得到充分保护，符合适用的数据保护法律。
              </p>

              <h2>政策更新</h2>
              <p>
                我们可能会不时更新本隐私政策。更新后的政策将在网站上发布，重大变更将通过适当方式通知您。我们建议您定期查看本政策以了解最新信息。
              </p>

              <h2>联系我们</h2>
              <p>
                如果您对本隐私政策或我们的数据处理实践有任何疑问、意见或请求，请通过以下方式联系我们：
              </p>
              <p>
                电子邮件：privacy@ficus-tech.com<br />
                电话：+86 21 5888 XXXX<br />
                地址：上海市浦东新区张江高科技园区科技大道123号
              </p>

              <p className="text-sm text-gray-500 mt-8">
                最后更新日期：2025年5月23日
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
