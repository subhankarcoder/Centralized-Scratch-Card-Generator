import React from "react";
const content = {
  sharedContent: (pageName) => `
      <div>
        <h2>Welcome to Scratch Card Generator - ${pageName}</h2>
        <p>If you have opened the website for the first time, then you will see this scratch card</p>
        <p>Otherwise after 15 days, you have 10% chance of getting the scratch card again</p>
      </div>
    `,
};
export const HomePage = () => (
  <div dangerouslySetInnerHTML={{ __html: content.sharedContent('Home') }} />
);
export const AboutPage = () => (
  <div dangerouslySetInnerHTML={{ __html: content.sharedContent('About') }} />
);
export const ProductsPage = () => (
  <div dangerouslySetInnerHTML={{ __html: content.sharedContent('Products') }} />
);
export const ContactPage = () => (
  <div dangerouslySetInnerHTML={{ __html: content.sharedContent('Contact') }} />
);
