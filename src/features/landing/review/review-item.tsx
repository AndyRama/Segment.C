import { Typography } from "@/components/nowts/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClientMarkdown } from "@/features/markdown/client-markdown";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export type ReviewItemProps = {
  /**
   * The review of the user. Use **bold** text to highlight.
   */
  review: string;
  /**
   * The name of the user.
   */
  name: string;
  /**
   * The role of the user. (his job)
   */
  role: string;
  /**
   * The image of the user.
   */
  image: string;
} & ComponentPropsWithoutRef<"div">;

export const ReviewItem = ({ className, review, name, role, image, ...props }: ReviewItemProps) => {
  // ✅ On extrait explicitement review, name, role, image
  // pour éviter qu'ils soient passés au DOM via {...props}
  
  return (
    <Card className={cn("h-fit", className)} {...props}>
      <CardHeader>
        <ClientMarkdown className="citation">{review}</ClientMarkdown>
      </CardHeader>
      <CardContent className="bg-background flex items-center gap-2 rounded-lg pt-6">
        <div>
          <Avatar>
            <AvatarFallback>{name[0]}</AvatarFallback>
            <AvatarImage src={image} alt={`Photo de ${name}`} />
          </Avatar>
        </div>
        <div>
          <Typography variant="small">{name}</Typography>
          <Typography variant="muted">{role}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};