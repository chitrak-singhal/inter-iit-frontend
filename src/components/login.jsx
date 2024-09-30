"use client"
import { Link } from "react-router-dom";
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
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
          <FaGithub className="mr-2"/>
            Github
          </Button>
          <Button variant="outline">
            <FaGoogle className="mr-2"/>
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m.example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex">            
          <div className='text-sm text-left underline w-1/2'>
              <Link to="/signup">Sign up</Link>
          </div>
          <div className='text-sm text-right underline w-1/2'>
              <Link to="/forgot">Forgot Password?</Link>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Log in</Button>
      </CardFooter>
    </Card>
  )
}