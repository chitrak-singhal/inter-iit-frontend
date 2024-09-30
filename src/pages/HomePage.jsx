import React, { Component } from 'react'
import { Button } from '../components/ui/button.jsx'
import { Dashboard } from '../components/header.jsx'
import {DemoCreateAccount} from '../components/login.jsx'
import Hero from '../components/hero.jsx'
const HomePage = () =>  {
    return (
      <div className="flex flex-col min-h-screen">
        <Dashboard></Dashboard>
        <Hero></Hero>
      </div>
    )
}

export default HomePage