export const siteConfig = {
  name: "이혜원 (Lee Hye-won)",
  title: "사용자의 불편함을 재미있는 경험으로 바꾸는 풀스택 개발자",
  description: "이혜원 - Full-Stack Developer Portfolio",
  accentColor: "#1d4ed8",
  social: {
    email: "ih148199@gmail.com",
    github: "https://github.com/ih148199-art",
  },
  aboutMe:
    "책임감으로 팀을 이끌고, 확실한 성과로 증명하는 풀스택 개발자 이혜원입니다. 대학가별 상이한 분리수거 규칙이라는 사회적 문제를 해결하기 위해 프로젝트 ‘EcoChaser’를 기획·개발했으며, 부조장으로서 팀 워크플로우를 주도하고 캡스톤 디자인 경진대회 우수상(2위) 및 현장 투표 1위(총점 80점)를 달성했습니다. 프론트엔드 UI/UX 설계부터 Cloudflare 기반 Serverless Full-stack(Pages, Functions, D1) 인프라 구축까지 웹 서비스 전 과정을 주도적으로 수행하며, 운영 효율을 고려한 데이터 관리 및 Admin 시스템 구축에 강점이 있습니다.",
  skills: [
    "#Problem_Solver",
    "#Full_Stack",
    "#Cloudflare_D1",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Node.js",
    "Express",
    "Cloudflare Pages",
    "Cloudflare Functions",
    "Cloudflare D1 (SQLite)",
    "Git",
    "GitHub",
    "Figma",
    "Notion",
    "Discord",
    "AI & Tools: ChatGPT",
    "AI & Tools: Notion AI",
    "AI & Tools: Midjourney",
  ],
  projects: [
    {
      name: "EcoChaser",
      tagline:
        "대학가별 상이한 분리수거 규칙을 러너형 게임으로 재미있게 익히는, 유학생·신입생 맞춤형 환경 교육 웹 서비스",
      description:
        "지역마다 다른 복잡한 분리수거 규칙을 누구나 쉽게 익힐 수 있도록 러너형 게임(Runner Game) 형식을 도입한 교육 서비스입니다. 사용자는 실시간으로 질문을 보고 올바른 쓰레기통을 찾아 이동하며 점수를 획득합니다. Cloudflare의 Full-stack Serverless 환경(Pages, Functions, D1)을 구축해 인프라 관리 비용을 최소화하면서도 실시간 랭킹 시스템을 안정적으로 구현했으며, 외국인 사용자를 위해 텍스트를 최소화한 아이콘 중심 UI와 관리자(Admin) 시스템을 도입해 운영 효율을 높였습니다.",
      link: "https://eco-chaser.pages.dev/",
      github: "https://github.com/ih148199-art/Eco_Chaser",
      skills: [
        "Cloudflare Pages",
        "Cloudflare Functions",
        "Cloudflare D1",
        "HTML/CSS/JS",
        "Node.js",
        "Express",
        "Figma",
        "Git/GitHub",
      ],
      contributions: [
        {
          title: "Web Full-Stack & Admin 개발 (게임 화면 제외)",
          description:
            "프론트엔드 UI/UX 설계부터 Cloudflare Functions API·D1 DB 설계까지 웹 서비스 전반을 책임지고 구현했습니다. 웹 랭킹 대시보드/랜딩 페이지/운영 화면 중심으로 반응형 UI와 데이터 연동을 구축했습니다.",
        },
        {
          title: "UI/UX Lead (아이콘 중심 인터페이스)",
          description:
            "유학생/신입생 사용자를 고려해 텍스트를 최소화하고 아이콘 기반으로 정보 전달을 강화했습니다. 서비스 흐름(가이드 → 플레이 → 결과/오답노트)이 끊기지 않도록 화면 전환과 피드백을 설계했습니다.",
        },
        {
          title: "Serverless DB·API 설계 및 운영 도구(Admin) 구축",
          description:
            "Cloudflare D1(SQLite)로 지역별/개인별 랭킹 데이터를 경량 구조로 설계하고, Node.js/Express 기반 REST API(랭킹 조회, 점수 갱신 Upsert, 오답노트 저장)를 구현했습니다. 부적절한 닉네임을 실시간으로 삭제할 수 있는 관리자 전용 대시보드와 Hard Delete API를 연결해 운영 대응 속도를 개선했습니다.",
        },
        {
          title: "협업·문서화·AI 활용",
          description:
            "Git/GitHub로 이슈/PR 기반 협업을 진행하고 Figma로 화면 설계를 공유했습니다. 반복되는 문장 정리/요약, 데이터 스키마 설명, API 명세 초안 작성 등에 AI 도구를 활용해 속도와 품질을 함께 끌어올렸습니다.",
        },
      ],
      gallery: [
        {
          src: "/images/projects/ecochaser/%EC%BA%A1%EC%8A%A4%ED%86%A4%20%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C%20%EC%9A%B0%EC%88%98%EC%83%81.jpg",
          alt: "경진대회 상장",
          caption: "경진대회 상장",
        },
        {
          src: "/images/projects/ecochaser/%EC%BA%A1%EC%8A%A4%ED%86%A4%20%ED%98%84%EC%9E%A5%20%EA%B2%B0%EA%B3%BC%201.jpg",
          alt: "실시간 투표 결과 데이터",
          caption: "실시간 투표 결과 데이터",
        },
        {
          src: "/images/projects/ecochaser/%EC%BA%A1%EC%8A%A4%ED%86%A4%20%ED%98%84%EC%9E%A5%20%EA%B2%B0%EA%B3%BC%202.jpg",
          alt: "실시간 투표 결과 데이터 (2일차)",
          caption: "실시간 투표 결과 데이터 (2일차)",
        },
      ],
      troubleshooting: {
        title: "Technical Troubleshooting",
        problem:
          "게임 결과가 실시간으로 누적되는 과정에서 랭킹이 즉시 갱신되지 않는 동기화 문제가 있었고, 개방형 서비스 특성상 욕설 닉네임 등 악성 데이터가 랭킹 보드에 노출될 위험이 있었습니다.",
        analysis:
          "단순 INSERT 방식은 사용자 최고 점수 갱신(Update) 로직이 복잡해지고 랭킹 산출이 느려질 수 있었습니다. 또한 DB에 직접 접근해 악성 데이터를 삭제하는 방식은 대응 속도가 느려 운영상 비효율적이었습니다.",
        solution:
          "첫째, 기존 점수와 비교해 더 높은 경우에만 갱신되는 Upsert 로직으로 점수 저장을 최적화했습니다. 둘째, 관리자 전용 웹 대시보드(Admin Page)를 별도로 개발하고, UI에서 문제 데이터를 확인 후 버튼 클릭으로 영구 삭제(Hard Delete)할 수 있도록 API를 연결했습니다.",
        result:
          "오차 없는 실시간 랭킹 시스템을 완성했고, 악성 데이터 유입 시 즉각 대응이 가능해져 서비스의 건전성과 운영 효율성을 모두 확보했습니다.",
      },
      techDetails: [
        {
          title: "Cloudflare Pages",
          description:
            "단순 배포를 넘어 고성능 Edge Runtime 환경에서 Pages와 Functions를 연동해 Full-stack 파이프라인을 구축하고, 서버 유지보수 비용 0원에 가까운 운영 구조를 달성했습니다.",
        },
        {
          title: "Cloudflare Functions",
          description:
            "Edge Runtime 기반 Serverless API로 핵심 비즈니스 로직(랭킹/오답 노트 등)을 분리해 구현하고, 트래픽 증가에도 안정적인 응답을 제공하도록 구성했습니다.",
        },
        {
          title: "Cloudflare D1",
          description:
            "SQLite 기반 Edge DB(D1)를 활용해 분리수거 데이터와 실시간 랭킹 시스템을 위한 데이터 모델링을 수행하고, 지연 시간을 최소화하는 방향으로 쿼리/인덱싱을 최적화했습니다.",
        },
        {
          title: "HTML/CSS/JavaScript",
          description:
            "텍스트 중심 정보를 직관적인 게임 UI로 전환하고, 사용자 흐름(가이드 → 플레이 → 결과)을 자연스럽게 이어지도록 구현했습니다.",
        },
        {
          title: "Node.js + Express",
          description:
            "서버리스 환경에 최적화된 Express 스타일의 라우팅/미들웨어 구조를 설계해 API 응답의 안정성을 확보하고, 엔드포인트를 명확히 분리해 유지보수성을 향상했습니다.",
        },
      ],
    },
  ],
  experience: [
    {
      company: "EcoChaser (캡스톤 디자인)",
      title: "캡스톤 경진대회",
      dateRange: "2025.10 - 2025.11 (2개월) / 3인 프로젝트",
      bullets: [
        "Cloudflare Pages·Functions·D1 기반 Full-stack Serverless 아키텍처로 환경 교육 웹 서비스 구축",
        "실시간 랭킹/오답노트/관리자(Admin) 운영 기능 구현 및 데이터 정합성 확보(Upsert + Hard Delete)",
        "캡스톤 디자인 경진대회 우수상(2위) & 현장 투표 1위(총점 80점) 달성",
      ],
    },
  ],
  education: [
    {
      school: "인천재능대학교",
      degree: "컴퓨터 소프트웨어학과",
      dateRange: "2023 - 2026",
      achievements: [
        "SW-AI 기반 캡스톤 디자인 경진대회 우수상(2등) 수상",
        "문제 해결·실행·협업 역량을 바탕으로 팀 프로젝트를 완성하고 결과물을 발표",
      ],
    },
  ],
};
