import { sendContactMail } from "./actions";

const Contact = () => {
  return (
    <div className="w-full bg-gray-800 h-screen">
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center text-white">
            Contact us
          </p>
          <form action={sendContactMail}>
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label
                  htmlFor="name"
                  className="font-semibold leading-none text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label
                  htmlFor="email"
                  className="font-semibold leading-none text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label
                  htmlFor="subject"
                  className="font-semibold leading-none text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label
                  htmlFor="message"
                  className="font-semibold leading-none text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
