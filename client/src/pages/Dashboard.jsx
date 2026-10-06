import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  Trophy,
  ArrowUpRight,
  Clock3,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    title: "Applications",
    value: "12",
    change: "+3 this week",
    icon: BriefcaseBusiness,
  },
  {
    title: "Interviews",
    value: "3",
    change: "+1 this week",
    icon: FileCheck2,
  },
  {
    title: "Tests Taken",
    value: "8",
    change: "+2 this week",
    icon: ClipboardCheck,
  },
  {
    title: "Offers",
    value: "1",
    change: "Keep going!",
    icon: Trophy,
  },
];

const activities = [
  {
    title: "TCS Digital Hiring",
    subtitle: "Application deadline: 8 Oct 2026",
    status: "Applied",
  },
  {
    title: "Frontend Developer Assessment",
    subtitle: "Tomorrow • 10:00 AM",
    status: "Upcoming",
  },
  {
    title: "Infosys Campus Drive",
    subtitle: "Application deadline: 12 Oct 2026",
    status: "Open",
  },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-6 text-white shadow-xl shadow-indigo-500/10 sm:p-8">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            Placement Journey
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Build your career,
            <br />
            one step at a time.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
            Track applications, prepare for assessments, manage your resume,
            and stay ahead throughout your placement journey.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
            Explore Jobs
            <ArrowUpRight size={17} />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-purple-400/10" />
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={21} />
                </div>

                <ArrowUpRight size={17} className="text-slate-300" />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.title}
              </p>

              <div className="mt-1 flex items-end justify-between">
                <p className="text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>

                <span className="text-xs font-medium text-emerald-600">
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main grid */}
      <section className="grid gap-6 xl:grid-cols-3">
        {/* Placement Journey */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Placement Journey
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track your progress from application to offer.
              </p>
            </div>

            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              42% Complete
            </span>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute left-5 right-5 top-5 h-1 rounded-full bg-slate-100" />

              <div className="absolute left-5 top-5 h-1 w-[42%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />

              <div className="relative flex justify-between">
                {[
                  ["Applied", true],
                  ["Test", true],
                  ["Shortlisted", true],
                  ["Interview", false],
                  ["Offer", false],
                ].map(([label, completed]) => (
                  <div
                    key={label}
                    className="flex w-20 flex-col items-center text-center"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow ${
                        completed
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {completed ? "✓" : ""}
                    </div>

                    <p
                      className={`mt-3 text-xs font-semibold ${
                        completed
                          ? "text-slate-800"
                          : "text-slate-400"
                      }`}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Progress */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Profile Strength
            </h2>

            <span className="text-sm font-bold text-indigo-600">78%</span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Your profile is looking good. Complete your projects and
            certifications to improve your profile.
          </p>

          <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            Complete profile
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* Activity */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 p-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep track of your latest placement activities.
            </p>
          </div>

          <button className="text-sm font-semibold text-indigo-600">
            View all
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-center gap-4 p-5 transition hover:bg-slate-50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Clock3 size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {activity.title}
                </p>

                <p className="mt-1 truncate text-xs text-slate-500">
                  {activity.subtitle}
                </p>
              </div>

              <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 sm:inline-flex">
                {activity.status}
              </span>

              <ChevronRight size={18} className="text-slate-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;