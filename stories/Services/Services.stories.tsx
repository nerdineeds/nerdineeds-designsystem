import * as React from "react";
import { Services } from "./Services";
import { GiRabbitHead } from "react-icons/gi";

export default { title: "Components/Services" };

const servicesData = {
  image: {
    url: "https://images.unsplash.com/photo-1504299383340-d771ffd4e625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "background-image",
  },
  link: "www.google.com",
  services: [
    {
      name: "Web Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.",
    },
    {
      name: "Web Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.",
    },
    {
      name: "Web Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.",
    },
  ],
  heading: "Services",
};

export const Default = () => <Services {...servicesData} />;
