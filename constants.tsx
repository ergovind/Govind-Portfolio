
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Govind Kumar Singh",
  title: "Senior Project Coordinator & Manager",
  about: "A dynamic and hardworking professional with over 11 years of multi-domain experience, specializing in IT Project Coordination and Management for the last 8 years. I bridge the gap between complex client requirements and technical execution, having successfully delivered numerous high-impact digital transformation projects for government departments and private enterprises. My background combines rigorous Mechanical Engineering principles with an MBA in Operations Management, providing a unique perspective on process optimization and system efficiency.",
  skills: [
    {
      category: "Management & Planning",
      items: ["Project Planning", "Drafting Proposals", "URS/SRS Documentation", "User Manuals", "Training & Support", "Client-Side Presentation"]
    },
    {
      category: "Design & Analysis",
      items: ["Mockups/Wireframes", "Balsamiq", "MOQUPS", "Project Study", "Operations Management"]
    },
    {
      category: "Technical Stack",
      items: ["SQL Server 2014", "Visual Studio", "ASP.NET", "MS Excel (Expert)", "AutoCAD", "PLC Programming"]
    },
    {
      category: "Certifications",
      items: ["Project Management (IIT Kharagpur)", "Web Development (NIIT)", "Automation Engineering", "CCC Certification"]
    }
  ],
  experience: [
    {
      company: "MARGSOFT Technologies (P) Ltd.",
      role: "Project Coordinator / Manager",
      period: "Oct 2017 - Present",
      description: [
        "Coordinating and managing end-to-end IT projects from requirement gathering to deployment and training.",
        "Developing high-fidelity mockups and wireframes using Balsamiq and MOQUPS for module visualization.",
        "Authoring comprehensive System Requirement Specifications (SRS) and User Requirement Specifications (URS).",
        "Delivering technical presentations and operational support for diverse clients across UP Government departments.",
        "Providing technical support for remotely located clients and ensuring seamless system integration."
      ]
    },
    {
      company: "Sofcon India Pvt. Ltd.",
      role: "Automation Engineer",
      period: "May 2016 - Jun 2017",
      description: [
        "Programmed Allen-Bradley and Siemens PLCs for industrial automation applications.",
        "Designed power and control circuit drawings using AutoCAD.",
        "Developed SCADA projects in RS-View 32 and InTouch (Wonderware).",
        "Maintained precision industrial sensors including load cells, thermocouples, and flow meters."
      ]
    },
    {
      company: "Eco Cements Ltd. (Unit of ACC Limited)",
      role: "Mechanical Engineer (Acting HOD)",
      period: "Jul 2012 - Jan 2017",
      description: [
        "Held additional responsibilities as HOD of the Pollution Control Department.",
        "Managed project-related activities including erection, documentation, and dimensional checks for structure installations.",
        "Designed and drafted industrial equipment like dust collectors, root blowers, and pneumatic gates.",
        "Coordinated with subcontractors and provided technical engineering support to field supervisors."
      ]
    }
  ],
  projects: [
    {
      title: "UP Mineral Mart",
      description: "E-Commerce portal developed for the Directorate of Geology & Mining, streamlining mineral trade.",
      tags: ["Government", "E-Commerce", "Digital India"],
      link: "https://upmineralmart.com/",
      image: "https://images.unsplash.com/photo-1579546678183-a84849910e9e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "UP Mine Mitra",
      description: "Citizen services platform for mining department, enhancing transparency and accessibility.",
      tags: ["Citizen Services", "Public Sector", "Web Portal"],
      link: "https://updgmin.in/",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "DBT Monitoring System",
      description: "Direct Benefit Transfer monitoring for UP Fisheries, ensuring efficient subsidy distribution.",
      tags: ["FinTech", "Monitoring", "Management"],
      link: "http://fymis.upsdc.gov.in/",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800"
    }
  ],
  contact: {
    email: "ergovind1@gmail.com",
    linkedin: "https://www.linkedin.com/in/ergovind",
    github: "9453573706"
  }
};
