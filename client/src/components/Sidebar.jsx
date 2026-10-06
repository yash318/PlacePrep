import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  ClipboardCheck,
  History,
  UserRound,
  Bell,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Jobs",
    icon: BriefcaseBusiness,
    path: "/jobs",
  },
  {
    label: "Applications",
    icon: FileText,
    path: "/applications",
  },
  {
    label: "Resume Builder",
    icon: FileText,
    path: "/resume",
  },
  {
    label: "Practice & Tests",
    icon: ClipboardCheck,
    path: "/tests",
  },
  {
    label: "Placement History",
    icon: History,
    path: "/history",
  },
  {
    label: "Profile",
    icon: UserRound,
    path: "/profile",
  },
];

function Sidebar({ activeItem = "Dashboard" }) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 text-white lg:flex">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
          <GraduationCap size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight">PlacePrep</h1>
          <p className="text-xs text-slate-400">Placement Companion</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          Main Menu
        </p>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;

            return (
              <a
                key={item.label}
                href={item.path}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon
                  size={19}
                  className={
                    isActive
                      ? "text-white"
                      : "text-slate-500 group-hover:text-white"
                  }
                />

                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          Account
        </p>

        <nav className="space-y-1">
          <a
            href="/notifications"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-all hover:bg-slate-900 hover:text-white"
          >
            <Bell size={19} />
            <span>Notifications</span>
          </a>

          <a
            href="/settings"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-all hover:bg-slate-900 hover:text-white"
          >
            <Settings size={19} />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* User */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-900 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 font-semibold">
            Y
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Student</p>
            <p className="truncate text-xs text-slate-500">
              Student Account
            </p>
          </div>

          <button className="text-slate-500 transition hover:text-red-400">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;