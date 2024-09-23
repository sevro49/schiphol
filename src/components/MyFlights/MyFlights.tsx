import Filter from "./Filter"
import MyFlightList from "./MyFlightList"

const MyFlights = () => {
  return (
    <div className="bg-mainBg w-full rounded-3xl h-[36.5rem] sm:h-[53.5rem] shadow-2xl mx-4 lg:mx-32 xl:mx-40 2xl:mx-64 overflow-y-scroll hide-scrollbar">
      <Filter />
      <MyFlightList />
    </div>
  )
}

export default MyFlights