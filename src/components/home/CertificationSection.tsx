import React from "react";
import Image from "next/image";

interface CertificateItem {
  id: string;
  title: string;
  image: string;
}

const certificates: CertificateItem[] = [
  {
    id: "halal",
    title: "International Halal Certification",
    image: "/images/certificate-halal.webp",
  },
  {
    id: "iso",
    title: "Food Safety Management System ISO 22000:2018",
    image: "/images/certificate-iso.webp",
  },
];

export const CertificationSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FFFDF8] via-amber-50/20 to-[#FAF6EE] border-t border-amber-100/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading of section */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-serif tracking-tight">
            Our Certifications
          </h2>
        </div>

        {/* Certificate Images in Square Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative aspect-square bg-white rounded-3xl border border-amber-200/80 shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
