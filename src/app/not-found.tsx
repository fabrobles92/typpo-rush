import { Metadata } from "next";
import * as React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

export const metada: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
          <RiAlarmWarningFill
            size={60}
            className="drop-shadow-glow animate-flicker text-red-500"
          />
          <h1 className="mt-8 text-4xl md:text-6xl text-white">
            Page Not Found
          </h1>
          <a href="/" className="text-white">
            Back to home
          </a>
        </div>
      </section>
    </main>
  );
}
