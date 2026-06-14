export interface Theme {
  id: string;
  name: string;
  badge: string;
  bgClass: string;
  cardClass: string;
  textClass: string;
  subTextClass: string;
  accentColor: string;
  buttonClass: string;
  iconBg: string;
  cardHoverClass: string;
  glowColor: string;
  cardContainerClass?: string;
}

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  iconName: 'spinspin' | 'x' | 'xiaohongshu' | 'instagram';
  subtitle: string;
}

export interface ClickAnalytics {
  [linkId: string]: number;
}
