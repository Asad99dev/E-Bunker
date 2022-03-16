import React from "react";

function PhishingExamples() {
  const examples = [
    {
      Image: "/images/ex1.png",
      Caption:
        "This image depicts a typical phishing attempt where they try and convince someone has an issue with one of their online accounts and gets them to click the link in the email. The link leads to an imitation of a legitimate login site which the criminal has created. If someone enters their details on this site then the criminal will gain access to their account. To avoid falling for this scam, make sure to inspect the email thoroughly for errors. In this example, we can see that the sender's address is that of a private email address and also there are grammatical errors. You can also hover over the link in the email which will reveal a suspicious URL. If you receive one of these, never click any links, delete it and move on.",
    },
    {
      Image: "/images/ex2.jpg",
      Caption:
        "This image depicts a phishing attempt using the false invoice method. This is when users receive an email stating that they have purchased goods, services or made a payment to some place. Similar to above they will typically contain a link to a false login page. Some may be more likely to be deceived due to money being involved and could click the links before checking for signs that it is a phishing email. To avoid this, always remain calm even when seeing monetary amounts and make sure it is a legitimate email, if it isn't, then delete and move on.",
    },
    {
      Image: "/images/ex3.png",
      Caption:
        " This image depicts an email someone has received that contains an absurd proposition of receiving potentially millions. This is just a ploy to obtain personal details so that the sender can commit fraud. To the large majority of people, they will know that this is clearly a fraudulent email given the nature of it's contents but there are bound to be those who may be fooled by the correct grammar. Ignore these emails and report if possible.",
    },
  ];
  return (
    <div className="bg-container">
      <h1>Phishing Examples</h1>
      <h4>
        Here you can view real examples of phishing attempts and upload your own
      </h4>
      <h4>This page will be regularly updated</h4>
      {examples.map((example) => (
        <div className="content-container">
          <img className="phishing-img" src={example.Image}  />
          <h3>{example.Caption}</h3>
        </div>
      ))}
    </div>
  );
}

export default PhishingExamples;
