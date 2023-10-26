'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function SyntaxHighlighterComponent({
  content,
  size='sm',
  language='javascript',
} : {
  content:string,
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' ,
  language: string
}) {
  return (
    <div className={`text-${size}`}>
      <SyntaxHighlighter language={language} style={docco}>
      {content}
      </SyntaxHighlighter>
  </div>
  );
}