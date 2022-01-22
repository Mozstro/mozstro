import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mayakpeg');
  if (state.succeeded) {
    return <div className="text-ebonyclay font-bold bg-hippiegreen p-4 text-center mt-2 mb-4 text-2xl">Thank you for your enquiry!</div>;
  }
  return (
    <form className="rounded border-equator p-4 bg-sundance" onSubmit={handleSubmit}>
      <div className="flex text-lg flex-col py-2">
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border-2 border-rolling-stone w-full text-rolling-stone mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="name"
            type="name"
            name="name"
            required
            minLength={2}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email Address
          </label>
          <input
            className="appearance-none w-full border-2 border-rolling-stone mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="email"
            type="email"
            name="email"
            required
            minLength={2}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="company">
            Company
          </label>
          <input
            className="appearance-none border-2 border-rolling-stone w-full bg-ebony-clay  py-1 px-2 leading-tight focus:outline-none"
            id="company"
            type="company"
            name="company"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="message">
            Enquiry
          </label>
          <textarea
            className="appearance-none border-2 border-rolling-stone w-full text-rolling-stone py-1 px-2 leading-tight focus:outline-none"
            id="message"
            name="message"
            required
            minLength={10}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="m-4 bg-ebonyclay p-2 text-sundance text-2xl hover:bg-sundance
          hover:text-ebonyclay hover:shadow rounded-xl inline-flex items-center
          transform hover:scale-105 cursor-pointer mt-4 transform -rotate-11 w-1/2 lg:w-1/4 justify-center"
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
