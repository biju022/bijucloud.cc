from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

OUT = "output/pdf/Biju_Behera_Updated_Resume.pdf"
NAVY = colors.HexColor("#193B5B")
SLATE = colors.HexColor("#3E4852")
RULE = colors.HexColor("#B9C3CB")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=23, leading=27, textColor=NAVY, alignment=TA_CENTER, spaceAfter=3))
styles.add(ParagraphStyle(name="Tagline", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=NAVY, alignment=TA_CENTER, spaceAfter=3))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.8, leading=12, textColor=SLATE, alignment=TA_CENTER, spaceAfter=12))
styles.add(ParagraphStyle(name="Section", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=11.5, leading=15, textColor=NAVY, spaceBefore=9, spaceAfter=6, borderColor=RULE, borderWidth=0.8, borderPadding=4, borderBottom=1))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontName="Helvetica", fontSize=10.0, leading=14.1, textColor=SLATE, spaceAfter=4))
styles.add(ParagraphStyle(name="ResumeBullet", parent=styles["Body"], leftIndent=13, firstLineIndent=-8, bulletIndent=2, spaceAfter=2.5))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.4, leading=13.5, textColor=NAVY))
styles.add(ParagraphStyle(name="Meta", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.0, leading=12.5, textColor=NAVY, alignment=TA_LEFT))
styles.add(ParagraphStyle(name="Skill", parent=styles["Body"], fontSize=9.2, leading=12.8, spaceAfter=2))

def p(text, style="Body"):
    return Paragraph(text, styles[style])

def section(title):
    return p(title.upper(), "Section")

def bullet(text):
    return Paragraph(text, styles["ResumeBullet"], bulletText="•")

def job(title, company, location, dates, bullets, keep=False):
    header = Table([[p(title, "Role"), p(f"{company} | {location} | {dates}", "Meta")]], colWidths=[2.05*inch, 4.9*inch])
    header.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0), ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 4)]))
    items = [header] + [bullet(x) for x in bullets] + [Spacer(1, 5)]
    return [KeepTogether(items)] if keep else items

story = []
story += [p("BIJU BEHERA", "Name"), p("SENIOR CONSULTANT | AWS | DEVOPS | TERRAFORM | CLOUD AUTOMATION", "Tagline"), p("+91 7751009113  |  bijubehera022@gmail.com  |  Bangalore  |  linkedin  |  bijucloud.cc", "Contact")]
story += [section("Professional Summary"), p("AWS and DevOps Engineer with 8+ years of IT experience delivering cloud infrastructure, Infrastructure as Code, CI/CD automation, configuration management, Linux administration, and production operations. Senior Consultant at Infosys with hands-on experience designing, deploying, managing, and troubleshooting scalable AWS environments. Skilled in Terraform, Jenkins, Ansible, and AWS services, with a practical focus on reliable automation, incident resolution, and validated AI-assisted engineering.")]
story += [section("Technical Skills")]
skills_left = ["<b>Cloud:</b> AWS", "<b>Infrastructure as Code:</b> Terraform, AWS CloudFormation", "<b>CI/CD:</b> Jenkins", "<b>Configuration Management:</b> Ansible", "<b>Containers:</b> Docker"]
skills_right = ["<b>Monitoring:</b> CloudWatch, Prometheus, Grafana", "<b>Operating Systems:</b> Linux, Ubuntu, CentOS", "<b>Scripting:</b> Shell Scripting", "<b>Version Control:</b> Git, AWS CodeCommit", "<b>Web & Security:</b> Apache, Nginx, Cloudflare, Sucuri WAF"]
skill_table = Table([[p("<br/>".join(skills_left), "Skill"), p("<br/>".join(skills_right), "Skill")]], colWidths=[3.45*inch, 3.5*inch])
skill_table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 8), ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 2)]))
story += [skill_table]
story += [section("Professional Experience")]
story += job("Senior Consultant", "INFOSYS", "Bangalore", "09/2023 - Present", [
    "Design, implement, and maintain AWS cloud infrastructure across sandbox, lab, pre-production, and production environments using Terraform and Infrastructure as Code practices.",
    "Support on-premises-to-AWS application migrations through infrastructure provisioning, deployment, and troubleshooting.",
    "Develop reusable Terraform modules for EC2, Auto Scaling Groups, Network Load Balancers, and Amazon EKS to standardize infrastructure provisioning.",
    "Provision and operate EC2, VPC, load balancers, IAM, Auto Scaling, CloudWatch, RDS, S3, EBS, and AWS Budgets.",
    "Build and maintain Jenkins CI/CD pipelines for consistent infrastructure and application deployments across environments.",
    "Troubleshoot AWS, Terraform, Jenkins, Ansible, and deployment issues; perform root-cause analysis and implement corrective actions.",
    "Collaborate with application, development, infrastructure, and operations teams on cloud deployments, incidents, environment changes, and production support.",
    "Use ChatGPT, Claude, and GitHub Copilot for research, scripting, documentation, and solution analysis while validating outputs before implementation."
])
story += job("Cloud Engineer", "FCOOS TECHNOLOGIES PRIVATE LIMITED", "Bangalore", "07/2021 - 09/2023", [
    "Architected, deployed, and managed AWS cloud solutions using EC2, ECS, ELB, EBS, S3, VPC, IAM, Linux, RDS, CloudWatch, CloudFormation, Elastic Beanstalk, and Auto Scaling.",
    "Set up and managed Linux servers on AWS to support reliable application operations.",
    "Designed scalable, resilient cloud architectures with attention to resource utilization and cost efficiency.",
    "Configured and deployed Cloudflare and Sucuri Web Application Firewalls to strengthen web application security."
])
story += job("Technical Engineer", "EVOLUTIONARY ALGORITHMS PRIVATE LIMITED", "Bhubaneswar", "03/2020 - 04/2021", [
    "Established and supported cloud-based distributed computing infrastructure, improving application reliability and scalability.",
    "Deployed applications on Apache Tomcat and WebLogic and supported Linux/Unix environments and shell scripting."
], keep=True)
story += job("Data Research Analyst", "NAVEDAS TECHNOLOGY SOLUTIONS PRIVATE LIMITED", "Bhubaneswar", "02/2018 - 03/2020", [
    "Conducted market and business research, analyzed retail requirements, and validated retailer information using professional research and data sources."
], keep=True)
story += [section("Certifications"), bullet("GitHub Copilot | GH-300 | 2026"), bullet("Claude Certified Architect Foundation | 2026")]
story += [section("Education"), bullet("Bachelor of Technology, Electrical Engineering | CUTM | 2013 - 2017 | 82.7%"), bullet("+2, Science | MCNL | 2011 - 2013 | 54%"), bullet("10th | BSE | 2011 | 74%")]
story += [section("Achievements"), bullet("Represented Odisha in the 57th National School Kickboxing Championship."), bullet("Awarded a Silver Medal in the All Odisha Kickboxing Championship.")]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(SLATE)
    canvas.drawCentredString(A4[0]/2, 0.36*inch, "bijucloud.cc")
    canvas.restoreState()

doc = SimpleDocTemplate(OUT, pagesize=A4, rightMargin=0.62*inch, leftMargin=0.62*inch, topMargin=0.55*inch, bottomMargin=0.58*inch)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
