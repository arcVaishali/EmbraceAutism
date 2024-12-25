import React from 'react';

const Story = () => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <article className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Unleashing Creativity</h1>
        <div className="flex items-center gap-x-4 mb-6">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="User Profile"
            className="h-12 w-12 rounded-full bg-gray-100"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900">Sarah Johnson</p>
            <p className="text-gray-600">Art Enthusiast</p>
          </div>
        </div>
        <p className="text-gray-800 text-lg leading-relaxed mb-8">
          Art knows no bounds, and neither does the human spirit. Prepare to embark on a sensory journey that transcends the ordinary and celebrates the extraordinary. Join us on October 15th, 2023, from 10:00 AM to 5:00 PM, at the Artistic Spectrum Exhibition—an event that promises to redefine your understanding of creativity.
        </p>
        <img
          src="https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Artwork"
          className="w-full rounded-lg"
        />
        <p className="text-gray-800 text-lg leading-relaxed mt-8">
          I was diagnosed with autism at a young age, and it presented unique challenges in my childhood. However, my journey through art has allowed me to express myself in ways words couldn't. Each brushstroke and color choice tells a story of my emotions, thoughts, and experiences. Through art, I found a language that transcends barriers, and I'm excited to share my journey with you at the Artistic Spectrum Exhibition.
        </p>
      </article>
    </div>
  );
};

export default Story;
