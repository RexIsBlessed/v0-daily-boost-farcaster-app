"use client"

import { useState } from "react"
import { Sun, Calendar, Trophy, Check, Loader2 } from "lucide-react"

type CardStatus = "idle" | "pending" | "success"

export default function DailyBoostApp() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [dailyGmStatus, setDailyGmStatus] = useState<CardStatus>("idle")
  const [weeklyStatus, setWeeklyStatus] = useState<CardStatus>("idle")
  const [monthlyStatus, setMonthlyStatus] = useState<CardStatus>("idle")

  const handleCardClick = (cardType: "daily" | "weekly" | "monthly", setStatus: (status: CardStatus) => void) => {
    setStatus("pending")

    // Simulate transaction
    setTimeout(() => {
      setStatus("success")

      // Reset to idle after showing success
      setTimeout(() => {
        setStatus("idle")
      }, 2000)
    }, 2000)
  }

  const getButtonContent = (status: CardStatus) => {
    if (status === "pending") {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {"Pending Transaction..."}
        </>
      )
    }
    if (status === "success") {
      return (
        <>
          <Check className="mr-2 h-4 w-4" />
          {"Success!"}
        </>
      )
    }
    return "Claim Now"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white tracking-tight">Daily Boost</h1>
          <button
            onClick={() => setWalletConnected(!walletConnected)}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all duration-300 text-sm font-medium"
          >
            {walletConnected ? "Connected" : "Connect Wallet"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-md">
        {/* Streak Card */}
        <div className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden rounded-xl">
          <div className="p-6">
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-2 font-medium tracking-wide uppercase">Current Streak</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-white">7 Day Streak</span>
                <span className="text-4xl">🔥</span>
              </div>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
        </div>

        {/* Action Cards */}
        <div className="space-y-4">
          {/* Daily GM - Base Network */}
          <div className="group bg-gradient-to-br from-blue-600/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 rounded-xl">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Daily GM</h3>
                    <p className="text-sm text-blue-200">Base Network</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30">
                  <span className="text-xs font-semibold text-blue-200">+10 pts</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {"Start your day right! Say GM and earn daily rewards on Base."}
              </p>
              <button
                onClick={() => handleCardClick("daily", setDailyGmStatus)}
                disabled={dailyGmStatus !== "idle"}
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 disabled:opacity-70 py-3 px-4 flex items-center justify-center"
              >
                {getButtonContent(dailyGmStatus)}
              </button>
            </div>
          </div>

          {/* Weekly Check-in - Celo Network */}
          <div className="group bg-gradient-to-br from-green-600/20 via-emerald-500/20 to-teal-500/20 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20 rounded-xl">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Weekly Check-in</h3>
                    <p className="text-sm text-green-200">Celo Network</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30">
                  <span className="text-xs font-semibold text-green-200">+50 pts</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {"Complete your weekly check-in and earn bonus rewards on Celo."}
              </p>
              <button
                onClick={() => handleCardClick("weekly", setWeeklyStatus)}
                disabled={weeklyStatus !== "idle"}
                className="w-full rounded-xl bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/50 disabled:opacity-70 py-3 px-4 flex items-center justify-center"
              >
                {getButtonContent(weeklyStatus)}
              </button>
            </div>
          </div>

          {/* Monthly Milestone - Degen Network */}
          <div className="group bg-gradient-to-br from-purple-600/20 via-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 rounded-xl">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Monthly Milestone</h3>
                    <p className="text-sm text-purple-200">Degen Network</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30">
                  <span className="text-xs font-semibold text-purple-200">+200 pts</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {"Reach your monthly milestone and unlock exclusive rewards."}
              </p>
              <button
                onClick={() => handleCardClick("monthly", setMonthlyStatus)}
                disabled={monthlyStatus !== "idle"}
                className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 disabled:opacity-70 py-3 px-4 flex items-center justify-center"
              >
                {getButtonContent(monthlyStatus)}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">{"Earn rewards daily across multiple networks"}</p>
        </div>
      </main>
    </div>
  )
}
