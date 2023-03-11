import React from "react";
import "./Form.css";
// import { MdEmail } from "react-icons/md";

const Form = () => {
  function subscribe() {
    alert("your message sent");
  }
  function showtoast() {
    console.log("display:unhidden");
  }
  return (
    <div>
      <div className="container form ">
        <form action="/">
          <div className="names d-flex flex-row flex-wrap text-uppercase ">
            <fieldset>
              <label htmlFor="fname" className="h-2 fname text-muted">
                first-name
              </label>
              <br />
              <input type="text" placeholder="Aman" />
            </fieldset>

            <fieldset className="ms-5">
              <label htmlFor="lname" className="h-2 lname ms-2 text-muted">
                last-name
              </label>
              <br />
              <input type="text ms-2  " placeholder="Dubey" />
            </fieldset>
          </div>

          <div className="contacts d-flex flex-row flex-wrap text-uppercase mt-4 ">
            <fieldset>
              <label htmlFor="fname" className="h-2 fname  text-muted ">
                mail
              </label>
              <br />
              <input type="email" placeholder="abc@gmail.com" />
            </fieldset>

            <fieldset className="ms-5">
              <label htmlFor="lname" className="h-5 lname  text-muted">
                phone
              </label>
              <br />
              <input type="number" placeholder="000-000-0000" />
            </fieldset>
            <fieldset>
              <label htmlFor="radio" className="pt-4 pb-3 text-muted">
                {" "}
                select the topic you want to work with?
              </label>
              <div className="d-flex flex-row flex-wrap form_radio pb-5">
                <input
                  type="radio"
                  id="web-design"
                  placeholder="aman"
                  name="service"
                />
                <label htmlFor="web-design"> web design</label>

                <input type="radio" id="web-development" name="service" />
                <label htmlFor="web-development"> web development</label>

                <input type="radio" id="api-development" name="service" />
                <label htmlFor="api-development"> api development</label>

                <input type="radio" id="hire" className="pe-2" name="service" />
                <label htmlFor="hire"> hire</label>
                <input
                  type="radio"
                  id="others"
                  className="pe-2"
                  name="service"
                />
                <label htmlFor="others"> others</label>
              </div>
            </fieldset>
            <fieldset>
              <label className="text-muted"> message</label> <br />
              <input
                type="text"
                className="message-type"
                placeholder="good website"
              />
            </fieldset>
            <button
              title="send"
              type="button"
              onClick={subscribe}
              class="  text-uppercase formbtn  mt-3"
            >
              subscribe
            </button>
          </div>
        </form>

        <button type="button" class="btn btn-primary" onClick={showtoast}>
          Show live toast
        </button>

        <div className="toast-container position-fixed bottom-0 start-0 p-3">
          <div
            class="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img src="..." class="rounded me-2" alt="..." />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
