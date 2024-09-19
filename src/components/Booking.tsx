import FlightList from "./FlightList"
import Reservation from "./Reservation"
import SortBy from "./SortBy"

const Booking = () => {
  return (
    <div className="w-full items-center ">
      <Reservation />
      <div className="flex justify-between mt-7 gap-7">
        <FlightList />
        <SortBy />
      </div>
    </div>
  )
}

export default Booking