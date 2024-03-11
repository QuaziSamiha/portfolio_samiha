import emailjs from "@emailjs/browser";
import { useRef } from "react";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
      .sendForm("service_gb91irk", "template_xjidw5e", form.current, {
        publicKey: "JpBX4158GZ3fZx_r-",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS! message sent samiha");
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" /> <br />
        <label>Email</label>
        <input type="email" name="user_email" /> <br />
        <label>Message</label>
        <textarea name="message" /> <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default EmailForm;
