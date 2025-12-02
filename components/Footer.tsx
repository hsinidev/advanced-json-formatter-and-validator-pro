import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 mt-12 bg-gray-950/80 backdrop-blur-md border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-sm text-gray-500 space-y-2">
        <p>
          &copy; {new Date().getFullYear()} Doodax. All Rights Reserved.
        </p>
        <p className="flex items-center gap-1">
          Powered by{' '}
          <a
            href="https://github.com/hsinidev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-400 hover:text-blue-300 transition-colors hover:underline"
          >
            HSINI MOHAMED
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;