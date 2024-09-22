import { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const airlines = [
  {
    id: 1,
    name: 'All',
    price: ''
  },
  {
    id: 2,
    name: 'American Airlines',
    price: '$230'
  },
  {
    id: 3,
    name: 'Delta Airlines',
    price: '$240'
  },
  {
    id: 4,
    name: 'United Airlines',
    price: '$250'
  },
  {
    id: 5,
    name: 'Southwest Airlines',
    price: '$220'
  },
  {
    id: 6,
    name: 'JetBlue',
    price: '$230'
  },
  {
    id: 7,
    name: 'Frontier Airlines',
    price: '$210'
  },
  {
    id: 8,
    name: 'Alaska Airlines',
    price: '$245'
  },
  {
    id: 9,
    name: 'Hawaiian Airlines',
    price: '$300'
  },
  {
    id: 10,
    name: 'Allegiant Air',
    price: '$180'
  },
  {
    id: 11,
    name: 'Sun Country Airlines',
    price: '$190'
  },
  {
    id: 12,
    name: 'Air Canada',
    price: '$270'
  },
  {
    id: 13,
    name: 'WestJet',
    price: '$260'
  },
  {
    id: 14,
    name: 'Lufthansa',
    price: '$400'
  },
  {
    id: 15,
    name: 'British Airways',
    price: '$350'
  },
  {
    id: 16,
    name: 'Qatar Airways',
    price: '$500'
  },
  {
    id: 17,
    name: 'Emirates',
    price: '$600'
  },
  {
    id: 18,
    name: 'Singapore Airlines',
    price: '$550'
  },
  {
    id: 19,
    name: 'Thai Airways',
    price: '$480'
  },
  {
    id: 20,
    name: 'Cathay Pacific',
    price: '$520'
  },
  {
    id: 21,
    name: 'Spirit Airlines',
    price: '$200'
  },
];

const SortBy = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number>(0);

  const updateButtonWidth = () => {
    if(buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }

  useEffect(() => {
    updateButtonWidth();
    window.addEventListener("resize", updateButtonWidth)

    return () => {
      window.removeEventListener("resize", updateButtonWidth)
    }
  }, [])

  return (
    <div className='min-w-56 2xl:h-[32rem] order-first 2xl:order-last overflow-y-scroll overflow-x-hidden hide-scrollbar grid grid-cols-2 xl:grid-cols-4 2xl:flex flex-col gap-2'>
      <div className="w-full">
        <div className="flex 2xl:hidden justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger ref={buttonRef} className="bg-white rounded-md h-9 px-4 py-2 shadow-sm w-full 2xl:w-52 flex items-center justify-between focus-visible:outline-none">
              <span>Sort By</span>
              <Icon icon="codicon:triangle-down" className="text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{width: buttonWidth}}>
              <DropdownMenuItem>Lowest Price</DropdownMenuItem>
              <DropdownMenuItem>Highest Price</DropdownMenuItem>
              <DropdownMenuItem>Shortest Duration</DropdownMenuItem>
              <DropdownMenuItem>Longest Duration</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden 2xl:block">
          <h3 className='font-semibold hidden 2xl:block'>
            Sort By:
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger ref={buttonRef} className="bg-white rounded-md h-9 px-4 py-2 shadow-sm w-full 2xl:w-52 flex items-center justify-between focus-visible:outline-none mt-2">
              <span className="hidden 2xl:block">Select </span>
              <span className="block 2xl:hidden">Sort By </span>
              <Icon icon="codicon:triangle-down" className="text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="2xl:w-52">
              <DropdownMenuItem>Lowest Price</DropdownMenuItem>
              <DropdownMenuItem>Highest Price</DropdownMenuItem>
              <DropdownMenuItem>Shortest Duration</DropdownMenuItem>
              <DropdownMenuItem>Longest Duration</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>       
      </div>
      <div className="w-full 2xl:mt-4">
        <div className="flex 2xl:hidden justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger ref={buttonRef} className="bg-white rounded-md h-9 px-4 py-2 shadow-sm w-full 2xl:w-52 flex items-center justify-between focus-visible:outline-none">
              <span>Arrival Time</span>
              <Icon icon="codicon:triangle-down" className="text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{width: buttonWidth}}>
              <DropdownMenuItem>5:00 AM - 11:59 AM</DropdownMenuItem>
              <DropdownMenuItem>12:00 PM - 5:59 PM</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden 2xl:block">
          <h3 className='font-semibold'>
            Arrival Time
          </h3>
          <RadioGroup defaultValue="5am-11:59am" className="mt-2">
            <div className="flex items-center space-x-2 mt-1">
              <RadioGroupItem value="5am-11:59am" id="5am-11:59am" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
              <Label htmlFor="5am-11:59am" className="font-normal">5:00 AM - 11:59 AM</Label>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <RadioGroupItem value="12pm-5:59pm" id="12pm-5:59pm" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
              <Label htmlFor="12pm-5:59pm" className="font-normal">12:00 PM - 5:59 PM</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="w-full 2xl:mt-4">
        <div className="flex 2xl:hidden justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger ref={buttonRef} className="bg-white rounded-md h-9 px-4 py-2 shadow-sm w-full 2xl:w-52 flex items-center justify-between focus-visible:outline-none">
              <span>Stops</span>
              <Icon icon="codicon:triangle-down" className="text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{width: buttonWidth}}>
              <DropdownMenuItem className="flex items-center justify-between">
                <Label className="font-normal">Nontop</Label>
                <span className="font-normal text-xs">$230</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between">
                <Label className="font-normal">1 Stop</Label>
                <span className="font-normal text-xs">$230</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between">
                <Label className="font-normal">2+ Stops</Label>
                <span className="font-normal text-xs">$230</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden 2xl:block">
          <h3 className='font-semibold'>
          Stops
          </h3>
          <RadioGroup defaultValue="nonstop" className="mt-2">
            <div className="flex items-center justify-between space-x-2 mt-1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="nonstop" id="nonstop" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
                <Label htmlFor="nonstop" className="font-normal flex justify-between">Nontop</Label>
              </div>
              <span className="font-normal text-xs">$230</span>
            </div>
            <div className="flex items-center justify-between space-x-2 mt-1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="1-stop" id="1-stop" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
                <Label htmlFor="1-stop" className="font-normal flex justify-between">1 Stop</Label>
              </div>
              <span className="font-normal text-xs">$230</span>
            </div>
            <div className="flex items-center justify-between space-x-2 mt-1">
            <div className="flex items-center gap-2">
                <RadioGroupItem value="2+stops" id="2+stops" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
                <Label htmlFor="2+stops" className="font-normal flex justify-between">2+ Stops</Label>
              </div>
              <span className="font-normal text-xs">$230</span>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="w-full 2xl:mt-4">
        <div className="flex 2xl:hidden justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger ref={buttonRef} className="bg-white rounded-md h-9 px-4 py-2 shadow-sm w-full 2xl:w-52 flex items-center justify-between focus-visible:outline-none">
              <span>Airlines</span>
              <Icon icon="codicon:triangle-down" className="text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{width: buttonWidth}} className="h-40 overflow-y-scroll hide-scrollbar">
            {airlines.map((airline) => (
              <DropdownMenuItem className="flex items-center justify-between">
                <Label className="font-normal">{airline?.name}</Label>
                <span className="font-normal text-xs">{airline?.price}</span>
              </DropdownMenuItem>
            ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden 2xl:block">
          <h3 className='font-semibold'>
            Airlines Included
          </h3>
          <RadioGroup defaultValue="All" className="mt-2">
            {airlines.map((airline) => (
              <div key={airline.id} className="flex items-center justify-between space-x-2 mt-1">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value={airline.name} id={airline.name} className="aria-checked:bg-primary h-3 w-3 text-primary"/>
                  <Label htmlFor={airline.name} className="font-normal flex justify-between">{airline.name}</Label>
                </div>
                <span className="font-normal text-xs">{airline.price}</span>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export default SortBy