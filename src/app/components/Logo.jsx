"use client"
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Logo() {
    return (
        <Image
          src="/logo.png"
          alt="format4reddit logo"
          width={250}
          height={38}
          priority
          id='logo'
          onClick={() => {
            redirect('http://format4reddit.com')
          }}
        />
    );
}
