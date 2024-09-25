import React, { Component } from 'react'
import { Button } from '../components/ui/button.jsx'
import { Dashboard } from '../components/header.jsx'
import {DemoCreateAccount} from '../components/login.jsx'
const HomePage = () =>  {
    return (
      <div className="flex flex-col min-h-screen">
        <Dashboard></Dashboard>
      </div>
    )
}

export default HomePage