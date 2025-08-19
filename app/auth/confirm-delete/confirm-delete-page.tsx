"use client";

import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/features/form/submit-button";
import { authClient } from "@/lib/auth-client";
import { unwrapSafePromise } from "@/lib/promises";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function ConfirmDeletePage({
  token,
  callbackUrl = "/auth/goodbye",
}: {
  token?: string;
  callbackUrl?: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const confirmDeleteMutation = useMutation({
    mutationFn: async () => {
      if (!token) {
        throw new Error("Invalid token");
      }
      return unwrapSafePromise(
        authClient.deleteUser({
          token,
        }),
      );
    },
    onError: (error) => {
      setError(error.message);
      toast.error(error.message);
    },
    onSuccess: () => {
      router.push(callbackUrl);
    },
  });

  const handleConfirmDelete = () => {
    setIsLoading(true);
    confirmDeleteMutation.mutate();
  };

  const handleCancel = () => {
    router.push("/account");
  };

  if (error) {
    return <div className="mb-4 text-red-500">{error}</div>;
  }

  return (
    <>
      <p>
        Cette action est définitive et irréversible. Toutes vos données seront définitivement supprimées de nos systèmes.
      </p>
      <div className="flex gap-4 pt-4">
        <LoadingButton
          loading={isLoading || confirmDeleteMutation.isPending}
          variant="destructive"
          onClick={handleConfirmDelete}
        >
          Oui, supprimer mon compte
        </LoadingButton>
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </>
  );
}
