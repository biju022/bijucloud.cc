export const profile = {
  name: "Biju Behera",
  title: "AWS DevOps Engineer",
  currentRole: "Senior Consultant",
  location: "Bangalore, India",
  email: "bijubehera022@gmail.com",
  phone: "+91 7751009113",
  website: "https://bijucloud.cc",
  tagline: "Building reliable, scalable AWS infrastructure and automation that moves systems from code to production.",
  summary:
    "AWS and DevOps Engineer with 8+ years of IT experience specialising in AWS cloud infrastructure, Infrastructure as Code, CI/CD automation, configuration management, Linux administration, and cloud operations. Hands-on across scalable AWS infrastructure, automation, deployments, and production operations, with experience using AI-assisted engineering tools for troubleshooting, coding, research, documentation, and solution analysis.",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const techStack = [
  { name: "AWS", logo: "amazonaws" },
  { name: "Linux", logo: "linux" },
  { name: "Ubuntu", logo: "ubuntu" },
  { name: "CentOS", logo: "centos" },
  { name: "Terraform", logo: "terraform" },
  { name: "AWS CloudFormation", logo: "amazoncloudformation" },
  { name: "Shell Scripting", logo: "gnubash" },
  { name: "CloudWatch", logo: "amazoncloudwatch" },
  { name: "Prometheus", logo: "prometheus" },
  { name: "Grafana", logo: "grafana" },
  { name: "Jenkins", logo: "jenkins" },
  { name: "Ansible", logo: "ansible" },
  { name: "Apache", logo: "apache" },
  { name: "Nginx", logo: "nginx" },
  { name: "Git", logo: "git" },
  { name: "AWS CodeCommit", logo: "amazonaws" },
  { name: "Cloudflare", logo: "cloudflare" },
  { name: "Sucuri WAF", logo: "sucuri" },
  { name: "ChatGPT", logo: "openai" },
  { name: "Claude", logo: "claude" },
  { name: "GitHub Copilot", logo: "githubcopilot" },
  { name: "Docker", logo: "docker" },
];


export const experience = [
  {
    company: "Infosys",
    role: "Senior Consultant",
    duration: "09/2023 – Present",
    location: "Bangalore",
    source: "resume",
    details: [
      "Design, implement, and maintain AWS cloud infrastructure across SBOX, LAB, Pre-Production, and Production environments using Terraform and Infrastructure as Code practices.",
      "Supported application migration from on-premises to AWS, including infrastructure provisioning, deployment, and troubleshooting.",
      "Develop and maintain Terraform modules for EC2, Auto Scaling Groups (ASG), Network Load Balancers (NLB), and Amazon EKS to automate infrastructure provisioning.",
      "Provision and manage AWS resources including EC2, VPC, Load Balancers, IAM, Auto Scaling, CloudWatch, RDS, S3, EBS, and AWS Budgets.",
      "Develop and maintain Jenkins CI/CD pipelines to automate infrastructure and application deployment workflows across multiple environments.",
      "Integrate Terraform infrastructure provisioning with Jenkins CI/CD pipelines to support consistent and controlled infrastructure deployments.",
      "Troubleshoot AWS, Terraform, Jenkins, Ansible, and deployment-related issues across multiple environments, performing root-cause analysis and implementing corrective solutions.",
      "Collaborate with application, development, infrastructure, and operations teams to support cloud deployments, environment changes, incident resolution, and production operations.",
      "Use ChatGPT, Claude, and GitHub Copilot for troubleshooting, Terraform code development, scripting, technical research, documentation, and solution analysis, while validating generated solutions before implementation.",
    ],
  },
  {
    company: "FCOOS TECHNOLOGIES PRIVATE LIMITED",
    role: "Cloud Engineer",
    duration: "07/2021 – 09/2023",
    location: "Bangalore",
    details: [
      "Architected, deployed, and managed AWS cloud solutions across EC2, ECS, ELB, EBS, S3, VPC, IAM, Linux, RDS, CloudWatch, CloudFormation, Elastic Beanstalk, and Auto Scaling.",
      "Set up and managed Linux servers on AWS, ensuring reliable operations and optimal functionality.",
      "Designed scalable and resilient cloud architectures with a focus on resource utilisation and cost efficiency.",
      "Configured and deployed Web Application Firewalls (WAFs), including Cloudflare and Sucuri, to strengthen web application security.",
    ],
  },
  {
    company: "EVOLUTIONARY ALGORITHMS PRIVATE LIMITED",
    role: "Technical Engineer",
    duration: "03/2020 – 04/2021",
    location: "Bhubaneswar",
    details: [
      "Established and supported cloud-based distributed computing infrastructure for applications, contributing to operational reliability and scalability.",
      "Deployed applications on Apache Tomcat and WebLogic and supported Linux/Unix environments and shell scripting.",
    ],
  },
  {
    company: "NAVEDAS TECHNOLOGY SOLUTIONS PRIVATE LIMITED",
    role: "Data Research Analyst",
    duration: "02/2018 – 03/2020",
    location: "Bhubaneswar",
    details: [
      "Conducted market and business research, analysed retail business requirements, and validated retailer information using multiple research and professional data sources.",
    ],
  },
];

export const certifications = [
  "GitHub Copilot | GH-300 | 2026",
  "Claude Certified Architect Foundation | 2026",
];

export const socialLinks = [
  { label: "Website", href: profile.website },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: "http://linkedin.com/in/biju-behera-196509a4" },
];
