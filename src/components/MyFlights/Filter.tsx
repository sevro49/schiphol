import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { Icon } from "@iconify/react";

const Filter = () => {
  return (
    <div className='w-full bg-white rounded-t-3xl py-4 shadow-sm px-20 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
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
      <div className='flex items-center gap-4'>
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