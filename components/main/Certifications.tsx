"use client";

import { useState } from "react";
import { CERTIFICATIONS } from "@/constants";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof CERTIFICATIONS)[number] | null>(null);

  return (
    <section
      id="certifications"
      className="relative py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 overflow-hidden"
    >
      {/* === Effets de fond === */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.2),_transparent_60%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.2),_transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
          🚀 Mes Certifications
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 perspective-[1000px]">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.certId}
              onClick={() => setSelectedCert(cert)}
              className="relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transform-gpu transition-transform duration-500 cursor-pointer hover:rotate-[1deg] hover:-translate-y-2 hover:scale-[1.05] border border-gray-700/60"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-indigo-600/20 to-pink-500/20 blur-xl rounded-2xl"></div>

              {/* ✅ Logo */}
              {cert.logo && (
                <div className="relative w-24 h-24 mx-auto mb-5 transform-gpu transition-transform duration-500 group-hover:rotate-y-12">
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={100}
                    height={100}
                    className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                    unoptimized
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-medium text-indigo-400">Émis par :</span> {cert.issuer}
              </p>
              <p className="text-sm text-gray-400 mb-3">📅 {cert.date}</p>

              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === MODAL === */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-[0_0_40px_rgba(99,102,241,0.5)] max-w-md w-full mx-4 p-8 relative border border-indigo-500/30 transform scale-100 hover:scale-[1.02] transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {selectedCert.logo && (
              <div className="w-28 h-28 mx-auto mb-6">
                <Image
                  src={selectedCert.logo}
                  alt={`${selectedCert.issuer} logo`}
                  width={120}
                  height={120}
                  className="object-contain drop-shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  unoptimized
                />
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              {selectedCert.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2 text-center">
              <span className="font-semibold text-indigo-400">Émis par :</span> {selectedCert.issuer}
            </p>
            <p className="text-sm text-gray-400 mb-6 text-center">📅 {selectedCert.date}</p>

            {selectedCert.link && (
              <div className="text-center">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-pink-400 transition"
                >
                  Voir le certificat
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
