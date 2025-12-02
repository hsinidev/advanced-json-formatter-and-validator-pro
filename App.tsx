import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import SeoContent from './components/SeoContent';

type StatusType = 'idle' | 'success' | 'error' | 'warning';

interface StatusMessage {
  type: StatusType;
  text: string;
  details?: string;
}

const MODAL_CONTENT: Record<string, { title: string; content: React.ReactNode }> = {
    about: { 
        title: "About Doodax", 
        content: (
            <div className="space-y-4 text-gray-300">
                <p>Welcome to <strong>Doodax Advanced JSON Formatter</strong>, the premier online tool for developers, data scientists, and engineers.</p>
                <p>Our mission is simple: to provide a fast, secure, and aesthetically pleasing environment for debugging and formatting data. Unlike other tools that are cluttered with ads or send your data to remote servers, Doodax is built with a <strong>privacy-first</strong> architecture.</p>
                <p>We believe that developer tools should be beautiful, intuitive, and respectful of user data.</p>
            </div>
        ) 
    },
    contact: { 
        title: "Contact & Support", 
        content: (
            <div className="space-y-6">
                <p className="text-gray-300">We value your feedback and are here to help with any issues or feature requests.</p>
                <div className="grid gap-4">
                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition">
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">General Inquiries</p>
                        <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:text-blue-300 text-lg break-all">hsini.web@gmail.com</a>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition">
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">Official Website</p>
                        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-lg">doodax.com</a>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition">
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">Developer</p>
                         <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-lg">github.com/hsinidev</a>
                    </div>
                </div>
            </div>
        ) 
    },
    guide: {
        title: "User Guide",
        content: (
            <div className="space-y-4 text-gray-300">
                <p>Mastering the Doodax JSON Formatter is easy:</p>
                <ol className="list-decimal list-inside space-y-3 pl-2">
                    <li><strong className="text-white">Paste Data:</strong> Copy your raw JSON string and paste it into the left-hand input editor.</li>
                    <li><strong className="text-white">Choose Format:</strong> Use the "Controls" panel to select 2-space, 4-space, or compact mode.</li>
                    <li><strong className="text-white">Process:</strong> Click the "Process JSON" button. The tool will validate the syntax.</li>
                    <li><strong className="text-white">Fix Errors:</strong> If invalid, check the error message. Enable "Auto-Fix" to try and repair common mistakes like trailing commas.</li>
                    <li><strong className="text-white">Export:</strong> Use the Copy or Download buttons to save your clean JSON.</li>
                </ol>
            </div>
        ),
    },
    privacy: { 
        title: "Privacy Policy", 
        content: (
            <div className="space-y-4 text-gray-300">
                <p className="font-bold text-white">Effective Date: May 2024</p>
                <p>At Doodax, your privacy is our top priority. Because our tool operates as a client-side application:</p> 
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>No Server Storage:</strong> The data you paste into the formatter is processed locally in your browser's memory. It is never transmitted to our servers.</li>
                    <li><strong>No Tracking Cookies:</strong> We do not use cookies to track your personal browsing habits.</li>
                    <li><strong>Analytics:</strong> We may use anonymous, aggregate analytics to understand general usage patterns (e.g., visitor counts), but this is never linked to your JSON data.</li>
                </ul>
            </div>
        ) 
    },
    terms: { 
        title: "Terms of Service", 
        content: (
            <div className="space-y-4 text-gray-300">
                <p>By accessing Doodax.com, you agree to be bound by these Terms of Service.</p>
                <h4 className="text-white font-bold">1. Use License</h4>
                <p>Permission is granted to use this software for personal or commercial purposes free of charge.</p>
                <h4 className="text-white font-bold">2. Disclaimer</h4>
                <p>The materials on Doodax are provided "as is". We make no warranties, expressed or implied, and hereby disclaim all other warranties, including without limitation, implied warranties or conditions of merchantability.</p>
                <h4 className="text-white font-bold">3. Limitations</h4>
                <p>In no event shall Doodax or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.</p>
            </div>
        )
    },
    dmca: { 
        title: "DMCA Policy", 
        content: (
            <div className="space-y-4 text-gray-300">
                <p>Doodax respects the intellectual property rights of others. All content, code, and design on this site are original.</p> 
                <p>If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us with the written information specified below via email to <strong>hsini.web@gmail.com</strong>.</p>
                <ul className="list-disc list-inside text-sm">
                    <li>A description of the copyrighted work that you claim has been infringed.</li>
                    <li>A description of where the material that you claim is infringing is located on the site.</li>
                    <li>Your address, telephone number, and email address.</li>
                </ul>
            </div>
        ) 
    }
};

const EXAMPLE_JSON = `{
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters": {
    "batter": [
      { "id": "1001", "type": "Regular" },
      { "id": "1002", "type": "Chocolate" },
      { "id": "1003", "type": "Blueberry" },
      { "id": "1004", "type": "Devil's Food" }
    ]
  },
  "topping": [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ]
}`;

const App: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [jsonOutput, setJsonOutput] = useState<string>('');
  const [status, setStatus] = useState<StatusMessage>({ type: 'idle', text: 'Ready to Process' });
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [formatOption, setFormatOption] = useState<string>('2');
  const [isFixJsonEnabled, setIsFixJsonEnabled] = useState<boolean>(false);
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleProcess = useCallback(() => {
    if (jsonInput.trim() === '') {
      setStatus({ type: 'error', text: 'Input is empty', details: 'Please paste some JSON to process.' });
      setJsonOutput('');
      return;
    }

    try {
      let inputToParse = jsonInput;
      if (isFixJsonEnabled) {
         // Attempt to fix trailing commas
         inputToParse = inputToParse.replace(/,\s*([\]}])/g, '$1');
         // Attempt to fix single quotes
         inputToParse = inputToParse.replace(/'/g, '"');
      }

      const parsedJson = JSON.parse(inputToParse);
      const indent = formatOption === 'compact' ? 0 : Number(formatOption);
      const formattedJson = JSON.stringify(parsedJson, null, indent);
      setJsonOutput(formattedJson);
      setStatus({ type: 'success', text: 'Valid JSON' });
    } catch (error) {
      setJsonOutput('');
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      if (isFixJsonEnabled) {
        setStatus({ type: 'warning', text: 'Auto-Fix Failed', details: `We couldn't automatically fix the JSON. Original error: ${errorMessage}` });
      } else {
        setStatus({ type: 'error', text: 'Invalid JSON', details: errorMessage });
      }
    }
  }, [jsonInput, formatOption, isFixJsonEnabled]);

  const handleClear = useCallback(() => {
    setJsonInput('');
    setJsonOutput('');
    setStatus({ type: 'idle', text: 'Ready to Process' });
  }, []);
  
  const handleLoadExample = useCallback(() => {
    setJsonInput(EXAMPLE_JSON);
    setStatus({ type: 'idle', text: 'Example loaded.' });
    setJsonOutput('');
  }, []);

  const handleCopy = useCallback(() => {
    if (!jsonOutput) return;
    navigator.clipboard.writeText(jsonOutput).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy'), 2000);
    });
  }, [jsonOutput]);
  
  const handleDownload = useCallback(() => {
    if (!jsonOutput) return;
    const blob = new Blob([jsonOutput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'doodax_formatted.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [jsonOutput]);

  const openModal = useCallback((modalId: string) => setActiveModal(modalId), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const getStatusColorClasses = (type: StatusType) => {
    switch (type) {
      case 'success': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'error': return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'warning': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-800/50 text-gray-400 border-gray-700';
    }
  };

  const navItems = Object.keys(MODAL_CONTENT);

  return (
    <div className="text-gray-200 min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
      <Header navItems={navItems} onNavClick={openModal} />
      
      <main className="w-full max-w-6xl mx-auto p-4 md:p-8 flex-grow flex flex-col gap-12 z-10">
        
        {/* Hero Section */}
        <div className="text-center space-y-4 mt-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300 tracking-tight drop-shadow-2xl">
                Advanced JSON Formatter
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-light max-w-2xl mx-auto">
                The most secure, professional way to format, validate, and minify JSON data directly in your browser.
            </p>
        </div>

        {/* Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Input Column */}
            <div className="flex flex-col gap-4">
                <div className="glass-panel rounded-xl p-1 flex justify-between items-center px-4 py-2">
                    <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> INPUT
                    </label>
                    <div className="flex gap-2">
                         <button onClick={handleLoadExample} className="text-xs px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 transition-colors">Sample</button>
                         <button onClick={handleClear} className="text-xs px-3 py-1.5 rounded-md bg-red-900/30 hover:bg-red-900/50 border border-red-900/50 text-red-300 transition-colors">Clear</button>
                    </div>
                </div>
                <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder="Paste your JSON here..."
                    className="w-full h-[500px] bg-gray-950/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none text-gray-300 placeholder-gray-600 shadow-inner"
                    spellCheck="false"
                />
            </div>

            {/* Controls & Output Column */}
            <div className="flex flex-col gap-4">
                 
                 {/* Toolbar */}
                <div className="glass-panel rounded-xl p-4 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                        <select 
                            value={formatOption} 
                            onChange={e => setFormatOption(e.target.value)} 
                            className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                        >
                            <option value="2">2 Spaces</option>
                            <option value="4">4 Spaces</option>
                            <option value="compact">Minify (Compact)</option>
                        </select>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" checked={isFixJsonEnabled} onChange={e => setIsFixJsonEnabled(e.target.checked)} className="rounded bg-gray-800 border-gray-600 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-gray-300">Auto-Fix</span>
                    </label>

                    <button 
                        onClick={handleProcess} 
                        className="w-full md:w-auto px-6 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-900/30 transform active:scale-95"
                    >
                        Process
                    </button>
                </div>

                {/* Output Area */}
                <div className="relative flex-grow h-[430px]">
                    <div className={`absolute top-0 left-0 w-full z-10 flex justify-between items-center px-4 py-2 border-b border-gray-700/50 ${status.type === 'error' ? 'bg-red-900/20' : 'bg-gray-900/40'} rounded-t-xl`}>
                        <div className={`text-xs font-bold px-2 py-0.5 rounded border ${getStatusColorClasses(status.type)} uppercase`}>
                            {status.text}
                        </div>
                        <div className="flex gap-2">
                             <button onClick={handleCopy} disabled={!jsonOutput} className="text-xs flex items-center gap-1 text-gray-300 hover:text-white disabled:opacity-30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                                {copyButtonText}
                            </button>
                            <button onClick={handleDownload} disabled={!jsonOutput} className="text-xs flex items-center gap-1 text-gray-300 hover:text-white disabled:opacity-30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Download
                            </button>
                        </div>
                    </div>
                    <textarea
                        value={status.type === 'error' || status.type === 'warning' ? status.details : jsonOutput}
                        readOnly
                        placeholder="Result will appear here..."
                        className={`w-full h-full bg-gray-950/60 backdrop-blur-md border border-gray-700/50 rounded-xl p-5 pt-12 font-mono text-sm focus:outline-none resize-none transition-colors ${status.type === 'error' ? 'text-red-300' : 'text-green-400'}`}
                    />
                </div>
            </div>
        </div>

        <SeoContent />

      </main>

      <Footer />

      {activeModal && MODAL_CONTENT[activeModal] && (
        <Modal isOpen={!!activeModal} onClose={closeModal} title={MODAL_CONTENT[activeModal].title}>
          {MODAL_CONTENT[activeModal].content}
        </Modal>
      )}
    </div>
  );
};

export default App;