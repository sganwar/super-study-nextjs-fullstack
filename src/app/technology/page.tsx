import { Metadata } from 'next'
import { FaReact, FaNodeJs, FaSass, FaBitbucket, } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import {
    SiNextdotjs,
    SiMongodb,
    SiTailwindcss,
    SiMui,
    SiTypescript,
    SiFramer,
    SiAxios,
} from "react-icons/si";
import { Box, Grid, Typography, Container } from "@mui/material";

export const metadata: Metadata = {
    // 1. PRIMARY METADATA (For SEO / Google Search Results)
    title: 'Technology Stack - Super Study Modern Web Architecture',
    description: 'Explore Super Study tech stack: Next.js 15, React 19, TypeScript, MongoDB, Material-UI, Tailwind CSS, Razorpay payments, and modern full-stack architecture.',
    alternates: {
        canonical: 'https://www.superstudy.co.in/technology',
    },

    // 2. OPEN GRAPH METADATA (For Facebook, LinkedIn, WhatsApp)
    openGraph: {
        title: 'Super Study Tech Stack - Modern Full-Stack Architecture',
        description: 'Built with Next.js 15, React 19, TypeScript, MongoDB, Material-UI, Tailwind CSS. Full-stack educational platform with Razorpay integration.',
        url: 'https://www.superstudy.co.in/technology',
        siteName: 'Super Study',
        type: 'website',
        images: [
            {
                url: 'https://www.superstudy.co.in/logo.png',
                width: 1200,
                height: 630,
                alt: 'Super Study Technology Stack - Modern Web Development',
            },
        ],
    },

    // 3. TWITTER CARD METADATA (For X/Twitter)
    twitter: {
        card: 'summary_large_image',
        site: '@superstudy',
        creator: '@superstudy',
        title: 'Super Study Technology Architecture',
        description: 'Modern full-stack: Next.js 15, React 19, TypeScript, MongoDB, Material-UI, Tailwind CSS, Razorpay payments.',
        images: ['https://www.superstudy.co.in/logo.png'],
    },
}

const technologies = [
    {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white text-5xl" />,
        desc: "App Router, SSG, SSR, ISR, and API routes for full-stack power.",
    },
    {
        name: "React",
        icon: <FaReact className="text-sky-500 text-5xl" />,
        desc: "Modern UI library for fast, component-driven interfaces.",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
        desc: "Utility-first CSS framework for rapid styling and responsiveness.",
    },
    {
        name: "Material UI",
        icon: <SiMui className="text-indigo-500 text-5xl" />,
        desc: "Beautiful UI components with strong accessibility and design.",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600 text-5xl" />,
        desc: "Type-safe JavaScript enhancing reliability and scalability.",
    },
    {
        name: "SASS",
        icon: <FaSass className="text-pink-500 text-5xl" />,
        desc: "CSS preprocessor for cleaner and modular stylesheet management.",
    },
    {
        name: "Framer Motion",
        icon: <SiFramer className="text-purple-600 text-5xl" />,
        desc: "Smooth and powerful animations for delightful UI experiences.",
    },
    {
        name: "Axios",
        icon: <SiAxios className="text-gray-600 text-5xl" />,
        desc: "Promise-based HTTP client for clean API integrations.",
    },
    {
        name: "Razorpay",
        icon: <SiRazorpay className="text-sky-600 text-5xl" />,
        desc: "Secure and developer-friendly payment gateway for seamless online transactions.",
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 text-5xl" />,
        desc: "NoSQL database for flexible, schema-less data storage.",
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-700 text-5xl" />,
        desc: "Server-side runtime enabling JavaScript full-stack development.",
    },
    {
        name: "Git & Bitbucket",
        icon: <FaBitbucket className="text-blue-500 text-5xl" />,
        desc: "Version control and collaboration tools for efficient team workflows.",
    },
];

export default function TechnologiesPage() {
    return (
        <section className="min-h-screen py-16 bg-gradient-to-br from-[#E3F2FD] via-white to-[#E3F2FD]">
            <Container>
                <Box textAlign="center" mb={10}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        className="text-gradient mb-4"
                    >
                        Technologies Super Study is Built With
                    </Typography>
                    <Typography variant="body1" color="textSecondary" maxWidth="600px" mx="auto">
                        A curated collection of tools and technologies that power development
                        workflow of Super Study.
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {technologies.map((tech, i) => (
                        <Grid
                            key={i}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            display="flex"
                            justifyContent="center"
                        >
                            <Box
                                className="card-edu"
                                textAlign="center"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                p={4}
                                borderRadius={4}
                                boxShadow={3}
                                bgcolor="white"
                                sx={{
                                    width: "100%",
                                    maxWidth: 320,
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Box mb={2}>{tech.icon}</Box>
                                <Typography variant="h6" fontWeight="600" mb={1}>
                                    {tech.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {tech.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}
