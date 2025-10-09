import { Typography } from "@/components/nowts/typography";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/features/posts/post-manager";
import { formatDate } from "@/lib/format/date";
import { calculateReadingTime } from "@/features/posts/calculate-reading-time";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

type FeaturedPostsProps = {
  posts: Post[];
  title?: string;
};

export function FeaturedPosts({ posts, title = "Articles en vedette" }: FeaturedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      {/* Titre de la section */}
      <div>
        <Typography variant="h2" className="text-2xl font-bold lg:text-3xl">
          {title}
        </Typography>
      </div>

      {/* Grille d'articles featured - 3 colonnes */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block"
          >
            <article className="h-full space-y-4">
              {/* Image de couverture - plus grande */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${post.attributes.coverUrl})`,
                  }}
                />
              </div>
              
              {/* Badges */}
              <div className="flex items-center gap-2">
                {post.attributes.keywords?.[0] && (
                  <Badge variant="secondary" className="capitalize">
                    {post.attributes.keywords[0]}
                  </Badge>
                )}
                {post.attributes.status === "draft" && (
                  <Badge variant="outline">
                    Draft
                  </Badge>
                )}
              </div>
              
              {/* Titre - plus grand */}
              <Typography 
                variant="h3" 
                className="line-clamp-2 text-2xl font-bold group-hover:text-primary transition-colors"
              >
                {post.attributes.title}
              </Typography>
              
              {/* Description - plus visible */}
              <Typography className="line-clamp-3 text-base text-muted-foreground">
                {post.attributes.description}
              </Typography>
              
              {/* Métadonnées */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(new Date(post.attributes.date))}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{calculateReadingTime(post.content)} min</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}