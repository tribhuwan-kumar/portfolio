// <------------------------------------PORTFOLIO------------------------------------------------------>
// aurthor: @tribhuwan-kumar
// email: trashbhuwan@duck.com
// <--------------------------------------------------------------------------------------------------->
const colors = {
    buttonColor: "#d9ddff",
    LinkHighlightColor: "#a4a8cc"
}

const transitions = {
    active: true,
    onlyLanding: false,
    showOnce: true,
    thresholdOption: 0.2
}

const splashScreen = true

const greeting = {
    intro: "Hello, my name is",
    name: "Tribhuwan",
    message: "I'm a developer and a student with experienced in several popular programming languages, including C, Go, Rust, Python, JavaScript & Typescript. These days I'm working on a personal SaaS project.",
    basedLocation: "Bihar, India",
    resumeLink: "#",
}

const socialMediaLinks = {
    github: "https://github.com/tribhuwan-kumar",
    instagram: "https://instagram.com/trashbhuwan",
    xtwitter: "https://twitter.com/trashbhuwan",
    linkedin: "https://www.linkedin.com/in/tribhuwan-kumar-7b6049289/",
}

const about = {
    autobiography: [
        "As a bored kid, I learned programming and found out that it is fun, so I thought I could make a career out of it... That's why I'm pursuing my Bachelor’s degree in Computer Applications at Bihar University, India.",
        "& I got alot of hobbies!!"
    ],
    techStack: [
        "C",
        "GO",
        "Python",
        "JavaScript",
        "Typescript",
        "MongoDB",
    ],
}

const experiences = [
    {
        position: "Open Source Contributor",
        duration: "Aug 2023 - Present",
        bulletPoints: [
            "Contributed to numerous high-impact open-source projects, significantly enhancing their functionality and performance",
            "Achieved over 100+ GitHub contributions, establishing a reputation as a prolific and dedicated developer within the community.",
            "Currently spearheading the development of a personal SaaS project, leveraging advanced technologies to solve real-world problem"
        ],
        hashtags: [
            "Vue.js",
            "MongoDB",
            "Tailwind",
            "JavaScript",
            "Typescript"
        ]
    },
    {
        position: "Created CLI Applications",
        duration: "Jan 2024 - Present",
        bulletPoints: [
            "Developed a highly efficient Command Line Interface (CLI) application for Linux distributions to manage trash, significantly streamlining system maintenance tasks",
            "Wrote the application in C, ensuring optimal performance and resource management.",
            "Designed with a user-friendly interface and robust error handling, making it accessible and reliable for users of all experience level"
        ],
        hashtags: [
            "C",
            "CLI",
            "TUI",
            "Linux",
        ]
    }
]

const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships for summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ],
        link: {
            email: "freakybytes@duck.com",
        },
    },
}

const leetcode = {
    profileLink: "https://leetcode.com/tribhuwan-kumar",
    darkModeleetcode: "https://leetcard.jacoblin.cool/tribhuwan-kumar?theme=dark&font=Source%20Code%20Pro&ext=heatmap&sheets=https://raw.githubusercontent.com/tribhuwan-kumar/portfolio/main/leetcode-style.css",
    leetcode: "https://leetcard.jacoblin.cool/tribhuwan-kumar?theme=light&font=Source%20Code%20Pro&ext=heatmap",
}

const github = {
    profileLink: "https://github.com/tribhuwan-kumar",
    reposLink: "https://github.com/tribhuwan-kumar?tab=repositories",
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    leetcode,
    github,
    experiences,
    contact
}
