import {
  BadgeCheck,
  BookOpen,
  Box,
  Calendar,
  Circle,
  Eye,
  Glasses,
  ShieldCheck,
  Sparkles,
  Sun,
  Truck,
  UserRound,
  Zap,
} from "lucide-react";
import type { IconName } from "@/types/home";

export const iconMap = {
  badgeCheck: BadgeCheck,
  bookOpen: BookOpen,
  box: Box,
  calendar: Calendar,
  circle: Circle,
  eye: Eye,
  glasses: Glasses,
  shieldCheck: ShieldCheck,
  sparkles: Sparkles,
  sun: Sun,
  truck: Truck,
  userRound: UserRound,
  zap: Zap,
} satisfies Record<IconName, React.ComponentType<{ className?: string }>>;
