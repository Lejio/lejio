// Import images
import Arduino from "../../public/icons/svg/arduino.svg";
import AstroJS from "../../public/icons/svg/astrojs.svg";
import AWS from "../../public/icons/svg/aws.svg";
import C from "../../public/icons/svg/c.svg";
import Capacitor from "../../public/icons/svg/capacitor.svg";
import Cloudflare from "../../public/icons/svg/cloudflare.svg";
import Cockroach from "../../public/icons/svg/cockroach.svg";
import CPlusPlus from "../../public/icons/svg/cpp.svg";
import Docker from "../../public/icons/svg/docker.svg";
import Elixir from "../../public/icons/svg/elixir.svg";
import ExpressLight from "../../public/icons/svg/express_light.svg";
import Express from "../../public/icons/svg/express.svg";
import Figma from "../../public/icons/svg/figma.svg";
import Firebase from "../../public/icons/svg/firebase.svg";
import Framer from "../../public/icons/svg/framer.svg";
import GCP from "../../public/icons/svg/gcp.svg";
import Java from "../../public/icons/svg/java.svg";
import Jira from "../../public/icons/svg/jira.svg";
import JS from "../../public/icons/svg/js.svg";
import MongoDB from "../../public/icons/svg/mongodb.svg";
import MYSQL from "../../public/icons/svg/mysql.svg";
import NextJSLight from "../../public/icons/svg/nextjs_light.svg";
import NextJS from "../../public/icons/svg/nextjs.svg";
import OpenAI from "../../public/icons/svg/openai.svg";
import Oracle from "../../public/icons/svg/oracle.svg";
import Phoenix from "../../public/icons/svg/phoenix.svg";
import Python from "../../public/icons/svg/python.svg";
import Qt from "../../public/icons/svg/qt.svg";
import React from "../../public/icons/svg/react.svg";
import Rust from "../../public/icons/svg/rust.svg";
import Stripe from "../../public/icons/svg/stripe.svg";
import Tailwind from "../../public/icons/svg/tailwind.svg";
import TS from "../../public/icons/svg/ts.svg";

export const getStuffIUse = (dark: boolean) => {

    const Frameworks = [

        {
            title: "Astro",
            description: "A modern static site generator for building faster websites with less client-side JavaScript.",
            image: AstroJS,
        },
        {
            title: "Next.js",
            description: "A React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
            image: dark? NextJS: NextJSLight,
        },
        {
            title:"Capacitor",
            description: "A cross-platform API and code execution layer that makes it easy to call Native SDKs from web code and to write custom Native plugins that your app may need.",
            image: Capacitor,
        },
        {
            title: "Express",
            description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
            image: dark? Express: ExpressLight,
        },
        {
            title: "Phoenix",
            description: "A productive web framework that does not compromise speed and maintainability.",
            image: Phoenix,
        },
        {
            title: "Qt",
            description: "A free and open-source widget toolkit for creating graphical user interfaces as well as cross-platform applications that run on various software and hardware platforms such as Linux, Windows, macOS, Android or embedded systems with little or no change in the underlying codebase while still being a native application with native capabilities and speed.",
            image: Qt,
        },
    ];
    
    const Tools = [
        {
            title: "Stripe",
            description: "A technology company that builds economic infrastructure for the internet.",
            image: Stripe,
        },
        {
            title: "Docker",
            description: "An open platform for developing, shipping, and running applications.",
            image: Docker,
        },
        {
            title: "Figma",
            description: "A cloud-based design tool that is similar to Sketch in functionality and features, but with big differences that make Figma better for team collaboration.",
            image: Figma,
        },
        {
            title: "Tailwind CSS",
            description: "A utility-first CSS framework for rapidly building custom designs.",
            image: Tailwind,
        },
        {
            title: "Framer",
            description: "A prototyping tool that allows you to create interactive designs for web and mobile applications.",
            image: Framer,
        },
        {
            title: "OpenAI",
            description: "An artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc.",
            image: OpenAI,
        },
        {
            title: "Jira",
            description: "A proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.",
            image: Jira,
        },
    ]
    
    const Languages = [
        {
            title: "C",
            description: "A general-purpose, procedural computer programming language.",
            image: C,
        },
        {
            title: "C++",
            description: "A general-purpose programming language created as an extension of the C programming language.",
            image: CPlusPlus,
        },
        {
            title: "Elixir",
            description: "A dynamic, functional language designed for building scalable and maintainable applications.",
            image: Elixir,
        },
        {
            title: "Java",
            description: "A class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
            image: Java
        },
        {
            title: "Python",
            description: "An interpreted, high-level, general-purpose programming language.",
            image: Python,
        },
        {
            title: "React",
            description: "A JavaScript library for building user interfaces.",
            image: React,
        },
        {
            title: "Rust",
            description: "A systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.",
            image: Rust,
        },
        {
            title: "Arduino",
            description: "An open-source electronics platform based on easy-to-use hardware and software.",
            image: Arduino,
        },
        {
            title: "JavaScript",
            description: "A programming language that conforms to the ECMAScript specification.",
            image: JS,
        },
        {
            title: "TypeScript",
            description: "An open-source language which builds on JavaScript by adding static type definitions.",
            image: TS,
        },
    ]
    
    const CloudServices = [
        {
            title: "AWS",
            description: "A secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow.",
            image: AWS,
        },
        {
            title: "Cloudflare",
            description: "A web infrastructure and website security company, providing content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services.",
            image: Cloudflare,
        },
        {
            title: "Google Cloud Platform",
            description: "A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.",
            image: GCP,
        },
        {
            title: "Oracle Cloud",
            description: "A cloud computing service offered by Oracle Corporation providing servers, storage, network, applications and services through a global network of Oracle Corporation managed data centers.",
            image: Oracle,
        }
    ]
    
    const Databases = [
        {
            title: "MongoDB",
            description: "A general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
            image: MongoDB,
        },
        {
            title: "CockroachDB",
            description: "A distributed SQL database built on a transactional and strongly-consistent key-value store.",
            image: Cockroach,
        },
        {
            title: "MySQL",
            description: "An open-source relational database management system.",
            image: MYSQL,
        },
        {
            title: "Firebase",
            description: "A platform developed by Google for creating mobile and web applications.",
            image: Firebase,
        }
    ]
    return [
        {
            title: "Frameworks",
            items: Frameworks,
        },
        {
            title: "Tools",
            items: Tools,
        },
        {
            title: "Languages",
            items: Languages,
        },
        {
            title: "Cloud Services",
            items: CloudServices,
        },
        {
            title: "Databases",
            items: Databases,
        }
    ]
}

