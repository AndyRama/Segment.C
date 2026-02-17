import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";

type ServerMdxProps = {
  source: string;
  className?: string;
};

export const ServerMdx = (props: ServerMdxProps) => {
  return (
    <div className={cn("prose dark:prose-invert", props.className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          [rehypePrismPlus, { ignoreMissing: true }],
          rehypeSlug,
          rehypeAutolinkHeadings,
        ]}
      >
        {props.source}
      </ReactMarkdown>
    </div>
  );
};