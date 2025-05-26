const About = () => {
    return (
        <div className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-pink-600 mb-6">Our Story</h1>
                <div className="space-y-6 text-pink-700">
                    <p>
                        Jamila Closet was founded in 2023 with a simple mission: to provide
                        elegant, affordable women's clothing that makes every woman feel confident.
                    </p>
                    <p>
                        Named after our founder's grandmother, Jamila, we honor the tradition
                        of craftsmanship while embracing modern styles.
                    </p>
                    <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                        <h2 className="text-xl font-semibold text-pink-600 mb-3">Our Values</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Ethically sourced materials</li>
                            <li>Inclusive sizing (XS-3XL)</li>
                            <li>100% satisfaction guarantee</li>
                        </ul>
                    </div>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/about.jpg" // Changed path (removed "public")
                            alt="Jamila Closet Team"
                            className="rounded-lg shadow-md w-full max-w-[200px] sm:max-w-[100px] md:max-w-[400px] md:max-h-[250px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;