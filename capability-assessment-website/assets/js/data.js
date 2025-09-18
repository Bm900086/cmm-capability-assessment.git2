// Assessment Data Structure
const assessmentData = {
    'infrastructure': {
        title: 'Infrastructure Capability Matrix',
        description: 'Evaluate your compute, storage, network, and security infrastructure maturity',
        categories: {
            'Compute': {
                description: 'Assess your compute infrastructure capabilities and automation level',
                guidance: 'Adopting VCF for Compute offers increased automation for workload placement and dynamic resource allocation, leading to improved scalability and performance.',
                video: {
                    url: 'https://www.youtube.com/watch?v=EewYz6YUNUY',
                    title: 'Exploring VMware Cloud Foundation: VCF Compute',
                    duration: '14m 8s'
                },
                statements: [
                    { text: 'Fixed Compute Resources', phase: 'Developing', baseline: 1 },
                    { text: 'High Availability', phase: 'Developing', baseline: 1 },
                    { text: 'Automated Workload Load Balancing', phase: 'Developing', baseline: 1 },
                    { text: 'Resource Prioritization', phase: 'Established', baseline: 2 },
                    { text: 'Scalable Compute (Memory Tiering)', phase: 'Established', baseline: 2 },
                    { text: 'Hardware Acceleration (GPU/DPU)', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Storage': {
                description: 'Evaluate your storage infrastructure and data management capabilities',
                guidance: 'VCF-enabled storage offers policy-based management and flexible scaling, allowing for independent growth of compute and storage resources and simplifying data encryption and management.',
                video: {
                    url: 'https://www.youtube.com/watch?v=vfIqmHc2-0g',
                    title: 'VMware Cloud Foundation 5.0: A New Standard for Private Cloud',
                    duration: '2m 29s'
                },
                statements: [
                    { text: 'Virtualized Storage (vSAN Snapshot Manager)', phase: 'Developing', baseline: 1 },
                    { text: 'Policy Based Management', phase: 'Developing', baseline: 1 },
                    { text: 'Deduplication & Compression', phase: 'Developing', baseline: 1 },
                    { text: 'Fault Domains', phase: 'Developing', baseline: 1 },
                    { text: 'Flexible Scaling (Independent Compute and Storage)', phase: 'Established', baseline: 2 },
                    { text: 'Data at Rest Encryption', phase: 'Established', baseline: 2 },
                    { text: 'File Services (vSAN File Services)', phase: 'Optimized', baseline: 3 },
                    { text: 'Workload Encryption', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Networks': {
                description: 'Assess your network virtualization and security capabilities',
                guidance: 'Using VCF for Networks enables automated network provisioning, advanced security segmentation, and multi-site federation, leading to more resilient and agile network operations.',
                video: {
                    url: 'https://www.youtube.com/watch?v=eHVX1zVOdAA',
                    title: 'VMware Cloud Foundation - Deploy Application Virtual Networks (AVNs)',
                    duration: '3m 51s'
                },
                statements: [
                    { text: 'Virtualized Networks', phase: 'Developing', baseline: 1 },
                    { text: 'Advanced Virtualized Networking', phase: 'Developing', baseline: 1 },
                    { text: 'Shared Services Segmentation (vDefend)', phase: 'Developing', baseline: 1 },
                    { text: 'Zone Segmentation (vDefend)', phase: 'Developing', baseline: 1 },
                    { text: 'Load Balancing', phase: 'Developing', baseline: 1 },
                    { text: 'Application Segmentation', phase: 'Established', baseline: 2 },
                    { text: 'Tenant Segmentation', phase: 'Established', baseline: 2 },
                    { text: 'Stateful Services', phase: 'Established', baseline: 2 },
                    { text: 'Gateway Firewall', phase: 'Established', baseline: 2 },
                    { text: 'Multi-Tenancy (VPC)', phase: 'Established', baseline: 2 },
                    { text: 'Networking for Modern Applications (AVI WAF)', phase: 'Established', baseline: 2 },
                    { text: 'Multi-Site/ Federation', phase: 'Optimized', baseline: 3 },
                    { text: 'Global Policy Management', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Operations': {
                description: 'Evaluate your operational management and monitoring capabilities',
                guidance: 'VCF\'s integrated operations management provides a unified view for monitoring, analytics, and automation, simplifying fleet management and improving overall operational efficiency and cost control.',
                video: {
                    url: 'https://www.youtube.com/watch?v=L7EepbHCARU',
                    title: 'VMware Cloud Foundation Operations Overview',
                    duration: '1m 48s'
                },
                statements: [
                    { text: 'Monitoring (vROPs)', phase: 'Developing', baseline: 1 },
                    { text: 'Lifecycle Management', phase: 'Developing', baseline: 1 },
                    { text: 'Analytics', phase: 'Developing', baseline: 1 },
                    { text: 'Centralized Logging (vRLI)', phase: 'Established', baseline: 2 },
                    { text: 'Performance Optimization', phase: 'Established', baseline: 2 },
                    { text: 'Capacity Planning', phase: 'Established', baseline: 2 },
                    { text: 'Infrastructure Automation', phase: 'Optimized', baseline: 3 },
                    { text: 'Multi-Cloud Integration', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Consumption & Services': {
                description: 'Assess your service delivery and consumption models',
                guidance: 'Leveraging VCF for Consumption & Services streamlines the delivery of resources through integrated self-service portals and automated APIs, accelerating application deployment and lifecycle management.',
                video: {
                    url: 'https://www.youtube.com/watch?v=2JKcTuWuq2M',
                    title: 'Self-Service Private Cloud with VMware Cloud Foundation',
                    duration: '2m 5s'
                },
                statements: [
                    { text: 'Self-Service Portals (vRA)', phase: 'Developing', baseline: 1 },
                    { text: 'API-Driven Automation', phase: 'Developing', baseline: 1 },
                    { text: 'Service Catalog', phase: 'Developing', baseline: 1 },
                    { text: 'Resource Governance', phase: 'Established', baseline: 2 },
                    { text: 'Cost Management & Chargeback', phase: 'Established', baseline: 2 },
                    { text: 'Application Lifecycle Management', phase: 'Optimized', baseline: 3 },
                    { text: 'DevOps Integration', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Security Governance & Compliance': {
                description: 'Evaluate your security posture and compliance capabilities',
                guidance: 'With VCF, security is integrated into the infrastructure, enabling automated policy enforcement, centralized identity management, and streamlined auditing and compliance.',
                video: {
                    url: 'https://www.youtube.com/watch?v=tV30HfxHOEY',
                    title: 'Platform Security within VMware Cloud Foundation',
                    duration: '26m 0s'
                },
                statements: [
                    { text: 'Identity & Access Management', phase: 'Developing', baseline: 1 },
                    { text: 'Security Policies', phase: 'Developing', baseline: 1 },
                    { text: 'Compliance Reporting', phase: 'Developing', baseline: 1 },
                    { text: 'Automated Security Controls', phase: 'Established', baseline: 2 },
                    { text: 'Threat Detection & Response', phase: 'Established', baseline: 2 },
                    { text: 'Zero Trust Architecture', phase: 'Optimized', baseline: 3 },
                    { text: 'Advanced Threat Analytics', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Data Protection & Recovery': {
                description: 'Assess your data protection and disaster recovery capabilities',
                guidance: 'VCF provides integrated data protection capabilities, simplifying disaster recovery and business continuity plans and improving resilience against data loss or corruption.',
                video: {
                    url: 'https://www.youtube.com/watch?v=dC1H0vevXT0',
                    title: 'VMware Live Recovery',
                    duration: '3m 1s'
                },
                statements: [
                    { text: 'Backup & Restore', phase: 'Developing', baseline: 1 },
                    { text: 'Disaster Recovery Planning', phase: 'Developing', baseline: 1 },
                    { text: 'Data Replication', phase: 'Developing', baseline: 1 },
                    { text: 'Automated Backup Policies', phase: 'Established', baseline: 2 },
                    { text: 'Business Continuity Testing', phase: 'Established', baseline: 2 },
                    { text: 'Site Recovery Orchestration', phase: 'Optimized', baseline: 3 },
                    { text: 'Continuous Data Protection', phase: 'Optimized', baseline: 3 }
                ]
            }
        }
    },
    'operations': {
        title: 'Operations and Process Capability',
        description: 'Assess your operational maturity and process efficiency',
        categories: {
            'Operational Processes': {
                description: 'Evaluate your standardized operational processes and automation',
                guidance: 'VCF provides a framework for standardizing and automating operational processes, which can significantly reduce manual effort and improve overall efficiency.',
                video: {
                    url: 'https://www.youtube.com/watch?v=cVop3DE-Na8',
                    title: 'Boost Operational Efficiency with VMware Cloud Foundation',
                    duration: '3m 22s'
                },
                statements: [
                    { text: 'Manual Process Management', phase: 'Developing', baseline: 1 },
                    { text: 'Basic Documentation', phase: 'Developing', baseline: 1 },
                    { text: 'Standardized Procedures', phase: 'Established', baseline: 2 },
                    { text: 'Process Automation', phase: 'Established', baseline: 2 },
                    { text: 'Continuous Process Improvement', phase: 'Optimized', baseline: 3 },
                    { text: 'AI-Driven Process Optimization', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Organizational Roles': {
                description: 'Assess your team structure and role definitions',
                guidance: 'VCF helps align organizational roles by providing a unified platform for teams, fostering collaboration and ensuring clear ownership and accountability.',
                video: {
                    url: 'https://www.youtube.com/watch?v=Y1DLurrtHaA',
                    title: 'Exploring VMware Cloud Foundation: A Cloud Management Experience',
                    duration: '14m 2s'
                },
                statements: [
                    { text: 'Traditional Siloed Roles', phase: 'Developing', baseline: 1 },
                    { text: 'Basic Cross-Team Collaboration', phase: 'Developing', baseline: 1 },
                    { text: 'Defined DevOps Practices', phase: 'Established', baseline: 2 },
                    { text: 'Platform Engineering Teams', phase: 'Established', baseline: 2 },
                    { text: 'Site Reliability Engineering', phase: 'Optimized', baseline: 3 },
                    { text: 'Full Stack Engineering', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Performance Metrics': {
                description: 'Evaluate your performance measurement and KPI tracking',
                guidance: 'Integrated monitoring and analytics in VCF provide comprehensive performance metrics and insights for data-driven decision making.',
                statements: [
                    { text: 'Basic Infrastructure Metrics', phase: 'Developing', baseline: 1 },
                    { text: 'Manual Reporting', phase: 'Developing', baseline: 1 },
                    { text: 'Automated Dashboards', phase: 'Established', baseline: 2 },
                    { text: 'Business KPI Alignment', phase: 'Established', baseline: 2 },
                    { text: 'Predictive Analytics', phase: 'Optimized', baseline: 3 },
                    { text: 'AI-Driven Insights', phase: 'Optimized', baseline: 3 }
                ]
            }
        }
    },
    'strategy': {
        title: 'Cloud and App Strategy',
        description: 'Evaluate your cloud strategy and application modernization approach',
        categories: {
            'Cloud Strategy': {
                description: 'Assess your overall cloud adoption strategy and approach',
                guidance: 'A clear cloud strategy aligned with business objectives enables effective resource allocation and technology decisions.',
                statements: [
                    { text: 'Ad-hoc Cloud Usage', phase: 'Developing', baseline: 1 },
                    { text: 'Basic Cloud Governance', phase: 'Developing', baseline: 1 },
                    { text: 'Defined Multi-Cloud Strategy', phase: 'Established', baseline: 2 },
                    { text: 'Cloud-First Policies', phase: 'Established', baseline: 2 },
                    { text: 'Strategic Cloud Partnerships', phase: 'Optimized', baseline: 3 },
                    { text: 'Cloud Innovation Programs', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Application Modernization': {
                description: 'Evaluate your approach to modernizing legacy applications',
                guidance: 'Application modernization on VCF enables better scalability, security, and operational efficiency.',
                statements: [
                    { text: 'Legacy Monolithic Applications', phase: 'Developing', baseline: 1 },
                    { text: 'Basic Containerization', phase: 'Developing', baseline: 1 },
                    { text: 'Microservices Architecture', phase: 'Established', baseline: 2 },
                    { text: 'Container Orchestration', phase: 'Established', baseline: 2 },
                    { text: 'Cloud-Native Development', phase: 'Optimized', baseline: 3 },
                    { text: 'Serverless Computing', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Innovation & Agility': {
                description: 'Assess your organization\'s innovation capacity and agility',
                guidance: 'VCF provides the platform foundation needed to accelerate innovation and improve business agility.',
                statements: [
                    { text: 'Slow Innovation Cycles', phase: 'Developing', baseline: 1 },
                    { text: 'Traditional Project Delivery', phase: 'Developing', baseline: 1 },
                    { text: 'Agile Development Practices', phase: 'Established', baseline: 2 },
                    { text: 'Continuous Integration/Deployment', phase: 'Established', baseline: 2 },
                    { text: 'Innovation Labs & Experiments', phase: 'Optimized', baseline: 3 },
                    { text: 'AI/ML Integration', phase: 'Optimized', baseline: 3 }
                ]
            }
        }
    },
    'usecases': {
        title: 'Priority Use Cases',
        description: 'Identify and prioritize your key infrastructure use cases',
        categories: {
            'Business Priorities': {
                description: 'Identify your organization\'s key business drivers and priorities',
                guidance: 'Understanding business priorities helps align technology investments with strategic objectives.',
                statements: [
                    { text: 'Cost Reduction Focus', phase: 'Developing', baseline: 1 },
                    { text: 'Operational Efficiency', phase: 'Developing', baseline: 1 },
                    { text: 'Digital Transformation', phase: 'Established', baseline: 2 },
                    { text: 'Customer Experience Enhancement', phase: 'Established', baseline: 2 },
                    { text: 'Innovation & Competitive Advantage', phase: 'Optimized', baseline: 3 },
                    { text: 'Ecosystem Integration', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Technical Requirements': {
                description: 'Assess your technical requirements and constraints',
                guidance: 'Clear technical requirements help design the right infrastructure architecture for your needs.',
                statements: [
                    { text: 'Basic Virtualization', phase: 'Developing', baseline: 1 },
                    { text: 'High Availability Requirements', phase: 'Developing', baseline: 1 },
                    { text: 'Performance & Scalability', phase: 'Established', baseline: 2 },
                    { text: 'Security & Compliance', phase: 'Established', baseline: 2 },
                    { text: 'Multi-Site Operations', phase: 'Optimized', baseline: 3 },
                    { text: 'Edge Computing', phase: 'Optimized', baseline: 3 }
                ]
            },
            'Implementation Readiness': {
                description: 'Evaluate your readiness for implementing new infrastructure',
                guidance: 'Implementation readiness assessment helps plan successful technology adoption and change management.',
                statements: [
                    { text: 'Limited Technical Skills', phase: 'Developing', baseline: 1 },
                    { text: 'Basic Change Management', phase: 'Developing', baseline: 1 },
                    { text: 'Skilled Technical Teams', phase: 'Established', baseline: 2 },
                    { text: 'Proven Implementation Process', phase: 'Established', baseline: 2 },
                    { text: 'Advanced Automation Skills', phase: 'Optimized', baseline: 3 },
                    { text: 'Strategic Partnership Approach', phase: 'Optimized', baseline: 3 }
                ]
            }
        }
    }
};

// Panel content for strategic guidance
const panelContent = {
    'infrastructure': {
        title: 'Infrastructure Assessment: The Strategic View',
        sections: [
            {
                icon: 'fa-solid fa-lightbulb',
                heading: 'Why This Assessment Matters',
                content: 'Understand the importance of assessing capabilities. Gain a clear perspective on your infrastructure\'s strengths and weaknesses.',
                color: 'text-blue-500'
            },
            {
                icon: 'fa-solid fa-money-check-dollar',
                heading: 'Impact on Metrics & Cost',
                content: 'See how gaps affect business efficiency, cost, and performance. A mature infrastructure improves app deployment, security, and reduces operational costs.',
                color: 'text-green-500'
            },
            {
                icon: 'fa-solid fa-triangle-exclamation',
                heading: 'Key Challenges',
                content: 'Recognize common roadblocks organizations face. Common issues include infrastructure silos, manual operations, and security gaps.',
                color: 'text-red-500'
            },
            {
                icon: 'fa-solid fa-rocket',
                heading: 'Strategic Advantage with VCF',
                content: 'Unlock agility, scalability, and cost optimization with VCF. VCF provides a complete software-defined stack for simplified automation and consistent operations.',
                color: 'text-purple-500'
            }
        ]
    },
    'operations': {
        title: 'Operations Assessment: The Strategic View',
        sections: [
            {
                icon: 'fa-solid fa-lightbulb',
                heading: 'Why This Assessment Matters',
                content: 'Evaluate your operational maturity to improve organizational effectiveness and streamline processes.',
                color: 'text-blue-500'
            },
            {
                icon: 'fa-solid fa-money-check-dollar',
                heading: 'Impact on Metrics & Cost',
                content: 'Mature operations lead to greater efficiency and better resource utilization, directly impacting your bottom line.',
                color: 'text-green-500'
            },
            {
                icon: 'fa-solid fa-triangle-exclamation',
                heading: 'Key Challenges',
                content: 'Many struggle with manual processes, unclear roles, and misaligned IT goals that hinder organizational growth.',
                color: 'text-red-500'
            },
            {
                icon: 'fa-solid fa-gears',
                heading: 'Strategic Advantage with VCF',
                content: 'VCF automates operational tasks and fosters a product-led approach, enabling your teams to focus on strategic initiatives.',
                color: 'text-purple-500'
            }
        ]
    },
    'strategy': {
        title: 'Cloud & App Strategy: The Strategic View',
        sections: [
            {
                icon: 'fas fa-bullseye',
                heading: 'Understanding Your Priorities',
                content: 'Identify what drives your private and public cloud choices. Pinpoint key events and workloads shaping your IT roadmap.',
                color: 'text-blue-500'
            },
            {
                icon: 'fas fa-cubes',
                heading: 'Gaining a Competitive Edge',
                content: 'Evaluate your containerization maturity. See how a unified platform like VCF with Tanzu can streamline Kubernetes management.',
                color: 'text-green-500'
            },
            {
                icon: 'fas fa-exclamation-circle',
                heading: 'Translating Events into Action',
                content: 'Understand how mergers, cost cuts, or new app development can be addressed with an agile platform.',
                color: 'text-red-500'
            },
            {
                icon: 'fas fa-shield-alt',
                heading: 'Protecting Critical Workloads',
                content: 'Recognize the importance of running regulated data in a secure, on-premises environment. See how VCF is optimized for mission-critical workloads.',
                color: 'text-purple-500'
            }
        ]
    },
    'usecases': {
        title: 'Strategic Importance of This Assessment',
        sections: [
            {
                icon: 'fa-solid fa-lightbulb',
                heading: 'Strategic Importance',
                content: 'This assessment is more than a simple checklist; it\'s a strategic tool for identifying key priorities and aligning them with modern private cloud capabilities.',
                color: 'text-indigo-600'
            },
            {
                icon: 'fa-solid fa-handshake',
                heading: 'Strengthening Partnerships',
                content: 'A clear, modern infrastructure strategy shows readiness to handle complex, mission-critical workloads, making you a more valuable partner.',
                color: 'text-green-600'
            },
            {
                icon: 'fa-solid fa-chart-line',
                heading: 'Achieving Overall Success',
                content: 'Strategic adoption of a private cloud platform like VMware Cloud Foundation enables agility, improved security, and operational efficiency.',
                color: 'text-blue-600'
            },
            {
                icon: 'fa-solid fa-rocket',
                heading: 'Accelerating Innovation',
                content: 'The right platform reduces complexity, allowing your teams to focus on building new applications and driving innovation.',
                color: 'text-purple-500'
            }
        ]
    }
};

// Maturity levels
const maturityLevels = [
    { level: 1, label: 'Not Present', description: 'Capability is not currently implemented' },
    { level: 2, label: 'Basic', description: 'Basic implementation with manual processes' },
    { level: 3, label: 'Intermediate', description: 'Partially automated with some integration' },
    { level: 4, label: 'Advanced', description: 'Fully automated and well integrated' },
    { level: 5, label: 'Optimized', description: 'Continuously optimized and industry-leading' }
];

// Recommendations based on assessment results
const recommendations = {
    infrastructure: [
        {
            title: 'Modernize Your Infrastructure Stack',
            description: 'Adopt a software-defined infrastructure approach to improve agility and reduce operational complexity.',
            priority: 'high',
            category: 'Infrastructure'
        },
        {
            title: 'Implement Automation & Orchestration',
            description: 'Automate routine tasks and implement orchestration to improve efficiency and reduce human error.',
            priority: 'medium',
            category: 'Operations'
        },
        {
            title: 'Enhance Security Posture',
            description: 'Implement comprehensive security policies and automated compliance monitoring.',
            priority: 'high',
            category: 'Security'
        }
    ],
    operations: [
        {
            title: 'Standardize Operational Processes',
            description: 'Implement standardized processes and procedures to improve consistency and efficiency.',
            priority: 'high',
            category: 'Process'
        },
        {
            title: 'Adopt DevOps Practices',
            description: 'Implement DevOps methodologies to improve collaboration and accelerate delivery.',
            priority: 'medium',
            category: 'Culture'
        },
        {
            title: 'Implement Monitoring & Analytics',
            description: 'Deploy comprehensive monitoring and analytics solutions for better visibility and insights.',
            priority: 'medium',
            category: 'Visibility'
        }
    ],
    strategy: [
        {
            title: 'Develop Cloud-First Strategy',
            description: 'Create a comprehensive cloud strategy aligned with business objectives.',
            priority: 'high',
            category: 'Strategy'
        },
        {
            title: 'Modernize Applications',
            description: 'Adopt containerization and microservices architecture for better scalability.',
            priority: 'medium',
            category: 'Applications'
        },
        {
            title: 'Foster Innovation Culture',
            description: 'Establish innovation labs and experimentation processes to drive competitive advantage.',
            priority: 'medium',
            category: 'Innovation'
        }
    ],
    usecases: [
        {
            title: 'Align Technology with Business',
            description: 'Ensure technology investments are directly aligned with business priorities and outcomes.',
            priority: 'high',
            category: 'Alignment'
        },
        {
            title: 'Build Implementation Capabilities',
            description: 'Develop internal capabilities and partnerships to support successful technology adoption.',
            priority: 'medium',
            category: 'Capabilities'
        },
        {
            title: 'Define Success Metrics',
            description: 'Establish clear metrics and KPIs to measure the success of technology initiatives.',
            priority: 'medium',
            category: 'Metrics'
        }
    ]
};

// Export data for use in main.js
window.assessmentData = assessmentData;
window.panelContent = panelContent;
window.maturityLevels = maturityLevels;
window.recommendations = recommendations;