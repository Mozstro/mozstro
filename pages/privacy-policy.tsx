import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';
import { Header } from '../components/header';
import { SectionText } from '../components/sectionText';

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - About Us"
        description="Find out more about who we are and what our cloud computing  mission is."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          Privacy Policy for Mozstro.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          We respect your privacy.
        </h2>
      </Header>
      <section className='mt-12'>
<p className="text-sundance px-4 my-4 text-xl">At Mozstro, accessible from https://mozstro.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mozstro and how we use it.</p>
<p className="text-sundance px-4 my-4 text-xl">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
  <SectionText text="Log Files." />

<p className="text-sundance px-4 my-4 text-xl">Mozstro follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
 <SectionText text="Privacy Policies." />
<p className="text-sundance px-4 my-4 text-xl">You may consult this list to find the Privacy Policy for each of the advertising partners of Mozstro.</p>
<p className="text-sundance px-4 my-4 text-xl">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Mozstro, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
<p className="text-sundance px-4 my-4 text-xl">Note that Mozstro has no access to or control over these cookies that are used by third-party advertisers.</p>
 <SectionText text="Third Party Privacy Policies." />
<p className="text-sundance px-4 my-4 text-xl">Mozstro's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
<p className="text-sundance px-4 my-4 text-xl">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
 <SectionText text="Children's Information." />
<p className="text-sundance px-4 my-4 text-xl">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
<p className="text-sundance px-4 my-4 text-xl">Mozstro does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
 <SectionText text="Online Privacy Policy Only." />
<p className="text-sundance px-4 my-4 text-xl">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Mozstro. This policy is not applicable to any information collected offline or via channels other than this website.</p>
 <SectionText text="Consent." />
<p className="text-sundance px-4 my-4 text-xl">By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>									
</section>
    </Layout>
  );
}
