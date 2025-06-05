import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
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
      technologies: '技术支持',
      services: '相关服务',
      contact: '联系我们'
    },
    // Home Page
    home: {
      heroTitle: '专业的气体分析企业',
      heroSubtitle: '半个世纪的专业经验，创新与传承',
      exploreSolutions: '查看我们的解决方案',
      contactUs: '联系我们',
      stats: {
        projects: '自2004年以来的项目',
        employees: '全球员工',
        experience: '年专业经验',
        distributors: '全球分销商'
      },
      aboutSection: {
        title: '关于我们',
        text1: '上海菲科思科技有限公司成立于2021年，专注致力于高纯气体分析行业。专业负责CQC系统和IQC的设计、集成制造、安装调试、售后维修和维保服务，并从事分析仪器的贸易、研发和客户的专业培训。',
        text2: '我们还提供纯化器测试以及管道五项测试，以及分析仪器的校准等服务。公司设有自己的洁净实验室和集成中心！可以有效保障CQC系统集成的品质和分析仪维修环境，方便设备的维修/维护，减少维修时带来的污染，同时我们实验室配置有高精度的水氧色谱仪等常备仪器。',
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
      }
    },
    // About Page
    about: {
      heroTitle: '关于我们',
      heroSubtitle: '半个世纪的专业经验，创新与传承',      historySection: {
        title: '公司历史',
        text1: 'FICUS成立于20世纪初，最初专注于无线电设备制造，如今已发展成为气体色谱分析领域的领导者。',
        text2: '我们位于中国上海，将约95%的产品出口到全球市场，与全球主要工业气体生产商和供应商合作。我们的发展历程见证了从无线电技术到气体分析领域的转型与创新。',
        text3: '在20世纪50年代，随着晶体管收音机从美国进口取代了无线电业务，我们开始转型，开发用于测量焊接用氩气中杂质的色谱仪。这些色谱仪配备了使用高频放电的检测器，服务于比利时列日地区的钢铁厂。',
        text4: '我们的产品范围逐渐扩大，包括用于工业和实验室应用的高纯度检测器。我们在这一领域发挥了"开拓性作用"，进一步拓展产品范围，开发了自主的分析软件和工程部门。',
        imageText: '公司发展历程'
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
        title: '全球业务',
        description: 'FICUS的产品和服务覆盖全球多个国家和地区，通过广泛的分销网络，为全球客户提供高质量的气体分析解决方案。',
        asia: '亚洲',
        asiaCount: '6个国家',
        europe: '欧洲',
        europeCount: '9个国家',
        northAmerica: '北美洲',
        northAmericaCount: '3个国家',
        others: '其他地区',
        othersCount: '3个国家'
      },
      ctaSection: {
        title: '加入FICUS全球合作伙伴网络',
        subtitle: '无论您是寻找气体分析解决方案，还是希望成为我们的分销合作伙伴，我们期待与您合作。',
        contact: '联系我们'      }
    },    // Equipment Page
    equipment: {
      hero: {
        title: '设备',
        subtitle: 'FICUS提供全面的气体分析设备，从标准分析仪到定制系统，满足各种工业和实验室应用需求。'
      },
      overview: {
        title: '设备概览',
        description: 'FICUS的气体分析设备采用最新技术，确保高精度、可靠性和易用性。我们的产品线涵盖各种检测器、色谱柱、进样系统和数据处理软件。',
        productLine: '我们的产品线包括：',
        product1: '气相色谱仪',
        product2: '气体纯度分析仪',
        product3: '在线监测系统',
        product4: '便携式分析设备',
        product5: '定制分析解决方案',
        quality: '所有设备均由我们的专业团队设计和制造，确保每个产品都符合最高质量标准。',
        imageText: '设备概览'
      },
      products: {
        title: '精选产品',
        getDetails: '查看详情',
        product1: {
          name: 'GC-2000 气相色谱仪',
          description: 'GC-2000 是我们的旗舰产品，适用于工业和实验室的高精度气体分析。该设备采用先进的检测技术，可分析多种气体成分，满足多样化应用需求。',
          featuresTitle: '主要特点：',
          feature1: 'ppb级高精度检测',
          feature2: '多通道同时分析',
          feature3: '用户友好操作界面',
          feature4: '自动校准功能',
          feature5: '数据存储与远程访问'
        },
        product2: {
          name: 'PurityPro 气体纯度分析仪',
          description: 'PurityPro 专为高纯气体分析设计，可快速检测微量杂质，确保气体纯度符合行业标准。广泛应用于半导体、医药、食品等行业。',
          featuresTitle: '主要特点：',
          feature1: '响应速度快',
          feature2: '高灵敏度检测',
          feature3: '低维护需求',
          feature4: '紧凑设计，节省空间',
          feature5: '直观触摸屏界面'
        },
        product3: {
          name: 'MonitorX 在线监测系统',
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
      }
    },    // Applications Page  
    applications: {
      hero: {
        title: '应用',
        subtitle: 'FICUS的气体分析解决方案广泛应用于多个行业，为客户提供精确、可靠的分析结果。'
      },
      overview: {
        title: '应用概览',
        description: 'FICUS的产品和服务在多个行业和应用场景中发挥着重要作用。我们为不同行业的特殊需求提供定制化解决方案。',
        fieldsList: '我们的解决方案已成功应用于以下领域：',
        field1: '工业气体生产',
        field2: '半导体制造',
        field3: '医药与生物技术',
        field4: '环境监测',
        field5: '科研与实验室',
        field6: '石油化工',
        conclusion: '每个行业都有其特定的挑战和需求，我们的专业团队与客户紧密合作，提供量身定制的解决方案。'
      },
      industrialGas: {
        title: '工业气体',
        description1: 'FICUS为工业气体生产商提供高精度分析解决方案，确保产品质量和安全性。我们的设备可检测多种工业气体中的微量杂质，满足最严格的纯度要求。',
        description2: '主要应用包括：',
        application1: '高纯气体质量控制',
        application2: '混合气体成分分析',
        application3: '生产过程监控',
        application4: '储运安全监测',
        application5: '认证与合规检测',
        description3: '我们的解决方案帮助工业气体生产商确保产品符合行业标准和客户要求，提高生产效率和产品质量。'
      },
      semiconductor: {
        title: '半导体制造',
        description1: '半导体制造对气体纯度有极高要求，微量杂质可能导致产品缺陷和良率下降。FICUS高精度分析设备可检测ppb甚至ppt级别的杂质，保障生产环境和工艺气体的纯净。',
        description2: '主要应用包括：',
        application1: '超高纯气体纯度验证',
        application2: '工艺气体监测',
        application3: '洁净室环境监控',
        application4: '排放气体分析',
        application5: '泄漏检测',
        description3: '我们的解决方案帮助半导体制造商提升产品质量，减少缺陷，优化生产流程。'
      },
      pharmaceutical: {
        title: '医药与生物技术',
        description1: '医药和生物技术行业需要精确的气体分析以确保产品质量和生产环境安全。FICUS的解决方案帮助客户满足严格的监管要求和质量标准。',
        description2: '主要应用包括：',
        application1: '医用气体纯度检测',
        application2: '发酵过程监测',
        application3: '无菌环境监控',
        application4: '包装气体分析',
        application5: '研发实验室分析',
        description3: '我们的解决方案帮助医药和生物技术企业确保产品安全和质量，符合GMP等监管要求。'
      },
      environmental: {
        title: '环境监测',
        description1: '环境保护日益重要，准确的气体分析对于监测空气质量、排放控制和合规验证至关重要。FICUS提供可靠的环境监测解决方案，帮助客户满足环保要求。',
        description2: '主要应用包括：',
        application1: '工业排放监测',
        application2: '环境空气质量分析',
        application3: '温室气体监测',
        application4: '有害气体检测',
        application5: '合规验证和报告',
        description3: '我们的解决方案帮助企业和机构监测和控制环境影响，满足日益严格的环保法规要求。'
      },
      research: {
        title: '科研与实验室',
        description1: '科研机构和实验室需要高精度的气体分析设备来支持各类研究项目和实验。FICUS提供灵活、精确的分析解决方案，满足科研需求。',
        description2: '主要应用包括：',
        application1: '材料研究',
        application2: '催化剂开发',
        application3: '环境研究',
        application4: '生物医学研究',
        application5: '教学与培训',
        description3: '我们的解决方案为科研人员提供可靠的分析工具，支持科学发现和技术创新。'
      },
      caseStudies: {
        title: '成功案例',
        case1: {
          title: '大型工业气体生产商',
          challenge: '挑战：需要提升高纯氩气生产线的质量控制能力，降低产品不合格率。',
          solution: '解决方案：FICUS提供了定制的在线监测系统，实时分析生产过程中的气体纯度，并与控制系统集成。',
          result: '结果：产品不合格率降低85%，生产效率提升30%，客户满意度显著提升。'
        },
        case2: {
          title: '领先半导体制造商',
          challenge: '挑战：需要更精确地监测生产环境中的微量杂质气体，提高产品良率。',
          solution: '解决方案：FICUS提供了高灵敏度的多点监测系统，可检测ppt级别的关键杂质。',
          result: '结果：产品良率提升5%，每年节省数百万美元成本，设备投资6个月内回收。'
        }
      },
      ctaSection: {
        title: '寻找适合您行业的解决方案？',
        subtitle: '联系我们的应用专家，获取针对您特定需求的建议和方案。',
        contact: '联系我们'
      }
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
    // Technologies Page
    technologies: {
      heroTitle: '技术',
      heroSubtitle: 'FICUS的创新技术为气体分析领域设立了新标准，提供更高精度、更可靠的分析结果。',      coreSection: {
        title: '核心技术',
        description1: 'FICUS在气体分析领域拥有多项核心技术，这些技术是我们产品性能和可靠性的基础。我们持续投资研发，不断提升技术水平，为客户提供更好的解决方案。',
        description2: '我们的核心技术包括：',
        tech1: '高频放电检测技术',
        tech2: '微量杂质分析技术',
        tech3: '多组分同时分析技术',
        tech4: '自动校准系统',
        tech5: '智能数据处理算法',
        description3: '这些技术使我们的产品能够提供更高精度、更可靠的分析结果，满足客户最严格的要求。',
        visualTitle: '核心技术',
        visualSubtitle: '创新驱动，技术领先'
      },
      detectionSection: {
        title: '检测技术',
        description1: 'FICUS的检测技术是我们产品的核心，我们开发了多种高性能检测器，适用于不同的气体分析需求。',
        description2: '我们的主要检测技术包括：',
        hdd: '高频放电检测器 (HDD)：适用于高纯气体中微量杂质的检测，灵敏度可达ppb级别',
        tcd: '热导检测器 (TCD)：广泛应用于各种气体成分的分析，稳定可靠',
        fid: '火焰离子化检测器 (FID)：适用于有机化合物的高灵敏度检测',
        pdd: '脉冲放电检测器 (PDD)：提供宽线性范围和高灵敏度，适用于多种气体分析',
        ecd: '电化学检测器 (ECD)：对特定气体具有极高的选择性和灵敏度',
        description3: '我们根据客户的具体需求，选择最适合的检测技术，确保分析结果的准确性和可靠性。'
      },
      softwareSection: {
        title: '软件与数据分析',
        description1: 'FICUS开发了先进的分析软件，为用户提供直观的操作界面和强大的数据处理能力。我们的软件不仅控制设备运行，还提供全面的数据分析和报告功能。',
        description2: '我们的软件特点包括：',
        feature1: '用户友好的图形界面',
        feature2: '实时数据显示和处理',
        feature3: '自动峰识别和定量分析',
        feature4: '多种数据导出格式',
        feature5: '自定义报告生成',
        feature6: '远程访问和控制',
        feature7: '数据安全存储和备份',
        description3: '我们的软件持续更新和优化，确保用户获得最佳的使用体验和分析结果。'
      },
      innovationSection: {
        title: '创新与研发',
        description1: 'FICUS高度重视技术创新和研发投入，我们的研发团队不断探索新技术和新方法，提升产品性能和用户体验。',
        description2: '我们的研发重点包括：',
        focus1: '提高检测灵敏度和精度',
        focus2: '扩展分析范围和应用领域',
        focus3: '简化操作流程，提升用户体验',
        focus4: '增强数据处理和分析能力',
        focus5: '开发新型检测技术和方法',
        description3: '我们与科研机构和行业伙伴密切合作，共同推动气体分析技术的发展和创新。'
      },
      comparisonSection: {
        title: '技术对比',
        headers: {
          technology: '检测技术',
          sensitivity: '灵敏度',
          range: '线性范围',
          selectivity: '选择性',
          application: '主要应用'
        },
        hdd: {
          name: '高频放电检测器 (HDD)',
          sensitivity: 'ppb级',
          range: '10⁵',
          selectivity: '高',
          application: '高纯气体分析'
        },
        tcd: {
          name: '热导检测器 (TCD)',
          sensitivity: 'ppm级',
          range: '10⁴',
          selectivity: '中',
          application: '通用气体分析'
        },
        fid: {
          name: '火焰离子化检测器 (FID)',
          sensitivity: 'ppb级',
          range: '10⁷',
          selectivity: '高',
          application: '有机化合物分析'
        },
        pdd: {
          name: '脉冲放电检测器 (PDD)',
          sensitivity: 'ppb级',
          range: '10⁶',
          selectivity: '高',
          application: '多组分气体分析'
        },
        ecd: {
          name: '电化学检测器 (ECD)',
          sensitivity: 'ppt级',
          range: '10³',
          selectivity: '极高',
          application: '特定气体检测'
        }
      },
      patentsSection: {
        title: '专利与知识产权',
        description: 'FICUS重视知识产权保护，拥有多项气体分析技术专利，这些专利是我们技术创新和市场竞争力的重要保障。',
        detection: {
          title: '检测技术专利',
          description: '包括高频放电检测器、脉冲放电技术等多项专利，提升检测精度和可靠性。'
        },
        dataProcessing: {
          title: '数据处理专利',
          description: '包括智能算法、自动校准系统等专利，提高数据处理效率和准确性。'
        },
        systemIntegration: {
          title: '系统集成专利',
          description: '包括模块化设计、自动化控制等专利，提升系统性能和用户体验。'
        }
      },
      ctaSection: {
        title: '了解更多技术详情？',
        subtitle: '联系我们的技术专家，获取更多关于FICUS技术的详细信息和应用建议。',
        contact: '联系我们'
      }
    },    // Contact Page
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
        fax: '传真：+86 21 1234 5679',
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
        placeholder: '地图将在此显示'
      },
      faq: {
        title: '常见问题',
        question1: '如何获取产品报价？',
        answer1: '您可以填写上方联系表单并选择“产品咨询”作为主题，或直接发送邮件至 sales@ficus-tech.com，我们的销售团队将在24小时内回复。',
        question2: '如何获得技术支持？',
        answer2: '已购买我们产品的客户可拨打 +86 21 5888 XXXX 或发送邮件至 support@ficus-tech.com 获取技术支持。请提供设备序列号和详细问题描述，以便我们更好地为您服务。',
        question3: '如何成为FICUS分销合作伙伴？',
        answer3: '如有意成为FICUS分销合作伙伴，请发送邮件至 partnership@ficus-tech.com，说明公司信息、业务范围及合作意向。我们的商务团队会与您联系洽谈合作细节。'
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
      description: 'FICUS专注气体分析技术超过50年，为全球客户提供专业的分析解决方案。',
      quickLinks: '快速链接',
      contact: '联系我们',
      address: '上海市浦东新区张江高科技园区',
      phone: '电话：+86 21 1234 5678',
      email: '邮箱：info@ficus.com',
      copyright: '© 2024 FICUS. 版权所有。'
    }
  },
  en: {    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      equipment: 'Equipment', 
      applications: 'Applications',
      technologies: 'Technologies',
      services: 'Services',
      contact: 'Contact Us'
    },
    // Home Page
    home: {
      heroTitle: 'Your Gas Analysis Expert',
      heroSubtitle: 'Half a century of professional experience, innovation and heritage',
      exploreSolutions: 'Explore Our Solutions',
      contactUs: 'Contact Us',
      stats: {
        projects: 'Projects since 2004',
        employees: 'Global employees',
        experience: 'Years of professional experience',
        distributors: 'Global distributors'
      },
      aboutSection: {
        title: 'About Us',
        text1: 'Founded in the early 20th century and initially focused on radio equipment manufacturing, FICUS has evolved into a leader in gas chromatography analysis.',
        text2: 'Based in Shanghai, China, we export approximately 95% of our products to the global market, working with major industrial gas producers and suppliers worldwide. Our product range includes high-purity detectors for industrial and laboratory applications, and we have developed proprietary analytical software and engineering departments.',
        learnMore: 'Learn More'
      },
      equipmentSection: {
        title: 'Equipment',
        text1: 'Our team excels in manufacturing equipment that meets the highest industry standards, ensuring precision and quality.',
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
          description: 'Providing environmental gas monitoring solutions to help companies and institutions meet environmental requirements and standards.'        },
        viewAll: 'View All Applications'
      },
      ctaSection: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Contact our expert team for customized solutions and professional advice.',
        contact: 'Contact Now'
      }
    },
    // About Page
    about: {
      heroTitle: 'About Us',
      heroSubtitle: 'Half a century of professional experience, innovation and heritage',      historySection: {
        title: 'Company History',
        text1: 'Founded in the early 20th century and initially focused on radio equipment manufacturing, FICUS has evolved into a leader in gas chromatography analysis.',
        text2: 'Based in Shanghai, China, we export approximately 95% of our products to the global market, working with major industrial gas producers and suppliers worldwide. Our development journey witnesses the transformation and innovation from radio technology to gas analysis field.',
        text3: 'In the 1950s, as transistor radios imported from the United States replaced the radio business, we began to transform and develop chromatographs for measuring impurities in argon gas for welding. These chromatographs were equipped with detectors using high-frequency discharge and served steel mills in the Liège region of Belgium.',
        text4: 'Our product range gradually expanded to include high-purity detectors for industrial and laboratory applications. We played a "pioneering role" in this field and further expanded our product range by developing proprietary analytical software and engineering departments.',
        imageText: 'Company Development History'
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
        title: 'Global Business',
        description: 'FICUS products and services cover multiple countries and regions worldwide, providing high-quality gas analysis solutions to global customers through an extensive distribution network.',
        asia: 'Asia',
        asiaCount: '6 countries',
        europe: 'Europe',
        europeCount: '9 countries',
        northAmerica: 'North America',
        northAmericaCount: '3 countries',
        others: 'Other Regions',
        othersCount: '3 countries'
      },
      ctaSection: {
        title: 'Join FICUS Global Partner Network',
        subtitle: 'Whether you are looking for gas analysis solutions or hoping to become our distribution partner, we look forward to cooperating with you.',
        contact: 'Contact Us'
      }    },
    // Contact Page
    contact: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Whether you have any questions or needs, our team is ready to provide help and support at any time.'
      },
      info: {
        title: 'Contact Information',
        headquarters: 'Headquarters',
        address1: 'Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai',
        address2: 'Technology Avenue 123',
        postal: 'Postal Code: 201203',
        phoneTitle: 'Phone',
        phone: 'Phone: +86 21 5888 XXXX',
        fax: 'Fax: +86 21 5888 XXXX',
        emailTitle: 'Email',
        generalEmail: 'General Inquiry: info@ficus-tech.com',
        salesEmail: 'Sales Inquiry: sales@ficus-tech.com',
        supportEmail: 'Technical Support: support@ficus-tech.com',
        hoursTitle: 'Business Hours',
        weekdays: 'Monday to Friday: 9:00 - 18:00',
        weekends: 'Saturday, Sunday: Closed'
      },      form: {
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
      // 补全en中缺失的key，内容用英文占位
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
        placeholder: 'Map will be displayed here'
      },
      faq: {
        title: 'Frequently Asked Questions',
        question1: 'How to get product quotes?',
        answer1: 'You can get product quotes by filling out the contact form above and selecting "Product Inquiry" as the subject, or by sending an email directly to sales@ficus-tech.com. Our sales team will reply within 24 hours.',
        question2: 'How to get technical support?',
        answer2: 'For customers who have purchased our products, you can get technical support by calling +86 21 5888 XXXX or sending an email to support@ficus-tech.com. Please provide your device serial number and detailed problem description so we can better serve you.',
        question3: 'How to become a FICUS distribution partner?',
        answer3: 'If you are interested in becoming a FICUS distribution partner, please send an email to partnership@ficus-tech.com, explaining your company information, business scope, and cooperation intentions. Our business development team will contact you to discuss cooperation details.'
      },
      cta: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Whether you need standard products or custom solutions, we can meet your needs. Contact us now to start your project.',
        callNow: 'Call Now',
        sendEmail: 'Send Email'
      }
    },
    // Equipment Page
    equipment: {
      hero: {
        title: 'Equipment',
        subtitle: 'Our team excels in manufacturing equipment that meets the highest industry standards, ensuring precision and quality.'
      },
      overview: {
        title: 'Equipment Overview',
        description: 'FICUS provides comprehensive gas analysis solutions, from standard analyzers to custom systems, meeting various industrial and laboratory application needs. Our equipment uses the latest technology to ensure high precision, reliability, and ease of use.',
        productLine: 'Our product line includes:',
        product1: 'Gas Chromatographs',
        product2: 'Gas Purity Analyzers', 
        product3: 'Online Monitoring Systems',
        product4: 'Portable Analysis Equipment',
        product5: 'Custom Analysis Solutions',
        quality: 'All equipment is designed and manufactured by our professional team to ensure every product meets the highest quality standards.',
        imageText: 'Equipment Overview'
      },
      products: {
        title: 'Featured Products',
        getDetails: 'Get Details',
        product1: {
          name: 'GC-2000 Gas Chromatograph',
          description: 'GC-2000 is our flagship product, providing high-precision gas analysis for industrial and laboratory applications. This equipment uses advanced detection technology to analyze various gas components and meet various application needs.',
          featuresTitle: 'Key Features:',
          feature1: 'High-precision detection with ppb-level analysis capability',
          feature2: 'Multi-channel simultaneous analysis',
          feature3: 'User-friendly operation interface',
          feature4: 'Automatic calibration function',
          feature5: 'Data storage and remote access'
        },
        product2: {
          name: 'PurityPro Gas Purity Analyzer',
          description: 'PurityPro is specifically designed for high-purity gas analysis, capable of rapidly detecting trace impurities to ensure gas purity meets industry standards. This equipment is widely used in semiconductor, pharmaceutical, and food industries.',
          featuresTitle: 'Key Features:',
          feature1: 'Fast response time',
          feature2: 'High sensitivity detection',
          feature3: 'Low maintenance requirements',
          feature4: 'Compact design, space-saving',
          feature5: 'Intuitive touchscreen interface'
        },
        product3: {
          name: 'MonitorX Online Monitoring System',
          description: 'MonitorX provides continuous gas monitoring solutions suitable for industrial production lines and environmental monitoring. This system can work 24/7 continuously, providing real-time data and alarm functions.',
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
      }
    },    // Applications Page  
    applications: {
      heroTitle: '应用',
      heroSubtitle: 'FICUS的气体分析解决方案广泛应用于多个行业，为客户提供精确、可靠的分析结果。',
      overview: {
        title: '应用概览',
        description: 'FICUS的产品和服务在多个行业和应用场景中发挥着重要作用。我们为不同行业的特殊需求提供定制化解决方案。',
        fieldsList: '我们的解决方案已成功应用于以下领域：',
        field1: '工业气体生产',
        field2: '半导体制造',
        field3: '医药与生物技术',
        field4: '环境监测',
        field5: '科研与实验室',
        field6: '石油化工',
        conclusion: '每个行业都有其特定的挑战和需求，我们的专业团队与客户紧密合作，提供量身定制的解决方案。'
      },
      industrialGas: {
        title: '工业气体',
        description1: 'FICUS为工业气体生产商提供高精度分析解决方案，确保产品质量和安全性。我们的设备可检测多种工业气体中的微量杂质，满足最严格的纯度要求。',
        description2: '主要应用包括：',
        application1: '高纯气体质量控制',
        application2: '混合气体成分分析',
        application3: '生产过程监控',
        application4: '储运安全监测',
        application5: '认证与合规检测',
        description3: '我们的解决方案帮助工业气体生产商确保产品符合行业标准和客户要求，提高生产效率和产品质量。'
      },
      semiconductor: {
        title: '半导体制造',
        description1: '半导体制造对气体纯度有极高要求，微量杂质可能导致产品缺陷和良率下降。FICUS高精度分析设备可检测ppb甚至ppt级别的杂质，保障生产环境和工艺气体的纯净。',
        description2: '主要应用包括：',
        application1: '超高纯气体纯度验证',
        application2: '工艺气体监测',
        application3: '洁净室环境监控',
        application4: '排放气体分析',
        application5: '泄漏检测',
        description3: '我们的解决方案帮助半导体制造商提升产品质量，减少缺陷，优化生产流程。'
      },
      pharmaceutical: {
        title: '医药与生物技术',
        description1: '医药和生物技术行业需要精确的气体分析以确保产品质量和生产环境安全。FICUS的解决方案帮助客户满足严格的监管要求和质量标准。',
        description2: '主要应用包括：',
        application1: '医用气体纯度检测',
        application2: '发酵过程监测',
        application3: '无菌环境监控',
        application4: '包装气体分析',
        application5: '研发实验室分析',
        description3: '我们的解决方案帮助医药和生物技术企业确保产品安全和质量，符合GMP等监管要求。'
      },
      environmental: {
        title: '环境监测',
        description1: '环境保护日益重要，准确的气体分析对于监测空气质量、排放控制和合规验证至关重要。FICUS提供可靠的环境监测解决方案，帮助客户满足环保要求。',
        description2: '主要应用包括：',
        application1: '工业排放监测',
        application2: '环境空气质量分析',
        application3: '温室气体监测',
        application4: '有害气体检测',
        application5: '合规验证和报告',
        description3: '我们的解决方案帮助企业和机构监测和控制环境影响，满足日益严格的环保法规要求。'
      },
      research: {
        title: '科研与实验室',
        description1: '科研机构和实验室需要高精度的气体分析设备来支持各类研究项目和实验。FICUS提供灵活、精确的分析解决方案，满足科研需求。',
        description2: '主要应用包括：',
        application1: '材料研究',
        application2: '催化剂开发',
        application3: '环境研究',
        application4: '生物医学研究',
        application5: '教学与培训',
        description3: '我们的解决方案为科研人员提供可靠的分析工具，支持科学发现和技术创新。'
      },
      caseStudies: {
        title: '成功案例',
        case1: {
          title: '大型工业气体生产商',
          challenge: '挑战：需要提升高纯氩气生产线的质量控制能力，降低产品不合格率。',
          solution: '解决方案：FICUS提供了定制的在线监测系统，实时分析生产过程中的气体纯度，并与控制系统集成。',
          result: '结果：产品不合格率降低85%，生产效率提升30%，客户满意度显著提升。'
        },
        case2: {
          title: '领先半导体制造商',
          challenge: '挑战：需要更精确地监测生产环境中的微量杂质气体，提高产品良率。',
          solution: '解决方案：FICUS提供了高灵敏度的多点监测系统，可检测ppt级别的关键杂质。',
          result: '结果：产品良率提升5%，每年节省数百万美元成本，设备投资6个月内回收。'
        }
      },
      ctaSection: {
        title: '寻找适合您行业的解决方案？',
        subtitle: '联系我们的应用专家，获取针对您特定需求的建议和方案。',
        contact: '联系我们'
      }
    },
    // Services Page
    services: {
      hero: {
        title: 'Services',
        subtitle: 'FICUS provides comprehensive service support to ensure customers get the best user experience and return on investment.'
      },
      overviewSection: {
        title: 'Service Overview',
        description: 'FICUS not only provides high-quality gas analysis equipment, but also provides comprehensive technical support and services to ensure that customers get the best user experience and analysis results. Our service team consists of experienced professionals who are always available to provide support and assistance to customers.',
        services: 'Our services include:',
        service1: 'Installation and commissioning',
        service2: 'Training and technical support',
        service3: 'Maintenance and calibration',
        service4: 'Upgrades and updates',
        service5: 'Remote diagnosis and support',
        service6: 'Custom development services',
        conclusion: 'No matter where you are, FICUS can provide timely and professional services to ensure that your equipment is always in optimal condition.'
      },
      installation: {
        title: 'Installation & Commissioning',
        description: 'FICUS provides professional installation and commissioning services to ensure that equipment is properly installed and achieves optimal performance. Our technicians will develop detailed installation plans based on your specific needs and environmental conditions, and provide guidance and support throughout the installation process.',
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
        title: 'Training & Technical Support',
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
        title: 'Maintenance & Calibration',
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
        title: 'Upgrades & Updates',
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
          description: 'Standard service plan for basic needs',
          feature1: 'Phone and email technical support',
          feature2: 'Software updates',
          feature3: 'Annual maintenance inspection',
          feature4: 'Basic training',
          contact: 'Learn More'
        },
        advanced: {
          title: 'Advanced Service',
          description: 'Comprehensive service plan that meets most needs',
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
        title: 'Need Technical Support or Services?',
        subtitle: 'Contact our service team for professional technical support and services.',
        contact: 'Contact Us'
      }
    },
    // Technologies Page
    technologies: {
      hero: {
        title: 'Technologies',
        subtitle: 'FICUS innovative technology sets new standards in the field of gas analysis, providing higher precision and more reliable analysis results.'
      },      coreSection: {
        title: 'Core Technologies',
        description1: 'FICUS has multiple core technologies in the field of gas analysis, which are the foundation of our product performance and reliability. We continue to invest in research and development, continuously improve our technical level, and provide customers with better solutions.',
        description2: 'Our core technologies include:',
        tech1: 'High-frequency discharge detection technology',
        tech2: 'Trace impurity analysis technology',
        tech3: 'Multi-component simultaneous analysis technology',
        tech4: 'Automatic calibration system',
        tech5: 'Intelligent data processing algorithms',
        description3: 'These technologies enable our products to provide higher accuracy and more reliable analysis results, meeting customers\' most stringent requirements.',
        visualTitle: 'Core Technologies',
        visualSubtitle: 'Innovation-driven, technology-leading'
      },
      detectionSection: {
        title: 'Detection Technology',
        description1: 'FICUS detection technology is the core of our products. We have developed multiple high-performance detectors suitable for different gas analysis needs.',
        description2: 'Our main detection technologies include:',
        hdd: 'High-frequency Discharge Detector (HDD): Suitable for detection of trace impurities in high-purity gases, with sensitivity up to ppb level',
        tcd: 'Thermal Conductivity Detector (TCD): Widely used for analysis of various gas components, stable and reliable',
        fid: 'Flame Ionization Detector (FID): Suitable for high-sensitivity detection of organic compounds',
        pdd: 'Pulsed Discharge Detector (PDD): Provides wide linear range and high sensitivity, suitable for various gas analyses',
        ecd: 'Electrochemical Detector (ECD): Has extremely high selectivity and sensitivity for specific gases',
        description3: 'We select the most suitable detection technology based on customers\' specific needs to ensure accuracy and reliability of analysis results.'
      },
      softwareSection: {
        title: 'Software & Data Analysis',
        description1: 'FICUS has developed advanced analysis software that provides users with intuitive operating interfaces and powerful data processing capabilities. Our software not only controls equipment operation but also provides comprehensive data analysis and reporting functions.',
        description2: 'Our software features include:',
        feature1: 'User-friendly graphical interface',
        feature2: 'Real-time data display and processing',
        feature3: 'Automatic peak identification and quantitative analysis',
        feature4: 'Multiple data export formats',
        feature5: 'Custom report generation',
        feature6: 'Remote access and control',
        feature7: 'Secure data storage and backup',
        description3: 'Our software is continuously updated and optimized to ensure users get the best user experience and analysis results.'
      },
      innovationSection: {
        title: 'Innovation & R&D',
        description1: 'FICUS attaches great importance to technological innovation and R&D investment. Our R&D team continuously explores new technologies and methods to improve product performance and user experience.',
        description2: 'Our R&D focus includes:',
        focus1: 'Improving detection sensitivity and accuracy',
        focus2: 'Expanding analysis range and application areas',
        focus3: 'Simplifying operation processes and improving user experience',
        focus4: 'Enhancing data processing and analysis capabilities',
        focus5: 'Developing new detection technologies and methods',
        description3: 'We work closely with research institutions and industry partners to jointly promote the development and innovation of gas analysis technology.'
      },
      comparisonSection: {
        title: 'Technology Comparison',
        headers: {
          technology: 'Detection Technology',
          sensitivity: 'Sensitivity',
          range: 'Linear Range',
          selectivity: 'Selectivity',
          application: 'Main Applications'
        },
        hdd: {
          name: 'High-frequency Discharge Detector (HDD)',
          sensitivity: 'ppb level',
          range: '10⁵',
          selectivity: 'High',
          application: 'High-purity gas analysis'
        },
        tcd: {
          name: 'Thermal Conductivity Detector (TCD)',
          sensitivity: 'ppm level',
          range: '10⁴',
          selectivity: 'Medium',
          application: 'General gas analysis'
        },
        fid: {
          name: 'Flame Ionization Detector (FID)',
          sensitivity: 'ppb level',
          range: '10⁷',
          selectivity: 'High',
          application: 'Organic compound analysis'
        },
        pdd: {
          name: 'Pulsed Discharge Detector (PDD)',
          sensitivity: 'ppb level',
          range: '10⁶',
          selectivity: 'High',
          application: 'Multi-component gas analysis'
        },
        ecd: {
          name: 'Electrochemical Detector (ECD)',
          sensitivity: 'ppt level',
          range: '10³',
          selectivity: 'Very High',
          application: 'Specific gas detection'
        }
      },
      patentsSection: {
        title: 'Patents & Intellectual Property',
        description: 'FICUS attaches great importance to intellectual property protection and has multiple gas analysis technology patents, which are important guarantees for our technological innovation and market competitiveness.',
        detection: {
          title: 'Detection Technology Patents',
          description: 'Including multiple patents such as high-frequency discharge detectors and pulsed discharge technology, improving detection accuracy and reliability.'
        },
        dataProcessing: {
          title: 'Data Processing Patents',
          description: 'Including patents for intelligent algorithms and automatic calibration systems, improving data processing efficiency and accuracy.'
        },
        systemIntegration: {
          title: 'System Integration Patents',
          description: 'Including patents for modular design and automated control, improving system performance and user experience.'
        }
      },
      ctaSection: {
        title: 'Want to Learn More About Our Technology?',
        subtitle: 'Contact our technical experts for more detailed information and application recommendations about FICUS technology.',
        contact: 'Contact Us'
      }
    },
    // Footer
    footer: {
      description: 'FICUS has been focusing on gas analysis technology for over 50 years, providing professional analytical solutions to customers worldwide.',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      address: 'Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai',
      phone: 'Phone: +86 21 1234 5678',
      email: 'Email: info@ficus.com',
      copyright: '© 2024 FICUS. All rights reserved.'
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

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
