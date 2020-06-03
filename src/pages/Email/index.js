import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import nodemailer from 'nodemailer';
import Layout from "../../components/Layout";

const Container = styled.div`
  text-align:center;
  margin-top: 3vh;
  
    
  .emailFormDiv{
    display:inline-block;
    margin-left: -15vw;
  }
  h3{
    margin-top: 1vh;
  }
  .formDiv{
    margin-top: 4vh;
    border: double;
    width: 40vw;
    padding: 4%;
    font-size: 18px;
  }

  .emailContent{
    display:grid;
  }
  .emailContent label{
    text-align:left;
    float: left;
  }
  .emailContent input, textarea{
    margin: 0 0 3vh 0;
  }
  .emailContent input{
    height:4vh;
  }
  .emailContent textarea{
    height:20vh;
  }
  .emailContent button{
    width:150px;
    height: 40px;
    margin-left:35%;
    font-weight:bold;
    background-color: #1E7E34;
    color: white;
  }
  .emailContent button:hover{
    opacity:0.8;
  }
`;

export default function Email() {
  const [state, setState] = useState({
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  });

  function formSubmit(e) {
    e.preventDefault()

    setState({
      buttonText: '...sending'
    })

    var smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      auth: {
        user: 'USERNAME',
        pass: 'PASSWORD'
      }
    });

    var mailOptions = {
      from: state.email,
      to: 'ipdmartins@gmail.com',
      html: `<p>${state.name}</p>
            <p>${state.email}</p>
            <p>${state.message}</p>`
    };

    smtpTransport.sendMail(mailOptions,
      (error, response) => {
        if (error) {
          console.log('Message not sent')
        } else {
          setState({ sent: true }, resetForm())
        }
        smtpTransport.close();
      });

  }

  function resetForm() {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }

  return (
    <Layout>
      <Container>
        <div className="emailFormDiv">

          <h2>Hi! Thank you for contacting me.</h2>
          <h4>My e-mail: ipdmartins@gmail.com</h4>
          <h4>If you prefer, feel free to send an e-mail from your inbox or</h4>
          <h3>Please, fill up below and I'll answer you back asap.</h3>
          <div className="formDiv">

            <form className="emailContent" onSubmit={(e) => formSubmit(e)}>

              <label >Your Name</label>
              <input onChange={e => setState({ name: e.target.value })}
                type="text" placeholder="Your Name" value={state.name} />

              <label >Your Email</label>
              <input onChange={(e) => setState({ email: e.target.value })}
                type="email" placeholder="your@email.com" required value={state.email} />

              <label >Your Message</label>
              <textarea onChange={e => setState({ message: e.target.value })}
                type="text" placeholder="Please write your message here"
                value={state.message} required />

              <button type="submit" >{state.buttonText}</button>

            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
