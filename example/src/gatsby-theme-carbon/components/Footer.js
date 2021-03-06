import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = () => (
  <>
    <p>
      By importing the <code>Footer</code> component from gatsby-carbon-theme,
      we can supply our own props.
    </p>
    <br />
    <p>
      The default export from a shadowed component will replace that component
      in the theme.
    </p>
    <br />
    <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
      More about component shadowing
    </a>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
