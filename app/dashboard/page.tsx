"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  Calendar,
  Code2,
  Github,
  Home,
  Linkedin,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitHubAnalytics } from "@/components/github-analytics"
import { LeetCodeAnalytics } from "@/components/leetcode-analytics"
import { LinkedInAnalytics } from "@/components/linkedin-analytics"
import { TwitterAnalytics } from "@/components/twitter-analytics"
import { UserProfile } from "@/components/user-profile"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Navigation */}
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span>GrowthTrack</span>
              </Link>
              <Separator />
              <Link href="/dashboard" className="flex items-center gap-3 text-primary">
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                Calendar
              </Link>
              <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                <MessageSquare className="h-5 w-5" />
                Messages
              </Link>
              <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                <Settings className="h-5 w-5" />
                Settings
              </Link>
              <Separator />
              <Link href="#" className="flex items-center gap-3 text-muted-foreground">
                <User className="h-5 w-5" />
                Profile
              </Link>
              <Link href="/" className="flex items-center gap-3 text-muted-foreground">
                <LogOut className="h-5 w-5" />
                Log out
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span>GrowthTrack</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="Avatar"
              className="rounded-full"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>

      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        {/* Desktop Sidebar */}
        <aside className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span>GrowthTrack</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <Calendar className="h-4 w-4" />
                  Calendar
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <MessageSquare className="h-4 w-4" />
                  Messages
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  alt="Avatar"
                  className="rounded-full"
                />
                <div className="grid gap-0.5 text-sm">
                  <div className="font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">john@example.com</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Log out</span>
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}

<main className="flex flex-col">
  <div className="flex items-center gap-4 border-b bg-muted/40 px-6 py-3">
    <h1 className="text-lg font-semibold">Dashboard</h1>
    {/* Remove this Tabs */}
    {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="ml-auto">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="profile">Profile</TabsTrigger>
      </TabsList>
    </Tabs> */}
    <Button variant="ghost" size="icon">
      <Bell className="h-5 w-5" />
      <span className="sr-only">Notifications</span>
    </Button>
  </div>

  {/* Move Tabs here and wrap both TabsList and TabsContent */}
  <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 space-y-6 p-6">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="profile">Profile</TabsTrigger>
    </TabsList>

    <TabsContent value="overview" className="space-y-6">
      {/* ...overview content... */}
    </TabsContent>

    <TabsContent value="profile">
      {/* ...profile content... */}
    </TabsContent>
  </Tabs>

        </main>
      </div>
    </div>
  )
}
