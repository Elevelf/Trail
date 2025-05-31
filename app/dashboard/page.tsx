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
            <Tabs value={activeTab} onValueChange={setActiveTab} className="ml-auto">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>

          <div className="flex-1 space-y-6 p-6">
            <TabsContent value="overview" className="space-y-6">
              {/* User Stats Summary */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Platforms</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">LinkedIn, GitHub, LeetCode, Twitter</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">LeetCode Problems</CardTitle>
                    <Code2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">187</div>
                    <p className="text-xs text-muted-foreground">+23 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">GitHub Contributions</CardTitle>
                    <Github className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">432</div>
                    <p className="text-xs text-muted-foreground">+89 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">LinkedIn Connections</CardTitle>
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">573</div>
                    <p className="text-xs text-muted-foreground">+42 from last month</p>
                  </CardContent>
                </Card>
              </div>

              {/* Platform Analytics */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>GitHub Activity</CardTitle>
                    <CardDescription>Your repository and contribution analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <GitHubAnalytics />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>LeetCode Progress</CardTitle>
                    <CardDescription>Problem-solving statistics by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LeetCodeAnalytics />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>LinkedIn Growth</CardTitle>
                    <CardDescription>Connection and engagement metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LinkedInAnalytics />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Twitter Analytics</CardTitle>
                    <CardDescription>Follower growth and engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TwitterAnalytics />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription>Manage your personal information and goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <UserProfile />
                </CardContent>
              </Card>
            </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
