import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mayakpeg');
  if (state.succeeded) {
    return <div className="text-equator text-center mt-2 mb-4 text-xl">Thank you for your enquiry!</div>;
  }
  return (
    <form className="border- border-equator p-4 " onSubmit={handleSubmit}>
      <div className="flex flex-col py-2">
        <div className="border-b border-sundance">
          <label htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none bg-transparent border-none w-full  text-rolling-stone mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="name"
            type="name"
            name="name"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="border-b border-ebonyclay">
          <label htmlFor="email">
            Email Address
          </label>
          <input
            className="appearance-none bg-transparent border-none w-full text-rolling-stone mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="border-b border-sundance">
          <label htmlFor="company">
            Company
          </label>
          <input
            className="appearance-none bg-transparent border-none w-full text-rolling-stone  py-1 px-2 leading-tight focus:outline-none"
            id="company"
            type="company"
            name="company"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="border-b border-ebonyclay">
          <label htmlFor="message">
            Enquiry
          </label>
          <textarea
            className="appearance-none bg-transparent border-none w-full text-rolling-stone py-1 px-2 leading-tight focus:outline-none"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="m-4 text-indigo-500 bg-ebonyclay p-3 text-sundance text-3xl hover:bg-sundance
                     hover:text-ebonyclay hover:shadow rounded-xl inline-flex items-center
                     transform hover:scale-105 cursor-pointer mt-4 transform -rotate-1 w-1/4 justify-center"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
