import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  itriad,
  confidential,
  solarsystem,
  threejs,
  am,
  ant,
  bootstrap,
  organo,
} from "../../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const navLinksBr = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const heroText = [
  {
    greetings: "Hi! I'm ",
    whatIDo_1: "I develop 3D visuals, user",
    whatIDo_2: "interfaces and web apps."
  }

];
const heroTextBr = [
  {
    greetings: "Oi! Eu sou o",
    whatIDo_1: "Eu desenvolvo apps 3D, interfaces",
    whatIDo_2: "de usuário e aplicações WEB."
  }
];

const about = [
  {
    intro: "Introduction",
    overview: "Overview",
    aboutText: "I'm a skilled software developer with experience and expertise in JavaScript and frameworks like React and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-frienly solutions, that solve real-world problems. Let's work together to bring your ideas to life!"
  }
];

const aboutBr = [
  {
    intro: "Introdução",
    overview: "Resumo",
    aboutText: "Sou um desenvolvedor de software habilidoso com experiência e domínio em JavaScript e frameworks como React e Three.JS. Aprendo rápido e colaboro de perto com clientes para criar soluções eficientes, escaláveis e amigáveis ao usuário, que solucionam problemas reais. Vamos trabalhar juntos e trazer suas ideais para a realidade."
  }
];

const services = [
  {
    title: "3D",
    icon: mobile,
  },
  {
    title: "Front-End",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  /* {
    name: "TypeScript",
    icon: typescript,
  }, */
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ant Design",
    icon: ant,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  /* {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
  {
    title: "I.T Analyst",
    company_name: "CIAMA",
    icon: am,
    iconBg: "#383E56",
    date: "April 2021 - August 2022",
    points: [
      "Maintaining LAN.",
      "Helpdesk to the final user and improving it to high level service with ERP and CMS.",
      "Maintaining physical and logical equipment to provide to the final user appropriate and functional work stations.",
      "Maintaining local servers (Windows and Linux).",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "iTriad",
    icon: itriad,
    iconBg: "#E6DEDD",
    date: "August 2022 - moment",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const experiencesBr = [
  {
    title: "Analista de T.I.",
    company_name: "CIAMA",
    icon: am,
    iconBg: "#383E56",
    date: "Abril de 2021 - Agosto de 2022",
    points: [
      "Manutenção de redes LAN.",
      "Helpdesk para o usuário final e melhorando este serviço para um alto nível através do uso de sistemas ERP e CMS.",
      "Manutenção de equipamentos físicos e lógicos para prover ao usuário final estações de trabalho apropriadas e funcionais.",
      "Manutenção de servidores locais (Windows e Linux).",
    ],
  },
  {
    title: "Desenvolvedor Front-End",
    company_name: "iTriad",
    icon: itriad,
    iconBg: "#E6DEDD",
    date: "Agosto de 2022 - atualmente",
    points: [
      "Desenvolvendo e mantendo aplicações WEB usando ReactJS e outras tecnologias relacionadas.",
      "Colaborando com times e profissionais multifuncionais como designer, gerentes de produtos e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementing responsive design and ensuring cross-browser compatibility. Implementando designs responsivos e assegurando compatibilidade de navegadores.",
      "Participação em revisões de código e provendo feedbacks construtivos para outros desenvolvedores.",
    ],
  }
];

const bExperiencesBr = [
  {
    what: "O que eu já fiz até agora...",
    exp: "Experiências de Trabalho"
  }
];

const bExperiences = [
  {
    what: "What i have done so far...",
    exp: "Work Experiences"
  }
];

const projects = [
  {
    name: "Organo",
    description:
      "Web-based platform that allows users to manage employees and organize teams by their skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: organo,
    source_code_link: "https://github.com/ogeid-diego/organo",
  },
  {
    name: "The Solar System",
    description:
      "Web application that simulates a 3D view of the solar system, applying geometry, physics and textures to explore and understand the planets behaviors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.JS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: solarsystem,
    source_code_link: "https://github.com/ogeid-diego/3dSolarSystem",
  },
  {
    name: "Confidential",
    description:
      "Dashboards with failure indicators and defect analysis results, of parts from a production line in real-time, integrated with an image proof marking tool.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: confidential,
    source_code_link: null,
  },
];

const projectsBr = [
  {
    name: "Organo",
    description:
      "Plataforma WEB que viabiliza usuários a gerenciar funcionários e organizar times baseados em suas habilidades.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "pink-text-gradient",
      },
    ],
    image: organo,
    source_code_link: "https://github.com/ogeid-diego/organo",
  },
  {
    name: "O Sistema Solar",
    description:
      "Aplicação WEB que simula uma visualização 3D do sistema solar, aplicando geometria, física e texturas para explorar e entender o comportamento dos planetas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "pink-text-gradient",
      },
    ],
    image: solarsystem,
    source_code_link: "https://github.com/ogeid-diego/3dSolarSystem",
  },
  {
    name: "Confidencial",
    description:
      "Dashboards com indicadores de falhas e resultados de análise de defeitos, de partes de uma linha de produçaõ em tempo real, integrada à uma ferramenta de marcação de imagem.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: confidential,
    source_code_link: null,
  },
];

const bWorks = [
  {
    p: "My Work",
    h2: "Projects",
    brief: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described and some of them count with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
  }
];

const bWorksBr = [
  {
    p: "Meu Trabalho",
    h2: "Projetos",
    brief: "Os seguintes projetos mostram minhas habilidades e experiência através de exemplos reais do meu trabalho. Cada projeto é resumidamente descrito e alguns deles contam com links para repositórios de código e demonstrações. Eles refletem minhas habilidades para resolver problemas complexos, trabalhar com diferentes tecnologias e gerenciar projetos efetivamente."
  }
];

const bContact =[
  {
    p: "Get in touch",
    h3: "Contact",
    name: "Your name",
    nameP: "What is your name?",
    email: "Your email",
    emailP: "What is your email?",
    message: "Your message",
    messageP: "What do you want to say?",
    sending: "Sending...",
    send: "Send",
    alert: "Thank you, i'll get back to you as soon as possible!"
  }
];

const bContactBr = [
  {
    p: "Fale comigo",
    h3: "Contato",
    name: "Seu nome",
    nameP: "Qual é o seu nome?",
    email: "Seu email",
    emailP: "Qual é o seu email?",
    message: "Sua mensagem",
    messageP: "O que você gostaria de dizer?",
    sending: "Enviando...",
    send: "Enviar",
    alert: "Obrigado, Retornarei seu contato já!"
  }
];

export { 
  heroText, 
  heroTextBr, 
  about, 
  aboutBr, 
  services,
  technologies, 
  experiences, 
  experiencesBr, 
  bExperiences, 
  bExperiencesBr, 
  bWorks, 
  bWorksBr, 
  projects, 
  projectsBr,
  bContact,
  bContactBr 
};