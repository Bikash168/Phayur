'use client';
import { motion } from 'framer-motion';

export default function AboutUs() {
    return (
        <section
            id="who"
            className="relative z-10 py-28 px-6 md:px-20 bg-gradient-to-b from-[#e6f4ea] via-[#f2fdf6] to-[#eaf9f1] overflow-hidden w-full m-0 p-0"
        >
            {/* Full width grid background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-no-repeat bg-cover bg-center opacity-5 pointer-events-none z-0" />

            {/* Main content */}
            <motion.div
                className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 backdrop-blur-xl bg-white/80 border border-gray-200 rounded-3xl shadow-lg p-10 z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Left Side Image */}
                <motion.div
                    className="w-full md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto mb-10 py-6 md:py-0"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
                >
                    <img
                        src="/leaf-pattern.jpg"
                        alt="Nature Theme"
                        className="w-full h-auto rounded-3xl shadow-xl object-cover"
                    />
                </motion.div>

                {/* Right Side Text */}
                <div className="w-full md:w-2/3">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold text-green-800 mb-6 relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                    >
                        About Us
                        <span className="block w-16 h-1 bg-green-500 mt-2 rounded"></span>
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        We are a dynamic collective of scientists, technologists, and traditional knowledge holders, working to unite <strong>emerging global technologies</strong> with <strong>Indigenous Wisdom</strong>.
                    </motion.p>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        Our impact spans across <strong>climate resilience, regenerative agriculture, bio-innovation, clean energy</strong>, and <strong>eco-conscious healthcare</strong>. We thrive at the intersection of tradition and innovation, driven by sustainability and social impact.
                    </motion.p>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Our mission is to engineer <strong>eco-aligned, community-centered solutions</strong> that nurture ecosystems and empower generations. With every initiative, we bring life to the vision of a regenerative, just, and thriving planet.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
