import profilePic from "../assets/profile.jpg";
import erpImg from "../assets/ERP.jpg";
import taskManagerImg from "../assets/task_managerapi.png";
import todoImg from "../assets/SAD.png";
import eduRiseImg from "../assets/Edu_rise.jpg";
import javaConsoleImg from "../assets/javaconsole.jpg";

export const journey = [
  {
    title: "Basketball came first",
    meta: "Before tech",
    description:
      "For a long time, I only wanted basketball. It was the dream I was chasing until a knee injury changed the direction of my story and the fact that i couldn't get a visa to america to pursue my dreams.",
  },
  {
    title: "A creative detour",
    meta: "Finding another way to move",
    description:
      "I tried content creation, photography, Photoshop, video editing, and music production before I finally turned toward tech.",
  },
  {
    title: "Started with HTML and CSS",
    meta: "The first serious step",
    description:
      "Like many developers I watched online, I began with the basics, then joined ALX Backend Web Development to go deeper.",
  },
  {
    title: "The hackathon reset",
    meta: "Momentum returned",
    description:
      "When I doubted myself, a school hackathon pushed me back into motion. We reached the top 10 out of 60 teams.",
  },
  {
    title: "Built my first real client system",
    meta: "Work that shipped",
    description:
      "I collaborated with a friend to build a real erp system to sell it to local businesses, and it is still working in the shop.",
  },
  {
    title: "Now in Addis, looking for internship opportunities",
    meta: "The current chapter",
    description:
      "I’m still early in the journey, but I want strong mentors, real responsibility, and a chance to be productive.",
  },
  {
    title: "Full-stack and AI next",
    meta: "Forward direction",
    description:
      "Right now I work comfortably with Django and Tailwind CSS, and I want to grow into full-stack development and AI.",
  },
];

export const projects = [
  {
    title: "NOAH ERP",
    image: erpImg,
    liveUrl: "https://dese-erp-last-version.onrender.com/",
    problem:
      "My brother’s mini market needed one system to handle stock, sales, purchasing, and reporting without jumping between tools.",
    solution:
      "I built a Django ERP workflow with real inventory tracking, POS checkout logic, profit calculation, and business analytics. It is live and actually used in the shop.",
    tech: ["Django", "PostgreSQL", "Business Logic"],
    learned:
      "Shipping something that runs in a real business taught me to care about stability, data flow, and responsibility.",
  },
  {
    title: "Task Manager API",
    image: taskManagerImg,
    liveUrl: "https://github.com/wenddii/my-api-project.git",
    problem:
      "I wanted a simple backend that could support a frontend or external client with predictable task operations.",
    solution:
      "I created a REST API for creating, updating, retrieving, and deleting tasks with structured endpoints and status tracking.",
    tech: ["Django REST Framework", "PostgreSQL", "API Design"],
    learned:
      "It sharpened my thinking around clear contracts, endpoint design, and maintainable backend structure.",
  },
  {
    title: "Simple To-Do Tracker",
    image: todoImg,
    liveUrl: "https://simple-todo-1-u0ir.onrender.com/",
    problem:
      "A lightweight daily planning tool needed a cleaner way to manage tasks without unnecessary complexity.",
    solution:
      "I built a focused Django app for creating, updating, and completing tasks with a straightforward interface.",
    tech: ["Django", "PostgreSQL", "Product Thinking"],
    learned:
      "The project reminded me that useful software is often about removing friction, not adding features.",
  },
  {
    title: "EDU_Rise Africa",
    image: eduRiseImg,
    liveUrl:
      "https://docs.google.com/presentation/d/17NSeV7U4q4EWbXAR91jyDv_hZh-LO1WmfU3ycoNOnlQ/edit",
    problem:
      "I wanted to explore how learning tools could work in low-connectivity environments for African students.",
    solution:
      "I built a concept prototype for an offline-first learning platform and developed the idea as a design document and presentation.",
    tech: ["Google Slides", "Miro", "Product Design"],
    learned:
      "It taught me to think about users, context, and access before code even starts.",
  },
  {
    title: "Java Student Registration System",
    image: javaConsoleImg,
    liveUrl: "https://github.com/wenddii/java_student_management.git",
    problem:
      "I needed a small structured program that could manage student records and grades from the command line.",
    solution:
      "I built a Java console application that registers students, stores academic data, and calculates final grades.",
    tech: ["Java", "Console App", "Problem Solving"],
    learned:
      "Even small tools helped me learn how to organize logic and data with more discipline.",
  },
];

export const focusAreas = [
  "Backend Development",
  "System Design",
  "Business Software",
  "Content Creation",
];

export const beyondCoding = ["Basketball", "Reading", "Building businesses", "Learning"];

export const visualStory = [
  {
    title: "The basketball chapter",
    caption:
      "i am still a member in our schools basketball team. this photo was taken in Jimma university for the universities sport festival.",
    image: "/club1.jpg",
  },
  {
    title: "School clubs and teams",
    caption:
      "this photo shows me and Batch(ባች) club members,in this club we organize events related to church this photo was taken when we had a yearly trip to tana monastries..",
    image: "/club2.jpg",
  },
  {
    title: "The creative season",
    caption: "Before tech, I spent time in content creation, editing, design, and sound.",
    image: profilePic,
  },
  {
    title: "Learning in public",
    caption:
      "i used to make videos for students who wanted to apply to scholarships and other opportunities,now i am focused on documenting my journey.",
    image: "/youtube.jpg",
    link: "https://youtu.be/2w-9-nCaWrQ?si=Vf9RZYVB8-hvnWWP",
  },
];

