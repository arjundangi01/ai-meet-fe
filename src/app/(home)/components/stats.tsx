import React from "react";

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="text-blue-100">Transcription Accuracy</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-blue-100">Meetings Processed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">30%</div>
            <div className="text-blue-100">Time Saved</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
