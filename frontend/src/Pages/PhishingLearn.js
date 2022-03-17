import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.js";

function PhishingLearn() {
  const navigate = useNavigate();

  return (
    <div className="pg-container">
      <h1>What is phishing?</h1>
      <br />
      <div className="content-container">
        <p>
          Phishing is described as a type of social engineering whereby a
          potential cyber criminal sends a fraudulent message to deceive them
          into revealing sensitive information or to infect their device with
          malware. Phishing is also one of the most common cybersecurity threats
          as they are easy to prepare and a large majority of the population can
          be susceptible attacks through even one moment of uncertainty.
        </p>
      </div>
      <h1>How does it work?</h1>
      <div className="content-container">
        <p>Generally, phishing attempts appear in one of these 2 forms:</p>
        <ul>
          <li>
            Malicious attachments: Where emails will have malware attached
            disguised as something else that the user expects such as an invoice
            pdf.
          </li>
          <li>
            Malicious links: Where user's are enticed to click on links that may
            appear to link to legitimate sites, but are instead clones designed
            to get users to enter their details or download disguised malware.
          </li>
        </ul>
        <p>
          Users will likely encounter phishing attempts in their inbox but
          caution should be taken in other places such as social media.
        </p>
        <figure>
          <img src="/images/pl1.jpg" className="phishing-img" />
          <figcaption>
            Example of a malicious attachment email. The document when opened
            will install malware
          </figcaption>
        </figure>
        <figure>
          <img src="/images/pl2.png" className="phishing-img" />
          <figcaption>
            Example of a malicious attachment link email. The email seems
            legitimate at first but looking at the sender's address as well as
            hovering over the link inside the email will indicate that this is
            fraudulent
          </figcaption>
        </figure>
      </div>
      <h1>How you can identify phishing attempts</h1>
      <div className="content-container">
        <p>
          If you suspect you have received a phishing email, you can do the
          following to determine whether it is legitimate:
        </p>
        <ul>
          <li>
            Check the sender's email address: Emails with mispelled words or
            random letters/numbers are not going to be from a legitimate source.
            Similarly, you should check whether they are using a public email
            domain such as '@gmail' as companies would not use these.
          </li>
          <li>
            Grammatical errors: A legitimate email wouuld not have poor grammar
            and misspellings. This is an area criminals tend to slip up on so be
            sure to read the email to look out for these mistakes.
          </li>
          <li>
            Attachments or links that appear suspicious: Before clicking
            anything, it is important to discern whether they are legitimate.
            For links, you can hover over them to see the domain it leads to
            which is likely to reveal a URL with strange spellings which is a
            sign of a phishing website. As for attachments, it is wise to not
            open them until you are certain of it's origin, by running a virus
            check on it or confirming the sender is correct.
          </li>
          <li>
            Phishing examples: Check our page on e-bunker where we display a
            number of real phishing attempts with explanations that detail what
            makes them phishing emails. By looking at examples, you can start to
            notice patterns amongst phishing attempts.
          </li>
        </ul>
      </div>
      <h1>How else you can protect yourself</h1>
      <div className="content-container">
        <p>
          We have looked at how you can identify a phishing attempt by looking
          out for certain cues. However it is also important to be aware of the
          social engineering aspect of phishing which can fool even cautious
          individuals. Some phishing attempts will try and affect the user's
          emotions by sending emails about false charges to their account. This
          is likely to cause many individuals to panic and clouding their
          judgement so they might not be able to look out for signs of phishing.
          This is why being able to stay calm and rational when receiving one of
          these emails is advised to ensure your decision-making process isn't
          affected.
        </p>
      </div>
      <div className="content-container">
        <p>
          Hopefully this page has taught you about the dangers of phishing as
          well as what you can do to avoid becoming a victim. Be sure to check
          out the rest of e-bunker to keep yourself protected in the cyberspace.
        </p>
      </div>
    </div>
  );
}

export default PhishingLearn;
