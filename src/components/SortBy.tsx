import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const SortBy = () => {
  return (
    <div className=''>
      <div className="flex flex-col gap-3">
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
      <div className="mt-6">
        <h3 className='font-semibold'>
          Arrival Time
        </h3>
        <RadioGroup defaultValue="5am-11:59am" className="mt-2">
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="5am-11:59am" id="5am-11:59am" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
            <Label htmlFor="5am-11:59am" className="font-normal">5:00 AM - 11:59 AM</Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="12pm-5:59pm" id="12pm-5:59pm" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
            <Label htmlFor="12pm-5:59pm" className="font-normal">12:00 PM - 5:59 PM</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mt-6">
        <h3 className='font-semibold'>
          Stops
        </h3>
        <RadioGroup defaultValue="nonstop" className="mt-2">
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="nonstop" id="nonstop" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
            <Label htmlFor="nonstop" className="font-normal">Nonstop</Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="1-stop" id="1-stop" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
            <Label htmlFor="1-stop" className="font-normal flex justify-between w-full">1 Stop <span>$230 </span></Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="2+stops" id="2+stops" className="aria-checked:bg-primary h-3 w-3 text-primary"/>
            <Label htmlFor="2+stops" className="font-normal">2+ Stops</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default SortBy