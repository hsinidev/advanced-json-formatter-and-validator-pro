import React, { useState } from 'react';

const SeoContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full glass-panel rounded-xl shadow-2xl relative overflow-hidden transition-all duration-700 mt-12 mb-8">
      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The Ultimate Guide to JSON Formatting, Validation, and Optimization",
          "description": "A comprehensive 2024 guide to mastering JSON. Learn validation, formatting best practices, debugging strategies, and schema design.",
          "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED",
            "url": "https://github.com/hsinidev"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Doodax",
            "logo": {
              "@type": "ImageObject",
              "url": "https://doodax.com/favicon.svg"
            }
          },
          "datePublished": "2024-05-20",
          "dateModified": "2024-05-21"
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Is my JSON data secure on Doodax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Doodax processes all JSON data client-side within your browser. No data is ever transmitted to a server."
            }
          }, {
            "@type": "Question",
            "name": "What is the difference between JSON validation and formatting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Validation checks if the code follows official JSON syntax rules (RFC 8259). Formatting beautifies valid JSON by adding indentation and line breaks for human readability."
            }
          }]
        })}
      </script>

      <div className={`p-8 md:p-12 transition-all duration-700 ease-in-out relative ${isExpanded ? 'h-auto opacity-100' : 'h-[200px] overflow-hidden'}`}>
        
        {/* Gradient Overlay for Read More */}
        {!isExpanded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950/95 z-10 flex flex-col justify-end items-center pb-8">
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Unlock the Ultimate JSON Guide</h2>
            <p className="text-blue-200 mb-4">Click below to read the full analysis</p>
          </div>
        )}

        <article className="prose prose-invert prose-lg max-w-none text-gray-300">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8 text-center">
            The Ultimate Guide to JSON: Formatting, Validation, and Optimization for Modern Developers
          </h1>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-10 not-prose">
            <h3 className="text-xl font-bold text-blue-300 mb-4 uppercase tracking-wide">Table of Contents</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
              <li><a href="#intro" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">01.</span> Introduction to JSON</a></li>
              <li><a href="#importance" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">02.</span> Why Validation is Critical</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">03.</span> How Doodax Works</a></li>
              <li><a href="#syntax-guide" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">04.</span> JSON Syntax Masterclass</a></li>
              <li><a href="#debugging" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">05.</span> Debugging Strategies</a></li>
              <li><a href="#best-practices" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">06.</span> Industry Best Practices</a></li>
              <li><a href="#tools-comparison" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">07.</span> Tools Comparison</a></li>
              <li><a href="#faq-section" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">08.</span> Frequently Asked Questions</a></li>
            </ul>
          </div>

          <div id="intro">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">1. Introduction to JSON (JavaScript Object Notation)</h2>
            <p>
              In the expansive universe of web development, <strong>JSON (JavaScript Object Notation)</strong> stands as the undisputed king of data interchange. Born from a subset of JavaScript, it has evolved into a language-independent data format that powers the APIs of giants like Google, Facebook, and Twitter, as well as the configuration files of countless open-source projects.
            </p>
            <p>
              Its popularity stems from its simplicity. Unlike XML, which is verbose and heavy, JSON is lightweight, easy for humans to read, and effortless for machines to parse. However, this simplicity comes with a strict set of rules. A single misplaced comma or an unquoted key can render an entire dataset useless, causing application crashes and data pipeline failures.
            </p>
            <p>
              This guide, brought to you by <strong>Doodax</strong>, explores the depths of JSON management. Whether you are a senior backend engineer architecting microservices or a junior frontend developer debugging a React component, understanding how to format, validate, and optimize JSON is a non-negotiable skill in 2024.
            </p>
          </div>

          <div id="importance">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">2. Why Validation is Critical</h2>
            <p>
              Imagine a banking application processing millions of transactions. If the JSON payload for a transaction contains a syntax error, the transaction fails. If the error handling is poor, it might fail silently. This is why <strong>JSON Validation</strong> is not just a nice-to-have; it is mission-critical.
            </p>
            <ul>
              <li><strong>Data Integrity:</strong> Validation ensures that the data received conforms to the expected format (Schema), preventing database corruption.</li>
              <li><strong>Security:</strong> Malformed JSON can sometimes be a vector for injection attacks. Proper parsing and validation mitigate these security risks.</li>
              <li><strong>Developer Efficiency:</strong> Debugging a 10,000-line minified JSON file manually is impossible. Automated validators pinpoint errors instantly, saving hours of development time.</li>
            </ul>
          </div>

          <div id="how-it-works">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">3. How Doodax Works: Privacy-First Architecture</h2>
            <p>
              Most online JSON formatters work by sending your data to a backend server, processing it, and sending it back. This poses a massive security risk, especially if you are pasting API keys, customer PII (Personally Identifiable Information), or proprietary business logic.
            </p>
            <p>
              <strong>Doodax is different.</strong> We utilize a client-side-only architecture.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic bg-gray-800/50 p-4 rounded-r-lg">
              "Your data never leaves your browser. The processing happens in your device's memory using JavaScript's native JSON engine."
            </blockquote>
            <p>
              This ensures zero latency and 100% privacy. You can safely format sensitive configuration files without fear of data leaks.
            </p>
          </div>

          <div id="syntax-guide">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">4. JSON Syntax Masterclass</h2>
            <p>To use JSON effectively, one must understand its strict syntax rules defined in RFC 8259.</p>
            
            <h3 className="text-xl font-semibold text-blue-300 mt-4">The 6 Data Types</h3>
            <ol>
              <li><strong>Strings:</strong> Must be enclosed in double quotes. <code>"name": "Doodax"</code></li>
              <li><strong>Numbers:</strong> Integers or floating-point. No quotes. <code>"count": 42</code></li>
              <li><strong>Booleans:</strong> <code>true</code> or <code>false</code>. Lowercase.</li>
              <li><strong>Null:</strong> Represents an empty value. <code>"middleName": null</code></li>
              <li><strong>Arrays:</strong> Ordered lists of values enclosed in square brackets <code>[]</code>.</li>
              <li><strong>Objects:</strong> Unordered sets of key/value pairs enclosed in curly braces <code>{}</code>.</li>
            </ol>

            <h3 className="text-xl font-semibold text-red-400 mt-4">Common Pitfalls</h3>
            <ul>
              <li><strong>Trailing Commas:</strong> JSON does not allow a comma after the last element in an array or object. This is the #1 cause of syntax errors.</li>
              <li><strong>Single Quotes:</strong> You cannot use single quotes <code>'key'</code> for strings or keys. You must use double quotes <code>"key"</code>.</li>
              <li><strong>Comments:</strong> Standard JSON does not support comments (`//` or `/* */`). If you need comments, consider using JSONC or YAML.</li>
            </ul>
          </div>

          <div id="debugging">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">5. Debugging Strategies</h2>
            <p>
              When Doodax flags an error, look for the line number provided. However, often the error is "Unexpected token". Here is how to debug it:
            </p>
            <p>
              If the error is near the end of the file, check for missing closing braces <code>}</code> or brackets <code>]</code>. If the error is in the middle, check for unescaped characters in strings, such as a double quote inside a text string that hasn't been escaped with a backslash (e.g., <code>"She said \"Hello\""</code>).
            </p>
          </div>

          <div id="best-practices">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">6. Industry Best Practices</h2>
            <p>
              Writing valid JSON is just the start. Writing <em>good</em> JSON is an art.
            </p>
            <ul>
              <li><strong>Naming Conventions:</strong> Stick to <code>camelCase</code> (JavaScript style) or <code>snake_case</code> (Python/Database style). Do not mix them.</li>
              <li><strong>Flatten Your Data:</strong> Avoid deeply nested structures (objects within objects within objects). Flat data is easier to read and faster to parse.</li>
              <li><strong>Use ISO 8601 for Dates:</strong> Always represent dates as strings in the format <code>YYYY-MM-DDTHH:mm:ss.sssZ</code>. This is universally parsable.</li>
              <li><strong>Consistent Types:</strong> Do not use a string for an ID in one object and a number in another. Consistency makes consuming APIs predictable.</li>
            </ul>
          </div>

          <div id="faq-section">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">8. Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h4 className="font-bold text-white">Q: Can I use Doodax offline?</h4>
                <p className="text-sm mt-2">A: Yes! Since the application is a Progressive Web App (PWA) compatible site and runs entirely in the browser, once loaded, it functions without an internet connection.</p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h4 className="font-bold text-white">Q: Does this tool support JSON5 or YAML?</h4>
                <p className="text-sm mt-2">A: Currently, we focus strictly on standard RFC 8259 JSON to ensure maximum compatibility with web APIs. We may add support for other formats in the future.</p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h4 className="font-bold text-white">Q: What is the maximum file size I can process?</h4>
                <p className="text-sm mt-2">A: The limit is determined by your browser's available memory. On modern machines, Doodax can easily handle JSON files up to 50MB-100MB without crashing.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl border border-blue-500/20 text-center">
            <p className="text-lg font-semibold text-white">Ready to optimize your workflow?</p>
            <p className="text-blue-200">Scroll up to use the tool now.</p>
          </div>

        </article>
      </div>

      {/* Button Wrapper */}
      <div className="flex justify-center pb-8 pt-4 relative z-20">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/50"
        >
          {isExpanded ? 'Collapse Article' : 'Read Full Guide'}
          <svg 
            className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SeoContent;