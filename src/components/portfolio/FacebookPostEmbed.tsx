import React from 'react';

interface FacebookPostEmbedProps {
  title: string;
  iframeUrl: string;
  logo: string;
  tag: string;
}

export const FacebookPostEmbed = ({
  title,
  iframeUrl,
  logo,
  tag,
}: FacebookPostEmbedProps) => {
  return (
    <div className="flex justify-center bg-[#f0f2f5] py-6">
      <div className="w-full max-w-[500px] rounded-lg border border-gray-200 bg-white shadow-md">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-100 bg-[#fff]">
          <img
            src={logo}
            alt={title}
            className="w-10 h-10 rounded-full border border-gray-200 object-cover mr-3"
          />
          <div>
            <h4 className="text-[15px] font-semibold text-gray-900">{title}</h4>
            <span className="text-xs text-gray-500">{tag}</span>
          </div>
        </div>
        {/* Facebook Post */}
        <div className="w-full flex justify-center bg-[#f0f2f5] p-2">
          <iframe
            src={iframeUrl}
            className="w-full"
            width="500"
            height="530"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  );
};
