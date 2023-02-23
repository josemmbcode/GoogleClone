"use client";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function signInPage() {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    async function fetchProviders() {
      const fetchedProviders = await getProviders();
      setProviders(fetchedProviders);
    }
    fetchProviders();
  }, []);
  return (
    <div className="mt-40">
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              src={
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              }
              alt="google logo"
              className="w-52 object-cover"
              width={500}
              height={500}
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
              <button
                className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
          </div>
        ))}
    </div>
  );
}

export default signInPage;
