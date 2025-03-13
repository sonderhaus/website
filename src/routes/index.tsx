import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80">
      <circle
        cx="40"
        cy="40"
        r="12"
        fill="none"
        stroke="#000"
        stroke-width="1.5"
      />

      <circle
        cx="40"
        cy="40"
        r="24"
        fill="none"
        stroke="#000"
        stroke-width="0.8"
        stroke-dasharray="1,2"
      />
      <circle
        cx="40"
        cy="40"
        r="36"
        fill="none"
        stroke="#000"
        stroke-width="0.5"
        stroke-dasharray="0.8,3"
      />

      <circle
        cx="100"
        cy="40"
        r="8"
        fill="none"
        stroke="#000"
        stroke-width="1.2"
      />
      <circle
        cx="100"
        cy="40"
        r="18"
        fill="none"
        stroke="#000"
        stroke-width="0.7"
        stroke-dasharray="1,2"
      />

      <circle
        cx="150"
        cy="40"
        r="5"
        fill="none"
        stroke="#000"
        stroke-width="1"
      />
      <circle
        cx="150"
        cy="40"
        r="12"
        fill="none"
        stroke="#000"
        stroke-width="0.5"
        stroke-dasharray="0.8,2"
      />

      <line x1="40" y1="40" x2="150" y2="40" stroke="#000" stroke-width="0.5" />
    </svg>
  );
}

function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Fixed Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex justify-between items-center bg-white shadow-sm">
        <div className="text-xl font-light tracking-widest">S O N D E R</div>
        <div className="hidden md:flex space-x-12 text-xs tracking-widest">
          <a href="#about" className="hover:text-gray-500 transition-colors">
            ABOUT
          </a>
          <a href="#concept" className="hover:text-gray-500 transition-colors">
            CONCEPT
          </a>
          <a href="#join" className="hover:text-gray-500 transition-colors">
            JOIN
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-xl">≡</button>
        </div>
      </nav>

      {/* Full Viewport Hero */}
      <section className="h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 pt-16">
        <div className="max-w-4xl">
          {/* <Logo /> */}

          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-none mb-12">
            Every passerby
            <br />
            has a story.
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mb-16 text-gray-600">
            A space for sharing authentic narratives{" "}
            <span className="text-black">anonymously</span>.
            <br />
            Where stories matter more than identity.
          </p>

          <div className="mt-10">
            <a
              href="#join"
              className="px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              Join Waitlist
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs tracking-widest mb-4 opacity-60">
            SCROLL
          </span>
          <div className="w-px h-16 bg-gray-300"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight">
                What is Sonder
              </h2>
            </div>

            <div className="md:col-span-8 space-y-12">
              <p className="text-xl font-light leading-relaxed text-gray-700">
                Sonder is the realization that each random passerby is living a
                life as vivid and complex as your own.
              </p>

              <p className="text-xl font-light leading-relaxed text-gray-700">
                Our platform creates a space where you can share your stories
                anonymously, free from the pressure of personal branding or
                social validation.
              </p>

              <p className="text-xl font-light leading-relaxed text-gray-700">
                In a world dominated by curated identities and performative
                interactions, Sonder offers a return to genuine human connection
                through the sharing of real, unfiltered experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section with Shapes */}
      <section id="concept" className="py-32 md:py-48 relative">
        {/* Decorative geometric shapes */}
        <div className="absolute top-1/4 right-24 w-64 h-64 border border-gray-100 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 left-24 w-32 h-32 border border-gray-200 opacity-40"></div>

        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 relative">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-24">
            Core Concepts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group">
              <div className="w-16 h-1 bg-gray-900 mb-8 transition-all duration-300 group-hover:w-24"></div>
              <h3 className="text-2xl font-light mb-6">Anonymity</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Share without fear of judgment. Your stories stand on their own
                merit, not your social status or personal brand.
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-1 bg-gray-900 mb-8 transition-all duration-300 group-hover:w-24"></div>
              <h3 className="text-2xl font-light mb-6">Topic Rooms</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Explore themed spaces for stories about specific experiences,
                emotions, or ideas that resonate with you.
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-1 bg-gray-900 mb-8 transition-all duration-300 group-hover:w-24"></div>
              <h3 className="text-2xl font-light mb-6">Meaningful Feedback</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Connect through thoughtful comments and reactions that focus on
                the story, not popularity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section id="join" className="py-32 md:py-48 bg-gray-50">
        <div className="max-w-lg mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-12 text-center">
            Join Waitlist
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-6 py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-black text-white hover:bg-gray-900 transition-colors text-xs uppercase tracking-widest"
            >
              {submitted ? "Thank you" : "Subscribe"}
            </button>
          </form>

          <p className="mt-12 text-sm text-gray-500 font-light text-center">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <div className="text-xl font-light tracking-widest">
                S O N D E R
              </div>
              <div className="text-sm mt-4 font-light text-gray-500">
                © 2025
              </div>
            </div>

            <div className="mt-12 md:mt-0 flex space-x-12">
              <a
                href="#"
                className="text-xs tracking-widest hover:text-gray-500 transition-colors"
              >
                PRIVACY
              </a>
              <a
                href="#"
                className="text-xs tracking-widest hover:text-gray-500 transition-colors"
              >
                TERMS
              </a>
              <a
                href="#"
                className="text-xs tracking-widest hover:text-gray-500 transition-colors"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
