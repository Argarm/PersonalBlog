"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function HeaderComponent() {


  return (
    <div className="bg-gradient-to-br from-green-900 to-black min-h-screen text-white flex flex-col items-center">
      <nav className="flex space-x-8 p-4 z-10">
        <a href="#" className="hover:text-gray-300">About</a>
        <Link href="/work" className="hover:text-gray-300">Work</Link>
        <Link href="/blog" className="hover:text-gray-300">Blog</Link>
        <a href="#" className="hover:text-gray-300">Gallery</a>
      </nav>
      <div className="flex flex-col items-center mt-10 z-10">
        <Image
          src="/avatar.jpeg"
          alt="Avatar"
          width={150}
          height={150}
          className="rounded-full border-4 border-white"
        />
        <div className="mt-4 flex items-center space-x-2">
          <span>Europe / Spain / Canary Islands </span>
        </div>
        <h1 className="text-5xl font-bold mt-6">Aarón Garcia</h1>
        <h2 className="text-2xl text-gray-400">Software Engineer</h2>
        <p className="mt-6 text-center max-w-xl">
          UNA DESCRIPCION DE LO QUE HACES Y QUIEN ERES. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}