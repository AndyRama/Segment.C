"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImageFormItem } from "@/features/products/image-form-item";
import { createProductAction } from "./create-product.action";
import { isActionSuccessful } from "@/lib/actions/actions-utils";

// ── Types mirrored from the Prisma schema / seed ──────────────────────────────

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
  // common
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
  // porte-only
  epaisseur?: string;
  // fenetre-only
  vitrage?: VitragType | "";
  uw?: string;
  ouverture?: OpeningType | "";
}

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

// ── Helpers ──────────────────────────────────────────────────────────────────

const isFenetre = (cat: string) => cat === "FENETRE" || cat === "BAIE_VITREE";
const isPorte = (cat: string) => cat === "PORTE_ENTRER" || cat === "PORTE_VITRAGE";

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3 mt-8 first:mt-0">
      {children}
    </h2>
  );
}

function Field({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-zinc-200">
        {label}
        {required && <span className="ml-0.5 text-rose-400">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-zinc-500">{hint}</p>}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  step,
  min,
  max,
}: {
  value: string | number;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  step?: string;
  min?: number;
  max?: number;
}) {
  return (
    <input
      type={type}
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition"
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition resize-none"
    />
  );
}

function Select<T extends string>({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: T | "";
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition appearance-none"
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="flex items-center gap-2 text-sm text-zinc-300 select-none"
    >
      <span
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${value ? "bg-sky-500" : "bg-zinc-700"}`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 translate-x-0.5 transform rounded-full bg-white shadow transition-transform ${value ? "translate-x-4" : ""}`}
        />
      </span>
      {label}
    </button>
  );
}

// List editor (colors / features)
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

  const remove = (i: number) => {
    onChange(values.filter((_, idx) => idx !== i));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-200">{label}</label>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
          placeholder={placeholder ?? "Ajouter…"}
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition"
        />
        <button
          type="button"
          onClick={add}
          className="rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sm text-sky-400 hover:bg-sky-500/20 transition"
        >
          +
        </button>
      </div>
      {values.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {values.map((v, i) => (
            <span
              key={i}
              className="flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-300"
            >
              {v}
              <button
                type="button"
                onClick={() => remove(i)}
                className="ml-0.5 text-zinc-500 hover:text-rose-400 transition"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

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

export default function NewProductPage() {
  const [form, setForm] = useState<ProductFormData>(DEFAULT_FORM);
  const router = useRouter();

  const set = <K extends keyof ProductFormData>(key: K, value: ProductFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const saveMutation = useMutation({
    mutationFn: async (data: ProductFormData) => {
      const result = await createProductAction({
        ...data,
        category: data.category as Exclude<typeof data.category, "">,
        material: data.material as Exclude<typeof data.material, "">,
        seller: data.seller as Exclude<typeof data.seller, "">,
        epaisseur: data.epaisseur || undefined,
        vitrage: data.vitrage ? (data.vitrage as "SIMPLE" | "DOUBLE" | "TRIPLE") : undefined,
        uw: data.uw || undefined,
        ouverture: data.ouverture
          ? (data.ouverture as "BATTANT" | "OSCILLO_BATTANT" | "COULISSANTE" | "COULISSANTE_GALANDAGE" | "PLIANTE" | "FIXE")
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
      toast.error(err.message ?? "Erreur lors de la création du produit");
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

  const fenetre = isFenetre(form.category);
  const porte = isPorte(form.category);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-900/60 px-6 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-500 mb-0.5">
              Admin / Produits
            </p>
            <h1 className="text-xl font-semibold text-zinc-100">
              Nouveau produit
            </h1>
          </div>
          <div className="flex gap-2">
            <a
              href="/admin/produits"
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition"
            >
              Annuler
            </a>
            <button
              form="product-form"
              type="submit"
              disabled={saveMutation.isPending}
              className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 disabled:opacity-50 transition"
            >
              {saveMutation.isPending ? "Enregistrement…" : "Enregistrer"}
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <form
        id="product-form"
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl px-6 py-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* ── Left column (main info) ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Identification */}
            <SectionTitle>Identification</SectionTitle>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Nom du modèle" required>
                <Input
                  value={form.name}
                  onChange={(v) => set("name", v)}
                  placeholder="ex. Ablette, Trio 1…"
                />
              </Field>
              <Field label="Vendeur" required>
                <Select
                  value={form.seller}
                  onChange={(v) => set("seller", v)}
                  options={SELLERS}
                  placeholder="Choisir…"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Catégorie" required>
                <Select
                  value={form.category}
                  onChange={(v) => set("category", v)}
                  options={CATEGORIES}
                  placeholder="Choisir…"
                />
              </Field>
              <Field label="Matériau" required>
                <Select
                  value={form.material}
                  onChange={(v) => set("material", v)}
                  options={MATERIALS}
                  placeholder="Choisir…"
                />
              </Field>
            </div>

            <Field label="Description">
              <Textarea
                value={form.description}
                onChange={(v) => set("description", v)}
                placeholder="Description du produit…"
                rows={4}
              />
            </Field>

            {/* Tarif & specs */}
            <SectionTitle>Tarif & spécifications</SectionTitle>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Fourchette de prix" hint="ex. 1400€ - 1700€ ou Sur devis">
                <Input
                  value={form.priceRange}
                  onChange={(v) => set("priceRange", v)}
                  placeholder="1400€ - 1700€"
                />
              </Field>
              <Field label="Note" hint="Entre 0 et 5">
                <Input
                  type="number"
                  step="0.1"
                  min={0}
                  max={5}
                  value={form.rating}
                  onChange={(v) => set("rating", parseFloat(v))}
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Dimensions" hint="ex. H: 2000-2250mm, L: 800-1000mm">
                <Input
                  value={form.dimensions}
                  onChange={(v) => set("dimensions", v)}
                  placeholder="H: …, L: …"
                />
              </Field>
              <Field label="Performance thermique" hint="ex. 1.4 W/(m².K)">
                <Input
                  value={form.performance}
                  onChange={(v) => set("performance", v)}
                  placeholder="1.4 W/(m².K)"
                />
              </Field>
            </div>

            {/* Porte-specific */}
            {porte && (
              <>
                <SectionTitle>Spécifications porte</SectionTitle>
                <Field label="Épaisseur" hint="ex. 48mm, 60mm, 80mm">
                  <Input
                    value={form.epaisseur ?? ""}
                    onChange={(v) => set("epaisseur", v)}
                    placeholder="48mm"
                  />
                </Field>
              </>
            )}

            {/* Fenêtre-specific */}
            {fenetre && (
              <>
                <SectionTitle>Spécifications fenêtre / baie</SectionTitle>
                <div className="grid grid-cols-3 gap-4">
                  <Field label="Type de vitrage">
                    <Select
                      value={form.vitrage ?? ""}
                      onChange={(v) => set("vitrage", v)}
                      options={VITRAGES}
                      placeholder="Choisir…"
                    />
                  </Field>
                  <Field label="Uw" hint="ex. 1.2 W/(m².K)">
                    <Input
                      value={form.uw ?? ""}
                      onChange={(v) => set("uw", v)}
                      placeholder="1.2 W/(m².K)"
                    />
                  </Field>
                  <Field label="Type d'ouverture">
                    <Select
                      value={form.ouverture ?? ""}
                      onChange={(v) => set("ouverture", v)}
                      options={OPENINGS}
                      placeholder="Choisir…"
                    />
                  </Field>
                </div>
              </>
            )}

            {/* Colors & features */}
            <SectionTitle>Couleurs & caractéristiques</SectionTitle>
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
          </div>

          {/* ── Right column (image + flags) ── */}
          <div className="space-y-6">
            <SectionTitle>Image produit</SectionTitle>
            <div className="flex flex-col items-center gap-3">
              <ImageFormItem
                imageUrl={form.image}
                onChange={(url) => set("image", url)}
                className="h-52 w-full"
              />
              <p className="text-center text-xs text-zinc-500">
                Glissez une image ou cliquez pour sélectionner
                <br />
                PNG / JPG – max 1 Mo
              </p>
              {form.image && (
                <p className="w-full break-all rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-400 font-mono">
                  {form.image}
                </p>
              )}
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 space-y-3">
              <SectionTitle>Statut & mise en avant</SectionTitle>
              <Toggle
                label="Produit actif"
                value={form.isActive}
                onChange={(v) => set("isActive", v)}
              />
              <Toggle
                label="Produit populaire"
                value={form.isPopular}
                onChange={(v) => set("isPopular", v)}
              />
              <Toggle
                label="Nouveau produit"
                value={form.isNew}
                onChange={(v) => set("isNew", v)}
              />
            </div>

            {/* Preview card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              <div className="h-36 bg-zinc-800 relative">
                {form.image ? (
                  <img
                    src={form.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain p-2"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-xs">
                    Aperçu
                  </div>
                )}
                <div className="absolute top-2 right-2 flex gap-1">
                  {form.isNew && (
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.5 text-[10px] text-emerald-400">
                      Nouveau
                    </span>
                  )}
                  {form.isPopular && (
                    <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-1.5 py-0.5 text-[10px] text-amber-400">
                      Populaire
                    </span>
                  )}
                </div>
              </div>
              <div className="p-3 space-y-0.5">
                <p className="text-sm font-semibold text-zinc-100 truncate">
                  {form.name || "Nom du produit"}
                </p>
                <p className="text-xs text-zinc-500">
                  {form.seller || "—"} ·{" "}
                  {MATERIALS.find((m) => m.value === form.material)?.label || "—"}
                </p>
                <p className="text-xs font-medium text-sky-400">
                  {form.priceRange || "Prix non défini"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom submit bar (mobile) */}
        <div className="mt-10 flex justify-end gap-2 lg:hidden">
          <a
            href="/admin/produits"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition"
          >
            Annuler
          </a>
          <button
            type="submit"
            disabled={saveMutation.isPending}
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 disabled:opacity-50 transition"
          >
            {saveMutation.isPending ? "Enregistrement…" : "Enregistrer"}
          </button>
        </div>
      </form>
    </div>
  );
}