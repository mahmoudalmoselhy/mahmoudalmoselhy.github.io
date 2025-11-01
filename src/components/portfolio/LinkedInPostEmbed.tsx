import React, { useState } from 'react';

interface LinkedInPostEmbedProps {
  title: string;
  iframeUrl: string;
  logo: string;
  tag: string;
  height: number;
  width: number;
  shortHeight?: number; // الإرتفاع المختصر
}

export const LinkedInPostEmbed = ({
  title,
  iframeUrl,
  logo,
  tag,
  height,
  width,
  shortHeight = 250, // اختياري، يمكن تحديده خارج الكومبوننت
}: LinkedInPostEmbedProps) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="group flex justify-center bg-[#18191A] py-6">
      <div className="w-full max-w-[540px] rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-[#23272b] to-[#212121] shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700 bg-[#242526] backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2 bg-gradient-to-br from-[#0A66C2]/10 to-[#0A66C2]/5 border border-[#0A66C2]/20">
              <img
                src={logo}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-sm font-semibold text-gray-100">{title}</h4>
          </div>
          <span className="text-xs px-3 py-1.5 bg-[#0A66C2]/15 text-[#0A66C2] rounded-full font-medium border border-[#0A66C2]/30">
            {tag}
          </span>
        </div>
        {/* LinkedIn Post */}
        <div className="w-full flex flex-col justify-center p-4 bg-[#202225]">
          <iframe
            src={iframeUrl}
            className="w-full rounded-lg"
            width={width}
            height={showFull ? height : shortHeight}
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            title={title}
          />
          {!showFull && (
            <button
              className="mt-4 w-fit mx-auto px-4 py-2 bg-[#0A66C2] text-white rounded-lg shadow-md hover:bg-[#004182] transition"
              onClick={() => setShowFull(true)}
            >
              View more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
