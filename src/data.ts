import { Theme, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'spinspin',
    title: 'Spinspin',
    url: 'https://spin-spin.com/wooyeon_oo',
    iconName: 'spinspin',
    subtitle: ''
  },
  {
    id: 'x',
    title: 'X',
    url: 'https://x.com/wooyeon_oo',
    iconName: 'x',
    subtitle: ''
  },
  {
    id: 'xiaohongshu',
    title: '小红书',
    url: 'https://xhslink.com/m/QgXOqKcJ3N',
    iconName: 'xiaohongshu',
    subtitle: ''
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/woooyeon_oo?igsh=MWg4aWp2YjdkdnBjMg%3D%3D&utm_source=qr',
    iconName: 'instagram',
    subtitle: ''
  }
];

export const THEMES: Theme[] = [
  {
    id: 'frosted_glass',
    name: '유리알 프로스트 (Frosted Glass)',
    badge: '★ 시그니처',
    bgClass: 'bg-[#f5f3ff] relative overflow-hidden',
    cardClass: 'bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm',
    textClass: 'text-[#4c1d95]',
    subTextClass: 'text-[#7c3aed]/85 border-purple-200/50',
    accentColor: '#8b5cf6',
    buttonClass: 'bg-[#7c3aed] text-white hover:bg-[#6d28d9] active:bg-[#5b21b6]',
    iconBg: 'bg-[#f5f3ff] text-[#8b5cf6]',
    cardHoverClass: 'hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_12px_32px_-4px_rgba(109,40,217,0.12)]',
    glowColor: 'rgba(109, 40, 217, 0.12)',
    cardContainerClass: 'bg-white/40 border border-white/60 shadow-[0_32px_64px_-16px_rgba(109,40,217,0.15)] rounded-[40px] md:rounded-[48px] p-6 md:p-8 relative'
  },
  {
    id: 'lavender_dream',
    name: '파스텔 라벤더 (Lavender Dream)',
    badge: '추천',
    bgClass: 'bg-gradient-to-b from-[#F9F7FF] via-[#F3EDFF] to-[#E6DBFF]',
    cardClass: 'bg-white/80 border border-purple-100 shadow-[0_8px_24px_rgba(147,51,234,0.06)] backdrop-blur-sm',
    textClass: 'text-purple-950',
    subTextClass: 'text-purple-600/85 border-purple-200/50',
    accentColor: '#8b5cf6',
    buttonClass: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800',
    iconBg: 'bg-purple-50 text-purple-600',
    cardHoverClass: 'hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_12px_28px_rgba(147,51,234,0.12)]',
    glowColor: 'rgba(147, 51, 234, 0.15)',
    cardContainerClass: 'backdrop-blur-sm bg-white/20 border border-purple-100/40 p-4 rounded-3xl'
  },
  {
    id: 'neon_amethyst',
    name: '네온 자수정 (Neon Amethyst)',
    badge: 'Vibrant',
    bgClass: 'bg-[#0A0518] relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_50%)]',
    cardClass: 'bg-[#180E2D]/75 border border-purple-500/25 shadow-[0_4px_20px_rgba(168,85,247,0.08)] backdrop-blur-md',
    textClass: 'text-purple-50',
    subTextClass: 'text-purple-300/80 border-purple-500/20',
    accentColor: '#c084fc',
    buttonClass: 'bg-purple-500 text-white hover:bg-purple-400 active:bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.4)]',
    iconBg: 'bg-purple-950/70 text-purple-300 border border-purple-500/30',
    cardHoverClass: 'hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    cardContainerClass: 'bg-[#110825]/40 border border-purple-500/10 p-4 rounded-3xl'
  },
  {
    id: 'grape_frosting',
    name: '라일락 네오 (Lilac Neo)',
    badge: 'Hip',
    bgClass: 'bg-gradient-to-tr from-[#FAF5FF] via-[#F3EDFF] to-[#FFF1F2]',
    cardClass: 'bg-white border-2 border-[#7C3AED] shadow-[4px_4px_0px_#7C3AED]',
    textClass: 'text-purple-900',
    subTextClass: 'text-purple-600 border-purple-200/50',
    accentColor: '#7C3AED',
    buttonClass: 'bg-[#7C3AED] text-white border-2 border-black font-semibold',
    iconBg: 'bg-purple-50 text-[#7C3AED] border border-purple-200',
    cardHoverClass: 'hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#7C3AED]',
    glowColor: 'rgba(124, 58, 237, 0.2)',
    cardContainerClass: 'border border-dashed border-purple-200 p-4 rounded-3xl'
  },
  {
    id: 'deep_plum',
    name: '클래식 플럼 (Classic Plum)',
    badge: 'Refined',
    bgClass: 'bg-gradient-to-b from-[#FAF8FF] to-[#DBC9FE]',
    cardClass: 'bg-white/90 border border-violet-200/60 shadow-[0_4px_16px_rgba(109,40,217,0.04)]',
    textClass: 'text-violet-950',
    subTextClass: 'text-violet-600/80 border-purple-200/50',
    accentColor: '#6D28D9',
    buttonClass: 'bg-[#6D28D9] text-white hover:bg-[#5B21B6]',
    iconBg: 'bg-violet-50 text-[#6D28D9]',
    cardHoverClass: 'hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_10px_24px_rgba(109,40,217,0.15)]',
    glowColor: 'rgba(109, 40, 217, 0.15)',
    cardContainerClass: 'bg-white/50 border border-purple-100/30 p-4 rounded-3xl'
  },
  {
    id: 'orchid_gradient',
    name: '오키드 글로우 (Orchid Glow)',
    badge: 'Gradient',
    bgClass: 'bg-gradient-to-br from-[#A855F7] via-[#8B5CF6] to-[#6366F1]',
    cardClass: 'bg-white/12 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-white',
    textClass: 'text-white',
    subTextClass: 'text-purple-100/80 border-white/10',
    accentColor: '#ffffff',
    buttonClass: 'bg-white text-purple-700 hover:bg-purple-50 active:bg-purple-100',
    iconBg: 'bg-white/10 text-white border border-white/20',
    cardHoverClass: 'hover:-translate-y-1 hover:bg-white/18 hover:border-white/30 hover:shadow-[0_12px_28px_rgba(255,255,255,0.1)]',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    cardContainerClass: 'bg-white/5 border border-white/10 p-4 rounded-3xl'
  }
];

export function getSvgIcon(iconName: string): string {
  switch (iconName) {
    case 'spinspin':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 0-10 10h4a6 6 0 0 1 6-6V2z"/></svg>`;
    case 'x':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>`;
    case 'xiaohongshu':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`;
    case 'instagram':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
  }
}

export function generateStaticHtml(theme: Theme): string {
  const isDark = theme.id === 'neon_amethyst';
  const isFrosted = theme.id === 'frosted_glass';
  const textColor = isFrosted ? '#4c1d95' : isDark ? '#f3e8ff' : '#2e1065';
  const labelColor = isFrosted ? '#7c3aed' : isDark ? '#c084fc' : '#7c3aed';
  const subTextColor = isFrosted ? '#7c3aedbc' : isDark ? '#c084fcbc' : '#6b21a8bd';
  const bodyStyle = theme.id === 'neon_amethyst' 
    ? "background-color: #0A0518; background-image: radial-gradient(circle at top right, rgba(168,85,247,0.18), transparent 50%); color: #f3e8ff;"
    : theme.id === 'frosted_glass'
    ? "background-color: #f5f3ff; color: #4c1d95;"
    : theme.id === 'orchid_gradient'
    ? "background: linear-gradient(135deg, #A855F7, #8B5CF6, #6366F1); color: #ffffff;"
    : theme.id === 'grape_frosting'
    ? "background: linear-gradient(45deg, #FAF5FF, #F3EDFF, #FFF1F2); color: #581c87;"
    : theme.id === 'deep_plum'
    ? "background: linear-gradient(180deg, #FAF8FF 0%, #DBC9FE 100%); color: #2e1065;"
    : "background: linear-gradient(180deg, #F9F7FF 0%, #F3EDFF 50%, #E6DBFF 100%); color: #2e1065;";

  let cardStyle = "";
  if (theme.id === 'frosted_glass') {
    cardStyle = "background-color: rgba(255, 255, 255, 0.6); border: 1px solid rgba(255, 255, 255, 0.8); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); backdrop-filter: blur(12px);";
  } else if (theme.id === 'neon_amethyst') {
    cardStyle = "background-color: rgba(24, 14, 45, 0.75); border: 1px solid rgba(168, 85, 247, 0.25); box-shadow: 0 4px 20px rgba(168, 85, 247, 0.08); backdrop-filter: blur(8px);";
  } else if (theme.id === 'orchid_gradient') {
    cardStyle = "background-color: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 255, 255, 0.20); box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1); backdrop-filter: blur(8px); color: #ffffff;";
  } else if (theme.id === 'grape_frosting') {
    cardStyle = "background-color: #ffffff; border: 2px solid #7C3AED; box-shadow: 4px 4px 0px #7C3AED;";
  } else if (theme.id === 'deep_plum') {
    cardStyle = "background-color: rgba(255, 255, 255, 0.9); border: 1px solid rgba(109, 40, 217, 0.15); box-shadow: 0 4px 16px rgba(109, 40, 217, 0.04);";
  } else {
    cardStyle = "background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(147, 51, 234, 0.1); box-shadow: 0 8px 24px rgba(147, 51, 234, 0.06); backdrop-filter: blur(4px);";
  }

  const iconBgStyle = theme.id === 'frosted_glass'
    ? "background-color: #f5f3ff; color: #8b5cf6;"
    : theme.id === 'neon_amethyst'
    ? "background-color: rgba(30, 15, 60, 0.7); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3);"
    : theme.id === 'orchid_gradient'
    ? "background-color: rgba(255, 255, 255, 0.15); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.25);"
    : theme.id === 'grape_frosting'
    ? "background-color: #f5f3ff; color: #7C3AED; border: 1px solid #ddd6fe;"
    : theme.id === 'deep_plum'
    ? "background-color: #f5f3ff; color: #6D28D9;"
    : "background-color: #faf5ff; color: #8b5cf6;";

  let containerCardStyle = "";
  if (theme.id === 'frosted_glass') {
    containerCardStyle = "background-color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.6); box-shadow: 0 32px 64px -16px rgba(109,40,217,0.15); backdrop-filter: blur(24px); border-radius: 48px; padding: 40px 24px;";
  } else {
    containerCardStyle = "padding: 20px 10px;";
  }

  const spinAnimation = `
    @keyframes spin-record {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .spin-hover:hover .record-svg {
      animation: spin-record 3s linear infinite;
    }
  `;

  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>우연 Wooyeon</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      ${bodyStyle}
      padding: 20px;
      overflow-x: hidden;
      line-height: 1.5;
    }
    
    .floating-container {
      width: 100%;
      max-width: 420px;
      ${containerCardStyle}
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
    }
    
    .profile-name {
      font-size: 24px;
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 8px;
      letter-spacing: -0.025em;
    }
    
    .profile-bio {
      font-size: 14px;
      font-weight: 400;
      opacity: 0.85;
      margin-bottom: 36px;
      letter-spacing: 0.05em;
    }
    
    .links-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 40px;
    }
    
    .card-link {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 16px 20px;
      border-radius: 20px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      ${cardStyle}
    }
    
    .card-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 28px ${theme.glowColor};
    }
    
    .icon-wrapper {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin-right: 16px;
      transition: transform 0.3s ease;
      ${iconBgStyle}
    }
    
    .card-link:hover .icon-wrapper {
      transform: scale(1.08);
    }
    
    .content-wrapper {
      display: flex;
      flex-direction: column;
      text-align: left;
      flex-grow: 1;
    }
    
    .link-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    .link-subtitle {
      font-size: 12px;
      opacity: 0.65;
    }
    
    .arrow-icon {
      margin-left: 8px;
      opacity: 0.4;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    
    .card-link:hover .arrow-icon {
      opacity: 0.85;
      transform: translateX(3px);
    }
    
    .footer {
      font-size: 11px;
      opacity: 0.45;
      letter-spacing: 0.02em;
    }

    ${spinAnimation}
    
    /* Reveal animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-item {
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
  </style>
</head>
<body>
  ${theme.id === 'frosted_glass' ? `
  <div style="position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none;">
    <div style="position: absolute; top: -10%; left: -5%; width: 500px; height: 500px; background-color: #e9d5ff; border-radius: 50%; filter: blur(80px); opacity: 0.6; mix-blend-mode: multiply;"></div>
    <div style="position: absolute; bottom: -10%; right: -5%; width: 600px; height: 600px; background-color: #ddd6fe; border-radius: 50%; filter: blur(80px); opacity: 0.6; mix-blend-mode: multiply;"></div>
    <div style="position: absolute; top: 20%; right: 10%; width: 400px; height: 400px; background-color: #fae8ff; border-radius: 50%; filter: blur(80px); opacity: 0.4; mix-blend-mode: multiply;"></div>
  </div>
  ` : ''}
  <div class="floating-container" style="z-index: 10;">
    ${theme.id === 'frosted_glass' ? `<div style="position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: 64px; height: 6px; background-color: rgba(147, 51, 234, 0.15); border-radius: 9999px;"></div>` : ''}
    <!-- Header -->
    <div class="animate-item" style="animation-delay: 100ms;">
      <h1 class="profile-name">${theme.id === 'orchid_gradient' ? '<span style="text-shadow: 0 2px 4px rgba(0,0,0,0.15)">우연 Wooyeon</span>' : '우연 Wooyeon'}</h1>
      <p class="profile-bio">우연히 우연하다</p>
    </div>
    
    <!-- Links List -->
    <div class="links-wrapper">
      <!-- 1. Spinspin -->
      <a href="https://spin-spin.com/wooyeon_oo" class="card-link animate-item spin-hover" style="animation-delay: 200ms;" target="_blank" rel="noopener noreferrer">
        <div class="icon-wrapper">
          <div class="record-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 0-10 10h4a6 6 0 0 1 6-6V2z"/></svg>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="link-title">Spinspin</div>
        </div>
        <div class="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </a>
      
      <!-- 2. X -->
      <a href="https://x.com/wooyeon_oo" class="card-link animate-item" style="animation-delay: 300ms;" target="_blank" rel="noopener noreferrer">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
        </div>
        <div class="content-wrapper">
          <div class="link-title">X</div>
        </div>
        <div class="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </a>
      
      <!-- 3. 小红书 -->
      <a href="https://xhslink.com/m/QgXOqKcJ3N" class="card-link animate-item" style="animation-delay: 400ms;" target="_blank" rel="noopener noreferrer">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </div>
        <div class="content-wrapper">
          <div class="link-title">小红书</div>
        </div>
        <div class="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </a>
      
      <!-- 4. Instagram -->
      <a href="https://www.instagram.com/woooyeon_oo?igsh=MWg4aWp2YjdkdnBjMg%3D%3D&utm_source=qr" class="card-link animate-item" style="animation-delay: 500ms;" target="_blank" rel="noopener noreferrer">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </div>
        <div class="content-wrapper">
          <div class="link-title">Instagram</div>
        </div>
        <div class="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </a>
    </div>
    
    <!-- Footer -->
    <div class="footer animate-item" style="animation-delay: 600ms;">
      © 2026 우연 Wooyeon. All rights reserved.
    </div>
  </div>
</body>
</html>`;
}
