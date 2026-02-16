
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Brain, Sparkles, BarChart3, Rocket, Library, Settings, 
  Moon, Sun, MapPin, Menu, Video, Wallet
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const SidebarLink = ({ to, icon: Icon, children, onClick }: any) => (
  <NavLink 
    to={to} 
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
      ${isActive 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
    `}
  >
    <Icon size={20} />
    <span className="font-medium">{children}</span>
  </NavLink>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('darkMode') === 'on');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'on');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'off');
    }
  }, [isDark]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center gap-3 px-2 mb-8 mt-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">AI Logistics</h1>
          </div>

          <nav className="flex-1 space-y-2">
            <SidebarLink to="/" icon={Home} onClick={() => setSidebarOpen(false)}>หน้าหลัก</SidebarLink>
            <SidebarLink to="/tracking" icon={MapPin} onClick={() => setSidebarOpen(false)}>ติดตามพัสดุ</SidebarLink>
            <SidebarLink to="/revenue" icon={Wallet} onClick={() => setSidebarOpen(false)}>วิเคราะห์รายได้</SidebarLink>
            <SidebarLink to="/topic" icon={Brain} onClick={() => setSidebarOpen(false)}>บทเรียน AI</SidebarLink>
            <SidebarLink to="/videos" icon={Video} onClick={() => setSidebarOpen(false)}>วิดีโอความรู้</SidebarLink>
            <SidebarLink to="/innovations" icon={Sparkles} onClick={() => setSidebarOpen(false)}>นวัตกรรม</SidebarLink>
            <SidebarLink to="/studies" icon={BarChart3} onClick={() => setSidebarOpen(false)}>กรณีศึกษา</SidebarLink>
            <SidebarLink to="/recommendations" icon={Rocket} onClick={() => setSidebarOpen(false)}>ข้อเสนอแนะ</SidebarLink>
            <SidebarLink to="/references" icon={Library} onClick={() => setSidebarOpen(false)}>เอกสารอ้างอิง</SidebarLink>
            <SidebarLink to="/features" icon={Settings} onClick={() => setSidebarOpen(false)}>ฟีเจอร์เสริม</SidebarLink>
          </nav>

          <div className="mt-auto pt-4 border-t border-slate-800">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-white transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-4 lg:p-8 transition-all">
        <header className="flex items-center justify-between mb-8 lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
            <Menu size={24} />
          </button>
          <div className="font-bold text-lg dark:text-white">AI Logistics</div>
          <div className="w-8" />
        </header>
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
