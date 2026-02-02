import { marked } from 'marked';

export const useMarkdown = () => {
  const render = (markdown?: string): string => {
    if (!markdown) return '';
    return marked.parse(markdown) as string;
  };

  return { render };
};
