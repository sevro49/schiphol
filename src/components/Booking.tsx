import FlightList from "./FlightList"
import Reservation from "./Reservation"
import SortBy from "./SortBy"

const Booking = () => {
  return (
    <div className="w-full items-center order-second lg:order-first">
      <Reservation />
      <div className="flex flex-col 2xl:flex-row justify-between mt-3 2xl:mt-7 gap-3 2xl:gap-7">
        <FlightList />
        <SortBy />
      </div>
    </div>
  )
}

export default Booking