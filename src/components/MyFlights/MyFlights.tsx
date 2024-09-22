import Filter from "./Filter"
import MyFlightList from "./MyFlightList"

const MyFlights = () => {
  return (
    <div className="bg-mainBg w-full rounded-3xl h-[52rem] shadow-2xl mx-64 overflow-y-scroll hide-scrollbar">
      <Filter />
      <MyFlightList />
    </div>
  )
}

export default MyFlights