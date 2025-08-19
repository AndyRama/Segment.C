import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layout, LayoutContent } from "@/features/page/layout";
import Link from "next/link";

export default function GoodbyePage() {
  return (
    <Layout>
      <LayoutContent>
        <Card>
          <CardHeader>
            <CardTitle>Compte Supprimé</CardTitle>
            <CardDescription>
              Votre compte a été supprimé avec succès
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nous sommes désolés de vous voir partir. Votre compte et toutes les données associées
              ont été définitivement supprimés de notre système.
            </p>
            <p>
              Si vous changez d'avis, vous pouvez créer un nouveau compte
              à tout moment.
            </p>
            <div className="flex justify-center pt-4">
              <Button asChild>
                <Link href="/auth/signup">Créer un Nouveau Compte</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
