import Header from "../components/header";
import ExtLink from "../components/ext-link";

import sharedStyles from "../styles/shared.module.css";
import contactStyles from "../styles/contact.module.css";

const Contact = () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>Contact</h1>

      <div className={contactStyles.name}>
        JJ Kasper - Next.js Engineer @{" "}
        <ExtLink href="https://vercel.com">Vercel</ExtLink>
      </div>

      <div className={contactStyles.links}>hogehoge</div>
    </div>
  </>
);

export default Contact;
