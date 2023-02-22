"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          width={500}
          height={500}
          onClick={signOut}
          alt="user image"
          className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1"
        />
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
}
