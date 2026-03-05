"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ImageFormItem } from "@/features/products/image-form-item";
import { createProductAction } from "./create-product.action";
import { isActionSuccessful } from "@/lib/actions/actions-utils";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type ProductCategory = "PORTE_ENTRER" | "PORTE_VITRAGE" | "FENETRE" | "BAIE_VITREE";
type ProductMaterial = "ACIER" | "ALUMINIUM" | "BOIS" | "PVC" | "MIXTE" | "BOIS_ALUMINIUM";
type ProductSeller = "SWAO" | "C2R" | "SYBAIE";
type VitragType = "SIMPLE" | "DOUBLE" | "TRIPLE";
type OpeningType =
  | "BATTANT"
  | "OSCILLO_BATTANT"
  | "COULISSANTE"
  | "COULISSANTE_GALANDAGE"
  | "PLIANTE"
  | "FIXE";

interface ProductFormData {
  name: string;
  category: ProductCategory | "";
  material: ProductMaterial | "";
  seller: ProductSeller | "";
  description: string;
  priceRange: string;
  rating: number;
  dimensions: string;
  performance: string;
  image: string;
  colors: string[];
  features: string[];
  isPopular: boolean;
  isNew: boolean;
  isActive: boolean;
  epaisseur?: string;
  vitrage?: VitragType | "";
  uw?: string;
  ouverture?: OpeningType | "";
}

// ── Constants ─────────────────────────────────────────────────────────────────

const CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: "PORTE_ENTRER", label: "Porte d'entrée" },
  { value: "PORTE_VITRAGE", label: "Porte vitrée" },
  { value: "FENETRE", label: "Fenêtre" },
  { value: "BAIE_VITREE", label: "Baie vitrée" },
];

const MATERIALS: { value: ProductMaterial; label: string }[] = [
  { value: "ACIER", label: "Acier" },
  { value: "ALUMINIUM", label: "Aluminium" },
  { value: "BOIS", label: "Bois" },
  { value: "PVC", label: "PVC" },
  { value: "MIXTE", label: "Mixte" },
  { value: "BOIS_ALUMINIUM", label: "Bois / Aluminium" },
];

const SELLERS: { value: ProductSeller; label: string }[] = [
  { value: "SWAO", label: "Swao" },
  { value: "C2R", label: "C2R" },
  { value: "SYBAIE", label: "Sybaie" },
];

const VITRAGES: { value: VitragType; label: string }[] = [
  { value: "SIMPLE", label: "Simple" },
  { value: "DOUBLE", label: "Double" },
  { value: "TRIPLE", label: "Triple" },
];

const OPENINGS: { value: OpeningType; label: string }[] = [
  { value: "BATTANT", label: "Battant" },
  { value: "OSCILLO_BATTANT", label: "Oscillo-battant" },
  { value: "COULISSANTE", label: "Coulissante" },
  { value: "COULISSANTE_GALANDAGE", label: "Coulissante galandage" },
  { value: "PLIANTE", label: "Pliante" },
  { value: "FIXE", label: "Fixe" },
];

const DEFAULT_FORM: ProductFormData = {
  name: "",
  category: "",
  material: "",
  seller: "",
  description: "",
  priceRange: "",
  rating: 4.5,
  dimensions: "",
  performance: "",
  image: "",
  colors: [],
  features: [],
  isPopular: false,
  isNew: false,
  isActive: true,
  epaisseur: "",
  vitrage: "",
  uw: "",
  ouverture: "",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const isFenetre = (cat: string) => cat === "FENETRE" || cat === "BAIE_VITREE";
const isPorte = (cat: string) => cat === "PORTE_ENTRER" || cat === "PORTE_VITRAGE";

// ── List editor (couleurs / caractéristiques) ─────────────────────────────────

function ListEditor({
  label,
  values,
  onChange,
  placeholder,
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const [input, setInput] = useState("");

  const add = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    onChange([...values, trimmed]);
    setInput("");
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
          placeholder={placeholder ?? "Ajouter puis Entrée…"}
          className="flex-1"
        />
        <Button type="button" variant="outline" onClick={add}>
          +
        </Button>
      </div>
      {values.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {values.map((v, i) => (
            <Badge key={i} variant="secondary" className="gap-1">
              {v}
              <button
                type="button"
                onClick={() => onChange(values.filter((_, idx) => idx !== i))}
                className="ml-0.5 text-muted-foreground hover:text-destructive transition"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Section title ─────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-6 mb-1 first:mt-0">
      {children}
    </p>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NewProductPage() {
  const [form, setForm] = useState<ProductFormData>(DEFAULT_FORM);
  const router = useRouter();

  const set = <K extends keyof ProductFormData>(key: K, value: ProductFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const fenetre = isFenetre(form.category);
  const porte = isPorte(form.category);

  const saveMutation = useMutation({
    mutationFn: async (data: ProductFormData) => {
      const result = await createProductAction({
        ...data,
        category: data.category as Exclude<typeof data.category, "">,
        material: data.material as Exclude<typeof data.material, "">,
        seller: data.seller as Exclude<typeof data.seller, "">,
        epaisseur: data.epaisseur || undefined,
        vitrage: data.vitrage
          ? (data.vitrage as VitragType)
          : undefined,
        uw: data.uw || undefined,
        ouverture: data.ouverture
          ? (data.ouverture as OpeningType)
          : undefined,
      });

      if (!isActionSuccessful(result)) {
        throw new Error(result?.serverError ?? "Erreur inconnue");
      }

      return result.data;
    },
    onSuccess: (product) => {
      toast.success("Produit créé avec succès !");
      router.push(`/admin/produits/${product?.id}`);
    },
    onError: (err: Error) => {
      toast.error(err.message ?? "Erreur lors de la création");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.material || !form.seller) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    saveMutation.mutate(form);
  };

  return (
    <Layout size="lg">
      <LayoutHeader>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href="/admin/produits">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <LayoutTitle>Nouveau produit</LayoutTitle>
        </div>
      </LayoutHeader>

      <LayoutContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* ── Colonne principale ── */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Identification */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Identification</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label>
                        Nom du modèle <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="ex. Ablette, Trio 1…"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label>
                        Vendeur <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.seller}
                        onValueChange={(v) => set("seller", v as ProductSeller)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir…" />
                        </SelectTrigger>
                        <SelectContent>
                          {SELLERS.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label>
                        Catégorie <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.category}
                        onValueChange={(v) => set("category", v as ProductCategory)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir…" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((c) => (
                            <SelectItem key={c.value} value={c.value}>
                              {c.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label>
                        Matériau <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.material}
                        onValueChange={(v) => set("material", v as ProductMaterial)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir…" />
                        </SelectTrigger>
                        <SelectContent>
                          {MATERIALS.map((m) => (
                            <SelectItem key={m.value} value={m.value}>
                              {m.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label>Description</Label>
                    <Textarea
                      value={form.description}
                      onChange={(e) => set("description", e.target.value)}
                      placeholder="Description du produit…"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Tarif & specs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Tarif & spécifications</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label>Fourchette de prix</Label>
                      <Input
                        value={form.priceRange}
                        onChange={(e) => set("priceRange", e.target.value)}
                        placeholder="1400€ - 1700€ ou Sur devis"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label>Note (0 à 5)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        min={0}
                        max={5}
                        value={form.rating}
                        onChange={(e) => set("rating", parseFloat(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label>Dimensions</Label>
                      <Input
                        value={form.dimensions}
                        onChange={(e) => set("dimensions", e.target.value)}
                        placeholder="H: 2000-2250mm, L: 800-1000mm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label>Performance thermique</Label>
                      <Input
                        value={form.performance}
                        onChange={(e) => set("performance", e.target.value)}
                        placeholder="1.4 W/(m².K)"
                      />
                    </div>
                  </div>

                  {/* Porte */}
                  {porte && (
                    <div className="flex flex-col gap-1.5">
                      <Label>Épaisseur</Label>
                      <Input
                        value={form.epaisseur ?? ""}
                        onChange={(e) => set("epaisseur", e.target.value)}
                        placeholder="48mm, 60mm, 80mm…"
                      />
                    </div>
                  )}

                  {/* Fenêtre / Baie */}
                  {fenetre && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label>Type de vitrage</Label>
                        <Select
                          value={form.vitrage ?? ""}
                          onValueChange={(v) => set("vitrage", v as VitragType)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir…" />
                          </SelectTrigger>
                          <SelectContent>
                            {VITRAGES.map((v) => (
                              <SelectItem key={v.value} value={v.value}>
                                {v.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label>Uw</Label>
                        <Input
                          value={form.uw ?? ""}
                          onChange={(e) => set("uw", e.target.value)}
                          placeholder="1.2 W/(m².K)"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label>Type d'ouverture</Label>
                        <Select
                          value={form.ouverture ?? ""}
                          onValueChange={(v) => set("ouverture", v as OpeningType)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir…" />
                          </SelectTrigger>
                          <SelectContent>
                            {OPENINGS.map((o) => (
                              <SelectItem key={o.value} value={o.value}>
                                {o.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Couleurs & caractéristiques */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Couleurs & caractéristiques</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <ListEditor
                    label="Couleurs disponibles"
                    values={form.colors}
                    onChange={(v) => set("colors", v)}
                    placeholder="ex. Gris 7016, Blanc, Anthracite…"
                  />
                  <ListEditor
                    label="Caractéristiques"
                    values={form.features}
                    onChange={(v) => set("features", v)}
                    placeholder="ex. Triple vitrage feuilleté…"
                  />
                </CardContent>
              </Card>
            </div>

            {/* ── Colonne droite ── */}
            <div className="flex flex-col gap-4">

              {/* Image */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Image produit</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <ImageFormItem
                    imageUrl={form.image}
                    onChange={(url) => set("image", url)}
                    className="h-48 w-full"
                  />
                  <p className="text-center text-xs text-muted-foreground">
                    Glissez une image ou cliquez pour sélectionner
                    <br />
                    PNG / JPG – max 1 Mo
                  </p>
                  {form.image && (
                    <p className="break-all rounded bg-muted px-2 py-1 text-xs text-muted-foreground font-mono">
                      {form.image}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Statut */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Statut & mise en avant</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isActive">Produit actif</Label>
                    <Switch
                      id="isActive"
                      checked={form.isActive}
                      onCheckedChange={(v) => set("isActive", v)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isPopular">Populaire</Label>
                    <Switch
                      id="isPopular"
                      checked={form.isPopular}
                      onCheckedChange={(v) => set("isPopular", v)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isNew">Nouveau</Label>
                    <Switch
                      id="isNew"
                      checked={form.isNew}
                      onCheckedChange={(v) => set("isNew", v)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Aperçu carte */}
              <Card className="overflow-hidden">
                <div className="h-32 bg-muted relative">
                  {form.image ? (
                    <img
                      src={form.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain p-2"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                      Aperçu
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-1">
                    {form.isNew && (
                      <Badge variant="secondary" className="text-[10px] px-1.5">
                        Nouveau
                      </Badge>
                    )}
                    {form.isPopular && (
                      <Badge className="text-[10px] px-1.5 bg-amber-100 text-amber-700 border-amber-200">
                        Populaire
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-3 flex flex-col gap-0.5">
                  <p className="text-sm font-semibold truncate">
                    {form.name || "Nom du produit"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {form.seller || "—"} ·{" "}
                    {MATERIALS.find((m) => m.value === form.material)?.label || "—"}
                  </p>
                  <p className="text-xs font-medium text-emerald-600">
                    {form.priceRange || "Prix non défini"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ── Boutons en bas ── */}
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button asChild variant="outline">
              <Link href="/admin/produits">Annuler</Link>
            </Button>
            <Button type="submit" disabled={saveMutation.isPending}>
              {saveMutation.isPending ? "Enregistrement…" : "Enregistrer"}
            </Button>
          </div>
        </form>
      </LayoutContent>
    </Layout>
  );
}