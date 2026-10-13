/**
 * QUINT company website — lightweight i18n and navigation.
 * Static-site friendly: no build step, remote script, cookies, or tracking.
 * Content can be edited directly in the translations object.
 */
const translations = {
  ko: {
    skip: '본문 바로가기', navSolution: '솔루션', navTechnology: '기술', navApplications: '적용 분야', navCompany: '회사 소개', navContact: '문의하기',
    heroTitle: '안전을 위한 판단은,<br><em>현장에서 시작됩니다.</em>',
    heroDescription: '퀸트는 기존 CCTV 인프라에 온디바이스 AI를 연결해 위험 상황을 현장에서 분석하고, 운영자의 빠른 대응을 돕는 안전관리 기술을 개발합니다.',
    heroPrimary: '솔루션 알아보기', heroSecondary: '기술 구조 살펴보기', heroDetail: '기술은 현장에 가깝게. 데이터는 필요한 곳에.',
    visualCaption: '현장 CCTV 분석 구조', visualBottom: '로컬 AI 처리 구조', visualEvent: '이상 상황 신호', visualEventSub: '운영자 확인 · 대응 지원',
    strip1Title: '기존 인프라 활용', strip1Desc: 'CCTV 연계 설계', strip2Title: '현장 중심 처리', strip2Desc: '온디바이스 AI 분석', strip3Title: '개인정보 고려', strip3Desc: '로컬 처리 중심 아키텍처',
    solutionTitle: '기존 CCTV에 더하는<br><em>한 단계 진화한 안전관리.</em>', solutionIntro: '별도의 복잡한 영상 관제 체계를 새로 만드는 대신, 현장의 카메라와 엣지 AI를 연결해 안전관리의 실효성을 높이는 방향을 제안합니다.',
    solutionCard1Tag: '위험상황 인지', solutionCard1Title: '영상 속 위험 신호를 운영 가능한 정보로', solutionCard1Desc: '컴퓨터 비전 기반 이벤트 분석을 통해 관제 담당자가 확인하고 조치할 수 있는 안전 정보를 제공합니다.',
    solutionCard2Tag: '현장 중심 분석', solutionCard2Title: '데이터 처리의 중심을 현장으로', solutionCard2Desc: '엣지 장치에서 AI 추론을 수행하는 로컬 우선 구조로 네트워크 의존과 외부 영상 전송 부담을 줄이도록 설계합니다.',
    solutionCard3Tag: '이벤트 기반 대응', solutionCard3Title: '발견에서 확인, 대응까지', solutionCard3Desc: '감지 결과를 운영 흐름과 연결해 관제 담당자의 상황 인지와 조치 결정을 지원합니다.',
    techTitle: '더 복잡하게가 아니라,<br><em>더 현장에 가깝게.</em>', techIntro: '영상 입력부터 AI 분석과 이벤트 전달까지, 필요한 정보가 현장 중심으로 흐르도록 설계하는 것이 퀸트의 접근 방식입니다.',
    techPoint1: '기존 CCTV 영상 연계', techPoint2: '현장 장치 기반 AI 추론', techPoint3: '위험 이벤트 전달 및 확인 지원',
    arch1: 'CCTV 영상', arch2: 'Edge AI 분석', arch3: '위험 이벤트', arch4: '운영자 확인', archFootnote: '시스템 개념도이며 실제 구축 구성은 현장 환경에 따라 달라질 수 있습니다.',
    applicationsTitle: '다양한 공간, 하나의 목표.<br><em>더 안전한 현장.</em>', applicationsIntro: '운영 환경과 현장 요구사항을 고려해 적용 방식을 설계합니다.',
    app1Title: '공공·다중이용시설', app1Desc: '공간 이용자의 안전과 운영 효율을 함께 고려한 지능형 CCTV 안전관리',
    app2Title: '산업·작업 현장', app2Desc: '현장 특성에 맞춘 위험 신호 인지 및 관리자 대응 지원',
    app3Title: '시설·보안 운영', app3Desc: '기존 관제 환경과 연계한 상황 인지 및 이벤트 관리 체계 구축',
    companyTitle: '기술의 가치는<br><em>현장에서 완성됩니다.</em>', companyLead: '주식회사 퀸트(QUINT)는 컴퓨터 비전과 온디바이스 AI를 바탕으로 현장에서 실제로 작동하는 지능형 시스템을 연구하고 개발합니다.', companySub: '안전관리부터 다양한 산업 환경까지, 기술과 운영 현장을 연결하는 실용적인 해법을 추구합니다.', aboutFounded: '설립', aboutBase: '대한민국 · 광주', aboutFocus: '주요 연구개발 분야',
    contactTitle: '안전한 현장을 만드는 일,<br><em>퀸트와 함께 시작하세요.</em>', contactIntro: '솔루션 도입, 현장 실증, 기술 협력에 대해 이야기 나눌 준비가 되어 있습니다.', contactButton: '이메일로 문의하기', contactPhone: '대표전화',
    footerTagline: '현장에서 작동하는 지능형 기술을 만듭니다.', footerCompany: '주식회사 퀸트 · 대표이사 배성훈', footerAddress: '광주광역시 북구 첨단과기로 333, 광주테크노파크 사업화4동 208호', footerBusiness: '설립일 2023년 4월 26일', backToTop: '맨 위로',
    navResearch: "연구개발",
    heroDetail: "Intelligence at the Edge. Safety in the Real World.",
    portfolioTitle: "AI를 연구하는 데서 그치지 않고,<br><em>현장에 적용합니다.</em>",
    portfolioIntro: "안전관리에서 산업용 비전 AI, 스마트 출입인증까지. 퀸트는 현장 데이터를 실제 의사결정과 동작으로 연결합니다.",
    portfolioFlag: "핵심 솔루션",
    portfolioSafetyTitle: "기존 CCTV에서 시작하는<br>현장 안전 인텔리전스",
    portfolioSafetyDesc: "ON-SIGHT는 CCTV 영상 분석과 이벤트 인지, 디지털트윈 기반 시각화를 연결해 시설 운영자의 상황 확인과 대응을 지원합니다.",
    portfolioScreenCaption: "퀸트 회사소개서에 수록된 ON-SIGHT 시스템 화면",
    portfolioVisionTitle: "On-Device AI 영상분석",
    portfolioVisionDesc: "네트워크 의존도를 고려한 로컬 추론과 엣지 장치 기반 영상 분석 시스템을 설계·통합합니다.",
    portfolioAccessTitle: "스마트 출입통제",
    portfolioAccessDesc: "얼굴 검출·인증과 위조 방지, 임베디드 제어를 연결하는 출입인증 기술을 연구개발합니다.",
    portfolioIndustryTitle: "산업용 AI · 비전검사",
    portfolioIndustryDesc: "제조·검사 공정의 결함 분석과 데이터 연계, 로봇 제어를 포함하는 맞춤형 산업 AI를 개발합니다.",
    capabilitiesTitle: "현장에 필요한<br><em>기술의 깊이.</em>",
    capabilitiesIntro: "AI 알고리즘부터 장치와 시스템, 실제 구동 환경까지. 분리된 기술을 연결하는 통합 개발 역량을 갖춥니다.",
    capability1: "현장 하드웨어에서 AI를 추론해 처리 지연과 네트워크 의존성을 고려한 시스템 구현",
    capability2: "영상에서 객체·상태·결함을 분석하고 현장 운영에 필요한 정보를 도출",
    capability3: "AI 모델, 카메라·센서, 임베디드 보드를 통합하는 하드웨어·소프트웨어 엔지니어링",
    capability4: "현장 공간과 이벤트를 디지털 환경에서 연결해 상황 파악과 운영 의사결정을 지원",
    capability5: "비전 AI의 인식 결과를 로봇 동작·제어와 연결하는 산업 자동화 기술",
    researchTitle: "연구실에서 현장까지.<br><em>끝까지 검증하는 개발.</em>",
    researchIntro: "퀸트는 연구개발전담부서를 기반으로 AI 모델 개발, 하드웨어·소프트웨어 통합, 실증 및 운영 개선을 이어갑니다.",
    research1Title: "현장 분석",
    research1Desc: "문제·운영 환경·요구사항 정의",
    research2Title: "데이터 설계",
    research2Desc: "수집·가공·검증 체계 수립",
    research3Title: "AI·시스템 개발",
    research3Desc: "모델 최적화 및 장치·제어 연계",
    research4Title: "현장 실증",
    research4Desc: "설치·테스트·피드백 반영",
    research5Title: "운영 고도화",
    research5Desc: "재학습·기능 개선·확장 검토",
    researchFootnote: "기술개발 단계 및 수행 범위는 프로젝트 특성에 따라 조정됩니다.",
    researchCTA: "기술 협력 문의",
    footerBusiness: "설립일 2023년 4월 26일",
    pageDescription: '주식회사 퀸트(QUINT) — 공공기관 CCTV 기반 AI 안전관리 시스템과 온디바이스 AI 기술을 개발합니다.',
  },
  en: {
    skip: 'Skip to content', navSolution: 'Solutions', navTechnology: 'Technology', navApplications: 'Applications', navCompany: 'About us', navContact: 'Contact',
    heroTitle: 'Safety intelligence,<br><em>right where it matters.</em>',
    heroDescription: 'QUINT develops on-device AI safety technology that connects with existing CCTV infrastructure, analyzes potential risks at the edge, and helps operators make timely decisions.',
    heroPrimary: 'Explore our solution', heroSecondary: 'How it works', heroDetail: 'Intelligence closer to the site. Data where it belongs.',
    visualCaption: 'On-site CCTV analysis concept', visualBottom: 'Local AI processing architecture', visualEvent: 'Potential risk signal', visualEventSub: 'Operator review · Response support',
    strip1Title: 'Build on what exists', strip1Desc: 'Designed for CCTV integration', strip2Title: 'Process on site', strip2Desc: 'On-device AI inference', strip3Title: 'Privacy considered', strip3Desc: 'Local-first architecture',
    solutionTitle: 'A smarter layer for<br><em>the cameras you already have.</em>', solutionIntro: 'Rather than rebuilding a complex monitoring environment, we connect existing camera systems with edge AI to support more effective safety operations.',
    solutionCard1Tag: 'Recognize risk signals', solutionCard1Title: 'From visual signals to useful safety information', solutionCard1Desc: 'Computer vision helps translate video events into actionable information for monitoring and on-site decision-making.',
    solutionCard2Tag: 'On-site intelligence', solutionCard2Title: 'Bring AI processing closer to the source', solutionCard2Desc: 'Our local-first approach performs AI inference on edge devices, designed to reduce network dependence and the need to transmit video externally.',
    solutionCard3Tag: 'Event-based response', solutionCard3Title: 'From detection to informed action', solutionCard3Desc: 'We connect recognized events with operational workflows to support situational awareness and response decisions.',
    techTitle: 'Not more complexity.<br><em>More intelligence at the edge.</em>', techIntro: 'From video input to AI analysis and event delivery, QUINT focuses on keeping useful information close to where it is needed.',
    techPoint1: 'Integration with existing CCTV feeds', techPoint2: 'AI inference on edge devices', techPoint3: 'Safety event delivery and review support',
    arch1: 'CCTV feeds', arch2: 'Edge AI', arch3: 'Risk events', arch4: 'Operator review', archFootnote: 'Conceptual architecture. Actual deployment may vary depending on the site environment.',
    applicationsTitle: 'Different environments.<br><em>One safer future.</em>', applicationsIntro: 'Implementation is tailored to each site’s operational context and requirements.',
    app1Title: 'Public & shared spaces', app1Desc: 'Intelligent CCTV safety management for public spaces and facilities used by many people.',
    app2Title: 'Industrial worksites', app2Desc: 'Site-aware risk signals and decision support for supervisors in industrial environments.',
    app3Title: 'Facility operations', app3Desc: 'Situational awareness and event management integrated with existing monitoring operations.',
    companyTitle: 'Technology proves its value<br><em>in the real world.</em>', companyLead: 'QUINT is a South Korean technology company developing practical intelligent systems grounded in computer vision and on-device AI.', companySub: 'From safety management to broader industrial applications, we build solutions that connect advanced technology with real-world operations.', aboutFounded: 'Founded', aboutBase: 'Gwangju, South Korea', aboutFocus: 'R&D focus',
    contactTitle: 'Let’s make everyday spaces<br><em>safer, together.</em>', contactIntro: 'Connect with us to discuss deployments, pilot projects, and technology partnerships.', contactButton: 'Email our team', contactPhone: 'Phone',
    footerTagline: 'Intelligent technology built for the real world.', footerCompany: 'QUINT Co., Ltd. · CEO Sunghun Bae', footerAddress: 'Room 208, Commercialization Building 4, Gwangju Technopark, 333 Cheomdangwagi-ro, Buk-gu, Gwangju, South Korea', footerBusiness: 'Founded April 26, 2023', backToTop: 'Back to top',
    navResearch: "R&D",
    heroDetail: "Intelligence at the Edge. Safety in the Real World.",
    portfolioTitle: "Engineered for the field.<br><em>Built around real-world needs.</em>",
    portfolioIntro: "From public safety to industrial vision and secure access, QUINT connects AI research with operational decisions and real-world action.",
    portfolioFlag: "FLAGSHIP SOLUTION",
    portfolioSafetyTitle: "Safety intelligence<br>for existing CCTV infrastructure",
    portfolioSafetyDesc: "ON-SIGHT combines CCTV-based video analysis, event recognition and digital-twin visualization to help facility teams understand and respond to incidents.",
    portfolioScreenCaption: "ON-SIGHT product interface, from the QUINT company profile",
    portfolioVisionTitle: "On-Device Video Intelligence",
    portfolioVisionDesc: "Local inference and edge-device integration designed with deployment environments, network availability and data handling in mind.",
    portfolioAccessTitle: "Smart Access Control",
    portfolioAccessDesc: "We develop embedded access technologies that bring together face detection, authentication, anti-spoofing and device control.",
    portfolioIndustryTitle: "Industrial AI & Machine Vision",
    portfolioIndustryDesc: "Application-specific AI for visual inspection, defect analysis, industrial data integration and robotic control.",
    capabilitiesTitle: "Deep technical expertise.<br><em>Grounded in deployment.</em>",
    capabilitiesIntro: "From AI models to embedded hardware and operational systems, we bridge the disciplines needed to deliver intelligent technology on site.",
    capability1: "Bringing inference close to sensors and operations, with attention to latency and network dependence.",
    capability2: "Turning images and video into insights on objects, conditions and quality for field operations.",
    capability3: "Integrating models, cameras, sensors and embedded computing into purpose-built systems.",
    capability4: "Connecting spatial context and operational events to support monitoring and decision-making.",
    capability5: "Connecting visual perception with manipulation, motion control and industrial automation.",
    researchTitle: "From research to deployment.<br><em>Validated in the field.</em>",
    researchIntro: "With a dedicated R&D function, QUINT develops and optimizes AI models, integrates hardware and software, and iterates through field testing.",
    research1Title: "Site discovery",
    research1Desc: "Define operational context and requirements",
    research2Title: "Data engineering",
    research2Desc: "Design collection, preparation and validation",
    research3Title: "AI & system build",
    research3Desc: "Optimize models and integrate device control",
    research4Title: "Field validation",
    research4Desc: "Install, test and incorporate feedback",
    research5Title: "Continuous improvement",
    research5Desc: "Refine capabilities and assess scale-up",
    researchFootnote: "Development phases and deliverables are adapted to each project.",
    researchCTA: "Discuss an R&D partnership",
    footerBusiness: "Founded April 26, 2023",
    pageDescription: 'QUINT develops on-device AI and CCTV-based safety management technology for public facilities and industrial environments.',
  },
};

const langButtons = document.querySelectorAll('.lang-button');
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(lang) {
  if (!Object.prototype.hasOwnProperty.call(translations, lang)) lang = 'ko';
  const strings = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(strings, key)) element.textContent = strings[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.dataset.i18nHtml;
    if (Object.prototype.hasOwnProperty.call(strings, key)) element.innerHTML = strings[key];
  });
  langButtons.forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (metaDescription) metaDescription.setAttribute('content', strings.pageDescription);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogDescription) ogDescription.setAttribute('content', strings.pageDescription);
  if (ogLocale) ogLocale.setAttribute('content', lang === 'ko' ? 'ko_KR' : 'en_US');
  document.title = lang === 'ko' ? 'QUINT | 현장에서 시작되는 안전 인텔리전스' : 'QUINT | On-Device AI Safety Intelligence';
  const navToggle = document.querySelector('.menu-toggle');
  if (navToggle) navToggle.setAttribute('aria-label', lang === 'ko' ? (navToggle.getAttribute('aria-expanded') === 'true' ? '메뉴 닫기' : '메뉴 열기') : (navToggle.getAttribute('aria-expanded') === 'true' ? 'Close navigation' : 'Open navigation'));
  try { localStorage.setItem('quint-language', lang); } catch (_) { /* Browser storage may be disabled. */ }
}

let initialLanguage = 'ko';
try {
  const saved = localStorage.getItem('quint-language');
  if (saved === 'ko' || saved === 'en') initialLanguage = saved;
} catch (_) { /* Optional preference. */ }
try {
  const requested = new URLSearchParams(window.location.search).get('lang');
  if (requested === 'ko' || requested === 'en') initialLanguage = requested;
} catch (_) { /* URL query parameters may be unavailable in some previews. */ }
setLanguage(initialLanguage);
langButtons.forEach(button => button.addEventListener('click', () => {
  const lang = button.dataset.lang;
  setLanguage(lang);
  try {
    const target = new URL(window.location.href);
    target.searchParams.set('lang', lang);
    history.replaceState(null, '', target.pathname + target.search + target.hash);
  } catch (_) { /* Previews may restrict history changes. */ }
}));

const menuToggle = document.querySelector('.menu-toggle');
function updateMenuLabel(open) {
  menuToggle.setAttribute('aria-label', (document.documentElement.lang === 'ko')
    ? (open ? '메뉴 닫기' : '메뉴 열기')
    : (open ? 'Close navigation' : 'Open navigation'));
}
const nav = document.getElementById('primary-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  updateMenuLabel(false);
  nav.removeAttribute('data-open');
}
menuToggle.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  updateMenuLabel(willOpen);
  if (willOpen) nav.setAttribute('data-open', 'true');
  else nav.removeAttribute('data-open');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 850) closeMenu(); });

updateMenuLabel(false);
document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
