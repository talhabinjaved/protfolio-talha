// Skills Data
const skillsData = {
    languages: [
        'Python',
        'JavaScript',
        'TypeScript',
        'React',
        'Flask',
        'FastAPI',
        'Django',
        'GraphQL'
    ],
    aiTools: [
        'OpenAI',
        'LangChain',
        'ElevenLabs',
        'n8n',
        'RAG Pipelines',
        'Vector DBs',
        'Pandas',
        'Databricks'
    ],
    cloudDevops: [
        'Azure',
        'AWS',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Git',
        'Azure Functions',
        'Azure Pipelines'
    ]
};

// Experience Data
const experienceData = [
    {
        title: 'Full-Stack Developer (Contract)',
        company: 'Origen',
        date: 'Sep 2022 - Present',
        responsibilities: [
            'Architected real-time data APIs with Azure Functions & Flask, serving 100K+ requests/day',
            'Integrated Azure Data Explorer with geospatial dashboards on Azure Maps, cutting decision latency 30%',
            'Built multilingual AI document assistant (Python, LangChain, GPT-4) reducing lookup time 70%',
            'Prototyped and deployed voice-enabled AI agent using ElevenLabs text-to-speech',
            'Fine-tuned vector-search pipelines (FAISS/ChromaDB) for sub-second semantic retrieval across 1M+ documents',
            'Automated CI/CD with Azure Pipelines & Docker, halving release effort and boosting reliability',
            'Led deployments to 5 enterprise clients, adding ≈ QAR 5M in revenue'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Bayt',
        date: 'Jan 2022 - Aug 2023',
        responsibilities: [
            'Developed RESTful APIs and React components for automotive portal with 3M+ monthly users',
            'Implemented high-performance search (Thinking Sphinx), cutting query latency 40%',
            'Delivered Electric Cars module end-to-end, expanding catalog 15%',
            'Containerized services with Docker and enforced automated testing to boost deployment rate'
        ]
    },
    {
        title: 'Front-End Developer',
        company: 'Techverx',
        date: 'Jan 2020 - Dec 2021',
        responsibilities: [
            'Created responsive React/Next.js interfaces with TypeScript & Tailwind, raising engagement 25%',
            'Optimized data flow with GraphQL (Apollo), reducing load times significantly',
            'Collaborated on cashless parking workflows, enabling automated payments'
        ]
    }
];

// Projects Data
const projectsData = [
    {
        title: 'Flow Platform',
        category: 'web',
        tools: ['Python', 'Flask', 'Pandas', 'Azure Cloud', 'Azure Functions', 'Databricks', 'Azure Pipelines', 'Azure Maps'],
        description: 'A real-time crowd management solution providing data on crowd levels at various points of interest (POIs) across a map.',
        impact: [
            'Successfully deployed for 5 customers',
            'Generated 5 million QAR in revenue',
            'Enabled real-time visualization with detailed demographic insights'
        ]
    },
    {
        title: 'AQMS',
        category: 'ai',
        tools: ['Python', 'Flask', 'Pandas', 'JavaScript', 'Azure Maps', 'Chart.js', 'Azure Cloud'],
        description: 'An air quality monitoring system used during the FIFA World Cup 2022 in Qatar to provide insights for safety.',
        impact: [
            'Improved air quality insights and safety for players and visitors',
            'Implemented predictive forecasting',
            'Monitored air quality across Qatar stadiums and surrounding areas'
        ]
    },
    {
        title: 'Origen AI Assistant',
        category: 'ai',
        tools: ['Python', 'Flask', 'MongoDB', 'LangChain', 'FAISS/ChromaDB', 'OpenAI API', 'Azure OpenAI', 'IMAP', 'SMTP'],
        description: 'Built a secure, multilingual AI-powered document assistant with Retrieval-Augmented Generation (RAG) for document search and email thread summarization.',
        impact: [
            'Delivered production-grade platform for document intelligence',
            'Streamlined communication through automatic email thread summarization',
            'Implemented multilingual support and AI-powered question answering'
        ]
    },
    {
        title: 'YALLAMOTOR',
        category: 'web',
        tools: ['Ruby on Rails', 'React'],
        description: 'An automotive portal in the Middle East offering news, reviews, and price insights for new and used cars.',
        impact: [
            'Improved platform performance and user experience',
            'Enhanced electric vehicle coverage',
            'Developed APIs for mobile applications'
        ]
    }
]; 