import * as React from "react";
import { FAQ } from "../FAQ/FAQ";
import { GiRabbitHead } from "react-icons/gi";

export default { title: "Components/FAQ" };


const factData = {
  tagline: "Couldnt&grave;t fint what you were looking for? write to us at",
  email: "help@example.com",
  heading: "FAQ",
  facts: [
    {
      question: "How long will it take to complete my website project?",
      answer:
        "Clients often want to know the estimated timeline for their website development. You can explain that the timeline depends on the project's complexity, features, and your current workload. It's important to provide a realistic estimate based on the project's specific requirements.",
    },
    {
      question:
        "What is the cost of building a custom website for my business?",
      answer:
        "Clients often want to know the estimated timeline for their website development. You can explain that the timeline depends on the project's complexity, features, and your current workload. It's important to provide a realistic estimate based on the project's specific requirements.",
    },
    {
      question: "How do I know which service is right for me?",
      answer:
        "We can always figure this out together when we jump onto a discovery call, but the answer is basically about what your ideal budget and timeline look like. We have two options for our branding projects and two options for our website projects, and one discounted offer that combines both of our week intensive projects — because we want this to be an equal, accessible opportunity for you no matter where you're at in your journey.",
    },
    {
      question: "What if I can't afford this investment right now?",
      answer:
        "That's totally okay! We never want to pressure anyone to make any moves that aren't right for their business. We offer payment plans for our branding projects to try to lessen the blow, as well as our Website-in-a-Week service which is a lower investment for a quicker turnaround. We also have website templates available for a teeny fraction of the investment of our custom design services. We try to make our offers unique and accessible in order to serve business owners in any season they find themselves in.",
    },
  ],
};

export const Default = () => <FAQ {...factData} />;

export const Custom = () => <FAQ />;
