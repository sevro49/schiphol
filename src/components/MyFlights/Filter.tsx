import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Filter = () => {
  return (
    <div className='w-full bg-white rounded-t-3xl py-2 sm:py-4 shadow-sm px-6 sm:px-8 lg:px-20 flex flex-wrap items-center justify-center gap-8'>
      <div className='block sm:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger className='bg-white text-black hover:bg-zinc-100 border w-32 px-4 py-2 h-9 text-sm shadow rounded-md font-medium flex items-center justify-between focus-visible:outline-none'>
          <span>Filter</span>
          <Icon icon="codicon:triangle-down" className="text-backgroundSecondary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Times</DropdownMenuItem>
            <DropdownMenuItem>Stops</DropdownMenuItem>
            <DropdownMenuItem>Airlines</DropdownMenuItem>
            <DropdownMenuItem>Airports</DropdownMenuItem>
            <DropdownMenuItem>Amenities</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='hidden sm:flex items-center gap-4'>
        <Button className='bg-white text-black hover:bg-zinc-100 border'>Times</Button>
        <Button className='bg-white text-black hover:bg-zinc-100 border'>Stops</Button>
        <Button className='bg-white text-black hover:bg-zinc-100 border'>Airlines</Button>
        <Button className='bg-white text-black hover:bg-zinc-100 border'>Airports</Button>
        <Button className='bg-white text-black hover:bg-zinc-100 border'>Amenities</Button>
        <Button className='bg-white text-backgroundSecondary hover:bg-zinc-100 shadow-none'>
          <span>Edit Search</span> 
          <Icon icon="mdi:chevron-down" className='text-lg'/>
        </Button>
      </div>
      <div className='block sm:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger className='bg-white text-black hover:bg-zinc-100 border w-32 px-4 py-2 h-9 text-sm shadow rounded-md font-medium flex items-center justify-between focus-visible:outline-none'>
          <span>Stars</span>
          <Icon icon="codicon:triangle-down" className="text-backgroundSecondary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='flex flex-col justify-center'>
            <DropdownMenuItem className='px-4'>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
            </DropdownMenuItem>
            <DropdownMenuItem className='px-4'>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
            </DropdownMenuItem>
            <DropdownMenuItem className='px-4'>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
            </DropdownMenuItem>   
            <DropdownMenuItem className='px-4'>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star" className='text-zinc-200'/>
            </DropdownMenuItem>
            <DropdownMenuItem className='px-4'>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
              <Icon icon="material-symbols:star"/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='hidden sm:flex items-center gap-4'>
        <Button className='bg-transparent shadow-none text-black hover:bg-zinc-100 flex flex-col items-center'>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
          </span>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
          </span>
        </Button>
        <Separator orientation="vertical" className='h-4'/>
        <Button className='bg-transparent shadow-none text-black hover:bg-zinc-100 flex flex-col items-center'>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
          </span>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
          </span>
        </Button>
        <Separator orientation="vertical" className='h-4'/>
        <Button className='bg-transparent shadow-none text-black hover:bg-zinc-100 flex flex-col items-center'>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
          </span>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
          </span>
        </Button>
        <Separator orientation="vertical" className='h-4'/>
        <Button className='bg-transparent shadow-none text-black hover:bg-zinc-100 flex flex-col items-center'>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
          </span>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star" className='text-zinc-200'/>
          </span>
        </Button>
        <Separator orientation="vertical" className='h-4'/>
        <Button className='bg-transparent shadow-none text-black hover:bg-zinc-100 flex flex-col items-center'>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
          </span>
          <span className='flex items-center'>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
            <Icon icon="material-symbols:star"/>
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Filter