import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="h-full w-72 bg-slate-950 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600">
                🎓
              </div>

              <div>
                <h1 className="text-xl font-bold">PlacePrep</h1>
                <p className="text-xs text-slate-400">
                  Placement Companion
                </p>
              </div>
            </div>

            <div className="p-4 text-sm text-slate-400">
              Mobile navigation will be connected in the next stage.
            </div>
          </div>
        </div>
      )}

      <div className="lg:pl-72">
        <Topbar onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;