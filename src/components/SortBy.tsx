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
    name: 'American Airlines',
    price: '$230'
  },
  {
    id: 2,
    name: 'Delta Airlines',
    price: '$240'
  },
  {
    id: 3,
    name: 'United Airlines',
    price: '$250'
  },
  {
    id: 4,
    name: 'Southwest Airlines',
    price: '$220'
  },
  {
    id: 5,
    name: 'JetBlue',
    price: '$230'
  },
  {
    id: 6,
    name: 'Frontier Airlines',
    price: '$210'
  },
  {
    id: 7,
    name: 'Spirit Airlines',
    price: '$200'
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
  }
];


const SortBy = () => {
  return (
    <div className='min-w-56 h-[32rem] overflow-y-scroll overflow-x-hidden hide-scrollbar'>
      <div className="w-full flex flex-col gap-3">
        <h3 className='font-semibold'>
          Sort By:
        </h3>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-white rounded-md h-9 px-4 py-2 shadow-sm w-52 flex items-center justify-between focus-visible:outline-none">
            <span>Select </span>
            <Icon icon="codicon:triangle-down" className="text-primary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuItem>Lowest Price</DropdownMenuItem>
            <DropdownMenuItem>Highest Price</DropdownMenuItem>
            <DropdownMenuItem>Shortest Duration</DropdownMenuItem>
            <DropdownMenuItem>Longest Duration</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full mt-4">
        <h3 className='font-semibold'>
          Arrival Time
        </h3>
        <RadioGroup defaultValue="5am-11:59am">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5am-11:59am" id="5am-11:59am" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
            <Label htmlFor="5am-11:59am" className="font-normal">5:00 AM - 11:59 AM</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="12pm-5:59pm" id="12pm-5:59pm" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
            <Label htmlFor="12pm-5:59pm" className="font-normal">12:00 PM - 5:59 PM</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="w-full mt-4">
        <h3 className='font-semibold'>
          Stops
        </h3>
        <RadioGroup defaultValue="nonstop">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="nonstop" id="nonstop" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
              <Label htmlFor="nonstop" className="font-normal flex justify-between">Nontop</Label>
            </div>
            <span className="font-normal text-xs">$230</span>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="1-stop" id="1-stop" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
              <Label htmlFor="1-stop" className="font-normal flex justify-between">1 Stop</Label>
            </div>
            <span className="font-normal text-xs">$230</span>
          </div>
          <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-2">
              <RadioGroupItem value="2+stops" id="2+stops" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
              <Label htmlFor="2+stops" className="font-normal flex justify-between">2+ Stops</Label>
            </div>
            <span className="font-normal text-xs">$230</span>
          </div>
        </RadioGroup>
      </div>
      <div className="w-full mt-4">
        <h3 className='font-semibold'>
          Airlines Included
        </h3>
        <RadioGroup defaultValue="nonstop">
          {airlines.map((airline) => (
            <div key={airline.id} className="flex items-center justify-between space-x-2">
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
  )
}

export default SortBy