import { getPost } from "@/features/posts/post-manager";
import { notFound } from "next/navigation";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, Clock, Tag, FileText, Search } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/format/date";
import { calculateReadingTime } from "@/features/posts/calculate-reading-time";
import type { PageParams } from "@/types/next";

export default async function PublicationDetailPage(
  props: PageParams<{ orgSlug: string; slug: string }>
) {
  const params = await props.params;
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <Layout size="lg">
      <LayoutHeader>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href={`/orgs/${params.orgSlug}/publications`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex flex-col gap-1">
            <LayoutTitle className="line-clamp-1">
              {post.attributes.title}
            </LayoutTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {formatDate(new Date(post.attributes.date))}
              <span>·</span>
              <Clock className="h-3 w-3" />
              {calculateReadingTime(post.content)} min de lecture
            </div>
          </div>
        </div>
      </LayoutHeader>

      <LayoutActions className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={`/posts/${post.slug}`} target="_blank" className="flex items-center gap-2">
            <ExternalLink className="h-3.5 w-3.5" />
            Voir sur le site
          </Link>
        </Button>
        <Button asChild size="sm">
          <Link href={`/posts/${post.slug}/edit`} className="flex items-center gap-2">
            Modifier l'article
          </Link>
        </Button>
      </LayoutActions>

      <LayoutContent className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Contenu principal */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Image de couverture */}
            {post.attributes.coverUrl && (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.attributes.coverUrl})` }}
                />
              </div>
            )}

            {/* Description */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.attributes.description}
                </p>
              </CardContent>
            </Card>

            {/* Extrait du contenu */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Aperçu du contenu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-muted-foreground line-clamp-[12]">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {post.content.slice(0, 800)}
                    {post.content.length > 800 && (
                      <span className="text-muted-foreground/50">... [suite sur le site]</span>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne droite — métadonnées SEO */}
          <div className="flex flex-col gap-4">

            {/* Statut */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Statut</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Publication</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                    ✓ Publié
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Slug</span>
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">
                    {post.slug}
                  </code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Temps lecture</span>
                  <span className="text-xs font-medium">{calculateReadingTime(post.content)} min</span>
                </div>
              </CardContent>
            </Card>

            {/* SEO */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  SEO
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1.5">Titre SEO</p>
                  <p className="text-sm font-medium leading-snug">
                    {post.attributes.title}
                  </p>
                </div>
                {post.attributes.description && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1.5">Meta description</p>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {post.attributes.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tags / Mots-clés */}
            {post.attributes.keywords?.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    Mots-clés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {post.attributes.keywords.map((kw: string) => (
                      <Badge key={kw} variant="secondary" className="text-xs capitalize">
                        {kw}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Lien direct */}
            <Button asChild variant="outline" className="w-full" size="sm">
              <Link href={`/posts/${post.slug}`} target="_blank" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Ouvrir l'article public
              </Link>
            </Button>
          </div>
        </div>
      </LayoutContent>
    </Layout>
  );
}