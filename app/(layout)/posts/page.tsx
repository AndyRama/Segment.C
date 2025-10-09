import { Typography } from "@/components/nowts/typography";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { getPosts, getPostsTags } from "@/features/posts/post-manager";
import { SiteConfig } from "@/site-config";
import type { PageParams } from "@/types/next";
import { FileQuestion, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/format/date";
import { calculateReadingTime } from "@/features/posts/calculate-reading-time";
import { RecentPosts } from "@/features/posts/recent-posts";
import { FeaturedPosts } from "@/features/posts/featured-posts";

export const metadata: Metadata = {
  title: `Blog de ${SiteConfig.title}`,
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
  
  // Séparer les articles : 1 hero + 3 featured + le reste recent
  const [heroPost, ...remainingPosts] = posts;
  const featuredPosts = remainingPosts.slice(0, 3);
  const recentPosts = remainingPosts.slice(3);

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Blog</LayoutTitle>
      </LayoutHeader>
      
      <LayoutContent className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={{
              pathname: `/posts/categories/${tag}`,
            }}
          >
            <Badge variant="outline" className="capitalize">
              {tag}
            </Badge>
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
          {/* Hero Article - Grand article en haut */}
          <LayoutContent className="mb-16">
            <Link 
              href={`/posts/${heroPost.slug}`}
              className="group block overflow-hidden rounded-xl"
            >
              <article className="relative">
                {/* Image de couverture */}
                <div className="relative aspect-[2/1] w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${heroPost.attributes.coverUrl})`,
                    }}
                  />
                </div>
                
                {/* Contenu en dessous de l'image */}
                <div className="mt-6 space-y-4">
                  {/* Tag de catégorie */}
                  {heroPost.attributes.keywords[0] && (
                    <Badge variant="secondary" className="capitalize">
                      {heroPost.attributes.keywords[0]}
                    </Badge>
                  )}
                  
                  {/* Titre */}
                  <Typography 
                    variant="h1" 
                    className="text-3xl font-bold group-hover:text-primary transition-colors lg:text-5xl"
                  >
                    {heroPost.attributes.title}
                  </Typography>
                  
                  {/* Description */}
                  <Typography className="text-base text-muted-foreground lg:text-lg">
                    {heroPost.attributes.description}
                  </Typography>
                  
                  {/* Métadonnées */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(new Date(heroPost.attributes.date))}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{calculateReadingTime(heroPost.content)} min de lecture</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </LayoutContent>

          {/* Featured Posts - Articles en vedette (3 colonnes) */}
          {featuredPosts.length > 0 && (
            <LayoutContent className="mb-16">
              <FeaturedPosts posts={featuredPosts} />
            </LayoutContent>
          )}

          {/* Recent Posts - Articles récents (grille) */}
          {recentPosts.length > 0 && (
            <LayoutContent>
              <RecentPosts posts={recentPosts} />
            </LayoutContent>
          )}
        </>
      )}
    </Layout>
  );
}