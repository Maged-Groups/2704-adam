const Contact = () => {
    return (
        <div className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-pink-600 mb-6">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold text-pink-600 mb-4">Get in Touch</h2>
                        <div className="space-y-4 text-pink-700">
                            <p>
                                <span className="font-medium">Address:</span> 123 Fashion Ave,
                                New York, NY 10001
                            </p>
                            <p>
                                <span className="font-medium">Phone:</span> (212) 555-7890
                            </p>
                            <p>
                                <span className="font-medium">Email:</span> hello@jamila-closet.com
                            </p>
                            <div className="pt-4">
                                <h3 className="font-medium mb-2">Business Hours:</h3>
                                <p>Monday-Friday: 9AM - 6PM</p>
                                <p>Saturday: 10AM - 4PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-pink-600 mb-4">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-pink-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full border border-pink-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-pink-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full border border-pink-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-pink-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full border border-pink-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;