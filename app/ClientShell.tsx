'use client'

import CursorController from "../components/CursorController"
import Footer from "../components/Footer"
import ProgressBar from "../components/ProgressBar"
import Navigation from "../components/Navigation"
import Whatsapp from "@/components/Whatsapp"


export default function ClientShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Global UI Effects */}
      <CursorController />
      <ProgressBar />

      {/* Background / FX layers */}
      <div id="grain" />
      <div id="prog" />
      <div id="cur-ring" />
      <div id="cur-dot" />

      {/* Header */}
      <Navigation />

      {/* Page Content */}
      {children}

      {/* Footer */}
      <Footer />
      <Whatsapp />
    </>
  )
}