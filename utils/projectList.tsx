import { PestDetectionSVG } from "@/components/ui/icons/pestDiseaseSVG";
import {
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  ReactnativeSVG,
  ReactSVG,
  SmartAttendanceSVG,
  MultimodalAttendanceSVG,
  TailwindSVG,
  TypescriptSVG,
  PostgreSQLSVG,
  SupabaseSVG,
  FastAPISVG,
  PythonSVG,
  NextSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";

export const ProjectList: ProjectType[] = [
  {
    icon: <PestDetectionSVG />,
    title: "Intelligent System For early pest disease detection in bean Farm",
    subtitle: "IoT-Based Monitoring & Machine Learning Detection",
    technologies: [
      {
        name: "Typescript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Next js",
        icon: <NextSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <TailwindSVG color="#000000" size={16} />,
      },
      {
        name: "Express",
        icon: <ExpressSVG color="#06B6D4" size={16} />,
      },
      {
        name: "MongoDB",
        icon: <MongoDBSVG color="#06B6D4" size={16} />,
      },

      {
        name: "python",
        icon: <PythonSVG color="#3776AB" size={35} />,
      },
      {
        name: "FastAPI",
        icon: <FastAPISVG />,
      },
    ],
    description:
      "Engineered an end-to-end IoT and machine learning system for early pest and disease detection in bean farming. Integrated an ESP32 with environmental and soil sensors, developed a backend pipeline for processing field data, and implemented Random Forest classification for detecting bean aphids and anthracnose risks. Added real-time alerts and remote control of pesticide or fungicide spraying through a web-based dashboard.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788935495/pest_eefqpj.jpg",
    //  "/videos/pest.jpg",
    videoUrl:
      "https://res.cloudinary.com/dnowbob2t/video/upload/v1788936538/pest_and_disase_detection_euwlhp.mp4",
    githubUrl: "https://github.com/devyinka/Beans-farm-pest-disease-monitoring",
    websiteUrl: "https://beans-farm-pest-disease-monitoring.vercel.app",
  },
  {
    icon: <MultimodalAttendanceSVG />,
    title: "Biometric Attendance System",
    subtitle: "Hardware-to-Cloud & Blockchain Verification",
    technologies: [
      {
        name: "Typescript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Next js",
        icon: <NextSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <TailwindSVG color="#000000" size={16} />,
      },
      {
        name: "Express",
        icon: <ExpressSVG color="#06B6D4" size={16} />,
      },
      {
        name: "postgreSQL",
        icon: <PostgreSQLSVG color="#06B6D4" size={16} />,
      },
      {
        name: "supabase",
        icon: <SupabaseSVG />,
      },
      {
        name: "python",
        icon: <PythonSVG color="#3776AB" size={35} />,
      },
      {
        name: "FastAPI",
        icon: <FastAPISVG />,
      },
    ],
    description:
      "Architected a secure backend pipeline for a biometric attendance system. Integrated ESP32 edge devices via MQTT with a robust Express/PostgreSQL backend. Implemented Role-Based Access Control (RBAC) for admins and lecturers, offline synchronization capabilities, and leveraged Solana blockchain for immutable, tamper-proof attendance receipts.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788622286/multimodal_attendance_login_page_pupdic.png",
    videoUrl:
      "https://res.cloudinary.com/dnowbob2t/video/upload/v1788621039/BioAttend_Biometric_Attendance___Computer_Engineering_FUTMINNA_-_5_September_2026_xcrcqj.mp4",
    githubUrl: "https://github.com/MadMax-source/biometric-attendace-web",
    websiteUrl: "https://cpe-attendance-prototype.vercel.app/",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "Restaurant Locator",
    subtitle: "React Native & Geolocation Integration",
    technologies: [
      {
        name: "React native",
        icon: <ReactnativeSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Express",
        icon: <ExpressSVG color="#000" size={16} />,
      },
      {
        name: "MongoDB",
        icon: <MongoDBSVG color="#1572B6" size={16} />,
      },
    ],
    description:
      "Engineered a cross-platform React Native application focused on performant API integration. Connected TomTom geolocation services with Node Geocoder for precise coordinate mapping. Built a secure user authentication flow via Firebase, optimizing database queries to sync users' saved locations seamlessly across devices.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788937870/Restuarantnew_ger3a2.png",
    videoUrl:
      "https://res.cloudinary.com/daauphnqb/video/upload/v1770652825/Restuarantnew_el3esg.mp4",
    githubUrl: "https://github.com/devyinka/Restaurant-finder",
    websiteUrl:
      "https://expo.dev/preview/update?message=Latest+update&updateRuntimeVersion=1.0.0&createdAt=2026-02-09T17%3A45%3A58.695Z&slug=exp&projectId=9acd4c0c-7042-4309-98fd-b63ca8d665b8&group=020e7686-dd20-42f9-b827-e95b53652e6b",
  },
  {
    icon: <SmartAttendanceSVG />,
    title: "Smart QR Event Logistics Platform",
    subtitle: "Scalable Event Management API",
    technologies: [
      {
        name: "Next js",
        icon: <NextSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Javascript",
        icon: <JavascriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "CSS Modules",
        icon: <CSSSVG color="#1572B6" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <TailwindSVG color="#000000" size={16} />,
      },
      {
        name: "Express",
        icon: <ExpressSVG color="#06B6D4" size={16} />,
      },
      {
        name: "MongoDB",
        icon: <MongoDBSVG color="#06B6D4" size={16} />,
      },
    ],
    description:
      "Developed the backend infrastructure for a large-scale event logistics platform. Engineered a MongoDB database schema to enforce track constraints and handle concurrent QR code scans. Implemented secure role-based routing and authentication, allowing super-admins full oversight while restricting sub-admins to isolated attendance endpoints.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788937872/SmartAttendanceNew_wnqr1n.png",
    videoUrl:
      "https://res.cloudinary.com/dnowbob2t/video/upload/Create_Next_App_-_17_February_2026_sr9lsm.mp4?_s=vp-3.7.2",
    githubUrl: "https://github.com/devyinka/NihubAttendance",
    websiteUrl: "https://www.nihubattendance.tech/",
  },

  {
    icon: <MagentaKitchenSVG />,
    title: "Food Ingredient Finder",
    subtitle: "Client-Side API Integration",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavascriptSVG color="#F7DF1E" size={16} />,
      },
      {
        name: "React",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "CSS",
        icon: <CSSSVG color="#1572B6" size={16} />,
      },
    ],
    description:
      "Developed a React-based recipe discovery engine that interfaces with external REST APIs to aggregate complex meal data. Optimized client-side state management and implemented dynamic search algorithms to filter and render extensive ingredient lists efficiently.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788937871/Recipe-finder_zunrig.png",
    videoUrl:
      "https://res.cloudinary.com/daauphnqb/video/upload/v1770652915/Recipe-finder_ofvdno.mp4",
    githubUrl: "https://github.com/devyinka/Recipe-App",
    websiteUrl: "",
  },
];
