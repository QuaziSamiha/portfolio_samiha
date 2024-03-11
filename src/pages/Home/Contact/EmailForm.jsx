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
    <div className="bg-[#263238] bg-opacity-70 w-96 mx-12">
      <h1 className="text-center font-semibold text-white text-base tracking-wide uppercase mt-6">
        Let&apos;s build something great together
      </h1>
      <form ref={form} onSubmit={sendEmail} className="p-6">
        <div className="form-control ">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name..."
            className="p-2 text-sm rounded bg-[#263238] text-[#92e3a9] my-2"
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email..."
            className="p-2 text-sm rounded bg-[#263238] text-[#92e3a9] my-2"
          />
        </div>
        <div className="form-control">
          <textarea
            name="message"
            placeholder="Write Message Here..."
            className="rounded p-2 text-sm bg-[#263238] text-[#92e3a9] h-24 my-2"
          />
        </div>
        <div className="form-control mt-2">
          <input
            type="submit"
            value="Send"
            className="py-2 rounded font-semibold bg-[#92e3a9]"
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
