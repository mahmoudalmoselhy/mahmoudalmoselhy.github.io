import React from 'react';

interface InstagramPostEmbedProps {
  postUrl: string;
  logo: string;
  title: string;
  tag?: string;
}

export const InstagramPostEmbed = ({
  postUrl,
  logo,
  title,
  tag,
}: InstagramPostEmbedProps) => {
  return (
    <div className="flex justify-center w-full bg-[#fafafa] py-6">
      <div className="w-full max-w-full sm:max-w-[540px] rounded-2xl border border-gray-200 bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-100 bg-white">
          <img
            src={logo}
            alt={title}
            className="w-10 h-10 rounded-full border border-gray-200 object-cover mr-3"
          />
          <div>
            <h4 className="text-[15px] font-semibold text-gray-900">{title}</h4>
            {tag && <span className="text-xs text-gray-500">{tag}</span>}
          </div>
        </div>
        {/* Instagram Post */}
        <div className="w-full flex justify-center p-2 sm:p-4 overflow-x-auto">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              margin: 0,
              maxWidth: '100%',
              minWidth: '280px',
              padding: 0,
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};
