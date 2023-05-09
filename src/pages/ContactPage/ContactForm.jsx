import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import { device } from 'styles/device';
import clsx from 'clsx';
import { CheckIcon } from '../../assets/images/icons';

const StyledForm = styled.form`
  color: var(--form_input-text);

  .inputs-wrapper {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: 400;
    font-size: 10px;

    .row {
      position: relative;
      width: 100%;
      padding-bottom: 20px;
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
        padding: 5px 30px 5px 10px;
        margin-top: 4px;
        border-top: 1px solid var(--form_input-border);
        border-left: 1px solid var(--form_input-border);
        border-radius: 5px;
        font-size: 1.2em;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          border: 1px solid var(--form_input-border);
          -webkit-text-fill-color: var(--form_input-text);
          -webkit-box-shadow: 0 0 0px 1000px transparent inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      }
      textarea {
        overflow-wrap: break-word;
        height: 40px;
      }
      svg {
        display: none;
      }
      input:focus + label,
      textarea:focus + label {
        visibility: visible;
      }

      /* show error after typing */
      input:not(:focus):not(:placeholder-shown):invalid,
      textarea:not(:focus):not(:placeholder-shown):invalid,
      textarea:not(:focus):not(:placeholder-shown).invalid {
        border: 1px solid var(--form_error);
        + label {
          visibility: visible;
          color: var(--form_error);
        }
      }

      /* show success when focus */
      input:focus:valid,
      textarea:focus:valid:not(.invalid) {
        ~ svg {
          all: unset;
          position: absolute;
          top: 31px;
          right: 5px;
          transform: translate(-50%, -50%);
          path {
            fill: var(--form_input-icon);
          }
        }
      }
      textarea:focus:valid:not(.invalid) {
        ~ svg {
          top: 40px;
        }
      }

      input:valid,
      textarea:valid {
        + label {
          visibility: visible;
          color: var(--form_label--valid);
        }
        color: var(--form_input-text);
        border: 1px solid var(--form_input-border);
      }

      input:focus,
      textarea:focus {
        color: var(--form_input--focus);
        border: 1px solid var(--form_input--focus);
        &::placeholder {
          color: transparent;
        }
        + label {
          visibility: visible;
          color: var(--form_input--focus);
        }
      }
    }
  }

  .auto-reply-wrapper {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 1.2em;
    line-height: 2em;
    @media ${device.tablet} {
      margin-top: 10svh;
    }
  }
`;

const Button = styled.button`
  font-family: 'Noto Sans', sans-serif;
  height: 30px;
  width: fit-content;
  align-self: flex-end;
  margin-top: 2svh;
  padding: 0 1rem;
  color: var(--form_btn-send-text);
  background-color: var(--form_btn-send-bg);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: transparent;
    color: var(--form_btn--hover);
    border: 1px solid var(--form_btn--hover);
  }

  &.btn-reset {
    margin-top: 10svh;
    color: var(--form_btn-reset-text);
    border: 1px solid var(--form_btn-reset-border);
    background-color: transparent;

    &:hover,
    &:active {
      color: var(--form_btn--hover);
      border: 1px solid var(--form_btn--hover);
    }
  }
`;

function ContactForm() {
  const { t } = useTranslation([''], { keyPrefix: 'contactPage' });
  // ignore this line
  const [state, handleSubmit] = useForm('mgebdqkg'); //state(True/False): if form is submit

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
        {t('contactForm.hello')} {userData.name},<br />
        <br />
        {t('contactForm.thankMessage')}
      </div>

      <Button className="btn-reset" onClick={handleRestart}>
        {t('contactForm.restartBtn')}
      </Button>
    </div>
  ) : (
    <>
      <p className="drop-message">{t('dropMessage')}</p>
      <div className="inputs-wrapper">
        {/* name */}
        <div className="row" onClick={() => nameRef.current.focus()}>
          <input
            id="name"
            ref={nameRef}
            type="text"
            name="name"
            placeholder={t('contactForm.name.placeholder')}
            value={userData.name}
            onChange={handleInputChange}
            pattern="\S+.*"
            minLength="1"
            required
          ></input>
          <label htmlFor="name">{t('contactForm.name.label')}</label>
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
            placeholder={t('contactForm.email.placeholder')}
            value={userData.email}
            onChange={handleInputChange}
            required
          ></input>
          <label htmlFor="email">{t('contactForm.email.label')}</label>
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
            placeholder={t('contactForm.message.placeholder')}
            value={userData.message}
            onChange={handleInputChange}
            pattern="\S+.*"
            minLength="5"
            required
          ></textarea>
          <label htmlFor="message">{t('contactForm.message.label')}</label>
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
          {t('contactForm.sendBtn')}
        </Button>
      </div>
    </>
  );

  return <StyledForm onSubmit={handleSubmit}>{content}</StyledForm>;
}

export default ContactForm;
