import Image from 'next/image.js';
import CodeInput from './components/CodeInput.jsx'
import Instructions from './components/Instructions.jsx'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
          src="/logo.png"
          alt="format4reddit logo"
          width={250}
          height={38}
          priority
          id='logo'
        />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CodeInput />
        <Instructions />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Image
      src="/github.svg"
      alt="github logo"
      width={50}
      height={50}
      priority
      id='svg-icon'
      />
      <a href="https://github.com/srz2/format4reddit">Follow on Github</a>
      </footer>
    </div>
  );
}
