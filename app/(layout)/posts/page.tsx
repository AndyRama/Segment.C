import { Typography } from "@/components/nowts/typography";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { PostCard } from "@/features/posts/post-card";
import { getPosts, getPostsTags } from "@/features/posts/post-manager";
import { SiteConfig } from "@/site-config";
import type { PageParams } from "@/types/next";
import { FileQuestion, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/format/date";
import { calculateReadingTime } from "@/features/posts/calculate-reading-time";

export const metadata: Metadata = {
  title: `${SiteConfig.title}'s Blog`,
  description: SiteConfig.description,
  keywords: ["posts"],
  openGraph: {
    title: `${SiteConfig.title}'s Blog`,
    description: SiteConfig.description,
    url: SiteConfig.prodUrl,
    type: "website",
  },
};

export default async function RoutePage(props: PageParams) {
  const tags = await getPostsTags();
  const posts = await getPosts();
  
  // Séparer le dernier article des autres
  const [latestPost, ...otherPosts] = posts;

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Blog</LayoutTitle>
      </LayoutHeader>
      
      <LayoutContent className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={{
              pathname: `/posts/categories/${tag}`,
            }}
          >
            <Badge variant="outline">{tag}</Badge>
          </Link>
        ))}
      </LayoutContent>

      {posts.length === 0 ? (
        <LayoutContent className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center rounded-lg border-2 border-dashed p-4 lg:gap-6 lg:p-8">
            <FileQuestion />
            <Typography variant="h2">No posts found</Typography>
            <Link className={buttonVariants({ variant: "link" })} href="/posts">
              View all posts
            </Link>
          </div>
        </LayoutContent>
      ) : (
        <>
          {/* Hero - Dernier article */}
          <LayoutContent>
            <Link 
              href={`/posts/${latestPost.slug}`}
              className="group block"
            >
              <article className="relative overflow-hidden rounded-lg">
                <div
                  className="aspect-[21/9] w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${latestPost.attributes.coverUrl})`,
                  }}
                >
                  <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 lg:p-12">
                    <div className="flex flex-col gap-3">
                      {latestPost.attributes.status === "draft" && (
                        <Badge className="w-fit" variant="secondary">
                          Draft
                        </Badge>
                      )}
                      <Typography 
                        variant="h1" 
                        className="text-3xl font-bold text-white drop-shadow-lg lg:text-5xl"
                      >
                        {latestPost.attributes.title}
                      </Typography>
                      <Typography className="text-base text-white/90 drop-shadow-md lg:text-lg">
                        {latestPost.attributes.description}
                      </Typography>
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <span>{formatDate(new Date(latestPost.attributes.date))}</span>
                        <span>·</span>
                        <span>{calculateReadingTime(latestPost.content)} min de lecture</span>
                      </div>
                      <div className="flex items-center gap-2 text-white font-medium">
                        Lire l'article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </LayoutContent>

          {/* Grille des autres articles */}
          {otherPosts.length > 0 && (
            <LayoutContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </LayoutContent>
          )}
        </>
      )}
    </Layout>
  );
}