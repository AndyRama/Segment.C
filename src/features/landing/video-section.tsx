import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type VideoSectionProps = {
  videoUrl: string;
  title?: string;
  description?: string;
  className?: string;
}

export const VideoSection = ({
  videoUrl,
  title = "Découvrez notre solution en action",
  description = "Regardez comment nos agents IA transforment votre activité au quotidien",
  className
}: VideoSectionProps) => {
  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0", className)}>
      <div className="flex flex-col gap-8 lg:gap-12">
        <VideoHeader title={title} description={description} />
        <VideoPlayer videoUrl={videoUrl} />
      </div>
    </section>
  );
};

const VideoHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      {title}
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      {description}
    </Typography>
  </div>
);

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => (
  <div className="w-full overflow-hidden rounded-lg border border-black bg-black dark:border-white">
    <video
      className="aspect-video h-auto w-full object-cover"
      controls
      preload="metadata"
    >
      <source src={videoUrl} type="video/mp4" />
      Votre navigateur ne supporte pas la lecture vidéo.
    </video>
  </div>
);