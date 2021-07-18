/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Mario Gutierrez",
  title: "It's-A-Me 🍄 Mario!",
  subTitle: emoji(
    " I'm a mathematician/physicist and tech enthusiast who loves programming 👨🏻‍💻☕️. I'm currently doing my PhD in Mathematical Modeling with a concentration in Numerical Relativity, and in my free time I'm learning tools of the trade to build my own Mobile and Web applications."
  ),
  resumeLink:
    "https://www.dropbox.com/s/rz4t2aixqacx0d8/CV.pdf?dl=0",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rio-gutierrez",
  linkedin: "https://linkedin.com/in/mario-gutierrez-abed/",
  gmail: "gutierrez.m101587@gmail.com",
  gitlab: "https://gitlab.com/rio-gutierrez",
  facebook: "https://www.facebook.com/miamiheatfan/",
  instagram: "https://www.instagram.com/super_mario_w0rld/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};


// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "MATHEMATICIAN/PHYSICIST/PROGRAMMER WITH A HUNGER FOR LEARNING",
  skills: [
    emoji(
      "⚡ Develop effective algorithms and corresponding codes to solve the initial data problem of black-hole systems in Numerical Relativity"
    ),
    emoji(
      "⚡ Use of High Performance Computing to simulate collisions of black holes and extract gravitational waves"
    ),
    emoji("⚡ Devise mathematical models to solve real-world problems"),
    emoji(
      "⚡ Currently learning JavaScript full stack (React, Angular, Node, etc) plus other tech tools (Docker, Kubernetes, etc)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "linux",
    //   fontAwesomeClassname: "fab fa-linux"
    // },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "LaTex",
      fontAwesomeClassname: "fas fa-feather"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rochester Institute of Technology",
      logo: require("./assets/images/ritLogo.png"),
      subHeader: "Doctor of Philosophy in Mathematical Modeling",
      duration: "August 2020 - Present",
      desc: "Specialization in Numerical Relativity",
      descBullets: [
        "Currently developing algorithm and code to solve the initial data of a system of three or more black holes",
        "Coursework GPA: 4.00/4.00"
      ]
    },
    {
      schoolName: "Newcastle University",
      logo: require("./assets/images/newcastleLogo.jpg"),
      subHeader: "Master of Philosophy in Theoretical Cosmology",
      duration: "September 2018 - June 2020",
      desc: "Masters thesis accepted without corrections, on first attempt",
      descBullets: [
        "Co-developed an algorithm to model both vacuum and thermal decay of a cosmological bubble (modeled as an instanton)",
        "Work presented in thesis is a significant breakthrough in the field. Previous work on the topic only modeled successfully the vacuum case, whereas my algorithm tackles both the vacuum and thermal cases."
      ]
    },
    {
      schoolName: "The University of Edinburgh",
      logo: require("./assets/images/edinburghLogo.png"),
      subHeader: "Postgraduate Diploma in Mathematical Physics",
      duration: "September 2017 - June 2018",
      desc: "Graduate-level coursework in mathematics and theoretical physics topics"
      // descBullets: [
      //   "Co-developed an algorithm to model both vacuum and thermal decay of a cosmological bubble (modeled as an instanton)",
      //   "Work presented in thesis is a significant breakthrough in the field. Previous work on the topic only modeled successfully the vacuum case, whereas my algorithm tackles both the vacuum and thermal cases."
      // ]
    },
    {
      schoolName: "City University of New York Hunter College",
      logo: require("./assets/images/hunterLogo.jpg"),
      subHeader: "Bachelor and Master of Arts in Mathematics",
      duration: "August 2009 - July 2016",
      desc: "Graduated with a dual BA/MA degree in mathematics. Ranked top 5% in the program."
      // descBullets: [
      //   "Co-developed an algorithm to model both vacuum and thermal decay of a cosmological bubble (modeled as an instanton)",
      //   "Work presented in thesis is a significant breakthrough in the field. Previous work on the topic only modeled successfully the vacuum case, whereas my algorithm tackles both the vacuum and thermal cases."
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Scientific Computing", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming Proficiency", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Software Development", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "RIT",
      companylogo: require("./assets/images/ritLogo.png"),
      date: "June 2021 – Present",
      desc: "Responsible for conducting research on the initial data problem of black-hole systems."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Teaching Assistant",
      company: "RIT",
      companylogo: require("./assets/images/ritLogo.png"),
      date: "Jan 2021 – May 2021",
      desc: "Responsible for grading Calculus assignments and helping on workshops."
    },
    {
      role: "Marking Assistant",
      company: "Newcastle University",
      companylogo: require("./assets/images/newcastleLogo.jpg"),
      date: "Oct 2018 – Jan 2020",
      desc: "Responsible for marking scripts for undergraduate modules (Complex Analysis, Calculus of  Variations & Partial Differential Equations)."
    },
    {
      role: "Tutor of Mathematics and Physics",
      company: "Florida International University",
      companylogo: require("./assets/images/fiu.jpg"),
      date: "Feb 2017 – Jul 2017",
      desc: "I worked at FIU's Center for Academic Success as a tutor for both mathematics and physics courses (Algebra, Calculus, Real Analysis,  Differential Equations, Electricity & Magnetism, etc)."
    },
    {
      role: "Adjunct Faculty",
      company: "Miami Dade College",
      companylogo: require("./assets/images/mdc.png"),
      date: "Jan 2017 – Jul 2017",
      desc: "The position involved teaching undergraduate-level mathematics (Algebra, Calculus & Ordinary Differential Equations)."
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};







// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};





// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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






const contactInfo = {
  title: emoji("Contact Me ✉️️"),
  subtitle:
    emoji("Feel like collaborating or discussing a project? 🤝 Or perhaps offer me a job? 🧳 Drop me an email 📨😉"),
  // number: "+92-3243454077",
  email_address: "gutierrez.m101587@gmail.com"
};



// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};



export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
