import { useForm } from "react-hook-form";
import "./ContactForm.css";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="contact">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="contact-form"
          className="contact-form-inner"
          noValidate
        >
          <input
            placeholder="Name*"
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p className="error">{errors.name?.message}</p>

          <input
            placeholder="Email*"
            type="email"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>

          <textarea
            maxLength={300}
            placeholder="Message* (max 300 characters)"
            {...register("message", { required: "Message is required" })}
          />
          <p className="error">{errors.message?.message}</p>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
