import React, { Component } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "../components/ui/command"
  
const Hero = () =>  {
    return (
      <div>
        <div className='flex justify-center items-center p-0' >
            <p className='text-[9rem]'>StockBase</p>
        </div>
        <div className='flex justify-center'>
        <Command>
        <CommandInput placeholder="Type a company name or search..." />
        <CommandList>
            {/* <CommandEmpty>No results found.</CommandEmpty> */}
            {/* <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
            </CommandGroup> */}
            {/* <CommandSeparator />
            <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
            </CommandGroup> */}
        </CommandList>
        </Command>
        </div>
      </div>
    )
}

export default Hero