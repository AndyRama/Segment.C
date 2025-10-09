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
  
  // Séparer les articles : 1 hero + 3 en sidebar + le reste
  const [latestPost, ...remainingPosts] = posts;
  const sidebarPosts = remainingPosts.slice(0, 3);
  const gridPosts = remainingPosts.slice(3);

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
          {/* Hero Section - Article principal à gauche + 3 articles à droite */}
          <LayoutContent>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Article principal (Hero) - 2 colonnes sur desktop */}
              <div className="lg:col-span-2">
                <Link 
                  href={`/posts/${latestPost.slug}`}
                  className="group block h-full"
                >
                  <article className="relative h-full overflow-hidden rounded-lg">
                    <div
                      className="h-full min-h-[500px] w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105 lg:min-h-[600px]"
                      style={{
                        backgroundImage: `url(${latestPost.attributes.coverUrl})`,
                      }}
                    >
                      <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 lg:p-8">
                        <div className="flex flex-col gap-3">
                          {latestPost.attributes.status === "draft" && (
                            <Badge className="w-fit" variant="secondary">
                              Draft
                            </Badge>
                          )}
                          <Typography 
                            variant="h1" 
                            className="text-2xl font-bold text-white drop-shadow-lg lg:text-4xl"
                          >
                            {latestPost.attributes.title}
                          </Typography>
                          <Typography className="text-sm text-white/90 drop-shadow-md lg:text-base">
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
              </div>

              {/* 3 articles en colonne à droite - 1 colonne sur desktop */}
              <div className="flex flex-col gap-6">
                {sidebarPosts.map((post) => (
                  <Link 
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="group block"
                  >
                    <article className="flex h-full flex-col gap-3 rounded-lg border bg-card p-4 transition-shadow hover:shadow-lg">
                      <div
                        className="aspect-video w-full rounded-md bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${post.attributes.coverUrl})`,
                        }}
                      />
                      {post.attributes.status === "draft" && (
                        <Badge className="w-fit" variant="secondary">
                          Draft
                        </Badge>
                      )}
                      <Typography 
                        variant="h3" 
                        className="line-clamp-2 text-lg font-semibold group-hover:text-primary"
                      >
                        {post.attributes.title}
                      </Typography>
                      <Typography className="line-clamp-2 text-sm text-muted-foreground">
                        {post.attributes.description}
                      </Typography>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{formatDate(new Date(post.attributes.date))}</span>
                        <span>·</span>
                        <span>{calculateReadingTime(post.content)} min</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </LayoutContent>

          {/* Grille des autres articles */}
          {gridPosts.length > 0 && (
            <LayoutContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </LayoutContent>
          )}
        </>
      )}
    </Layout>
  );
}