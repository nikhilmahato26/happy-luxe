/**
 * iconMap.js — curated registry of the lucide-react icons referenced by string
 * name in siteContent.js. Named imports let Vite tree-shake the rest of the
 * library, keeping the bundle lean. Add new icons here when you reference them.
 */
import {
  // services
  BusFront,
  Bus,
  Car,
  Route,
  Plane,
  // specialities / packages
  UsersRound,
  Briefcase,
  Landmark,
  Map,
  Heart,
  Leaf,
  Users,
  Mountain,
  Sparkles,
  // why choose us
  HeartHandshake,
  Crown,
  BadgeCheck,
  ReceiptText,
  ShieldCheck,
  // booking process
  CarFront,
  PhoneCall,
  CalendarCheck,
  PartyPopper,
  Circle,
} from 'lucide-react';

export const iconMap = {
  BusFront,
  Bus,
  Car,
  Route,
  Plane,
  UsersRound,
  Briefcase,
  Landmark,
  Map,
  Heart,
  Leaf,
  Users,
  Mountain,
  Sparkles,
  HeartHandshake,
  Crown,
  BadgeCheck,
  ReceiptText,
  ShieldCheck,
  CarFront,
  PhoneCall,
  CalendarCheck,
  PartyPopper,
  Circle,
};

export function getIcon(name, fallback = Sparkles) {
  return iconMap[name] || fallback;
}
