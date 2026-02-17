import { cn } from "@/lib/utils";
import { Callout } from "@/components/ui/callout";
import { CompareTable } from '@/components/ui/compare-table';
import { PriceCard } from '@/components/ui/price-card';
import { CTABlock } from '@/components/ui/cta-block';
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";

type ServerMdxProps = {
  source: string;
  className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MdxComponents: Record<string, React.ComponentType<any>> = {
  Callout,
  CompareTable,
  PriceCard,
  CTABlock,
};

export const ServerMdx = (props: ServerMdxProps) => {
  return (
    <div className={cn("prose dark:prose-invert", props.className)}>
      <MDXRemote
        source={props.source}
        components={MdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [rehypePrismPlus, { ignoreMissing: true }],
              rehypeSlug,
              rehypeAutolinkHeadings,
            ],
            format: "mdx",
          },
        }}
      />
    </div>
  );
};