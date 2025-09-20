import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js","Express.js", "MongoDB", "MySQL"];
  const languages=["C++","Java","Python"]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I recently completed my B.Tech in Computer Science and Engineering and have hands-on experience building reliable, user-focused applications.
              I have a strong grasp of core CS fundamentals and am passionate about software development and machine learning.
            </p>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science & Engineering </strong> -VNR Vignana Jyothi Institute of Engineering and Technology
                  (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structure and Algorithm, Object Oriented Programming ,Database Management Systems...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Full Stack developer intern at  Crosspapers Edtech Pvt.Ltd {" "}
                  </h4>
                  <h4 className="font-semibold">(April,2024 - July,2024)</h4>
                  <br></br>
                  <p>
                    Worked on a chat module integrating new features and improving interface and user experience.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
