const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "Coming Soon!",
  //   image: "/images/blog1.png",
  //   link: "",
  // },
  // {
  //   id: 2,
  //   date: "",
  //   title: "",
  //   image: "/images/blog2.png",
  //   link: "",
  // },
  // {
  //   id: 3,
  //   date: "MM DD, YYYY",
  //   title: "",
  //   image: "/images/blog3.png",
  //   link: "",
  // },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/gnasheris",
  },
  {
    id: 2,
    text: "Youtube",
    icon: "/icons/youtube.svg",
    bg: "#4bcb63",
    link: "https://www.youtube.com/@nashanuwar/",
  },
  {
    id: 3,
    text: "Pinterest",
    icon: "/icons/pinterest.svg",
    bg: "#ff866b",
    link: "https://pin.it/4wRCVltQs",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/nashanuwar/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Experience",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Research Software Engineer - WEHI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "REDMANE Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Research Software Engineer @ The Walter-Eliza Hall Institute 🧩📗🧪 (Nov '25 - Present)",
            "The REDMANE Data Commons project aims to make a Data Registry that keeps track of multi-omics files across organisations.",
            "I'm a part of the Web Development team 🧑‍💻that tests and improves the Data Registry to have more functionalities for file-level information stored in the database.",
            "I mainly work with Python, ReactJS and PostgreSQL. I'm currently working closely with Auth0 and OIDC 🗝️ to implement an authentication system for the Data Registry.",
          ],
        },
        {
          id: 2,
          name: "Data Commons",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://data-registry.wehi-rcp.cloud.edu.au/patients",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "wehi.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/wehi-auth.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Technology Consulting Intern - EY",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 right-80",
      windowPosition: "top-[20vh] left-5",
      children: [
        {
          id: 1,
          name: "Role-Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-80",
          description: [
            "Tech Consulting Intern @ EY ⭐ (Jan '25 - Feb '25)",
            "Interned on a large-scale 🏗️ migration project for a core banking system. 🏦",
            "I worked closely with the data team to support validating and tracking critical business and transactional data. 📊",
            "I did my final project on researching data migration validation best practices. 🎯",
          ],
        },
        {
          id: 4,
          name: "the-team.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/ey-team.JPG",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "President - Women in Technology",
      icon: "/images/folder.png",
      kind: "folder",
      position: "bottom-5 left-80",
      windowPosition: "top-[37vh] left-5",
      children: [
        {
          id: 1,
          name: "Role-Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "President @ Women in Technology (Sep '24 - Sep '25)",
            "Out of all the role descriptions, this one is close to my heart 🩵.",
            "As President of WIT I led the committee during 2025.",
            "I remember on the back of my mind, I wanted to create an inclusive space for girls and gender-diverse students in tech, one that felt welcoming intellectually exciting.",
            "That vision shaped everything we did: revitilising tech workshops 🤖, intimate industry events 🥂, and killer social media graphics to top it all off! 💠",
            "We achieved so many accolades, but my favourite has to be Networking Social back in May 🌃.",
          ],
        },
        {
          id: 2,
          name: "IG",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.instagram.com/witunimelb/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "networking-social.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/networking-social2.jpeg",
        },
        {
          id: 5,
          name: "me-hosting.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/panel.jpeg",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "Web Dev & QA Tester - TERRAIN",
      icon: "/images/folder.png",
      kind: "folder",
      position: "bottom-3y left-80",
      windowPosition: "top-[53vh] left-5",
      children: [
        {
          id: 1,
          name: "Role-Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Web Dev & QA Tester for TERRAIN 🌏🌳",
            "An Academic Project, I worked as a web developer (mainly backend) and QA Tester to deliver a Shopify website for TERRAIN, an industry client.",
            "I worked closely with a team 👥, using Agile Methodologies 🔁 and Shopify Liquid and Storefront API to ensure correct pagination, search and filtering.",
            "My highlights were manually testing the website for UI/UX before each sprint.",
          ],
        },
        {
          id: 2,
          name: "terrain-store.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://shop.terrain.earth/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "terrain.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/terrain-store.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/nash-2.JPG",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/nash-3.JPG",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/networking-social.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Hello There 🫐",
      image: "/images/adrian.jpg",
      description: [
        "My name is Nash 👋, I'm a final year Computer Science Student @ Unimelb.",
        "I enjoy building full-stack projects that mean something, focusing on clean code with good design principles. 🧼💻",
        "I served as President of Women in Technology (2025) 👩‍💻 at The University of Melbourne. I care deeply about supporting wxmen in spaces where they're underrepresented, whether through tech or otherwise.",
        "When I'm not coding, I'm probably reading (mostly fiction, ofc) 📖, at the gym or Pilates🏋️‍♀️, or trying a new coffee combo. 👀☕️",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/tiny-chef.jpeg",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/stardew.jpg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };