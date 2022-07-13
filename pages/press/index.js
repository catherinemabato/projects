import GenericLayout from "../../components/layout/GenericLayout";
import Calendar from '../../components/Calendar';
import Meeting from '../../components/Meeting';
import GoogleCalendarButton from '../../components/buttons/GoogleCalendarButton';
import ICSFileButton from '../../components/buttons/ICSFileButton';
import SubscribeButton from '../../components/buttons/SubscribeButton';
import Paragraph from '../../components/typography/Paragraph';
import TextLink from '../../components/typography/TextLink';
import Heading from "../../components/typography/Heading";
import Link from "next/link"

export default function press() {
  const description =
    "Press Kit.";
  const image = '/img/social/website-card.jpg'

  return (
    <GenericLayout
      title="AsyncAPI"
      description={description}
      image={image}
      wide
    >
      <div className="py-10 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl lg:text-justify">
      
        <Heading level="h1" typeStyle="heading-lg">
          <span id="press">AsyncAPI </span>
        </Heading>
        <Paragraph typeStyle="body-md" className="my-4">
          The initiative is an open-source specification that has developed an asynchronous messaging language within the event-driven architecture (EDA). 
          This tool enables the standardization of machine-to-machine communication. 
          <span className="font-bold"> The main aim of the project is to make asynchronous APIs as successful and mature as REST APIs. </span>
          This programming system covers a hitherto unexplored field. 
          There is no direct competition as it is inserted in a new and emerging market.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          The project is based on transparency, teamwork, passion, and cooperation with other free software initiatives. 
          Additionally, AsyncAPI can't be understood without the talent and the contributions of its community. 
          It has been crucial for getting to this point.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          Inspired by the logic of OpenAPI, in less than five years it has managed to carve out a recognized position for itself in the world of APIs. 
          This project is seeking to improve the current state of event-driven architectures (EDA).
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          And, although it was born out of the need to fill a gap in the standardization of asynchronous APIs, the differential value of the initiative is that it has created its sense of purpose and has grown without a profit motive.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          One of the main challenges is to make the development experience super seamless, from idea to production. 
          Users should be able to create their first API within minutes without prior knowledge of AsyncAPI, the communication protocol, or anything else that's not business logic.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          Right now, the strategy of the project is to continue improving the specification, and implementing resources that make it more complete and solid. 
          This has led to the partnership with Postman (December 2020), a leading collaborative platform for API development and a reference within this sector all around the world. 
          This partnering allows it to boost the development of more and better tools to help engineers create and maintain Asynchronous APIs while using their favorite programming languages and frameworks.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          The next step has been to host the project on a neutral foundation to ensure the long-term sustainability and success of the initiative. AsyncAPI has been hosted by the Linux Foundation since March of 2021.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          However, none of the other goals are possible without the support of a large community. 
          AsyncAPI is and must remain a community-driven initiative.
        </Paragraph>
        
        <Heading level="h3" typeStyle="heading-md" className="my-5">
          <span id="asyncapiInNumbers">AsyncAPI, in numbers</span>
        </Heading>
        <Paragraph typeStyle="body-md" className="my-4">
          We, at AsynAPI, are trying to build the future of Event-Driven Architectures.
          We are steadily progressing towards our mission and we are growing as a strong community. 
          Interested to know more about our growth? Feel free to check our annual summary report: 
          
          <ul className="list-disc list-inside ml-4 my-4">
            <li className="py-1">
              <TextLink href="/blog/2020-summary" target="_blank">
                Summary report 2020
              </TextLink> 
            </li>
            <li className="py-1">
              <TextLink href="/blog/2021-summary" target="_blank">
                Summary report 2021
              </TextLink>
            </li>
          </ul>
          
        </Paragraph>

        <Heading level="h3" typeStyle="heading-md" className="my-5">
          <span id="valuesOfAsyncapi">Values of AsyncAPI</span>
        </Heading>
        <Paragraph typeStyle="body-md" className="my-4">
          <ul className="list-disc list-inside ml-4 my-4">
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <b>Innovative</b>. There is no other specification that covers the messaging needs in the event-driven architecture that AsyncAPI is covering. 
                What it tries to do is to integrate with the existing tools and remove walls for communication.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
              <b>Free</b>. It’s a free software project: it seeks the user's liberty by offering a tool that can be used and enhanced without restrictions.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
              <b>Open</b>. As it's an open-source project and not a company or a product, it works in a change of paradigm: it does not sell anything, it moves away from fierce competition and bets for cooperation.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <b>Multicultural and inclusive</b>. It’s an initiative with an international and multicultural vision. 
                It’s organic, always in constant mutation and change. 
                It also actively demands compliance with human rights, respect for racial, sexual, and cultural diversity equality. 
                And, of course, the equality between women and men.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <b>Transparent</b>. The initiative it’s built on transparency, being one of the main values of AsyncAPI, both internally and externally including its financing. 
                All the relevant data of the project is public. 
                The tasks that are being and will be worked on are public and participatory through Slack and GitHub.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <b>Horizontal and participative</b>. Its structure is based on horizontality; most of the decisions are defined as a group, including the Community. 
                Anyone can submit improvements, lines of action, or elements to be taken into account to strengthen AsyncAPI
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <b>User-friendly</b>. AsyncAPI bets for a seamless API development experience. Users should be able to create their first API within minutes without prior knowledge of AsyncAPI. It has to be natural, simple, and intuitive.
              </Paragraph>
            </li>
          </ul>
        </Paragraph>

        <Heading level="h3" typeStyle="heading-md" className="my-5">
          <span id="brandAndCompanies">Brands and companies using AsyncAPI</span>
        </Heading>
        <Paragraph typeStyle="body-md" className="my-4">
          The total number of companies and projects using AsyncAPI as well as their identity is impossible to know. 
          So far, we are aware that the following ones operate with it.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          <ul className="list-disc list-inside ml-4 my-4">
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://slack.com/signin#/signin" target="_blank" className="no-underline">
                  <b>Slack</b>
                </TextLink>: Business Communication Platform that permits to operate with multiple channels (public and private). 
                It currently has more than 10 million daily active users worldwide. 
                It was recently acquired by Salesforce.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://www.adidas.com/us" target="_blank" className="no-underline">
                  <b>Adidas</b>
                </TextLink>: Company dedicated to the manufacture of sports equipment and fashion products. 
                It is the largest sportswear manufacturer in Europe, second largest in the world. 
                This company has more than 150.000 sales outlets around the world.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://login.salesforce.com/?locale=es" target="_blank" className="no-underline">
                  <b>Salesforce</b>
                </TextLink>: Business consultancy company. It provides (CRM) service and other services. 
                It manages from small businesses to FORTUNE 500 companies and it has more than 150.000 customers.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://www.ibm.com" target="_blank" className="no-underline">
                  <b>IBM</b>
                </TextLink>: Company that manufactures and markets hardware and software. 
                It has operations in over 170 countries and provides hosting and consulting services in many areas.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://www.sap.com/index.html" target="_blank" className="no-underline">
                  <b>SAP</b>
                </TextLink>: Company dedicated to the design of computer products for business management. 
                Develops business software to manage operations and business-to-customer relationships. 
                It’s a large company with 100,330 employees.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://www.iqvia.com/" target="_blank" className="no-underline">
                  <b>IQVIA</b>
                </TextLink>: Company providing services for the combined health information technology and clinical research industries. 
                It employs more than 58.000 people in over 100 countries
              </Paragraph>
            </li>
          </ul>
        </Paragraph>

        <Heading level="h3" typeStyle="heading-md" className="my-5">
          <span id="funding">Funding</span>
        </Heading>
        <Paragraph typeStyle="body-md" className="my-4">
          AsyncAPI is an open source project and is therefore funded by talent and voluntary contributions. 
          It relies on the expertise and dedication of the <b>Community developers</b> who believe in the project and contribute to its evolution.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          Financially, there are individual donations and contributions made by users of the project, and others that come from different companies and initiatives that trust and support AsyncAPI through sponsorship. 
          The main sponsors that contribute to sustain this initiative are Postman, IQVIA Technology, Mulesoft, Salesforce, SAP, SLACK, Solace, and Tibco.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4"></Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          All the information about the project's economy, the amount of the donations, the identity of the donors, the sponsors supporting the project and the use of this money is public. 
          99% of the funding goes through the Open Collective. <TextLink href="https://opencollective.com/asyncapi" target="_blank">More information here</TextLink>.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          Open Collective is an online crowdfunding platform for open and transparent communities. 
          It provides the necessary tools to collect and share the finances raised with complete transparency. 
          It is an ideal collective for communities such as collaborative groups or open source projects among others. 
          This platform can be used to raise and transparently disburse money for the benefit of their members, their registered projects, and those who want to support them.
        </Paragraph>
        <Paragraph typeStyle="body-md" className="my-4">
          GitHub is a project management platform that also has the option to manage part of the financing. 
          It is also important that the company making the largest contribution to the initiative is Postman.
        </Paragraph>

        <Heading level="h3" typeStyle="heading-md" className="my-5">
          <span id="contact">Contact details</span>
        </Heading>
        <Paragraph typeStyle="body-md" className="my-4">
          <ul className="list-disc list-inside ml-4 my-4">
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <b>Press & communications info: </b>
                <TextLink href="mailto:press@asyncapi.io" target="_blank" className="no-underline">
                  <b>press@asyncapi.io</b>
                </TextLink>
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://twitter.com/asyncapispec?lang=es" target="_blank" className="no-underline">
                  <b>Twitter</b>
                </TextLink>:  It's used for disseminating all the news and information regarding the project, but also for resolving user queries and sharing news of projects related to technology.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://www.asyncapi.com/slack-invite" target="_blank" className="no-underline">
                  <b>Slack workspace</b>
                </TextLink>: The main place of encounter for the whole community of AsyncAPI.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://www.asyncapi.com/subscribe/" target="_blank" className="no-underline">
                  <b>Newsletter</b>
                </TextLink>: To learn about the status of the project, news, actualizations, recorded events, and meetings.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="/blog" target="_blank" className="no-underline">
                  <b>Blog</b>
                </TextLink>: It’s used to disseminate information related to the project. It's also open to collaborations.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://es.linkedin.com/company/asyncapi" target="_blank" className="no-underline">
                  <b>LinkedIn</b>
                </TextLink>: It's used to publish news related to the project or its environment. 
                It’s also used as a source of information.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://www.youtube.com/playlist?list=PLbi1gRlP7pijUwZJErzyYf_Rc-PWu4lXS" target="_blank" className="no-underline">
                  <b>YouTube Channel</b>
                </TextLink>: Where you can find conferences, AsyncAPI Open Meetings, and much more.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://github.com/asyncapi" target="_blank" className="no-underline">
                  <b>GitHub</b>
                </TextLink>: Issues (bugs, feature requests, etc.) and pull requests (PRs) for fixes or new features already discussed, as per the contributing guidelines.
              </Paragraph>
            </li>
            <li className="py-1">
              <Paragraph typeStyle="body-md" className="my-4">
                <TextLink href="https://github.com/asyncapi" target="_blank" className="no-underline">
                <b>AsyncAPI Open Meetings</b> 
                </TextLink>:
                AsyncAPI hosts different meetings every week. 
                They are focused on different topics, sometimes purely technical and sometimes about community building. 
                Pick one and join us!  
                <TextLink href="/community/meetings">
                  Learn more about our meetings
                </TextLink>
              </Paragraph>
            </li>
          </ul>
        </Paragraph>

        <Heading level="h3" typeStyle="heading-md" className="my-5">
          <span id="faq">Frequently asked questions</span>
        </Heading>
        <Paragraph typeStyle="body-md">
          <ul className="list-disc list-inside ml-4">
            <li className="py-1">
              <b>What is the goal of the project?</b> To make asynchronous APIs as successful and mature as REST APIs.
            </li>
            <li className="py-1">
              <b>What protocols does it support?</b> AsyncAPI is protocol-agnostic, so you can use it for APIs that work over any protocol (e.g., AMQP, MQTT, WebSockets, Kafka, STOMP, HTTP, Mercure, etc). For more information, refer to the <TextLink href="https://www.asyncapi.com/docs/reference/specification/latest#serverBindingsObject" target="_blank">
                 AsyncAPI specification documentation
                </TextLink>
            </li>
            <li className="py-1">
              <b>Who are the users of AsyncAPI?</b>AsyncAPI users are those who implement and maintain event-driven architecture. For example, people that write backend API using WebSocket, or people that maintain communication between their microservices using Kafka
            </li>
            <li className="py-1">
              <b>What is the AsyncAPI Community?</b> It’s the core of the initiative. 
              The AsyncAPI community contributes to the development of the tool, it promotes access and distribution of the specification allowing freedom of use, study, copying, modification, and redistribution to anyone who wishes to do so. 
              The cooperation between these people in all areas of software production generates a substantial improvement in the quality of the software, as well as greater dissemination and sustainability over time, and prioritizing the benefit of society over any other.
            </li>
            <li className="py-1">
              <b>Who can use it?</b> Anyone. All projects under AsyncAPI Initiative are part of the Linux Foundation, licensed under the Apache 2.0 license. It’s open to use and contribution.
            </li>
            <li className="py-1">
              <b>Where can I find more information?</b>
              <ul className="list-circle list-inside ml-4 my-2">
                <li>
                  Documentation: <TextLink href="/docs">https://www.asyncapi.com/docs</TextLink>
                </li>
                <li>
                  Talk by Fran Méndez, explaining the project: <TextLink href="https://www.youtube.com/watch?v=UID1nnuFDtM&list=PLbi1gRlP7piitNgvqhIAvGNZM_kvP0r8R">https://www.youtube.com/watch?v=UID1nnuFDtM&list=PLbi1gRlP7piitNgvqhIAvGNZM_kvP0r8R</TextLink>
                </li>
              </ul>
            </li>
          </ul>
        </Paragraph>

      </div>
    </GenericLayout>
  );
}