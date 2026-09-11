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
  WebSocketSVG,
  CplusplusSVG,
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
        name: "websocket",
        icon: <WebSocketSVG />,
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
      {
        name: "C++",
        icon: <CplusplusSVG color="#9ca3af" size={35} />,
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
      {
        name: "C++",
        icon: <CplusplusSVG color="#9ca3af" size={35} />,
      },
    ],
    description:
      "Engineered a full-stack biometric attendance system integrating custom ESP32-based hardware with a web application and backend services. The platform provides role-based access for students, lecturers, administrators, and Heads of Department, with dedicated workflows for biometric enrollment, attendance tracking, and academic management. During scheduled classes, the hardware automatically switches from enrollment mode to attendance mode, allowing lecturers to record attendance through biometric verification. The system supports offline attendance capture when network connectivity is unavailable, stores records locally, and automatically synchronizes them once connectivity is restored. Attendance is validated against class schedules to determine student presence or absence, while blockchain verification provides immutable, tamper-resistant attendance records.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788939080/multimodal_attendance_login_page_pupdic.jpg",
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
      "Built a cross-platform restaurant discovery application with React Native, Express, and MongoDB. Developed the mobile interface and backend APIs for restaurant search, geolocation, user authentication, and saved locations. Integrated TomTom geolocation services and Node Geocoder for location mapping, with Firebase authentication for secure user access and synchronized data.",
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
      "Built a full-stack event attendance and logistics platform for managing event registration, track allocation, and QR-based attendance. Developed the Next.js frontend and Express/MongoDB backend, implementing authentication, role-based access control, QR code generation and scanning, and attendance tracking. Designed separate administrative workflows for super-admins and sub-admins while enforcing event and track constraints.",
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
      "Built a React-based recipe discovery application that integrates external REST APIs to search and display recipe and ingredient data. Implemented dynamic search, client-side state management, and responsive interfaces for efficiently exploring recipe information.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788937871/Recipe-finder_zunrig.png",
    videoUrl:
      "https://res.cloudinary.com/daauphnqb/video/upload/v1770652915/Recipe-finder_ofvdno.mp4",
    githubUrl: "https://github.com/devyinka/Recipe-App",
    websiteUrl: "",
  },
];
