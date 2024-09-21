import { Icon } from "@iconify/react";

const SideImages = () => {
  return (
    <div className='flex flex-col items-end gap-4'>
      <div className='w-[15rem] h-[14.5rem] relative group overflow-hidden rounded-xl cursor-pointer'>
        <img src="/img/car-rental.jpg" alt="car" className='w-full h-full object-cover rounded-xl duration-300 group-hover:scale-125'/>
        <div className='text-white text-lg font-medium absolute bottom-2 left-2 flex flex-col gap-1'>
          <Icon icon="f7:car-fill" className="text-xl"/>
          <p>CAR RENTALS</p>
        </div>
      </div>
      <div className='w-[15rem] h-[14.5rem] relative group overflow-hidden rounded-xl cursor-pointer'>
        <img src="/img/hotel.jpg" alt="car" className='w-full h-full object-cover rounded-xl duration-300 group-hover:scale-125'/>
        <div className='text-white text-lg font-medium absolute bottom-2 left-2 flex flex-col gap-1'>
          <Icon icon="mingcute:hotel-line" className="text-xl"/>
          <p>HOTELS</p>
        </div>
      </div>
      <div className='w-[15rem] h-[14.5rem] relative group overflow-hidden rounded-xl cursor-pointer'>
        <img src="/img/travel-package.jpg" alt="car" className='w-full h-full object-cover rounded-xl duration-300 group-hover:scale-125'/>
        <div className='text-white text-lg font-medium absolute bottom-2 left-2 flex flex-col gap-1'>
          <Icon icon="icon-park-outline:beach-umbrella" className="text-xl"/>
          <p>TRAVEL PACKAGES</p>
        </div>
      </div>
    </div>
  )
}

export default SideImages