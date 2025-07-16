import { useState } from "react";
import emailjs from "emailjs-com";
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiPaperAirplane,
} from "react-icons/hi2";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsLinkedin,
} from "react-icons/bs";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f6834b5",
        "template_cxizr7m",
        {
          name,
          from_email: email,
          message,
        },
        "FlxZq2BDJBixW0coH"
      )
      .then(() => {
        setSent(true);
        setError(false);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => {
        console.error("Email send failed:", err);
        setError(true);
      });
  };

  return (
    <>
      <section id="contact" className="pt-24 pb-20 px-6 md:px-20 text-white">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out! Whether you have a question, project, or
              just want to connect, I'm always open to talk.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <HiPhone className="text-green-400 text-lg" />
                +63 912 345 6789
              </p>
              <p className="flex items-center gap-2">
                <HiEnvelope className="text-amber-400 text-lg" />
                bonjess@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <HiMapPin className="text-red-400 text-lg" />
                Bagong Silang, Caloocan City
              </p>
            </div>

            <motion.div
              className="flex gap-5 text-2xl mt-6"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.25 }}
              viewport={{ once: true }}
            >
              {[ // Socials
                {
                  icon: <BsFacebook />,
                  href: "https://www.facebook.com/share/1QVpihR2fB/",
                  color: "text-[#1877F2]",
                },
                {
                  icon: <BsInstagram />,
                  href: "https://www.instagram.com/jesstfmn?igsh=aDdsYWhlMHI3b3F0",
                  color: "text-[#E1306C]",
                },
                {
                  icon: <BsTelegram />,
                  href: "https://t.me",
                  color: "text-sky-400",
                },
                {
                  icon: <BsLinkedin />,
                  href: "https://linkedin.com",
                  color: "text-[#0A66C2]",
                },
                {
                  icon: <HiEnvelope />,
                  href: "mailto:bonjess@gmail.com",
                  color: "text-yellow-400",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.color} hover:scale-110 transition`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.25 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-1 text-white">
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Have a project in mind or just want to say hello? Fill out the
              form below — I'd love to hear from you!
            </p>

            <input
              type="text"
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />

            <textarea
              required
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full py-2 rounded-lg border border-blue-600 text-white hover:bg-blue-600 transition flex items-center justify-center gap-2"
            >
              <HiPaperAirplane className="text-lg" />
              Send Message
            </button>

            {sent && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm text-center">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <motion.hr
        className="border-t border-gray-700 my-8 mx-auto w-4/5"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      <motion.footer
        className="text-center text-gray-400 text-sm px-6 pb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
      >
        <p className="mb-2">
          Thank you for visiting my portfolio. I’m always open to exciting new
          opportunities, collaborations, and creative ideas. Feel free to reach
          out!
        </p>
        <p>&copy; {new Date().getFullYear()} Jess Boncayao. All rights reserved.</p>
      </motion.footer>
    </>
  );
};

export default Contact;
