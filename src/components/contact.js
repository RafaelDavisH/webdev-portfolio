import React from 'react';


import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    margin: auto;
    input {
        width: 100%;
        height: 50px;
        padding:  0.5em;
        margin: 1.5em  0;
        border: none;
        border-radius: 3px;
        background-color: lightblue;
    };
    label {
        width: 100%;
        font-weight: bold;
    };

    textarea {
        width: 100%;
        border-radius: 3px;
        background-color: lightblue;
    }

    botton {

    }
`

const Contact = () => {
    return (

            <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <label>
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
            </Form>
    );
};

export default Contact;