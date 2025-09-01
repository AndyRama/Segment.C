import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export const formatDate = (date: Date, p0: string) => {
  return format(date, "MMMM d, yyyy", { locale: enUS });
};
