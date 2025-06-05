import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getRaw: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 语言配置
const translations = {
  zh: {    // Navigation
    nav: {
      home: '首页',
      about: '关于我们', 
      equipment: '产品中心',
      applications: '客户案例',
      services: '相关服务',
      contact: '联系我们'
    },
    // Home Page
    home: {
      heroTitle: '高纯气体分析解决方案专家',
      heroSubtitle: '以精密分析技术为核心，为高端制造业提供全生命周期气体品质解决方案',
      exploreSolutions: '查看我们的解决方案',
      contactUs: '联系我们',
      advantages: [
        [
          { title: '超高精度检测', desc: '拥有ppb/ppt级检测能力的仪器（如HALO系列氧分析仪、CRDS原理水分析仪），覆盖H₂O/O₂/颗粒/痕量气体等全杂质谱。' },
          { title: '先进技术平台', desc: '整合CRDS（激光腔衰荡）、TDL（可调谐激光）、PDHID（氦离子化）等国际前沿检测原理。' }
        ],
        [
          { title: '交钥匙解决方案', desc: '从CQC/IQC系统设计、管道布置、PLC通讯到安全连锁（如H₂/CO₂侦测）的全流程集成。' },
          { title: '自主实验室支撑', desc: '配备洁净实验室与集成中心，保障系统可靠性与维修零污染。' }
        ],
        [
          { title: '"销售-集成-维保-培训"闭环', desc: '覆盖设备销售、安装调试、维修校准、纯化器/管道测试及技术培训。' },
          { title: '原厂授权背书', desc: '获Horiba、PEAK、PMS等品牌授权，保障设备与服务的合规性。' }
        ],
        [
          { title: '深度理解行业痛点', desc: 'CQC系统直击气体异常导致的损失风险，提供实时报警与数据溯源功能。' }
        ]
      ],
      advantageTitles: ['先进设备','一体化集成','全生命周期服务','行业定制'],  
      aboutSection: {
        title: '关于我们',
        text1: '上海菲科思科技有限公司成立于2021年，专注致力于高纯气体分析行业。专业负责CQC系统和IQC的设计、集成制造、安装调试、售后维修和维保服务，并从事分析仪器的贸易、研发和客户的专业培训。',
        text2: '我们还提供纯化器测试以及管道五项测试，以及分析仪器的校准等服务。',
        text3: '公司设有自己的洁净实验室和集成中心！可以有效保障CQC系统集成的品质和分析仪维修环境，方便设备的维修/维护，减少维修时带来的污染，同时我们实验室配置有高精度的水氧色谱仪等常备仪器。',
        learnMore: '了解更多'
      },
      equipmentSection: {
        title: '设备',
        text1: '我们的团队在提供满足最高行业标准的设备能力方面表现卓越。',
        text2: 'FICUS提供全面的气体分析解决方案，从标准分析仪到定制系统，满足各种工业和实验室应用需求。我们的设备采用最新技术，确保高精度、可靠性和易用性。',
        learnMore: '了解更多'
      },
      applicationsSection: {
        title: '应用领域',
        industrial: {
          title: '工业气体分析',
          description: '为工业气体生产商提供高精度分析解决方案，确保产品质量和安全性。'
        },
        laboratory: {
          title: '实验室研究',
          description: '为科研机构和实验室提供精密分析设备，支持科学研究和技术创新。'
        },
        environmental: {
          title: '环境监测',
          description: '提供环境气体监测解决方案，帮助企业和机构满足环保要求和标准。'        },
        viewAll: '查看所有应用'
      },
      ctaSection: {
        title: '准备开始您的项目？',
        subtitle: '联系我们的专家团队，获取定制解决方案和专业建议。',
        contact: '立即联系'
      },
      businessScope: {
        title: '业务范围',
        cqc: 'CQC系统的设计与集成',
        iqc: 'IQC系统和分析小屋的集成',
        sales: '气体分析仪的销售、研发与维修维保',
        solution: '气体分析解决方案',
        support: '技术与售后支持',
        purifier: '纯化器测试和管道五项测试'
      },
    },
    // About Page
    about: {
      heroTitle: '关于我们',
      heroSubtitle: '高纯气体分析解决方案专家',      
      historySection: {
        title: '公司简介',
        text1: '上海菲科思科技（2021年成立）是专注高纯气体分析领域的国家高新技术企业，致力于为半导体、液晶面板等高端制造业提供全流程气体品质监测与管理解决方案。',
        text2: '我们以"用精密分析技术守护中国智造的生命线"为准则，构建从气体杂质检测、系统集成到数据服务的完整技术生态。',
        text3: '"不以销售设备为终点，而以客户良率为标尺"​',
        text4: '通过技术穿透力与服务韧性，成为电子产业链中无声却关键的品质基石。',
        imageText: '公司发展历程'
      },
      whyChooseUs: {
        title: '为何选择我们',
        painTitle: '直面千亿级产业痛点',
        painDesc: '电子级气体中 1ppb 的杂质 = 百万级损失！',
        solutionTitle: '我们解决：',
        solutions: [
          '气体污染导致的芯片良率骤降',
          '制程中断引发的产能停滞',
          '品质追溯缺失的责任盲区'
        ]
      },
      missionSection: {
        title: '我们的使命',
        text1: 'FICUS致力于为全球客户提供最高质量的气体分析解决方案，通过持续创新和卓越服务，满足不断变化的市场需求。',
        text2: '我们的核心使命是：',
        mission1: '提供精确、可靠的气体分析设备，确保客户获得准确的测量结果',
        mission2: '通过技术创新，不断提升产品性能和用户体验',
        mission3: '为客户提供全面的技术支持和服务，建立长期合作关系',
        mission4: '培养专业团队，保持行业领先地位',
        mission5: '践行可持续发展理念，减少环境影响',
        text3: '我们相信，通过坚持这些核心价值观，FICUS将继续引领气体分析技术的发展，为全球客户创造更大价值。'
      },
      teamSection: {
        title: '我们的团队',
        ceo: '首席执行官',
        ceoDesc: '拥有20年气体分析行业经验，领导公司战略发展和全球业务拓展。',
        cto: '技术总监',
        ctoDesc: '负责产品研发和技术创新，拥有多项气体分析技术专利。',
        intlDirector: '国际业务总监',
        intlDirectorDesc: '负责全球市场拓展和客户关系管理，拥有丰富的国际贸易经验。'
      },
      globalSection: {
        title: '全国业务',
        description: 'FICUS的产品和服务覆盖全国主要半导体产业聚集地，通过完善的服务网络，为国内高端制造业提供高质量的气体分析解决方案。',
        regions: [
          {
            name: '长三角地区',
            cities: '上海、苏州、无锡、南京',
            description: '以上海张江、苏州工业园区为核心的集成电路产业集群'
          },
          {
            name: '珠三角地区',
            cities: '深圳、广州、东莞',
            description: '以深圳、广州为核心的电子信息产业带'
          },
          {
            name: '京津冀地区',
            cities: '北京、天津、石家庄',
            description: '以北京亦庄、天津滨海新区为核心的科技创新带'
          },
          {
            name: '中西部地区',
            cities: '武汉、成都、重庆、西安',
            description: '以武汉光谷、成都高新区为核心的产业创新基地'
          }
        ]
      },
      ctaSection: {
        title: '加入FICUS全球合作伙伴网络',
        subtitle: '无论您是寻找气体分析解决方案，还是希望成为我们的分销合作伙伴，我们期待与您合作。',
        contact: '联系我们'      }
    },    // Equipment Page
    equipment: {
      hero: {
        title: '产品中心',
        subtitle: 'FICUS提供全面的气体分析设备，从标准分析仪到定制系统，满足各种工业和实验室应用需求。'
      },
      overview: {
        title: '产品概览',
        description: 'FICUS的气体分析设备采用最新技术，确保高精度、可靠性和易用性。我们的产品线涵盖各种气体水、氧、颗粒分析仪、色谱仪、CQC、IQC集成设计及制造。',
        productLine: '我们的产品线包括：',
        product1: '气相色谱仪',
        product2: '气体纯度分析仪',
        product3: 'IQC系统和分析小屋的集成',
        product4: 'CQC项目集成',
        product5: '定制分析解决方案',
        quality: '所有集成均由我们的专业团队设计和制造，确保每个产品都符合最高质量标准。',
        imageText: '设备概览'
      },
      products: {
        title: '精选产品',
        getDetails: '查看详情',
        product1: {
          name: '水氧颗粒分析系列',
          description: '可连续监测大宗气体内H2O,O2,颗粒等杂质的含量，最低检测限甚至可达ppt级别。颗粒具有0.1um，0.2um，0. 3um，0. 5um，1. 0um，2. 0um，3.0um，5. 0um共8个通道。',
          featuresTitle: '主要特点：',
          feature1: 'ppb级高精度检测',
          feature2: '多通道同时分析',
          feature3: '用户友好操作界面',
          feature4: '自动校准功能',
          feature5: '数据存储与远程访问'
        },
        product2: {
          name: '色谱分析系列',
          description: '应用于连续的测量大宗气体内H2,CO, CO2, CH4, NMHC,N2, Ar等杂质的含量，最低检测限＜0.5ppb级别。',
          featuresTitle: '主要特点：',
          feature1: '响应速度快',
          feature2: '高灵敏度检测',
          feature3: '低维护需求',
          feature4: '紧凑设计，节省空间',
          feature5: '直观触摸屏界面'
        },
        product3: {
          name: 'CQC集成及IQC小屋项目集成',
          description: 'MonitorX 提供适用于工业生产线和环境监测的连续气体监测解决方案。系统可24小时不间断工作，实时数据与报警功能。',
          featuresTitle: '主要特点：',
          feature1: '连续监测能力',
          feature2: '远程数据访问',
          feature3: '自动报警系统',
          feature4: '趋势分析功能',
          feature5: '工业级耐用设计'
        }
      },
      custom: {
        title: '定制解决方案',
        description: '除标准产品外，FICUS 还可根据客户的特定分析需求提供定制解决方案。我们的工程团队与客户紧密合作，设计开发满足特定应用要求的系统。',
        services: '我们的定制服务包括：',
        service1: '需求分析与咨询',
        service2: '系统设计与开发',
        service3: '与现有设备集成',
        service4: '软件定制',
        service5: '安装与培训',
        service6: '维护与支持',
        conclusion: '无论您的需求多么特殊，我们都能为您提供合适的解决方案。',
        imageText: '定制解决方案'
      },
      quality: {
        title: '质量保证',
        description: 'FICUS 致力于提供最高质量的产品与服务。我们的质量管理体系确保每一件产品都符合最严格的标准。',
        feature1Title: '严格测试',
        feature1Description: '每台产品出厂前都经过严格测试与校准，确保性能达到规范要求。',
        feature2Title: '认证标准',
        feature2Description: '我们的产品符合国际标准和认证要求，包括 ISO、CE 等。',
        feature3Title: '技术支持',
        feature3Description: '我们提供全面的技术支持和服务，确保设备长期稳定运行。'
      },
      cta: {
        title: '寻找适合您需求的设备？',
        subtitle: '联系我们的专家团队，获取产品信息和技术咨询。',
        button: '联系我们'
      },
      authorizationSection: {
        title: '授权证书',
        desc: [
          'PEAK 实验室授权书',
          '光梓科技授权书'
        ],
        images: [
          '/certs/auth-peak.jpg',
          '/certs/auth-photonics.jpg'
        ]
      }
    },    
    // Applications Page  
    applications: {
      hero: {
        title: '应用',
        subtitle: 'FICUS的气体分析解决方案广泛应用于多个行业，为客户提供精确、可靠的分析结果。'
      },
      
      caseStudies: {
        title: '成功案例',
        case1: {
          title: '某大型工业气体生产商',
          challenge: '挑战：需要提升高纯氩气生产线的质量控制能力，降低产品不合格率。',
          solution: '解决方案：FICUS提供了定制的在线监测系统，实时分析生产过程中的气体纯度，并与控制系统集成。',
          result: '结果：产品不合格率降低85%，生产效率提升30%，客户满意度显著提升。'
        },
        case2: {
          title: '某领先半导体制造商',
          challenge: '挑战：生产过程中微量杂质导致芯片良率下降，需提升气体纯度监控能力。',
          solution: '解决方案：FICUS为其部署了高灵敏度痕量分析仪，实现对关键工艺气体的实时监测。',
          result: '结果：芯片良率提升12%，生产过程更可控，客户信任度增强。'
        }
      },
      ctaSection: {
        title: '寻找适合您行业的解决方案？',
        subtitle: '联系我们的应用专家，获取针对您特定需求的建议和方案。',
        contact: '联系我们'
      },
      customersTable: {
        title: '合作客户',
        headers: ['客户名称', '产品'],
        data: [
          ['无锡华润微电子', 'CQC系统集成及仪器'],
          ['广州新锐光掩膜科技有限公司', 'CQC系统集成及仪器'],
          ['上海集成电路材料研究院', 'CQC系统集成及仪器'],
          ['无锡先导半导体材料有限公司', 'CQC系统集成及仪器'],
          ['上海嘉定光通信项目', 'CQC系统集成及仪器'],
          ['天津中环半导体股份有限公司', 'CQC系统集成及仪器'],
          ['厦门士兰集宏碳化硅项目', 'CQC系统集成及仪器'],
          ['江苏昊感科技责任有限公司碳化硅项目', 'CQC系统集成及仪器'],
          ['上海新傲科技股份有限公司', '仪器和分析服务'],
          ['嘉兴晶丰芯驰半导体材料有限公司', '仪器和分析服务'],
          ['中科富海', 'IQC分析小屋及仪器设备'],
          ['广钢气体', 'CQC系统集成和IQC集成'],
          ['大连中鼎化学有限公司', '仪器及服务'],
          ['山东合益气体股份有限公司', '预处理系统及仪器'],
          ['大连华邦化学有限公司', '仪器及预处理系统'],
          ['湖北玖恩智能科技有限公司', 'CQC系统及仪器'],
          ['至嘉气体', 'CQC系统集成和仪器服务'],
          ['内蒙古光能科技有限公司', '预处理系统'],
          ['上海启元气体发展有限公司', 'CQC系统及仪器'],
          ['三爱富', '分析小屋及仪器'],
          ['江苏九丰', 'IQC系统集成及仪器'],
          ['浙江中宁', '分析小屋及仪器'],
          ['淮安雷硕电子材料科技有限公司', '分析小屋及仪器'],
          ['中国电子系统工程第二建设有限公司', 'CQC系统集成及仪器'],
          ['辽宁汇晟机电工程有限公司', 'CQC系统集成及仪器'],
          ['上海菲翔机电设备有限公司', 'CQC系统集成及仪器'],
          ['霍锐德电子技术(上海)有限公司', 'CQC系统集成及仪器'],
          ['无锡红丰机电设备安装工程有限公司', '仪器及服务'],
          ['上海皓固机械工业有限公司', '仪器及服务'],
          ['苏州美思佳机电工程有限公司', '仪器及服务'],
          ['上海锡然电子系统工程有限公司', '仪器及服务'],
        ]
      },
    },
    // Services Page  
    services: {
      hero: {
        title: '服务',
        subtitle: 'FICUS提供全面的服务支持，从产品咨询到技术支持，确保客户获得最佳的使用体验和投资回报。'
      },
      overviewSection: {
        title: '服务概览',
        description: 'FICUS致力于为客户提供全生命周期的服务支持，从产品选择、安装调试到维护升级，我们的专业团队始终为您提供优质的服务。',
        services: '我们的服务包括：',
        service1: '产品咨询和选择',
        service2: '安装和调试',
        service3: '培训和技术支持',
        service4: '维护和校准',
        service5: '升级和更新',
        service6: '定制开发服务'
      },
      installation: {
        title: '安装和调试',
        description: 'FICUS提供专业的安装和调试服务，确保设备正确安装并达到最佳性能。我们的技术人员会根据您的具体需求和环境条件，制定详细的安装计划，并在安装过程中提供全程指导和支持。',
        services: '我们的安装和调试服务包括：',
        service1: '现场勘察和评估',
        service2: '安装前准备和规划',
        service3: '设备安装和连接',
        service4: '系统调试和测试',
        service5: '性能验证和确认',
        service6: '初始培训和指导',
        goal: '我们的目标是确保设备从一开始就能正常运行，并达到预期的性能要求。'
      },
      training: {
        title: '培训和技术支持',
        description: 'FICUS提供全面的培训和技术支持，帮助用户充分了解和掌握设备的操作和维护。我们的培训课程由经验丰富的专业人员讲授，内容涵盖设备操作、数据分析、故障排除等方面。',
        services: '我们的培训和技术支持服务包括：',
        service1: '现场操作培训',
        service2: '高级用户培训',
        service3: '在线技术支持',
        service4: '电话咨询服务',
        service5: '技术文档和资料',
        service6: '用户论坛和社区',
        support: '我们的技术支持团队随时准备解答您的问题，提供专业的建议和帮助。'
      },
      maintenance: {
        title: '维护和校准',
        description: '定期维护和校准是确保设备长期稳定运行和提供准确分析结果的关键。FICUS提供专业的维护和校准服务，帮助客户保持设备的最佳状态和性能。',
        services: '我们的维护和校准服务包括：',
        service1: '预防性维护计划',
        service2: '定期检查和测试',
        service3: '零部件更换和维修',
        service4: '系统校准和验证',
        service5: '性能优化和调整',
        service6: '维护记录和报告',
        flexibility: '我们提供灵活的维护计划，可以根据客户的具体需求和使用情况进行定制。'
      },
      upgrades: {
        title: '升级和更新',
        description: '随着技术的不断发展和进步，FICUS持续提供设备和软件的升级和更新服务，帮助客户保持技术领先优势，提升设备性能和功能。',
        services: '我们的升级和更新服务包括：',
        service1: '硬件升级和扩展',
        service2: '软件更新和升级',
        service3: '新功能和特性添加',
        service4: '系统集成和兼容性提升',
        service5: '性能优化和改进',
        service6: '安全性和稳定性增强',
        updates: '我们会定期发布更新和升级信息，并提供详细的升级指南和支持。'
      },
      customDevelopment: {
        title: '定制开发服务',
        description: 'FICUS提供定制开发服务，根据客户的特定需求和应用场景，开发定制化的解决方案。我们的研发团队拥有丰富的经验和专业知识，能够满足各种复杂和特殊的需求。',
        services: '我们的定制开发服务包括：',
        service1: '需求分析和咨询',
        service2: '方案设计和规划',
        service3: '原型开发和测试',
        service4: '系统集成和定制',
        service5: '软件定制和开发',
        service6: '验证和确认',
        cooperation: '我们与客户密切合作，确保开发的解决方案完全符合其需求和期望。'
      },
      servicePlans: {
        title: '服务计划',
        basic: {
          title: '基础服务',
          description: '适合基本需求的用户',
          feature1: '电话技术支持',
          feature2: '在线文档访问',
          feature3: '软件更新',
          feature4: '基础培训资料',
          contact: '了解更多'
        },
        advanced: {
          title: '专业服务',
          description: '适合专业用户和中小企业',
          badge: '推荐',
          feature1: '7x24小时技术支持',
          feature2: '优先响应',
          feature3: '半年度维护和校准',
          feature4: '高级培训课程',
          feature5: '远程诊断和支持',
          contact: '了解更多'
        },
        custom: {
          title: '定制服务',
          description: '为特定需求定制的服务计划',
          feature1: '专属服务经理',
          feature2: '定制维护计划',
          feature3: '现场应急响应',
          feature4: '定制开发支持',
          feature5: '优先升级和更新',
          contact: '联系我们'
        }
      },
      ctaSection: {
        title: '需要专业的服务支持？',
        subtitle: '联系我们的服务团队，获取适合您需求的服务方案。',
        contact: '联系我们'
      }
    },
     // Contact Page
    contact: {
      hero: {
        title: '联系我们',
        subtitle: '我们的专业团队随时为您提供支持和服务，欢迎联系我们了解更多信息。'
      },
      info: {
        title: '联系信息',
        headquarters: '总部地址',
        address1: '上海天华人工智能科创园 11号楼101',
        address2: '中国 上海市嘉定区城北路1585弄',
        postal: '201800',
        phoneTitle: '联系电话',
        phone: '+86 18915970248',
        emailTitle: '邮箱',
        generalEmail: '一般咨询：info@ficus.com',
        salesEmail: '销售咨询：sales@ficus.com',
        supportEmail: '技术支持：support@ficus.com',
        hoursTitle: '工作时间',
        weekdays: '周一至周五：9:00 - 18:00',
        weekends: '周末：10:00 - 16:00'
      },      form: {
        title: '联系表单',
        name: '姓名 *',
        email: '邮箱 *',
        phone: '电话',
        company: '公司',
        subject: '主题 *',
        selectSubject: '请选择...',
        generalInquiry: '一般咨询',
        productInquiry: '产品咨询',
        technicalSupport: '技术支持',
        partnership: '合作伙伴',
        other: '其他',
        message: '留言 *',
        privacyAgreement1: '我已阅读并同意',
        privacyPolicy: '隐私政策',
        privacyAgreement2: '，并同意处理我的个人数据。',
        privacyRequired: '请同意隐私政策后再提交表单',
        submit: '提交'
      },
      departments: {
        title: '部门联系方式',
        sales: {
          title: '销售咨询',
          description: '产品咨询、报价和销售支持',
          email: 'sales@ficus.com',
          phone: '+86 21 1234 5678'
        },
        support: {
          title: '技术支持',
          description: '技术问题、故障排除和产品支持',
          email: 'support@ficus.com',
          phone: '+86 21 1234 5679'
        },
        partnership: {
          title: '合作伙伴',
          description: '分销合作、代理申请和商务合作',
          email: 'partner@ficus.com',
          phone: '+86 21 1234 5680'
        }
      },
      // 补全en中缺失的key，内容用英文占位
      offices: {
        title: '全球办事处',
        china: '中国 - 上海（总部）',
        chinaAddress: '上海市浦东新区张江高科技园区',
        chinaPhone: '电话：+86 21 5888 XXXX',
        chinaEmail: '邮箱：china@ficus-tech.com',
        europe: '欧洲 - 德国',
        europeAddress: '慕尼黑科技园',
        europePhone: '电话：+49 89 XXXX XXXX',
        europeEmail: '邮箱：europe@ficus-tech.com',
        usa: '北美 - 美国',
        usaAddress: '加州圣何塞',
        usaPhone: '电话：+1 408 XXX XXXX',
        usaEmail: '邮箱：usa@ficus-tech.com'
      },
      map: {
        title: '公司位置',
        addressTitle: '公司地址',
        address: '中国 上海市嘉定区城北路1585弄',
        address2: '上海天华人工智能科创园 11号楼101',
        trafficTitle: '交通指引',
        trafficList: [
          '地铁11号线 嘉定西站 约2公里',
          '地铁14号线 桃浦新村站 约8公里',
          '自驾: 沪嘉高速 → 城北路出口'
        ],
        placeholder: '地图将在此显示'
      },
      faq: {
        title: '常见问题',
        question1: '如何获取产品报价？',
        answer1: '您可以填写上方联系表单并选择"产品咨询"作为主题，或直接发送邮件至 sales@ficus-tech.com，我们的销售团队将在24小时内回复。',
        question2: '如何获得技术支持？',
        answer2: '已购买我们产品的客户可拨打 +86 18915970248 或发送邮件至 sales@ficus-tech.com 获取技术支持。请提供设备序列号和详细问题描述，以便我们更好地为您服务。',
        question3: '如何成为FICUS分销合作伙伴？',
        answer3: '如有意成为FICUS分销合作伙伴，请发送邮件至 sales@ficus-tech.com，说明公司信息、业务范围及合作意向。我们的商务团队会与您联系洽谈合作细节。'
      },
      cta: {
        title: '准备开启您的项目？',
        subtitle: '无论您需要标准产品还是定制方案，我们都能满足您的需求。立即联系我们开启您的项目。',
        callNow: '立即致电',
        sendEmail: '发送邮件'
      }
    },
    // Footer
    footer: {
      description: '以精密分析技术为核心，为高端制造业提供全生命周期气体品质解决方案',
      quickLinks: '快速链接',
      contact: '联系我们',
      address: '地址：中国上海市',
      phone: '电话：+86 123 4567 8910',
      email: '邮箱：info@ficus-tech.com',
      copyright: '© 2025 FICUS. 版权所有。'
    },
    certificates: {
      title: '安全证书',
      images: [
        '/certs/cn-iso9001.jpg',
        '/certs/cn-iso45001.jpg',
        '/certs/cn-iso14001.jpg'
      ]
    }
  },
  en: {    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      equipment: 'Equipment', 
      applications: 'Applications',
      services: 'Services',
      contact: 'Contact Us'
    },
    // Home Page
    home: {
      heroTitle: 'Expert in High-Purity Gas Analysis Solutions',
      heroSubtitle: 'With precision analysis technology as the core, providing full lifecycle gas quality solutions for high-end manufacturing',
      exploreSolutions: 'Explore Our Solutions',
      contactUs: 'Contact Us',
      advantages: [
        [
          { title: 'Ultra-high Precision Detection', desc: 'Equipped with ppb/ppt-level detection instruments (such as HALO series oxygen analyzers, CRDS-based moisture analyzers), covering H₂O/O₂/particles/trace gases and other full impurity spectrum.' },
          { title: 'Advanced Technology Platform', desc: 'Integrated CRDS (Cavity Ring-Down Spectroscopy), TDL (Tunable Diode Laser), PDHID (Pulsed Discharge Helium Ionization Detector) and other international cutting-edge detection principles.' }
        ],
        [
          { title: 'Turnkey Solution', desc: 'Full-process integration from CQC/IQC system design, pipeline layout, PLC communication to safety interlock (such as H₂/CO₂ detection).' },
          { title: 'Independent Lab Support', desc: 'Equipped with clean laboratory and integration center to ensure system reliability and zero-pollution maintenance.' }
        ],
        [
          { title: 'Full Lifecycle Service', desc: 'Closed loop of "Sales-Integration-Maintenance-Training": covering equipment sales, installation and commissioning, maintenance and calibration, purifier/pipeline testing and technical training.' },
          { title: 'OEM Authorization', desc: 'Authorized by brands such as Horiba, PEAK, PMS to ensure compliance of equipment and services.' }
        ],
        [
          { title: 'Deep Industry Insight', desc: 'CQC system directly addresses the huge loss risk caused by gas anomalies, providing real-time alarm and data traceability functions.' }
        ]
      ],
      advantageTitles: ['Advanced Equipment', 'Integrated Solution', 'Full Lifecycle Service', 'Industry Customization'],
      aboutSection: {
        title: 'About Us',
        text1: 'Shanghai FICUS Technology Co., Ltd. was established in 2021, focusing on the high-purity gas analysis industry. We are professionally responsible for the design, integration manufacturing, installation and commissioning, after-sales maintenance and service of CQC and IQC systems, and engaged in the trade, R&D, and professional training of analytical instruments.',
        text2: 'We also provide purifier testing, pipeline five-item testing, and calibration services for analytical instruments.',
        text3: 'The company has its own clean laboratory and integration center! This effectively ensures the quality of CQC system integration and the environment for analytical instrument maintenance, facilitating equipment maintenance/repair and reducing pollution during maintenance. Our laboratory is equipped with high-precision water-oxygen chromatographs and other standard instruments.',
        learnMore: 'Learn More'
      },
      equipmentSection: {
        title: 'Equipment',
        text1: 'Our team excels in providing equipment that meets the highest industry standards.',
        text2: 'FICUS provides comprehensive gas analysis solutions, from standard analyzers to custom systems, meeting various industrial and laboratory application needs. Our equipment uses the latest technology to ensure high precision, reliability, and ease of use.',
        learnMore: 'Learn More'
      },
      applicationsSection: {
        title: 'Applications',
        industrial: {
          title: 'Industrial Gas Analysis',
          description: 'Providing high-precision analytical solutions for industrial gas producers to ensure product quality and safety.'
        },
        laboratory: {
          title: 'Laboratory Research',
          description: 'Providing precision analytical equipment for research institutions and laboratories to support scientific research and technological innovation.'
        },
        environmental: {
          title: 'Environmental Monitoring',
          description: 'Providing environmental gas monitoring solutions to help companies and institutions meet environmental requirements and standards.'
        },
        viewAll: 'View All Applications'
      },
      ctaSection: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Contact our expert team for customized solutions and professional advice.',
        contact: 'Contact Now'
      },
      businessScope: {
        title: 'Business Scope',
        cqc: 'Design and integration of CQC systems',
        iqc: 'Integration of IQC systems and analysis cabins',
        sales: 'Sales, R&D and maintenance of gas analyzers',
        solution: 'Gas analysis solutions',
        support: 'Technical and after-sales support',
        purifier: 'Purifier testing and pipeline five-item testing'
      },
    },
    // About Page
    about: {
      heroTitle: 'About Us',
      heroSubtitle: 'Expert in High-Purity Gas Analysis Solutions',
      historySection: {
        title: 'Company Profile',
        text1: 'Shanghai FICUS Technology (established in 2021) is a national high-tech enterprise focusing on the high-purity gas analysis field, dedicated to providing full-process gas quality monitoring and management solutions for high-end manufacturing such as semiconductors and LCD panels.',
        text2: 'We adhere to the principle of "using precision analysis technology to protect the lifeline of China\'s intelligent manufacturing," building a complete technical ecosystem from gas impurity detection, system integration to data services.',
        text3: '"Not ending with equipment sales, but measuring by customer yield"',
        text4: 'Through technical penetration and service resilience, becoming a silent but crucial quality cornerstone in the electronics industry chain.',
        imageText: 'Company Development History'
      },
      whyChooseUs: {
        title: 'Why Choose Us',
        painTitle: 'Facing Trillion-level Industry Pain Points',
        painDesc: '1ppb impurity in electronic-grade gas = million-level loss!',
        solutionTitle: 'We solve:',
        solutions: [
          'Yield drop caused by gas contamination',
          'Production interruption leading to capacity stagnation',
          'Responsibility blind spots due to lack of traceability'
        ]
      },
      missionSection: {
        title: 'Our Mission',
        text1: 'FICUS is committed to providing the highest quality gas analysis solutions to customers worldwide, meeting changing market demands through continuous innovation and excellent service.',
        text2: 'Our core mission is:',
        mission1: 'Provide accurate and reliable gas analysis equipment to ensure customers get precise measurement results',
        mission2: 'Continuously improve product performance and user experience through technological innovation',
        mission3: 'Provide comprehensive technical support and services to customers to build long-term partnerships',
        mission4: 'Cultivate professional teams to maintain industry leadership',
        mission5: 'Practice sustainable development concepts and reduce environmental impact',
        text3: 'We believe that by adhering to these core values, FICUS will continue to lead the development of gas analysis technology and create greater value for global customers.'
      },
      teamSection: {
        title: 'Our Team',
        ceo: 'Chief Executive Officer',
        ceoDesc: 'With 20 years of experience in the gas analysis industry, leading company strategic development and global business expansion.',
        cto: 'Chief Technology Officer',
        ctoDesc: 'Responsible for product R&D and technological innovation, holding multiple patents in gas analysis technology.',
        intlDirector: 'International Business Director',
        intlDirectorDesc: 'Responsible for global market expansion and customer relationship management, with extensive international trade experience.'
      },
      globalSection: {
        title: 'National Business',
        description: 'FICUS products and services cover major semiconductor industry clusters across China, providing high-quality gas analysis solutions to domestic high-end manufacturing through a comprehensive service network.',
        regions: [
          {
            name: 'Yangtze River Delta',
            cities: 'Shanghai, Suzhou, Wuxi, Nanjing',
            description: 'IC industry cluster centered on Zhangjiang and Suzhou Industrial Park'
          },
          {
            name: 'Pearl River Delta',
            cities: 'Shenzhen, Guangzhou, Dongguan',
            description: 'Electronics industry belt centered on Shenzhen and Guangzhou'
          },
          {
            name: 'Beijing-Tianjin-Hebei',
            cities: 'Beijing, Tianjin, Shijiazhuang',
            description: 'Technology innovation belt centered on Beijing E-Town and Tianjin Binhai'
          },
          {
            name: 'Central & Western',
            cities: 'Wuhan, Chengdu, Chongqing, Xi\'an',
            description: 'Industry innovation bases centered on Wuhan Optics Valley and Chengdu Hi-Tech Zone'
          }
        ]
      },
      ctaSection: {
        title: 'Join FICUS Global Partner Network',
        subtitle: 'Whether you are looking for gas analysis solutions or hoping to become our distribution partner, we look forward to cooperating with you.',
        contact: 'Contact Us'
      }
    },
    // Equipment Page
    equipment: {
      hero: {
        title: 'Equipment',
        subtitle: 'FICUS provides comprehensive gas analysis equipment, from standard analyzers to custom systems, meeting various industrial and laboratory application needs.'
      },
      overview: {
        title: 'Equipment Overview',
        description: 'FICUS gas analysis equipment uses the latest technology to ensure high precision, reliability, and ease of use. Our product line covers various gas water, oxygen, particle analyzers, chromatographs, CQC, IQC integration design and manufacturing.',
        productLine: 'Our product line includes:',
        product1: 'Gas Chromatographs',
        product2: 'Gas Purity Analyzers', 
        product3: 'IQC System and Analysis Cabin Integration',
        product4: 'CQC Project Integration',
        product5: 'Custom Analysis Solutions',
        quality: 'All integration is designed and manufactured by our professional team to ensure each product meets the highest quality standards.',
        imageText: 'Equipment Overview'
      },
      products: {
        title: 'Featured Products',
        getDetails: 'Get Details',
        product1: {
          name: 'Water-Oxygen-Particle Analysis Series',
          description: 'Can continuously monitor the content of H2O, O2, particles and other impurities in bulk gases, with detection limits as low as ppt level. Particles have 8 channels: 0.1um, 0.2um, 0.3um, 0.5um, 1.0um, 2.0um, 3.0um, 5.0um.',
          featuresTitle: 'Key Features:',
          feature1: 'ppb-level high-precision detection',
          feature2: 'Multi-channel simultaneous analysis',
          feature3: 'User-friendly operation interface',
          feature4: 'Automatic calibration function',
          feature5: 'Data storage and remote access'
        },
        product2: {
          name: 'Chromatography Analysis Series',
          description: 'Applied to continuous measurement of H2, CO, CO2, CH4, NMHC, N2, Ar and other impurities in bulk gases, with detection limits <0.5ppb.',
          featuresTitle: 'Key Features:',
          feature1: 'Fast response time',
          feature2: 'High sensitivity detection',
          feature3: 'Low maintenance requirements',
          feature4: 'Compact design, space-saving',
          feature5: 'Intuitive touchscreen interface'
        },
        product3: {
          name: 'CQC Integration and IQC Cabin Project Integration',
          description: 'MonitorX provides continuous gas monitoring solutions suitable for industrial production lines and environmental monitoring. The system can work 24/7 continuously, providing real-time data and alarm functions.',
          featuresTitle: 'Key Features:',
          feature1: 'Continuous monitoring capability',
          feature2: 'Remote data access',
          feature3: 'Automatic alarm system',
          feature4: 'Trend analysis function',
          feature5: 'Industrial-grade durable design'
        }
      },
      custom: {
        title: 'Custom Solutions',
        description: 'In addition to standard products, FICUS also provides custom solutions to meet customers\' specific analysis needs. Our engineering team works closely with customers to design and develop systems that meet specific application requirements.',
        services: 'Our custom services include:',
        service1: 'Requirement analysis and consultation',
        service2: 'System design and development',
        service3: 'Integration with existing equipment',
        service4: 'Software customization',
        service5: 'Installation and training',
        service6: 'Maintenance and support',
        conclusion: 'No matter how special your needs are, we can provide solutions that meet your requirements.',
        imageText: 'Custom Solutions'
      },
      quality: {
        title: 'Quality Assurance',
        description: 'FICUS is committed to providing the highest quality products and services. Our quality management system ensures that every product meets the strictest standards.',
        feature1Title: 'Rigorous Testing',
        feature1Description: 'Every product undergoes rigorous testing and calibration before leaving the factory to ensure performance meets specification requirements.',
        feature2Title: 'Certification Standards',
        feature2Description: 'Our products comply with international standards and certification requirements, including ISO, CE, and other certifications.',
        feature3Title: 'Technical Support',
        feature3Description: 'We provide comprehensive technical support and services to ensure long-term stable operation of equipment.'
      },
      cta: {
        title: 'Looking for Equipment That Fits Your Needs?',
        subtitle: 'Contact our expert team for product information and technical consultation.',
        button: 'Contact Us'
      },
      authorizationSection: {
        title: 'Authorization Certificates',
        desc: [
          'PEAK Laboratory Authorization Letter',
          'Photonics Technologies Authorization Letter'
        ],
        images: [
          '/certs/auth-peak.jpg',
          '/certs/auth-photonics.jpg'
        ]
      }
    },
    // Applications Page
    applications: {
      hero: {
        title: 'Applications',
        subtitle: 'FICUS gas analysis solutions are widely used in multiple industries, providing customers with precise and reliable analysis results.'
      },
      caseStudies: {
        title: 'Case Studies',
        case1: {
          title: 'A Major Industrial Gas Producer',
          challenge: 'Challenge: Needed to improve the quality control capability of the high-purity argon production line and reduce the defect rate.',
          solution: 'Solution: FICUS provided a customized online monitoring system to analyze gas purity in real time and integrate with the control system.',
          result: 'Result: Defect rate reduced by 85%, production efficiency increased by 30%, and customer satisfaction significantly improved.'
        },
        case2: {
          title: 'A Leading Semiconductor Manufacturer',
          challenge: 'Challenge: Trace impurities in the production process led to a decrease in chip yield, requiring enhanced gas purity monitoring capability.',
          solution: 'Solution: FICUS deployed high-sensitivity trace analyzers for real-time monitoring of key process gases.',
          result: 'Result: Chip yield increased by 12%, production process became more controllable, and customer trust was enhanced.'
        }
      },
      ctaSection: {
        title: 'Looking for Solutions for Your Industry?',
        subtitle: 'Contact our application experts for advice and solutions tailored to your specific needs.',
        contact: 'Contact Us'
      },
      customersTable: {
        title: 'Customers',
        headers: ['Customer Name', 'Product'],
        data: [
          ['Wuxi Huarun Microelectronics', 'CQC System Integration & Instruments'],
          ['Guangzhou Xinrui Photomask Technology', 'CQC System Integration & Instruments'],
          ['Shanghai IC Materials Research Institute', 'CQC System Integration & Instruments'],
          ['Wuxi Xiandao Semiconductor Materials', 'CQC System Integration & Instruments'],
          ['Shanghai Jiading Optical Communication Project', 'CQC System Integration & Instruments'],
          ['Tianjin Zhonghuan Semiconductor', 'CQC System Integration & Instruments'],
          ['Xiamen Silan Macro SiC Project', 'CQC System Integration & Instruments'],
          ['Jiangsu Haogan Technology SiC Project', 'CQC System Integration & Instruments'],
          ['Shanghai Xinao Technology', 'Instruments & Analysis Service'],
          ['Jiaxing Jingfeng Xinzhu Semiconductor', 'Instruments & Analysis Service'],
          ['Zhongke Fuhai', 'IQC Analysis Cabin & Instruments'],
          ['Guanggang Gas', 'CQC System Integration & IQC Integration'],
          ['Dalian Zhongding Chemical', 'Instruments & Service'],
          ['Shandong Heyi Gas', 'Pretreatment System & Instruments'],
          ['Dalian Huabang Chemical', 'Instruments & Pretreatment System'],
          ['Hubei Jiunen Intelligent Technology', 'CQC System & Instruments'],
          ['Zhijia Gas', 'CQC System Integration & Instrument Service'],
          ['Inner Mongolia Guangneng Technology', 'Pretreatment System'],
          ['Shanghai Qiyuan Gas', 'CQC System & Instruments'],
          ['San Aifu', 'Analysis Cabin & Instruments'],
          ['Jiangsu Jiufeng', 'IQC System Integration & Instruments'],
          ['Zhejiang Zhongning', 'Analysis Cabin & Instruments'],
          ['Huaian Leishuo Electronic Materials', 'Analysis Cabin & Instruments'],
          ['China Electronics System Engineering 2nd Construction', 'CQC System Integration & Instruments'],
          ['Liaoning Huisheng Electromechanical', 'CQC System Integration & Instruments'],
          ['Shanghai Feixiang Electromechanical', 'CQC System Integration & Instruments'],
          ['Horuid Electronics (Shanghai)', 'CQC System Integration & Instruments'],
          ['Wuxi Hongfeng Electromechanical Installation', 'Instruments & Service'],
          ['Shanghai Haogu Machinery', 'Instruments & Service'],
          ['Suzhou Meisijia Electromechanical', 'Instruments & Service'],
          ['Shanghai Xiran Electronic System Engineering', 'Instruments & Service']
        ]
      }
    },
    // Services Page
    services: {
      hero: {
        title: 'Services',
        subtitle: 'FICUS provides comprehensive service support, from product consultation to technical support, ensuring customers get the best user experience and return on investment.'
      },
      overviewSection: {
        title: 'Service Overview',
        description: 'FICUS is committed to providing full lifecycle service support to customers, from product selection, installation and commissioning to maintenance and upgrades. Our professional team always provides quality service.',
        services: 'Our services include:',
        service1: 'Product consultation and selection',
        service2: 'Installation and commissioning',
        service3: 'Training and technical support',
        service4: 'Maintenance and calibration',
        service5: 'Upgrades and updates',
        service6: 'Custom development services'
      },
      installation: {
        title: 'Installation and Commissioning',
        description: 'FICUS provides professional installation and commissioning services to ensure equipment is properly installed and achieves optimal performance. Our technicians will develop detailed installation plans based on your specific needs and environmental conditions, and provide guidance and support throughout the installation process.',
        services: 'Our installation and commissioning services include:',
        service1: 'Site survey and assessment',
        service2: 'Pre-installation preparation and planning',
        service3: 'Equipment installation and connection',
        service4: 'System commissioning and testing',
        service5: 'Performance verification and confirmation',
        service6: 'Initial training and guidance',
        goal: 'Our goal is to ensure that the equipment works properly from the beginning and meets expected performance requirements.'
      },
      training: {
        title: 'Training and Technical Support',
        description: 'FICUS provides comprehensive training and technical support to help users fully understand and master equipment operation and maintenance. Our training courses are taught by experienced professionals and cover equipment operation, data analysis, troubleshooting and other aspects.',
        services: 'Our training and technical support services include:',
        service1: 'On-site operation training',
        service2: 'Advanced user training',
        service3: 'Online technical support',
        service4: 'Telephone consultation services',
        service5: 'Technical documentation and materials',
        service6: 'User forums and communities',
        support: 'Our technical support team is always ready to answer your questions and provide professional advice and assistance.'
      },
      maintenance: {
        title: 'Maintenance and Calibration',
        description: 'Regular maintenance and calibration are key to ensuring long-term stable operation of equipment and providing accurate analysis results. FICUS provides professional maintenance and calibration services to help customers maintain optimal equipment condition and performance.',
        services: 'Our maintenance and calibration services include:',
        service1: 'Preventive maintenance plans',
        service2: 'Regular inspection and testing',
        service3: 'Parts replacement and repair',
        service4: 'System calibration and verification',
        service5: 'Performance optimization and adjustment',
        service6: 'Maintenance records and reports',
        flexibility: 'We provide flexible maintenance plans that can be customized according to customers\' specific needs and usage conditions.'
      },
      upgrades: {
        title: 'Upgrades and Updates',
        description: 'With the continuous development and progress of technology, FICUS continues to provide equipment and software upgrade and update services to help customers maintain technological leadership and improve equipment performance and functionality.',
        services: 'Our upgrade and update services include:',
        service1: 'Hardware upgrades and extensions',
        service2: 'Software updates and upgrades',
        service3: 'New features and functionality additions',
        service4: 'System integration and compatibility improvements',
        service5: 'Performance optimization and improvement',
        service6: 'Security and stability enhancements',
        updates: 'We regularly release update and upgrade information and provide detailed upgrade guides and support.'
      },
      customDevelopment: {
        title: 'Custom Development Services',
        description: 'FICUS provides custom development services, developing customized solutions based on customers\' specific needs and application scenarios. Our R&D team has rich experience and professional knowledge and can meet various complex and special needs.',
        services: 'Our custom development services include:',
        service1: 'Requirements analysis and consultation',
        service2: 'Solution design and planning',
        service3: 'Prototype development and testing',
        service4: 'System integration and customization',
        service5: 'Software customization and development',
        service6: 'Verification and confirmation',
        cooperation: 'We work closely with customers to ensure that the developed solutions fully meet their needs and expectations.'
      },
      servicePlans: {
        title: 'Service Plans',
        basic: {
          title: 'Basic Service',
          description: 'Suitable for users with basic needs',
          feature1: 'Phone technical support',
          feature2: 'Online documentation access',
          feature3: 'Software updates',
          feature4: 'Basic training materials',
          contact: 'Learn More'
        },
        advanced: {
          title: 'Professional Service',
          description: 'Suitable for professional users and small to medium enterprises',
          badge: 'Recommended',
          feature1: '24/7 technical support',
          feature2: 'Priority response',
          feature3: 'Semi-annual maintenance and calibration',
          feature4: 'Advanced training courses',
          feature5: 'Remote diagnosis and support',
          contact: 'Learn More'
        },
        custom: {
          title: 'Custom Service',
          description: 'Service plan customized for specific needs',
          feature1: 'Dedicated service manager',
          feature2: 'Custom maintenance plan',
          feature3: 'On-site emergency response',
          feature4: 'Custom development support',
          feature5: 'Priority upgrades and updates',
          contact: 'Contact Us'
        }
      },
      ctaSection: {
        title: 'Need Professional Service Support?',
        subtitle: 'Contact our service team for service plans that meet your needs.',
        contact: 'Contact Us'
      }
    },
    // Contact Page
    contact: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Our professional team is ready to provide support and service at any time. Welcome to contact us for more information.'
      },
      info: {
        title: 'Contact Information',
        headquarters: 'Headquarters Address',
        address1: 'Building 11, 101, Tianhua AI Innovation Park, Shanghai',
        address2: 'No. 1585 Chengbei Road, Jiading District, Shanghai, China',
        postal: '201800',
        phoneTitle: 'Phone',
        phone: '+86 18915970248',
        fax: 'Fax: +86 21 1234 5679',
        emailTitle: 'Email',
        generalEmail: 'General Inquiry: info@ficus.com',
        salesEmail: 'Sales Inquiry: sales@ficus.com',
        supportEmail: 'Technical Support: support@ficus.com',
        hoursTitle: 'Business Hours',
        weekdays: 'Monday to Friday: 9:00 - 18:00',
        weekends: 'Weekends: 10:00 - 16:00'
      },
      form: {
        title: 'Contact Form',
        name: 'Name *',
        email: 'Email *',
        phone: 'Phone',
        company: 'Company',
        subject: 'Subject *',
        selectSubject: 'Please select...',
        generalInquiry: 'General Inquiry',
        productInquiry: 'Product Inquiry',
        technicalSupport: 'Technical Support',
        partnership: 'Partnership',
        other: 'Other',
        message: 'Message *',
        privacyAgreement1: 'I have read and agree to the ',
        privacyPolicy: 'Privacy Policy',
        privacyAgreement2: ', and agree to the processing of my personal data.',
        privacyRequired: 'Please agree to the privacy policy before submitting the form',
        submit: 'Submit'
      },
      departments: {
        title: 'Department Contact Information',
        sales: {
          title: 'Sales Inquiry',
          description: 'Product inquiry, quotation and sales support',
          email: 'sales@ficus.com',
          phone: '+86 21 1234 5678'
        },
        support: {
          title: 'Technical Support',
          description: 'Technical issues, troubleshooting and product support',
          email: 'support@ficus.com',
          phone: '+86 21 1234 5679'
        },
        partnership: {
          title: 'Partnership',
          description: 'Distribution cooperation, agent application and business cooperation',
          email: 'partner@ficus.com',
          phone: '+86 21 1234 5680'
        }
      },
      offices: {
        title: 'Global Offices',
        china: 'China - Shanghai (Headquarters)',
        chinaAddress: 'Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai',
        chinaPhone: 'Phone: +86 21 5888 XXXX',
        chinaEmail: 'Email: china@ficus-tech.com',
        europe: 'Europe - Germany',
        europeAddress: 'Munich Technology Park',
        europePhone: 'Phone: +49 89 XXXX XXXX',
        europeEmail: 'Email: europe@ficus-tech.com',
        usa: 'North America - USA',
        usaAddress: 'San Jose, California',
        usaPhone: 'Phone: +1 408 XXX XXXX',
        usaEmail: 'Email: usa@ficus-tech.com'
      },
      map: {
        title: 'Our Location',
        addressTitle: 'Company Address',
        address: 'No. 1585 Chengbei Road, Jiading District, Shanghai, China',
        address2: 'Building 11, 101, Tianhua AI Innovation Park, Shanghai',
        trafficTitle: 'Transportation Guide',
        trafficList: [
          'Metro Line 11: Jiading West Station, about 2km',
          'Metro Line 14: Taopu Xincun Station, about 8km',
          'By car: Hujia Expressway → Chengbei Road Exit'
        ],
        placeholder: 'Map will be displayed here'
      },
      faq: {
        title: 'Frequently Asked Questions',
        question1: 'How to get product quotes?',
        answer1: 'You can get product quotes by filling out the contact form above and selecting "Product Inquiry" as the subject, or by sending an email directly to sales@ficus-tech.com. Our sales team will reply within 24 hours.',
        question2: 'How to get technical support?',
        answer2: 'For customers who have purchased our products, you can get technical support by calling +86 18915970248 or sending an email to sales@ficus-tech.com. Please provide your device serial number and detailed problem description so we can better serve you.',
        question3: 'How to become a FICUS distribution partner?',
        answer3: 'If you are interested in becoming a FICUS distribution partner, please send an email to sales@ficus-tech.com, explaining your company information, business scope, and cooperation intentions. Our business development team will contact you to discuss cooperation details.'
      },
      cta: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Whether you need standard products or custom solutions, we can meet your needs. Contact us now to start your project.',
        callNow: 'Call Now',
        sendEmail: 'Send Email'
      }
    },
    // Footer
    footer: {
      description: 'With precision analysis technology as the core, providing full lifecycle gas quality solutions for high-end manufacturing',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      address: 'Address: Shanghai, China',
      phone: 'Phone: +86 123 4567 8910',
      email: 'Email: info@ficus-tech.com',
      copyright: '© 2025 FICUS. All rights reserved.'
    },
    certificates: {
      title: 'Safety Certificates',
      images: [
        '/certs/en-iso9001.jpg',
        '/certs/en-iso45001.jpg',
        '/certs/en-iso14001.jpg'
      ]
    }
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations[language];
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return key; // 如果找不到翻译，返回原始key
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  const getRaw = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getRaw }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
