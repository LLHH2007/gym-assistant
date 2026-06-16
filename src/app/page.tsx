"use client";

import { useState, useEffect } from "react";
import {
  Dumbbell,
  ArrowLeft,
  ChevronRight,
  Clock,
  Repeat,
  Layers,
  MessageSquare,
  Sparkles,
  Flame,
  Zap,
  Trophy,
  Target,
  Image as ImageIcon,
  Heart,
  Calendar,
  ArrowUp,
  Check,
  X,
} from "lucide-react";
import {
  workoutData,
  type Gender,
  type WorkoutDay,
  type Exercise,
} from "@/data/workouts";

type Screen = "gender" | "dashboard" | "detail";

export default function Home() {
  const [gender, setGender] = useState<Gender | null>(null);
  const [selectedDay, setSelectedDay] = useState<WorkoutDay | null>(null);
  const [screen, setScreen] = useState<Screen>("gender");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transition = (callback: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      window.scrollTo({ top: 0, behavior: "instant" });
      setIsTransitioning(false);
    }, 300);
  };

  const selectGender = (g: Gender) => {
    transition(() => {
      setGender(g);
      setScreen("dashboard");
    });
  };

  const selectDay = (day: WorkoutDay) => {
    transition(() => {
      setSelectedDay(day);
      setScreen("detail");
    });
  };

  const goBack = () => {
    transition(() => {
      if (screen === "detail") {
        setSelectedDay(null);
        setScreen("dashboard");
      } else {
        setGender(null);
        setScreen("gender");
      }
    });
  };

  return (
    <main className="bg-gradient-animated noise-overlay min-h-screen relative">
      {/* Decorative floating orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] animate-pulse-glow" />
        <div
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[60%] left-[50%] w-64 h-64 bg-cyan-500/3 rounded-full blur-[80px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div
        className={`relative z-10 transition-all duration-300 ease-out ${
          isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
        }`}
      >
        {screen === "gender" && <GenderSelection onSelect={selectGender} />}
        {screen === "dashboard" && gender && (
          <Dashboard
            gender={gender}
            data={workoutData[gender]}
            onSelectDay={selectDay}
            onBack={goBack}
          />
        )}
        {screen === "detail" && gender && selectedDay && (
          <ExerciseDetail gender={gender} day={selectedDay} onBack={goBack} />
        )}
      </div>
    </main>
  );
}

/* ============================================================
   SCREEN 1 — Gender Selection
   ============================================================ */
function GenderSelection({ onSelect }: { onSelect: (g: Gender) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Hero header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400 tracking-wide uppercase">
            Workout Planner
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            GYM
          </span>
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent ml-3">
            ASSISTANT
          </span>
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
          Chọn giới tính để bắt đầu hành trình tập luyện của bạn
        </p>
      </div>

      {/* Gender cards */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full max-w-3xl">
        {/* Male card */}
        <button
          id="gender-male"
          onClick={() => onSelect("nam")}
          className="group flex-1 animate-slide-up stagger-2"
        >
          <div className="glass-card relative overflow-hidden p-8 sm:p-10 text-center transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 cursor-pointer group-hover:glow-emerald">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-600/0 group-hover:from-emerald-500/10 group-hover:to-emerald-600/5 transition-all duration-500" />

            <div className="relative z-10">
              {/* Icon container */}
              <div className="mx-auto w-24 h-24 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                <Dumbbell className="w-12 h-12 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                NAM
              </h2>
              <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
                MALE
              </p>

              {/* Quick info */}
              <div className="flex items-center justify-center gap-4 mb-5 text-zinc-500 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />3 buổi/tuần
                </span>
                <span className="flex items-center gap-1">
                  <Dumbbell className="w-3 h-3" />
                  25 bài tập
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <span className="text-sm font-medium">Xem lịch tập</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </button>

        {/* Female card */}
        <button
          id="gender-female"
          onClick={() => onSelect("nu")}
          className="group flex-1 animate-slide-up stagger-3"
        >
          <div className="glass-card relative overflow-hidden p-8 sm:p-10 text-center transition-all duration-500 hover:border-amber-500/40 hover:bg-amber-500/5 cursor-pointer group-hover:glow-amber">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/10 group-hover:to-amber-600/5 transition-all duration-500" />

            <div className="relative z-10">
              <div className="mx-auto w-24 h-24 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-500">
                <Flame className="w-12 h-12 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                NỮ
              </h2>
              <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
                FEMALE
              </p>

              {/* Quick info */}
              <div className="flex items-center justify-center gap-4 mb-5 text-zinc-500 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />3 buổi/tuần
                </span>
                <span className="flex items-center gap-1">
                  <Dumbbell className="w-3 h-3" />
                  16 bài tập
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-zinc-500 group-hover:text-amber-400 transition-colors">
                <span className="text-sm font-medium">Xem lịch tập</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Bottom motivational text */}
      <div className="mt-12 animate-slide-up stagger-4">
        <p className="text-zinc-600 text-sm text-center flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-emerald-500/50" />
          Chương trình 3 ngày/tuần • Push/Pull/Legs
          <Zap className="w-3.5 h-3.5 text-emerald-500/50" />
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 animate-slide-up stagger-5">
        <div className="flex items-center gap-2 text-zinc-700 text-xs">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-500/60 fill-red-500/60" />
          <span>for your fitness journey</span>
        </div>
      </footer>
    </div>
  );
}

/* ============================================================
   SCREEN 2 — Dashboard (Day Selection)
   ============================================================ */
function Dashboard({
  gender,
  data,
  onSelectDay,
  onBack,
}: {
  gender: Gender;
  data: (typeof workoutData)[Gender];
  onSelectDay: (day: WorkoutDay) => void;
  onBack: () => void;
}) {
  const isNam = gender === "nam";

  const dayIcons = [
    <Target key="target" className="w-7 h-7" />,
    <Zap key="zap" className="w-7 h-7" />,
    <Trophy key="trophy" className="w-7 h-7" />,
  ];

  const dayLabels = ["DAY 1", "DAY 2", "DAY 3"];

  const dayColors = isNam
    ? [
        "from-emerald-500/20 to-teal-500/10",
        "from-emerald-500/15 to-cyan-500/10",
        "from-emerald-500/15 to-green-500/10",
      ]
    : [
        "from-amber-500/20 to-orange-500/10",
        "from-amber-500/15 to-rose-500/10",
        "from-amber-500/15 to-yellow-500/10",
      ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-20 glass-card rounded-none border-x-0 border-t-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            id="btn-back-gender"
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Đổi giới tính</span>
          </button>
          <div className="flex items-center gap-3">
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                isNam ? "bg-emerald-400" : "bg-amber-400"
              } animate-pulse`}
            />
            <span
              className={`text-sm font-semibold tracking-wide uppercase ${
                isNam ? "text-emerald-400" : "text-amber-400"
              }`}
            >
              {isNam ? "NAM / MALE" : "NỮ / FEMALE"}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Title */}
        <div className="mb-10 animate-slide-up">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium tracking-wide ${
              isNam
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                : "bg-amber-500/10 text-amber-400 border border-amber-500/15"
            }`}
          >
            <Dumbbell className="w-3 h-3" />
            CHƯƠNG TRÌNH TẬP LUYỆN
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {data.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Chọn ngày tập để xem chi tiết bài tập
          </p>
        </div>

        {/* Day Cards */}
        <div className="grid gap-5 sm:gap-6">
          {data.days.map((day, i) => (
            <button
              id={`day-card-${day.id}`}
              key={day.id}
              onClick={() => onSelectDay(day)}
              className={`group text-left animate-slide-up stagger-${i + 2}`}
            >
              <div
                className="glass-card p-6 sm:p-7 transition-all duration-500 cursor-pointer relative overflow-hidden"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = isNam
                    ? "rgba(16, 185, 129, 0.4)"
                    : "rgba(245, 158, 11, 0.4)";
                  e.currentTarget.style.boxShadow = isNam
                    ? "0 0 30px rgba(16, 185, 129, 0.15)"
                    : "0 0 30px rgba(245, 158, 11, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Background gradient per card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${dayColors[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    isNam ? "bg-emerald-500" : "bg-amber-500"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex items-start gap-5">
                  {/* Day icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isNam
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110"
                        : "bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 group-hover:scale-110"
                    }`}
                  >
                    {dayIcons[i]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-bold tracking-widest px-2.5 py-1 rounded-md ${
                          isNam
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {dayLabels[i]}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {day.exercises.length} bài tập
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                      {day.name}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-2">
                      {day.target}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center">
                    <ChevronRight
                      className={`w-6 h-6 text-zinc-600 group-hover:translate-x-1 transition-all ${
                        isNam
                          ? "group-hover:text-emerald-400"
                          : "group-hover:text-amber-400"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Summary info */}
        <div className="mt-10 grid grid-cols-3 gap-4 animate-slide-up stagger-5">
          {[
            {
              label: "Buổi tập",
              value: "3",
              icon: <Layers className="w-4 h-4" />,
            },
            {
              label: "Tổng bài tập",
              value: data.days
                .reduce((sum, d) => sum + d.exercises.length, 0)
                .toString(),
              icon: <Dumbbell className="w-4 h-4" />,
            },
            {
              label: "Nghỉ giữa buổi",
              value: "1 ngày",
              icon: <Clock className="w-4 h-4" />,
            },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-2 ${
                  isNam
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-amber-500/10 text-amber-400"
                }`}
              >
                {stat.icon}
              </div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Weekly schedule hint */}
        <div className="mt-8 glass-card p-5 animate-slide-up stagger-6">
          <div className="flex items-center gap-3 mb-3">
            <Calendar
              className={`w-4 h-4 ${
                isNam ? "text-emerald-400" : "text-amber-400"
              }`}
            />
            <span className="text-sm font-medium text-zinc-300">
              Lịch trình gợi ý
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {[
              "Thứ 2",
              "Thứ 3",
              "Thứ 4",
              "Thứ 5",
              "Thứ 6",
              "Thứ 7",
              "CN",
            ].map((day, i) => {
              const isWorkout = [0, 2, 4].includes(i);
              return (
                <div
                  key={day}
                  className={`px-3 py-2 rounded-lg text-xs font-medium text-center min-w-[56px] transition-all ${
                    isWorkout
                      ? isNam
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                      : "bg-zinc-800/50 text-zinc-500 border border-zinc-700/30"
                  }`}
                >
                  <div>{day}</div>
                  {isWorkout && (
                    <div className="mt-0.5 text-[10px] opacity-75">
                      Buổi {i === 0 ? 1 : i === 2 ? 2 : 3}
                    </div>
                  )}
                  {!isWorkout && (
                    <div className="mt-0.5 text-[10px] opacity-50">Nghỉ</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SCREEN 3 — Exercise Detail
   ============================================================ */
function ExerciseDetail({
  gender,
  day,
  onBack,
}: {
  gender: Gender;
  day: WorkoutDay;
  onBack: () => void;
}) {
  const isNam = gender === "nam";
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(
    new Set()
  );
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string | string[]; name: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleComplete = (index: number) => {
    setCompletedExercises((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const progress = Math.round(
    (completedExercises.size / day.exercises.length) * 100
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-20 glass-card rounded-none border-x-0 border-t-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            id="btn-back-dashboard"
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Quay lại</span>
          </button>

          {/* Progress indicator */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-24 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${
                    isNam ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-zinc-500 tabular-nums">
                {completedExercises.size}/{day.exercises.length}
              </span>
            </div>
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                isNam ? "bg-emerald-400" : "bg-amber-400"
              } animate-pulse`}
            />
            <span
              className={`text-sm font-semibold tracking-wide uppercase ${
                isNam ? "text-emerald-400" : "text-amber-400"
              }`}
            >
              {isNam ? "NAM" : "NỮ"}
            </span>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-6 w-full animate-slide-up">
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${
              isNam
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : "bg-amber-500/10 border-amber-500/20 text-amber-400"
            }`}
          >
            <Dumbbell className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {day.name}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">{day.target}</p>
          </div>
        </div>

        {/* Progress card */}
        {completedExercises.size > 0 && (
          <div
            className={`glass-card p-4 flex items-center gap-4 animate-scale-in ${
              isNam ? "border-emerald-500/20" : "border-amber-500/20"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                progress === 100
                  ? isNam
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-amber-500/20 text-amber-400"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              {progress === 100 ? (
                <Trophy className="w-5 h-5" />
              ) : (
                <Target className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-zinc-300">
                  {progress === 100
                    ? "🎉 Hoàn thành buổi tập!"
                    : "Tiến trình buổi tập"}
                </span>
                <span
                  className={`text-sm font-bold ${
                    isNam ? "text-emerald-400" : "text-amber-400"
                  }`}
                >
                  {progress}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    isNam
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-400"
                      : "bg-gradient-to-r from-amber-600 to-amber-400"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercise grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 w-full flex-1">
        {/* Stats bar */}
        <div className="flex items-center gap-4 mb-6 animate-slide-up stagger-1">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Layers className="w-4 h-4" />
            <span>{day.exercises.length} bài tập</span>
          </div>
          <div className="w-px h-4 bg-zinc-700" />
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Repeat className="w-4 h-4" />
            <span>
              {day.exercises.reduce(
                (sum, ex) => sum + parseInt(ex.sets),
                0
              )}{" "}
              sets tổng
            </span>
          </div>
          <div className="w-px h-4 bg-zinc-700" />
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Check className="w-4 h-4" />
            <span>Nhấn số để đánh dấu hoàn thành</span>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block animate-slide-up stagger-2">
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr
                  className={`border-b ${
                    isNam ? "border-emerald-500/10" : "border-amber-500/10"
                  }`}
                >
                  <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider w-10">
                    #
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Hình minh hoạ
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Tên bài tập
                  </th>
                  <th className="text-center px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Sets × Reps
                  </th>
                  <th className="text-center px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Nghỉ
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Ghi chú / Mục tiêu
                  </th>
                </tr>
              </thead>
              <tbody>
                {day.exercises.map((ex, i) => {
                  const isCompleted = completedExercises.has(i);
                  return (
                    <tr
                      key={i}
                      className={`border-b border-white/5 transition-all duration-300 hover:bg-white/[0.02] ${
                        i === day.exercises.length - 1 ? "border-b-0" : ""
                      } ${isCompleted ? "opacity-50" : ""}`}
                    >
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleComplete(i)}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 cursor-pointer ${
                            isCompleted
                              ? isNam
                                ? "bg-emerald-500/30 text-emerald-300 ring-2 ring-emerald-500/40"
                                : "bg-amber-500/30 text-amber-300 ring-2 ring-amber-500/40"
                              : isNam
                              ? "bg-emerald-500/10 text-emerald-500/60 hover:bg-emerald-500/20"
                              : "bg-amber-500/10 text-amber-500/60 hover:bg-amber-500/20"
                          }`}
                        >
                          {isCompleted ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            (i + 1).toString().padStart(2, "0")
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <ExerciseImage
                          src={ex.image}
                          alt={ex.name}
                          className="w-20 h-20"
                          onClick={() => setActiveImage({ src: ex.image, name: ex.name })}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <p
                          className={`text-sm font-semibold transition-all ${
                            isCompleted
                              ? "text-zinc-500 line-through"
                              : "text-white"
                          }`}
                        >
                          {ex.name}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold ${
                            isNam
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {ex.sets} × {ex.reps}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
                          <Clock className="w-3.5 h-3.5" />
                          {ex.rest}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-zinc-400 max-w-xs">
                          {ex.note}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile card layout */}
        <div className="lg:hidden space-y-4">
          {day.exercises.map((ex, i) => (
            <ExerciseCard
              key={i}
              exercise={ex}
              index={i}
              isNam={isNam}
              isCompleted={completedExercises.has(i)}
              onToggleComplete={() => toggleComplete(i)}
              onImageClick={() => setActiveImage({ src: ex.image, name: ex.name })}
            />
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 animate-scale-in cursor-pointer ${
            isNam
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30"
              : "bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30"
          }`}
          style={{ backdropFilter: "blur(12px)" }}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Lightbox Modal */}
      {activeImage && (
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.name}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  );
}

/* ============================================================
   Exercise Card (Mobile)
   ============================================================ */
function ExerciseCard({
  exercise,
  index,
  isNam,
  isCompleted,
  onToggleComplete,
  onImageClick,
}: {
  exercise: Exercise;
  index: number;
  isNam: boolean;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onImageClick: () => void;
}) {
  return (
    <div
      className={`glass-card p-5 animate-slide-up transition-all duration-300 stagger-${Math.min(
        index + 1,
        10
      )} ${isCompleted ? "opacity-50" : ""}`}
    >
      <div className="flex items-start gap-4">
        {/* Index badge — clickable to mark complete */}
        <button
          onClick={onToggleComplete}
          className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 cursor-pointer ${
            isCompleted
              ? isNam
                ? "bg-emerald-500/30 text-emerald-300 ring-2 ring-emerald-500/40 border-0"
                : "bg-amber-500/30 text-amber-300 ring-2 ring-amber-500/40 border-0"
              : isNam
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
          }`}
        >
          {isCompleted ? (
            <Check className="w-4 h-4" />
          ) : (
            (index + 1).toString().padStart(2, "0")
          )}
        </button>

        <div className="flex-1 min-w-0">
          {/* Exercise name */}
          <h4
            className={`text-base font-semibold mb-3 leading-tight transition-all ${
              isCompleted ? "text-zinc-500 line-through" : "text-white"
            }`}
          >
            {exercise.name}
          </h4>

          {/* Exercise Image */}
          <ExerciseImage
            src={exercise.image}
            alt={exercise.name}
            className="w-full h-32 mb-3"
            onClick={onImageClick}
          />

          {/* Stats row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold ${
                isNam
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-amber-500/10 text-amber-400"
              }`}
            >
              <Repeat className="w-3.5 h-3.5" />
              {exercise.sets} × {exercise.reps}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-zinc-800/60 text-zinc-400">
              <Clock className="w-3.5 h-3.5" />
              {exercise.rest}
            </span>
          </div>

          {/* Note */}
          <div className="mt-3 flex items-start gap-2">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              {exercise.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Exercise Image Component (with lazy load & skeleton)
   ============================================================ */
function ExerciseImage({
  src,
  alt,
  className = "",
  onClick,
}: {
  src: string | string[];
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  const images = Array.isArray(src) ? src : [src];
  const [loadedCount, setLoadedCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  const isAllLoaded = loadedCount === images.length;

  let finalClassName = className;
  if (images.length > 1) {
    finalClassName = className.replace("w-20", "w-36");
  }

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-zinc-900/80 border border-zinc-800 rounded-lg flex items-center justify-center transition-all ${
        onClick ? "cursor-pointer hover:border-zinc-600 hover:bg-zinc-900" : ""
      } ${finalClassName}`}
    >
      {/* Loading Skeleton */}
      {!isAllLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse-glow z-10" />
      )}

      {hasError ? (
        <div className="flex flex-col items-center gap-1.5 text-zinc-600">
          <ImageIcon className="w-8 h-8" />
        </div>
      ) : (
        <div
          className="grid h-full w-full bg-zinc-950"
          style={{
            gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))`,
          }}
        >
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="relative h-full w-full border-r last:border-r-0 border-zinc-800/80 overflow-hidden"
            >
              <img
                src={imgSrc}
                alt={`${alt} - ${index + 1}`}
                loading="lazy"
                onLoad={() => setLoadedCount((prev) => prev + 1)}
                onError={() => setHasError(true)}
                className={`w-full h-full object-contain transition-all duration-500 ease-out ${
                  isAllLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Image Lightbox Component (Modal to view full size images)
   ============================================================ */
function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string | string[];
  alt: string;
  onClose: () => void;
}) {
  const images = Array.isArray(src) ? src : [src];

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-all duration-300 animate-fade-in"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 transition-all hover:scale-105 hover:bg-zinc-800 cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
        className="w-full max-w-5xl h-[70vh] flex items-center justify-center"
      >
        <div
          className="grid gap-6 h-full w-full max-h-full max-w-full justify-center"
          style={{
            gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))`,
          }}
        >
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="relative h-full w-full flex items-center justify-center rounded-xl bg-zinc-950/40 border border-zinc-900/50 p-2 overflow-hidden shadow-2xl transition-all duration-500 animate-scale-in"
            >
              <img
                src={imgSrc}
                alt={`${alt} - Full size ${index + 1}`}
                className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Exercise name/caption */}
      <div className="mt-6 text-center animate-slide-up">
        <h3 className="text-xl font-bold text-white tracking-wide">{alt}</h3>
        <p className="text-zinc-500 text-sm mt-1">Click anywhere outside or press ESC to close</p>
      </div>
    </div>
  );
}
