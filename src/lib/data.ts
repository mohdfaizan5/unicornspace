export const projects: Project[] = [
  {
    name: "Wood Decor",
    slug: "wooddecor",
    thumbnail: "/assets/wooddecor/Wood-decor-thumbnail.png",
    year: 2023,
    tags: ["E-commerce", "Furnitures"],
    description: "Ecommerce store that sells custom made furnitures.",
    content: [
      {type: "p", content : "This e-commerce platform is designed to provide businesses with a seamless and scalable solution for selling products online. Built with a focus on user experience, it combines modern web technologies to create a fast, responsive, and intuitive online store."},
      {type: "p", content : "The platforms clean, minimalistic design ensures that users can easily navigate through product listings, search for items, and make purchases with minimal friction. "},
      {type: "image", src: "/assets/wooddecor/wooddecor2.png"},
      {type: "p", content: "Whether on desktop or mobile, customers are given a smooth and enjoyable shopping experience that encourages higher engagement and increased sales."},
      { type: "p", content: "Technologies used" },
      { type: "p", content: "Nextjs, Typescript, Postgresql, Zustand, Vercel, Git... " },
    ]
    // {
    //   h1: "Wood Decor",
    //   images: ["/assets/wooddecor-in-2024-11-26-00_34_52.png"],
    //   text: "An online course platform for woodworking enthusiasts.",
    // },
  },

  {
    name: "UnlockPi",
    slug: "unlockpi",
    thumbnail: "/assets/unlockPi mockups.png",
    year: 2024,
    tags: ["Startup", "Job Search", "Android app"],
    description: "An Android application for freshers that are looking for jobs.",
    content: [
      // { type: "image", src: "/assets/unlockpi/screencapture-unlockpi-vercel-app-app-2024-11-26-00_52_22.png" },
      { type: "p", content: "This Android application is designed specifically for students and freshers looking to kick-start their careers. The platform provides an easy-to-use interface where users can browse through job listings, apply to relevant positions, and receive notifications about new opportunities. " },
      { type: "p", content: "It focuses on helping recent graduates and those entering the workforce find their first professional role, offering personalized job recommendations based on their skills, preferences, and location. " },
      // { type: "image", src: "/assets/unlockpi/screencapture.png" },
      // { type: "li", content: [""] },
      { type: "p", content: "With a user-friendly design and a focus on simplicity, the app makes job hunting less overwhelming for students who are often new to the job market." },
      { type: "p", content: "Technologies used" },
      { type: "p", content: "React Native, Typescript, Postgresql, Zustand... " },

    ]
  
  },

  {
    name: "ZedTheBaker",
    slug: "ZedTheBaker",
    thumbnail: "/testimonials/ztb_23.png",
    year: 2023,
    tags: ["Bakery", "E-commerce", "SEO"],
    description: "An online bakery that delivers fresh, homemade cakes.",
    content: [
      {type: "p", content : "This online bakery platform offers a wide variety of freshly baked, homemade cakes delivered right to your doorstep. With a focus on quality and convenience, the platform enables customers to easily browse through a curated selection of cakes, place orders, and enjoy a delightful experience from the comfort of their homes."},
      {type: "p", content : "In this project, we focused on enhancing the customer experience by re-designing the website for a more modern and visually appealing interface."},
      {type: "p", content : "The SEO improvements included optimizing on-page elements like titles, meta descriptions, headings, and images, as well as implementing structured data to enhance search results and drive more organic traffic to the site."},
      {type: "p", content : "Technologies used"},
      { type: "p", content: "Nextjs, Typescript, Postgresql, Zustand, Vercel, Git... " },
    
    ]
  },

  {
    name: "Refurb Chrome",
    slug: "refurb-chrome",
    thumbnail: "/assets/wooddecor/CoverApp.png",
    year: 2024,
    tags: ["Chrome Extension", "Twitter"],
    description: "A chrome extension that summarizes a web page using ChatGPT, and connects that to Twitter for easy posting.",
    content: [
      { type: "p", content: "This Chrome extension is designed to make browsing more efficient by providing quick, AI-powered summaries of web pages. Using ChatGPT, the extension analyzes the content of a webpage and generates a concise summary, saving users time and effort in reading long articles or blogs." },
      { type: "p", content: "After summarizing, the extension seamlessly connects to Twitter, allowing users to easily post the summary or a key excerpt directly to their Twitter feed with just a click. " },
      { type: "p", content: "The extension is lightweight, fast, and easy to use. Once installed, users can activate the extension on any web page, and it will automatically fetch the relevant text to summarize." },
      { type: "p", content: "Whether for personal use or professional sharing, this extension provides an effortless way to engage with content and streamline the social sharing process." },

      // { type: "li", content: [""] },
      {type: "p", content : "Technologies used"},
      { type: "p", content: "HTML, CSS, Javascript, OpenAI API, NodeJs, Twitter API... " },

    ]

  },
  {
    name: "Indie Toolkit",
    slug: "indie-toolkit",
    thumbnail: "/testimonials/indietoolkit.png",
    year: 2024,
    tags: ["SAAS", "Landing page"],
    description: "A toolkit for indie makers to build and grow their products.",
    content: [
      {type: "p", content: "IndieToolKit is an all-in-one platform designed specifically for indie makers, entrepreneurs, and creators who are looking to build, grow, and scale their products. "},
      {type: "p", content: "The toolkit offers a wide range of tools that help indie makers streamline their product development process, from ideation to launch."},
      {type: "p", content: "Whether you're building a web app, a mobile app, or launching a new SaaS, IndieToolKit provides the resources you need to move quickly, improve your product, and connect with your audience."},
      {type: "p", content: "The platform is designed to be intuitive, flexible, and cost-effective, ensuring that indie makers—who often have limited resources—can access powerful tools without the overhead of enterprise-level solutions. "},
      {type: "p", content: "Technologies used"},
      { type: "p", content: "Nextjs, Typescript, Postgresql, Zustand, Vercel, Git... " },

    ]
  },
  {
    name: "DataiPulse",
    slug: "DataiPulse",
    thumbnail: "/testimonials/dataipulse.jpg",
    year: 2023,
    tags: ["Landing page", "Agency", "Consultancy"],
    content: [
      {type :"p", content: "This landing page was created for an agency that specializes in providing cloud and data services to companies. "},
      {type :"p", content: "It was designed with the goal of converting visitors into potential clients by providing clear information about the agency’s offerings, case studies, and an easy way for users to get in touch or request a consultation."},
      {type :"p", content: "With a modern, minimalistic aesthetic, clear calls to action, intuitive navigation, and trust-building elements like client testimonials and certifications are strategically placed to encourage engagement and facilitate conversions. "},
      {type :"p", content: "The page is sleek, professional, and optimized for lead generation."},
      {type: "p", content: "Technologies used"},
      { type: "p", content: "React, Javascript, TailwindCSS, ShadCN, Vercel, Git... " },
    ]
  },
  // {
  //   name: "Animal Aid",
  //   image: "/testimonials/animal-aid-project.png",
  //   year: 2023,
  //   tags: ["Charity", "Funding page"],
  // },
  // {
  //   name: "bento grid",
  //   image: "/testimonials/bentogrids-dashboard.png",
  //   year: 2023,
  // },
  // {
  //   name: "File Converter",
  //   image: "/testimonials/file_conversion.png",
  //   year: 2023,
  // },
  // {
  //   name: "URL Shortner",
  //   image: "/testimonials/url_shortner.png",
  //   year: 2023,
  // },
  // {
  //   name: "Devgrads",
  //   image: "/testimonials/url_shortner.png",
  //   year: 2023,
  //   tags: ["Education", "E-learning"],
  // },
];
export const teamMembers = [
  {
    name: "Akshyanshu Sekhar Nayak",
    role: "Web Developer & UI/UX Designer",
    description:
      "Designs and develops user-friendly, visually appealing web applications.",
  },
  {
    name: "Likitha. N",
    role: "Mobile & Web Application Developer",
    description:
      "Builds high-performance mobile and web apps with excellent user experiences.",
  },
  {
    name: "Mohammad Faizan",
    role: "Business Development & Client Success Manager",
    description:
      "Manages client relationships and ensures smooth project delivery.",
  },
  {
    name: "Muhammad Tahir",
    role: "Full Stack Developer & Project Onboarding Specialist",
    description:
      "Leads technical development and ensures smooth project onboarding.",
  },
];
