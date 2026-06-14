import React from 'react';
import { motion } from 'motion/react';
import { Theme, SocialLink } from '../types';
import { ChevronRight } from 'lucide-react';

interface VisitorViewProps {
  theme: Theme;
  links: SocialLink[];
  onLinkClick: (id: string) => void;
  isStandalone?: boolean;
  onBackToAdmin?: () => void;
}

export default function VisitorView({
  theme,
  links,
  onLinkClick,
  isStandalone = false,
  onBackToAdmin
}: VisitorViewProps) {
  // Check if current theme is dark
  const isDark = theme.id === 'neon_amethyst';

  // Helper to render Lucide or Custom SVG icons based on the link id
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'spinspin':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 animate-[spin_6s_linear_infinite]"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2a10 10 0 0 0-10 10h4a6 6 0 0 1 6-6V2z" />
          </svg>
        );
      case 'x':
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
            width="18"
            height="18"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'xiaohongshu':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-rose-500"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-pink-500"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="visitor_screen"
      className={`w-full min-h-full flex flex-col justify-between p-6 md:p-8 transition-colors duration-500 ${theme.bgClass}`}
      style={{ minHeight: isStandalone ? '100vh' : '100%' }}
    >
      {/* Standalone Visitor Toggle Back - only displayed if opened in full standalone block preview */}
      {isStandalone && onBackToAdmin && (
        <div className="absolute top-4 right-4 z-50">
          <button
            id="back_to_admin_btn"
            onClick={onBackToAdmin}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border cursor-pointer flex items-center gap-1.5 transition-all
              ${isDark 
                ? 'bg-purple-950/40 text-purple-200 border-purple-500/30 hover:bg-purple-900/60' 
                : 'bg-white/80 text-purple-700 border-purple-100 hover:bg-purple-50 shadow-sm'}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            관리자 모드로 돌아가기
          </button>
        </div>
      )}

      {/* Decorative Blur Orbs for particular themes */}
      {theme.id === 'frosted_glass' ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#e9d5ff] rounded-full mix-blend-multiply filter blur-[80px] opacity-60" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ddd6fe] rounded-full mix-blend-multiply filter blur-[80px] opacity-60" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#fae8ff] rounded-full mix-blend-multiply filter blur-[80px] opacity-40" />
        </div>
      ) : theme.id !== 'neon_amethyst' ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[50%] bg-purple-200/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[40%] bg-violet-200/30 rounded-full blur-[80px]" />
        </div>
      ) : null}

      <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full z-10 py-10 px-1">
        <div className={theme.cardContainerClass || "w-full"}>
          {theme.id === 'frosted_glass' && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-purple-200/50 rounded-full" />
          )}
          
          {/* Profile Header */}
          <motion.div
            id="profile_header"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-9 mt-4"
          >
            {/* Refined clean visual typography representation */}
            <h1 
              className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5 ${theme.textClass}`}
              style={{ textShadow: theme.id === 'orchid_gradient' ? '0 2px 4px rgba(0,0,0,0.12)' : 'none' }}
            >
              우연 Wooyeon
            </h1>
            <p className={`text-sm tracking-[0.12em] font-medium opacity-85 px-4 inline-block relative py-1 border-y ${
              isDark ? 'border-purple-500/20 text-purple-300' : 'border-purple-200/50 text-purple-700'
            }`}>
              우연히 우연하다
            </p>
          </motion.div>

          {/* Links Stack */}
          <div id="links_stack" className="space-y-4 w-full">
            {links.map((link, index) => (
              <motion.a
                key={link.id}
                id={`social_link_${link.id}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onLinkClick(link.id)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex items-center p-4 rounded-2xl transition-all duration-300 outline-none cursor-pointer ${theme.cardClass} ${theme.cardHoverClass}`}
              >
                {/* Left Icon Panel */}
                <div 
                  id={`icon_bg_${link.id}`}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${theme.iconBg}`}
                >
                  {renderIcon(link.iconName)}
                </div>

                {/* Title & Description */}
                <div className="ml-4 flex-grow text-left">
                  <h2 className={`text-[15px] font-semibold leading-snug tracking-tight ${theme.textClass}`}>
                    {link.title}
                  </h2>
                  {link.subtitle && (
                    <p className={`text-[12px] font-normal leading-relaxed mt-0.5 opacity-80 ${theme.subTextClass}`}>
                      {link.subtitle}
                    </p>
                  )}
                </div>

                {/* Right Arrow */}
                <div className="flex-shrink-0 ml-2">
                  <ChevronRight 
                    size={18} 
                    className={`opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 ${
                      isDark ? 'text-purple-300' : 'text-purple-700'
                    }`}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Footer */}
      <motion.footer
        id="visitor_footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`text-center text-[11px] font-normal tracking-wide mt-12 mb-4 z-10 ${
          isDark ? 'text-purple-400' : 'text-purple-800'
        }`}
      >
        © 2026 우연 Wooyeon. All rights reserved.
      </motion.footer>
    </div>
  );
}
