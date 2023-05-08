/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shikhar Yadav ",
  title: "Greetings, I'm Shikhar",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Java applications (SpringBoot / MongoDB / Cassandra / Hazelcast / Redis) and Web applications (JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1oXMJDNw-01VHpUhljxMwrgSWz2YtRn63/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shikhar0x1",
  linkedin: "https://www.linkedin.com/in/shikharyadavinvoker/",
  gmail: "aoe0x1@gmail.com",
  facebook: "https://www.facebook.com/shikhar.yadav.560/",
  medium: "https://medium.com/@aoe0x1",
  stackoverflow: "https://stackoverflow.com/users/7147411/shikhar-yadav",
  // Gitlab, Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Engineer at Amazon in day and a Freelancer by night who like to explore new technologies",
  skills: [
    emoji("⚡ Develop highly responsive / scalable microservices in spring-boot integrated with caching solutions like Redis or Hazelcast and databases like MongoDB / Cassandra."),
    emoji(
      "⚡ Develop interactive Front end for your web applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "spring-boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "hazelcast / redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Guwahati",
      logo: require("./assets/images/iiitgLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2016 - May 2020",
      desc: "Tooks courses about Software Engineering, Web Security, Operating System, Databases, Machine Learning, Programming and Data Structure / Algorithms",
      descBullets: [
        "Built a social network platform for college students to interact with each other.",
        "Built college fest website Yuvaan to attract sponsor for year 2018 and 2019.",
        "Research software enginnering and ML and published a paper"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java / Spring / Microservices",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend / Design / Web Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.png"),
      date: "August 2020 – Present",
      desc: "Worked as a cloud engineer to built and support Amazon Sidewalk. Sidewalk is a low-bandwidth, low-power network that can securely transmit small amount of data within Sidewalk Coverage.",
      descBullets: [
        "1. Worked on AWS features for development and maintaince of Sidewalk.",
        "2. Created and documented various dasboard and runbook for the different services involved in Sidewalk.",
        "3. Developed a scheduler integrated with AWS EventBridge that repeats every week to support few operation in Sidewalk.",
        "4. Lead Cost Reduction task where we implemented auto scaling of services, databases and greatly reduced logs which costed around 60% of initial cost on AWS.",
      ]
    },
    {
      role: "SDE - II",
      company: "Blue Yonder",
      companylogo: require("./assets/images/blueyonderLogo.png"),
      date: "July 2020 – July 2022",
      desc: "A super fun place to work. Learned and built microservices architecture in java/spring-boot that deals with Supply Chain, Order Management System, and lot of services around ecommerence product visibility.",
      descBullets: [
        "1. Developed Restful APIs for the services.",
        "2. Developed test automation services using cucumber and karate framework.",
        "3. Integrated Kafka for message queue for Order Management System.",
        "4. Front End Development for Store Front using ReactJS.",
        "5. Ingtegrated caching solution [ Hazelcast ] for better latency.",
        "6. Worked with different databases like MySQL, MongoDB and Cassandra.",
        "7. Worked as a L3 engineer to resolve all production issues."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "SocialPlay",
      companylogo: require("./assets/images/socialPlayLogo.png"),
      date: "May 2019 – June 2019",
      desc: "Built a form based web application based on CodeIgniter that aimed to reduce lot of form filling work when client purchases a asset / sells a product / taxes to gives a bigger sense of overall picture of one fincances."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/amazonSidewalk.jpg"),
      projectName: "Amazon Sidewalk",
      projectDesc: " Sidewalk is a low-bandwidth, low-power network that can securely transmit small amount of data within Sidewalk Coverage. In US, over 90% of people are inside Sidewalk Coverage.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.amazon.com/Amazon-Sidewalk/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/OMS.gif"),
      projectName: "Blue Yonder's Order Management",
      projectDesc: " An Order Management System, which tracks stock levels across warehouses, combines order data across multiple channels, and coordinates with third-party logistics providers to get products to the end customer, fast. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blueyonder.com/solutions/order-management/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Detecting Code Smells using Deep Learning",
      subtitle:
        "Published a paper at Tencon'19 that demonstrated we can apply deep learning to study and determine that BrainClass and BrainMethod can be detected in a big project by using various metric.",
      image: require("./assets/images/ieee.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "IEEE",
          url: "https://ieeexplore.ieee.org/document/8929628"
        }
      ]
    },
    {
      title: "Yuvaan",
      subtitle:
        "Developed a website to gather and attract sponsors and viewers for our college fest Yuvaan in 2018 and 2019.",
      image: require("./assets/images/yuvaanLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Yuvaan2k18",
          url: "https://github.com/Shikhar0x1/yuvaan2k18"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "The blogs that I have read and learned things from.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/omarelgabrys-blog/microservices-with-spring-boot-intro-to-microservices-part-1-c0d24cd422c3",
      title: "Microservices with Spring Boot — Intro to Microservices (Part 1)",
      description:
        "Microservices, in a nutshell, allows us to break our large system into a number of independent collaborating components."
    },
    {
      url: "https://medium.com/free-code-camp/how-to-scale-microservices-with-message-queues-spring-boot-and-kubernetes-f691b7ba3acf",
      title: "How to scale Microservices with Message Queues, Spring Boot, and Kubernetes",
      description:
        "When you design and build applications at scale, you deal with two significant challenges: scalability and robustness."
    },
    {
      url: "https://medium.com/@stephane.maarek/how-to-use-apache-kafka-to-transform-a-batch-pipeline-into-a-real-time-one-831b48a6ad85",
      title: "How to use Apache Kafka to transform a batch pipeline into a real-time one",
      description:
        "In this blog, I will thoroughly explain how to build an end-to-end real-time data pipeline by building four micro-services on top of Apache Kafka."
    },
    {
      url: "https://medium.com/free-code-camp/a-beginners-guide-to-docker-how-to-create-your-first-docker-application-cc03de9b639f",
      title: "A beginner’s guide to Docker — how to create your first Docker application",
      description:
        "It allows users to create independent and isolated environments to launch and deploy their applications. These environments are then called containers."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "demo link",
      event_url: "demo link"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};



// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8299132654",
  email_address: "aoe0x1@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
