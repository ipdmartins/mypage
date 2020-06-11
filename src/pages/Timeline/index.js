import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork, MdSchool } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import Layout from "../../components/Layout";
import styled from "styled-components";
import bvicon from "../../assets/bvicon.png";
import feevaleicon from "../../assets/feevaleicon.jpg";
import santandericon from "../../assets/santandericon.png";
import aiesecicon from "../../assets/aiesecicon.jpg";
import carrickicon from "../../assets/carrickicon.jpg";
import aliicon from "../../assets/aliicon.jpeg";
import udescicon from "../../assets/udescicon.jpg";
import vextaicon from "../../assets/vextaicon.png";
import empdsicon from "../../assets/empdsicon.png";
import fiergsicon from "../../assets/fiergsicon.png";
import 'react-vertical-timeline-component/style.min.css';

const Container = styled.div`

    .header{
        display: flex;
    }
    .title{
        margin-left:1vw;
    }
    .title h2, h4{
        color: black;
    }
    #icon:hover{
        transform: scale(1.1);
    }

`;

export default function Timeline() {
    return (
        <Layout>
            <Container>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jul/19 - Curretly"
                        icon="black"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="header">
                            <a
                                href="https://www.udesc.br/ceavi/empds"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={empdsicon} id="icon" />
                            </a>

                            <div className="title">
                                <h2 >Software developer intern</h2>
                                <h4>UDESC - Escritorio Modelo, Brazil</h4>
                            </div>
                        </div>
                        <p>
                            <ul>
                                <li>I worked in a Node.JS and React.JS project to build a management system.</li>
                                <li>The software aims to manage Institution evaluations, patrimonial census, and public legislation.</li>
                                <li>The purpose is to keep programming and give continuity for an application for the State Department of Education.</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jul/17 - Sep/17"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="header">
                            <a
                                href="https://www.vexta.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={vextaicon} id="icon" />
                            </a>

                            <div className="title">
                                <h2>Technical support</h2>
                                <h4>Vexta Systems, Brazil</h4>
                            </div>
                        </div>
                        <p>I was responsible to manage the first contact with the user, aiming to solve clients' needs related to the system.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Feb/17 - currently"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <div className="header">
                            <a
                                href="https://www.udesc.br/international"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={udescicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>Bachelor in Software Engineering</h2>
                                <h4>UDESC (State University), Brazil</h4>
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Apr/15 - Sep/16"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="header">
                            <a
                                href="https://www.sesirs.org.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={fiergsicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>English instructor</h2>
                                <h4>SESI RS, Brazil</h4>
                            </div>
                        </div>
                        <p>I conducted general English classes at school and conversation groups in companies.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep/12 - Oct/14"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="header">
                            <a
                                href="shorturl.at/dyKO1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={aliicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>Innovation and management advisor</h2>
                                <h4>SEBRAE - ALI's Project , Brazil</h4>
                            </div>
                        </div>
                        <p>
                            <ul>
                                <li>I created group of 55 small business from commerce, industry, and services.</li>
                                <li>I diagnosed all the companies to establish an action plan, aiming innovation and management improvements.</li>
                                <li>I accompanied the businesses for two years to help in the implementation plan.</li>
                                <li>I measured the companies according to a scientific method, and two articles were published by CNPq Brazil.</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Apr/10 - Apr/12"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<GiWorld />}
                    >
                        <div className="header">
                            <a
                                href="https://www.linkedin.com/company/carrick-institute-of-education/about/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={carrickicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>Exchange for English studies</h2>
                                <h4>Sydney/Australia</h4>
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Oct/10 - Feb/11"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<GiWorld />}
                    >
                        <div className="header">
                            <a
                                href="https://aiesec.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={aiesecicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>International exchange as volunteer</h2>
                                <h4>AIESEC Cameroun/Africa</h4>
                            </div>
                        </div>
                        <p>
                            I was part of a project in a local school where the <br />
                        objective was to promote environmental awareness
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Dec/09 - sep/10"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="header">
                            <a
                                href="https://www.bv.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={bvicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>Commercial credit operator</h2>
                                <h4>BV Financeira, Brazil</h4>
                            </div>
                        </div>
                        <p>
                            <ul>
                                <li>Credit solutions for clients</li>
                                <li>Telemarketing and sourcing of new clients</li>
                                <li>Vehicle financing and credit card management</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jul/07 - Mar/09"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="header">
                            <a
                                href="https://www.santander.com.br/hotsite/santanderfinanciamentos/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={santandericon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>Administrative assistant</h2>
                                <h4>ABN AMRO BANK (Aymore Financiamentos), Brazil</h4>
                            </div>
                        </div>
                        <p>
                            <ul>
                                <li>Responsible for supporting commercial team needs</li>
                                <li>Management of administrative tasks related to vehicle financing</li>
                                <li>Credit analysis of clients for financing and leasing.</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Sep/05 - Sep/07"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <div className="header">
                            <a
                                href="https://aiesec.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={aiesecicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>Volunteer operational director</h2>
                                <h4>AIESEC, Brazil</h4>
                            </div>
                        </div>
                        <p>
                            I promoted exchanges of academic students,
                            organized events, and managed a team.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Feb/05 - dec/09"
                        iconStyle={{ background: '#403cfc', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <div className="header">
                            <a
                                href="https://www.feevale.br/en/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={feevaleicon} id="icon" />
                            </a>
                            <div className="title">
                                <h2>Bachelor in Business Administration</h2>
                                <h4>Feevale University, Brazil</h4>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </Layout>
    );
}