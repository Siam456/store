import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function Markdown({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownText}</ReactMarkdown>
  );
}
