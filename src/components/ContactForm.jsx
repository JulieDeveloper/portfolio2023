import { useForm, ValidationError } from '@formspree/react';
import { useState, useRef } from 'react';

import styled from 'styled-components';
import '../styles/color.scss';
import { device } from 'styles/device';
import clsx from 'clsx';

import { CheckIcon } from '../assets/images';

const StyledForm = styled.form`
  margin-top: 30px;
  color: var(--grey600);
  font-weight: 400;
  font-size: 10px;
  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    .row {
      position: relative;

      width: 100%;
      padding-bottom: 12px;
      display: flex;
      flex-direction: column-reverse;
      label {
        visibility: hidden;
        height: 12px;
      }
      input,
      textarea {
        all: unset;
        height: 18px;
        padding: 5px 25px 5px 10px;
        margin-top: 4px;
        border-top: 1px solid var(--grey600);
        border-left: 1px solid var(--grey600);
        border-radius: 5px;
        font-size: 1.2em;
        color: var(--grey600);
      }
      textarea {
        overflow-wrap: break-word;
        height: 30px;
      }
      svg {
        display: none;
      }
      input:focus + label,
      textarea:focus + label {
        visibility: visible;
        color: var(--dark);
        /* border-color: var(--dark); */
      }
      /* show error after typing */
      input:not(:focus):not(:placeholder-shown):invalid,
      textarea:not(:focus):not(:placeholder-shown):invalid,
      textarea:not(:focus):not(:placeholder-shown).invalid {
        border: 2px solid var(--red);
        + label {
          visibility: visible;
          color: var(--red);
        }
      }

      /* show success when focus */
      input:focus:valid,
      textarea:focus:valid:not(.invalid) {
        ~ svg {
          all: unset;
          position: absolute;
          top: 29px;
          right: 5px;
          transform: translate(-50%, -50%);
        }
      }
      textarea:focus:valid:not(.invalid) {
        ~ svg {
          top: 35px;
        }
      }

      input:valid,
      textarea:valid {
        border: 1px solid var(--grey600);
        + label {
          visibility: visible;
          color: var(--grey600);
        }
      }

      input:focus,
      textarea:focus {
        color: var(--dark);
        border: 1px solid var(--dark);
        &::placeholder {
          color: transparent;
        }
        + label {
          visibility: visible;
          color: var(--dark);
        }
      }
    }
  }

  .auto-reply-wrapper {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 12px;
    color: var(--dark);
    margin-top: 20px;

    /* .btn-reset {
      height: 30px;
      width: 40%;
      align-self: flex-end;
      margin-top: 30px;

      color: var(--grey900);
      border: 1px solid var(--grey800);
      background-color: transparent;
      border-radius: 5px;
      cursor: pointer;
    } */
  }
`;

const Button = styled.button`
  position: relative;
  height: 30px;
  width: 50%;
  align-self: flex-end;
  margin-top: 10vh;
  color: var(--light);
  background-color: var(--grey600);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: var(--light);
    border-radius: 5px;
    transform-origin: left;
    transition: transform 2s ease-out;
    transform: scale(0, 1);
  }

  &:hover,
  &:active {
    background-color: var(--dark);
    color: var(--dark);
    z-index: 1;
    &:before {
      width: 100%;
      transform: scale(1, 1);
      z-index: -1;
    }
  }
  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.tablet} {
    /* width: 40%; */
  }
`;

function ContactForm() {
  const [state, handleSubmit] = useForm('mzbqrjgj'); //state(True/False): if form is submit

  const defaultData = {
    name: '',
    email: '',
    message: '',
  };
  const [userData, setUserData] = useState(defaultData);
  const [isMessageWhiteSpace, setIsMessageWhiteSpace] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleRestart = () => {
    window.location.reload(false);
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'email') {
      value = e.target.value.toLowerCase();
    }

    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    if (e.target.name === 'message') {
      messageValidation(e);
    }
  };

  const messageValidation = (e) => {
    if (e.target.name !== 'message') {
      return;
    }
    const re = /^\s+$/;
    const message = e.target.value;
    const includeWhiteSpace = re.test(String(message));
    setIsMessageWhiteSpace(includeWhiteSpace);
  };

  const content = state.succeeded ? (
    <div className="auto-reply-wrapper">
      <div className="message">
        Hello {userData.name},<br />
        <br />
        Thank you for getting in touch with me. I will get back to you shortly.
      </div>

      <Button className="btn-reset" onClick={handleRestart}>
        OK!
      </Button>
    </div>
  ) : (
    <div className="inputs-wrapper">
      {/* name */}
      <div className="row" onClick={() => nameRef.current.focus()}>
        <input
          id="name"
          ref={nameRef}
          type="text"
          name="name"
          placeholder="name"
          value={userData.name}
          onChange={handleInputChange}
          pattern="\S+.*"
          minLength="1"
          autoFocus
          required
        ></input>
        <label htmlFor="name">Name</label>
        <CheckIcon />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      {/* email */}
      <div className="row" onClick={() => emailRef.current.focus()}>
        <input
          id="email"
          ref={emailRef}
          type="email"
          name="email"
          placeholder="email"
          value={userData.email}
          onChange={handleInputChange}
          required
        ></input>
        <label htmlFor="email">Email</label>
        <CheckIcon />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      {/* message */}
      <div className="row" onClick={() => messageRef.current.focus()}>
        <textarea
          id="message"
          ref={messageRef}
          className={clsx(isMessageWhiteSpace && 'invalid')}
          name="message"
          placeholder="message"
          value={userData.message}
          onChange={handleInputChange}
          pattern="\S+.*"
          minLength="5"
          required
        ></textarea>
        <label htmlFor="message">Message</label>
        <CheckIcon />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <Button
        className="btn-submit"
        type="submit"
        disabled={state.submitting || isMessageWhiteSpace}
      >
        Send Message
      </Button>
    </div>
  );

  return <StyledForm onSubmit={handleSubmit}>{content}</StyledForm>;
}

export default ContactForm;
