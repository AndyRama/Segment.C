import { Typography } from "@/components/nowts/typography";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/features/posts/post-manager";
import { formatDate } from "@/lib/format/date";
import { calculateReadingTime } from "@/features/posts/calculate-reading-time";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

type RecentPostsProps = {
  posts: Post[];
  title?: string;
}

export function RecentPosts({ posts, title = "Articles récents" }: RecentPostsProps) {
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

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block"
          >
            <article className="space-y-4">
              {/* Image de couverture */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${post.attributes.coverUrl})`,
                  }}
                />
              </div>
              
              {/* Badge de catégorie */}
              {post.attributes.keywords[0] && (
                <Badge variant="secondary" className="capitalize">
                  {post.attributes.keywords[0]}
                </Badge>
              )}
              
              {/* Badge Draft si applicable */}
              {post.attributes.status === "draft" && (
                <Badge variant="outline" className="ml-2">
                  Draft
                </Badge>
              )}
              
              {/* Titre */}
              <Typography 
                variant="h3" 
                className="line-clamp-2 text-xl font-semibold group-hover:text-primary transition-colors"
              >
                {post.attributes.title}
              </Typography>
              
              {/* Description */}
              <Typography className="line-clamp-3 text-sm text-muted-foreground">
                {post.attributes.description}
              </Typography>
              
              {/* Métadonnées */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(new Date(post.attributes.date))}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
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