import React, { Component } from 'react'
import { Button } from '../components/ui/button.jsx'
import { Dashboard } from '../components/header.jsx'
import {DemoCreateAccount} from '../components/signup.jsx'
const SignUpPage = () =>  {
    return (
      <div className="flex flex-col min-h-screen">
        <Dashboard></Dashboard>
        <div className="flex flex-grow items-center justify-center">
            <div className="w-[25rem]">
                <DemoCreateAccount></DemoCreateAccount>
            </div>

        </div>
      </div>
    )
}

export default SignUpPage
