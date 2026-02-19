import { Typography } from "@/components/nowts/typography";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ServerMdx } from "@/features/markdown/server-mdx";
import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { calculateReadingTime } from "@/features/posts/calculate-reading-time";
import type { PostParams } from "@/features/posts/post-manager";
import { getCurrentPost, getPosts } from "@/features/posts/post-manager";
import { formatDate } from "@/lib/format/date";
import { logger } from "@/lib/logger";
import { SiteConfig } from "@/site-config";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata(props: PostParams): Promise<Metadata> {
  const params = await props.params;
  const post = await getCurrentPost(params.slug);

  if (!post) return notFound();

  return {
    title: post.attributes.title,
    description: post.attributes.description,
    keywords: post.attributes.keywords,
    authors: {
      name: SiteConfig.team.name,
      url: SiteConfig.team.website,
    },
    openGraph: {
      title: post.attributes.title,
      description: post.attributes.description,
      url: `https://codeline.app/posts/${params.slug}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function RoutePage(props: PostParams) {
  const params = await props.params;
  const post = await getCurrentPost(params.slug);

  if (!post) return notFound();

  // Sécurité Draft
  if (
    post.attributes.status === "draft" &&
    process.env.VERCEL_ENV === "production"
  ) {
    logger.warn(`Post "${post.attributes.title}" is a draft`);
    return notFound();
  }

  const postTags = post.attributes.keywords || [];

  return (
    <Layout>
      {/* Section 1 : Fil d'ariane et Titre Intro */}
      <LayoutContent className="max-w-4xl mx-auto py-8">
        <Link className={buttonVariants({ variant: "link" })} href="/posts">
          <ArrowLeft size={16} className="mr-2" /> Retour
        </Link>

        <div className="mt-8 text-center">
          <LayoutTitle className="text-3xl font-bold lg:text-5xl xl:text-6xl">
            {post.attributes.title}
          </LayoutTitle>

          <LayoutDescription className="mt-4">
            {formatDate(new Date(post.attributes.date))} · Par{" "}
            <Typography variant="link" as={Link} href={SiteConfig.team.website}>
              {SiteConfig.team.name}
            </Typography>
          </LayoutDescription>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {postTags.length > 0 ? (
              postTags.map((tag: string) => (
                <Link
                  key={tag}
                  href={{ pathname: `/posts`, query: { tag: tag } }}
                >
                  <Badge
                    variant="outline"
                    className="hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))
            ) : (
              <Typography variant="muted">Aucune catégorie</Typography>
            )}
          </div>
        </div>
      </LayoutContent>

      {/* Section 2 : Hero Image (LayoutHeader) */}
      <div className="px-4">
        <LayoutHeader
          style={{
            backgroundImage: `url(${post.attributes.coverUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="overflow-hidden rounded-xl mx-auto max-w-6xl min-h-[300px] flex items-end"
        >
          <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
            {post.attributes.status === "draft" && (
              <Badge className="mb-4" variant="secondary">
                Brouillon
              </Badge>
            )}
            <p className="text-sm opacity-90">
              {calculateReadingTime(post.content)} min de lecture
            </p>
          </div>
        </LayoutHeader>
      </div>

      <Separator className="my-12 max-w-4xl mx-auto" />

      {/* Section 3 : Contenu MDX */}
      <LayoutContent className="max-w-4xl mx-auto">
        <article className="prose prose-neutral dark:prose-invert lg:prose-lg xl:prose-xl max-w-none mb-20">
          <ServerMdx source={post.content} />
        </article>
      </LayoutContent>
    </Layout>
  );
}