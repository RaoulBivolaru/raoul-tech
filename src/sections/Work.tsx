import Project from 'components/Project';
import React from 'react';

export default function () {
  return (
    <section className="px-10 py-16" id="work">
      <div className="text-center">
        <h2 className="text-white text-6xl font-bold tracking-wide mb-5 ">
          My Latest Work
        </h2>
        <p className="text-content">
          Checkout my latest projects that I implemented!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between mt-10">
        <Project
          title="Web application Buktio"
          meta="Development"
          url="https://buktio.com"
          image="buktio.png"
        />
        <Project
          title="Browser Game Skyhavoc"
          meta="Development"
          url="https://skyhavoc.com"
          image="skyhavoc.png"
        />
      </div>
    </section>
  );
}
