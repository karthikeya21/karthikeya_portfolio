import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
  <RevealOnScroll>
    <div className="mx-auto w-full max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FiMail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:b.karthik2107@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  b.karthik2107@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FiPhone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+919989209019"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9989209019
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FiMapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Telangana, India</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/karthikeya-singh-bondili-34340923b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your email..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </RevealOnScroll>
</section>

  );
};
