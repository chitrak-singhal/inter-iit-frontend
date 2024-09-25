import React, { Component } from 'react'
import { Dashboard } from '../components/header.jsx'
import { DemoCreateAccount } from '../components/forgot-otp.jsx'
const Forgot = () =>  {
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

export default Forgot