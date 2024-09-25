"use client"

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function DemoCreateAccount() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Update Password</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="password">New Password</Label>
          <Input id="new-password" type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirm New Password</Label>
          <Input id="new-password-confirm" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Update password</Button>
      </CardFooter>
    </Card>
  )
}