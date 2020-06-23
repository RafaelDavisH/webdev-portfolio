import React from 'react';
import '../utils/fontawesome'
import useSiteMetadata from "../hooks/use-site-metadata";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    const { siteTitle } = useSiteMetadata();
    return (
<div id="contact"className=" w-full flex justify-center">
    <div className="flex flex-wrap max-w-screen-sm mb-6 ">
            <h2 className="mt-12 font-medium mx-auto text-6xl leading-none my-4">Let's Talk about your <br /><span className="text-3xl"> project, idea, or website to get started.</span></h2>
        <form className="mt-12 text-gray-200 w-full py-6 px-4" method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="text-yellow-500 block uppercase tracking-wide text-sm font-bold mb-2" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        className="appearance-none text-2xl block w-full  rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullName" name="fullName" type="text" placeholder="Mark Florence" required />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 ">
                    <label className="block uppercase tracking-wide mtext-s font-bold mb-2 text-yellow-500" htmlFor="email">
                        email
                    </label>
                    <input
                        className="appearance-none  text-2xl block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" name="email" type="email" placeholder="example@xzy.com" required />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-sm text-yellow-500  mb-2" htmlFor="company">
                        Company
                    </label>
                    <input
                        className="appearance-none  text-2xl block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                        id="company" name="company" type="text" placeholder="Optional" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-sm text-yellow-500  mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="appearance-none text-2xl block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" name="message" placeholder="Your message here...">
                    </textarea>
                </div>
            </div>
            <button type="submit"
                className="float-right transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 text-white font-bold h-16 w-16 transform rounded-full" >
                <FontAwesomeIcon icon="paper-plane" size="lg"className="-ml-1" />
            </button>
        </form>

       <p className="mx-auto mt-16 text-gray-200"> &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.</p>
    </div>
</div>
    );
};

export default Contact;