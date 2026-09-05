import {
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactHookFormSVG,
  ReactnativeSVG,
  ReactSVG,
  SmartAttendanceSVG,
  MultimodalAttendanceSVG,
  TailwindSVG,
  TypescriptSVG,
  PostgreSQLSVG,
  SupabaseSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <MultimodalAttendanceSVG />,
    title: "Biometric Attendance System",
    subtitle: "Blockchain-based with offline capabilities",
    technologies: [
      {
        name: "Next js",
        icon: <NextSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Typescript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
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
    ],
    description:
      "A full‑stack biometric attendance system that combines fingerprint and facial recognition with blockchain‑based verification. Students mark attendance via ESP32‑powered kiosks, which automatically sync offline logs when connectivity is restored. The platform uses Solana blockchain to generate immutable, tamper‑proof hashes for every attendance record, ensuring verifiable proof of attendance. Lecturers can start live sessions, monitor attendance in real time, and export semester reports. Students can view their attendance history, download blockchain receipts, and verify their records on the Solana explorer. Role‑based access control ensures administrators have full management capabilities, while lecturers and students have tailored permissions.",
    imgUrl:
      "https://res.cloudinary.com/dnowbob2t/image/upload/v1788622286/multimodal_attendance_login_page_pupdic.png",
    videoUrl:
      "https://res.cloudinary.com/dnowbob2t/video/upload/v1788621039/BioAttend_Biometric_Attendance___Computer_Engineering_FUTMINNA_-_5_September_2026_xcrcqj.mp4",
    githubUrl: "https://github.com/MadMax-source/biometric-attendace-web",
    websiteUrl: "https://cpe-attendance-prototype.vercel.app/",
  },
  {
    icon: <SmartAttendanceSVG />,
    title: "Smart QR Event Logistics Platform",
    subtitle: "Landing page template",
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
      "A full-stack event attendance system where students can register for multiple events with enforced track constraints. The platform uses QR codes for attendance tracking and implements role-based access control, allowing super admins to manage events and administrators while limiting sub-admins to attendance scanning.",
    imgUrl: "/videos/SmartAttendanceNew.PNG",
    videoUrl:
      "https://res.cloudinary.com/dnowbob2t/video/upload/Create_Next_App_-_17_February_2026_sr9lsm.mp4?_s=vp-3.7.2",
    githubUrl: "https://github.com/devyinka/NihubAttendance",
    websiteUrl: "https://nihub-attendance-vnqh.vercel.app",
  },

  {
    icon: <MagentaKitchenSVG />,
    title: "Restuarant Locator",
    subtitle: "Restaurant finder",
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
      "A Full-Stack React Native app that helps users find restaurants around a specific location by entering a place name. It fetches location coordinates using TomTom API and identifies nearby restaurants with Node Geocoder, displaying ratings, open/closed status, and other helpful details. The app features secure user authentication using Firebase, enabling users to create accounts, save favorite restaurants, and personalize their dining preferences seamlessly across devices.",
    imgUrl: "/videos/Restuarantnew.PNG",
    videoUrl:
      "https://res.cloudinary.com/daauphnqb/video/upload/v1770652825/Restuarantnew_el3esg.mp4",
    githubUrl: "https://github.com/devyinka/Restaurant-finder",
    websiteUrl:
      "https://expo.dev/preview/update?message=Latest+update&updateRuntimeVersion=1.0.0&createdAt=2026-02-09T17%3A45%3A58.695Z&slug=exp&projectId=9acd4c0c-7042-4309-98fd-b63ca8d665b8&group=020e7686-dd20-42f9-b827-e95b53652e6b",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "Food Ingredient Finder",
    subtitle: "Recipe Finder",
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
      "A React recipe discovery web application that allows users to search for meals and view ingredients and cooking instructions through a clean and intuitive interface..",
    imgUrl: "/videos/Recipe-finder.PNG",
    videoUrl:
      "https://res.cloudinary.com/daauphnqb/video/upload/v1770652915/Recipe-finder_ofvdno.mp4",
    githubUrl: "https://github.com/devyinka/Recipe-App",
    websiteUrl: "",
  },
];
