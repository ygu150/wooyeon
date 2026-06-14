import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, SocialLink, ClickAnalytics } from '../types';
import { 
  Palette, 
  Share2, 
  Download, 
  Eye, 
  BarChart2, 
  Smartphone, 
  Sparkles, 
  Check, 
  Copy, 
  ExternalLink,
  RotateCcw,
  Info
} from 'lucide-react';
import { generateStaticHtml } from '../data';

interface AdminPanelProps {
  themes: Theme[];
  currentTheme: Theme;
  onSelectTheme: (theme: Theme) => void;
  links: SocialLink[];
  analytics: ClickAnalytics;
  onResetAnalytics: () => void;
  onSwitchToVisitor: () => void;
}

export default function AdminPanel({
  themes,
  currentTheme,
  onSelectTheme,
  links,
  analytics,
  onResetAnalytics,
  onSwitchToVisitor
}: AdminPanelProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Calculate total clicks for analytics
  const totalClicks = Object.values(analytics).reduce((sum, count) => sum + count, 0);

  // Generate visitor link with theme state in search params
  const getVisitorLink = () => {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    return `${origin}${pathname}?view=visitor&theme=${currentTheme.id}`;
  };

  const handleCopyLink = () => {
    const link = getVisitorLink();
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  const handleDownloadHtml = () => {
    const htmlContent = generateStaticHtml(currentTheme);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `wooyeon_profile_${currentTheme.id}.html`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  return (
    <div id="admin_panel_grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* 1. Controlling Studio (Left Part) - takes 7 units */}
      <div id="studio_controls" className="lg:col-span-7 space-y-6">
        
        {/* Welcome Section */}
        <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-[0_10px_30px_rgba(139,92,246,0.03)]">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
              <Sparkles size={24} className="animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full uppercase tracking-wider">WooYeon Link Studio</span>
              <h1 className="text-2xl font-bold text-gray-900 mt-2">프로필 링크 디자인 스튜디오</h1>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                밝은 보라색 계열로 구성한 5가지의 감성 테마 중 마음에 드는 분위기를 선택해 보세요. 완성이 완료되면 관람객 모드로 내보낼 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Theme customization selector */}
        <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-[0_10px_30px_rgba(139,92,246,0.03)]">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="text-purple-600" size={20} />
            <h2 className="text-lg font-bold text-gray-900">퍼플 테마 셀렉터</h2>
          </div>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            * 우연 님의 맑고 영감을 주는 아이덴티티에 걸맞는 파스텔, 벨벳, 네온, 그라데이션 스타일의 엄선된 테마입니다.
          </p>

          <div className="space-y-3">
            {themes.map((theme) => {
              const rgbBorder = theme.id === currentTheme.id ? 'border-purple-600 ring-2 ring-purple-100' : 'border-gray-100 hover:border-purple-200';
              return (
                <button
                  key={theme.id}
                  id={`theme_option_${theme.id}`}
                  onClick={() => onSelectTheme(theme)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left cursor-pointer transition-all ${rgbBorder}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full border border-white/40 shadow-inner ${theme.bgClass}`} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{theme.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">보라색 톤 조합 구성</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-medium bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">
                      {theme.badge}
                    </span>
                    {theme.id === currentTheme.id && (
                      <div className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* View mode & Export Section */}
        <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-[0_10px_30px_rgba(139,92,246,0.03)]">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="text-purple-600" size={20} />
            <h2 className="text-lg font-bold text-gray-900">관람객용 내보내기 & 공유</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            제작된 모든 레이아웃과 소셜 링크 정보는 수정 기능이 잠긴 완전히 청결한 상태의 '관람객 전용 화면'으로 전달해 사용하실 수 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Action 1: Show/Open Visitor view inside application */}
            <button
              id="switch_to_visitor_btn"
              onClick={onSwitchToVisitor}
              className="flex items-center justify-center gap-2.5 px-5 py-4 bg-purple-50 text-purple-700 hover:bg-purple-100 active:bg-purple-200 transition-all font-semibold rounded-2xl text-sm border border-purple-200/50 cursor-pointer"
            >
              <Eye size={18} />
              관람객 모드 체험하기
            </button>

            {/* Action 2: Copy link */}
            <button
              id="copy_visitor_link_btn"
              onClick={handleCopyLink}
              className={`flex items-center justify-center gap-2.5 px-5 py-4 transition-all font-semibold rounded-2xl text-sm cursor-pointer
                ${copiedLink 
                  ? 'bg-green-600 text-white' 
                  : 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 shadow-sm shadow-purple-200'}`}
            >
              {copiedLink ? <Check size={18} /> : <Share2 size={18} />}
              {copiedLink ? '복사 완료!' : '관람객 링크 복사'}
            </button>
          </div>

          {/* Standalone Single File Downloader */}
          <div className="mt-4 pt-4 border-t border-gray-50">
            <button
              id="download_html_btn"
              onClick={handleDownloadHtml}
              className={`w-full flex items-center justify-center gap-2.5 px-5 py-4 transition-all font-semibold rounded-2xl text-sm cursor-pointer border
                ${copiedHtml 
                  ? 'bg-green-50 text-green-700 border-green-200' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 active:bg-gray-100'}`}
            >
              <Download size={18} className={copiedHtml ? 'text-green-600' : 'text-gray-500'} />
              {copiedHtml ? 'HTML 파일 전송이 성공하였습니다!' : '단독형 가동 HTML 파일로 내려받기'}
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-2.5 leading-relaxed">
              * 파일 하나로 전 세계 어떠한 서버가 없어도 더블 클릭 시 완전하게 가동되는 최적화 단독형 파일입니다.
            </p>
          </div>
        </div>

        {/* Click stats monitor (Analytics panel) */}
        <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-[0_10px_30px_rgba(139,92,246,0.03)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart2 className="text-purple-600" size={20} />
              <h2 className="text-lg font-bold text-gray-900">방문자 행동 분석 (실시간 클릭)</h2>
            </div>
            {totalClicks > 0 && (
              <button
                id="reset_analytics_btn"
                onClick={onResetAnalytics}
                className="text-xs text-gray-400 hover:text-purple-600 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RotateCcw size={12} />
                초기화
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            관람객 모드나 우클릭 시뮬레이션에서 방문자들이 개별 링크를 누르면 누적 집계됩니다.
          </p>

          <div className="space-y-4">
            {links.map((link) => {
              const clicksCount = analytics[link.id] || 0;
              const percentage = totalClicks > 0 ? Math.round((clicksCount / totalClicks) * 100) : 0;
              return (
                <div key={link.id} id={`analytics_bar_${link.id}`} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-gray-700">{link.title}</span>
                    <span className="font-bold text-purple-600">
                      {clicksCount}회 <span className="text-gray-300 font-normal">({percentage}%)</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                    <motion.div
                      id={`bar_fill_${link.id}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 p-4 bg-purple-50/50 border border-purple-100/40 rounded-2xl flex items-start gap-2.5">
            <Info size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-purple-950 font-normal leading-relaxed">
              총 누적 터치 흐름 수: <strong className="text-purple-700">{totalClicks}회</strong>
              <br />
              사용성 데이터를 바탕으로 마케팅 유입을 확인하고 프로필 경로 구성을 기획해 보세요.
            </div>
          </div>
        </div>

      </div>

      {/* 2. Visual Simulator Live Device Frame (Right Part) - takes 5 units */}
      <div id="device_anim_simulator" className="lg:col-span-5 flex flex-col items-center">
        <div className="sticky top-6 w-full max-w-[340px] flex flex-col items-center">
          
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700">
            <Smartphone size={16} className="text-purple-600" />
            <span>모바일 라이브 미리보기</span>
          </div>

          {/* Smartphone structure mockup */}
          <div className="w-full aspect-[9/18.5] bg-gray-900 rounded-[50px] p-[10px] shadow-[0_25px_60px_-15px_rgba(139,92,246,0.18)] border-4 border-gray-800 relative">
            {/* Top camera hole */}
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-24 h-[18px] bg-black rounded-full z-50 flex items-center justify-between px-3.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
              <div className="w-3.5 h-1.5 rounded-full bg-zinc-800" />
            </div>

            {/* Inner responsive viewport */}
            <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative border border-gray-950/20 select-none">
              
              {/* Actual Visitor View injected in simulator preview style */}
              <div className="absolute inset-0 pointer-events-none scale-100">
                <div className={`w-full h-full flex flex-col justify-between p-5 ${currentTheme.bgClass}`}>
                  
                  {/* Decorative lights */}
                  {currentTheme.id !== 'neon_amethyst' && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[40%] bg-purple-200/20 rounded-full blur-[60px]" />
                    </div>
                  )}

                  <div className="flex-grow flex flex-col justify-center w-full z-10 py-6 max-w-[280px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-6 mt-2">
                      <h1 className={`text-xl font-extrabold tracking-tight mb-1.5 ${currentTheme.textClass}`}>
                        우연 Wooyeon
                      </h1>
                      <p className={`text-[11px] tracking-[0.1em] font-medium opacity-85 px-3 py-0.5 border-y inline-block ${
                        currentTheme.id === 'neon_amethyst' ? 'border-purple-500/20 text-purple-300' : 'border-purple-200/50 text-purple-700'
                      }`}>
                        우연히 우연하다
                      </p>
                    </div>

                    {/* Miniature Links list */}
                    <div className="space-y-3 w-full">
                      {links.map((link) => (
                        <div
                          key={link.id}
                          className={`flex items-center p-3 rounded-xl border shadow-sm transition-all text-left ${currentTheme.cardClass}`}
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs ${currentTheme.iconBg}`}>
                            {link.id === 'spinspin' && '💿'}
                            {link.id === 'x' && '𝕏'}
                            {link.id === 'xiaohongshu' && '✨'}
                            {link.id === 'instagram' && '📸'}
                          </div>
                          <div className="ml-2.5 flex-grow truncate">
                            <div className={`text-xs font-semibold leading-tight ${currentTheme.textClass}`}>{link.title}</div>
                            {link.subtitle && (
                              <div className={`text-[10px] opacity-75 mt-0.5 truncate ${currentTheme.subTextClass}`}>{link.subtitle}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`text-center text-[10px] opacity-40 ${
                    currentTheme.id === 'neon_amethyst' ? 'text-purple-400' : 'text-purple-800'
                  }`}>
                    © 2026 우연 Wooyeon.
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="text-xs text-slate-400 text-center mt-3 mt-4 flex items-center gap-1">
            <Info size={12} />
            <span>프레임 내부는 스튜디오 조율을 실시간 수용합니다.</span>
          </div>

        </div>
      </div>
    </div>
  );
}
