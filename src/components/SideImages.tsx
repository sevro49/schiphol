import { Icon } from "@iconify/react";

const SideImages = () => {
  return (
    <div className='w-full lg:w-auto flex flex-row lg:flex-col order-first lg:order-second justify-center self-start lg:items-end gap-2 sm:gap-4'>
      <div className='w-full lg:w-[15rem] h-[4rem] lg:h-[14.5rem] relative group overflow-hidden rounded-xl cursor-pointer flex items-center justify-center'>
        <img src="/img/car-rental.jpg" alt="car" className='w-full h-full object-cover rounded-xl duration-300 group-hover:scale-125'/>
        <div className='w-full text-white text-lg font-medium absolute sm:bottom-2 left-2 flex items-center  lg:items-start lg:flex-col gap-1'>
          <Icon icon="f7:car-fill" className="text-4xl sm:text-xl"/>
          <p className="hidden sm:block">CAR RENTALS</p>
        </div>
      </div>
      <div className='w-full lg:w-[15rem] h-[4rem] lg:h-[14.5rem] relative group overflow-hidden rounded-xl cursor-pointer flex items-center justify-center'>
        <img src="/img/hotel.jpg" alt="car" className='w-full h-full object-cover rounded-xl duration-300 group-hover:scale-125'/>
        <div className='w-full text-white text-lg font-medium absolute sm:bottom-2 left-2 flex items-center  lg:items-start lg:flex-col gap-1'>
          <Icon icon="mingcute:hotel-line" className="text-4xl sm:text-xl"/>
          <p className="hidden sm:block">HOTELS</p>
        </div>
      </div>
      <div className='w-full lg:w-[15rem] h-[4rem] lg:h-[14.5rem] relative group overflow-hidden rounded-xl cursor-pointer flex items-center justify-center'>
        <img src="/img/travel-package.jpg" alt="car" className='w-full h-full object-cover rounded-xl duration-300 group-hover:scale-125'/>
        <div className='w-full text-white text-lg font-medium absolute sm:bottom-2 left-2 flex items-center  lg:items-start lg:flex-col gap-1'>
          <Icon icon="icon-park-outline:beach-umbrella" className="text-4xl sm:text-xl"/>
          <p className="hidden sm:block">TRAVEL PACKAGES</p>
        </div>
      </div>
    </div>
  )
}

export default SideImages