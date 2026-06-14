import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, THEMES } from './data';
import { Theme, ClickAnalytics } from './types';
import VisitorView from './components/VisitorView';
import AdminPanel from './components/AdminPanel';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Settings, Check, Command, ExternalLink, Moon } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'editor' | 'visitor'>('editor');
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [analytics, setAnalytics] = useState<ClickAnalytics>({
    spinspin: 0,
    x: 0,
    xiaohongshu: 0,
    instagram: 0
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Parse URL search parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    const themeParam = params.get('theme');

    if (viewParam === 'visitor') {
      setActiveView('visitor');
    }

    if (themeParam) {
      const foundTheme = THEMES.find((t) => t.id === themeParam);
      if (foundTheme) {
        setCurrentTheme(foundTheme);
      }
    }

    // Load analytics from localStorage
    const savedStats = localStorage.getItem('wooyeon_click_stats');
    if (savedStats) {
      try {
        setAnalytics(JSON.parse(savedStats));
      } catch (e) {
        console.error('Failed to parse click analytics', e);
      }
    }
  }, []);

  // Update localStorage when analytics changes
  const updateAnalytics = (linkId: string) => {
    // Record click
    const nextStats = {
      ...analytics,
      [linkId]: (analytics[linkId] || 0) + 1
    };
    setAnalytics(nextStats);
    localStorage.setItem('wooyeon_click_stats', JSON.stringify(nextStats));
    
    // Provide a neat interactive toast feedback inside the preview
    showToast(`"${linkId.toUpperCase()}" 링크로 이동합니다. 클릭이 집계되었습니다.`);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const resetAnalytics = () => {
    const emptied = {
      spinspin: 0,
      x: 0,
      xiaohongshu: 0,
      instagram: 0
    };
    setAnalytics(emptied);
    localStorage.setItem('wooyeon_click_stats', JSON.stringify(emptied));
    showToast('방문자 실시간 누적 클릭수가 리셋되었습니다.');
  };

  // Triggered when theme is selected
  const handleSelectTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    showToast(`테마가 "${theme.name.split(' (')[0]}"(으)로 변경되었습니다.`);
  };

  return (
    <div id="app_root" className="min-h-screen bg-[#FDFBFF] text-gray-800">
      
      {/* Toast Alert Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            id="toast_banner"
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-4 py-3 bg-gray-900 border border-gray-800 text-purple-100 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold whitespace-nowrap"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeView === 'visitor' ? (
          // Visitor Mode (Isolated full-viewport presentation)
          <motion.div
            key="visitor_screen_view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen w-full relative"
          >
            <VisitorView
              theme={currentTheme}
              links={SOCIAL_LINKS}
              onLinkClick={updateAnalytics}
              isStandalone={true}
              onBackToAdmin={() => setActiveView('editor')}
            />
          </motion.div>
        ) : (
          // Editor & Builder workspace Mode
          <motion.div
            key="editor_studio_view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex flex-col"
          >
            {/* Top Navigation Bar */}
            <header id="studio_header" className="bg-white border-b border-purple-50 px-6 py-4 sticky top-0 z-40 shadow-sm shadow-purple-500/2">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Brand Logo Identity */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                    <Command size={18} className="animate-spin-slow" />
                  </div>
                  <div>
                    <h1 className="text-md font-bold text-gray-900 tracking-tight leading-none">우연 Wooyeon</h1>
                    <p className="text-[10px] text-purple-500 font-medium tracking-widest uppercase mt-1">Profile Link Studio</p>
                  </div>
                </div>

                {/* Top Quick Actions */}
                <div className="flex items-center gap-3">
                  <a
                    id="external_share_preview_tab"
                    href={`?view=visitor&theme=${currentTheme.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-purple-600 transition-colors border border-gray-100 rounded-full px-3 py-1.5 bg-gray-50/50 cursor-pointer"
                  >
                    <span>새 창에서 전용 뷰 열기</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    id="trigger_full_visitor_btn"
                    onClick={() => setActiveView('visitor')}
                    className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2 rounded-full shadow-sm shadow-purple-200 transition-transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Eye size={12} />
                    <span>관람객 화면 실행</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Core Workspace Layout */}
            <main id="studio_main_content" className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full">
              <AdminPanel
                themes={THEMES}
                currentTheme={currentTheme}
                onSelectTheme={handleSelectTheme}
                links={SOCIAL_LINKS}
                analytics={analytics}
                onResetAnalytics={resetAnalytics}
                onSwitchToVisitor={() => setActiveView('visitor')}
              />
            </main>

            {/* Creative Workspace Footer */}
            <footer id="studio_footer" className="bg-white border-t border-purple-50 py-6 text-center text-xs text-gray-400 font-medium">
              <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>시스템 정상 작동 중 — 우연 Wooyeon 프로필 빌더</span>
                </div>
                <div>
                  © 2026 WooYeon Studio. Designed for pure sharing elegance.
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
