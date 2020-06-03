import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork, MdSchool } from "react-icons/md";
import Layout from "../../components/Layout";
import styled from "styled-components";
import bvicon from "../../assets/bvicon.png";
import feevaleicon from "../../assets/feevaleicon.jpg";
import 'react-vertical-timeline-component/style.min.css';

const Container = styled.div`

    .header{
        display: flex;
    }
    .title{
        margin-left:1vw;
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
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            User Experience, Visual Design
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            User Experience, Visual Design
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                            Strategy, Social Media
                    </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Dec/09 - sep/10"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
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
                                <h2 className="vertical-timeline-element-title">Commercial credit operator</h2>
                                <h4 className="vertical-timeline-element-subtitle">
                                    BV Financeira, Brazil
                            </h4>
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
                        className="vertical-timeline-element--education"
                        date="Feb/05 - dec/09"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
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
                                <h3 className="vertical-timeline-element-title">Bachelor in Business Administration</h3>
                                <h4 className="vertical-timeline-element-subtitle">Feevale University, Brazil</h4>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </Layout>
    );
}