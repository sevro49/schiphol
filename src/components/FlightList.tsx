import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

const flightList = [
  {
    id: 1,
    from: "Milano",
    to: "Madrid",
    departure: "7:00 AM",
    departureAirport: "MXP",
    airline: "Alitalia",
    duration: "2h 55m (Nonstop)",
    arrival: "9:55 AM",
    arrivalAirport: "MAD",
    price: "$200",
    type: "Round Trip",
  },
  {
    id: 2,
    from: "Roma",
    to: "Barcelona",
    departure: "8:30 AM",
    departureAirport: "FCO",
    airline: "Iberia",
    duration: "1h 30m (Nonstop)",
    arrival: "10:00 AM",
    arrivalAirport: "BCN",
    price: "$150",
    type: "One Way",
  },
  {
    id: 3,
    from: "Milano",
    to: "Londra",
    departure: "9:00 AM",
    departureAirport: "LIN",
    airline: "British Airways",
    duration: "2h 00m (Nonstop)",
    arrival: "10:00 AM",
    arrivalAirport: "LHR",
    price: "$250",
    type: "Round Trip",
  },
  {
    id: 4,
    from: "Floransa",
    to: "Paris",
    departure: "10:15 AM",
    departureAirport: "FLR",
    airline: "Air France",
    duration: "1h 50m (Nonstop)",
    arrival: "12:05 PM",
    arrivalAirport: "CDG",
    price: "$180",
    type: "Round Trip",
  },
  {
    id: 5,
    from: "Milano",
    to: "Berlin",
    departure: "11:30 AM",
    departureAirport: "MXP",
    airline: "Lufthansa",
    duration: "1h 45m (Nonstop)",
    arrival: "1:15 PM",
    arrivalAirport: "TXL",
    price: "$220",
    type: "One Way",
  },
  {
    id: 6,
    from: "Venedik",
    to: "Amsterdam",
    departure: "2:00 PM",
    departureAirport: "VCE",
    airline: "KLM",
    duration: "2h 20m (Nonstop)",
    arrival: "4:20 PM",
    arrivalAirport: "AMS",
    price: "$200",
    type: "Round Trip",
  },
  {
    id: 7,
    from: "Cenevre",
    to: "Zürih",
    departure: "3:45 PM",
    departureAirport: "GVA",
    airline: "Swiss Air",
    duration: "1h 10m (Nonstop)",
    arrival: "4:55 PM",
    arrivalAirport: "ZRH",
    price: "$100",
    type: "One Way",
  },
  {
    id: 8,
    from: "Milano",
    to: "Lisbon",
    departure: "5:00 PM",
    departureAirport: "MXP",
    airline: "TAP Air Portugal",
    duration: "2h 55m (Nonstop)",
    arrival: "6:55 PM",
    arrivalAirport: "LIS",
    price: "$300",
    type: "Round Trip",
  },
  {
    id: 9,
    from: "Bologna",
    to: "Monako",
    departure: "6:30 PM",
    departureAirport: "BLQ",
    airline: "Air Italy",
    duration: "1h 15m (Nonstop)",
    arrival: "7:45 PM",
    arrivalAirport: "MCM",
    price: "$120",
    type: "One Way",
  }
];

const FlightList = () => {
  return (
    <div className="w-full h-[26rem] xl:h-[30rem] 2xl:h-[32rem] overflow-y-scroll overflow-x-hidden hide-scrollbar">
      {flightList.map((flight) => (
      <div key={flight.id} className="mb-4">
        <Card className="shadow-none bg-white border-none rounded-bl-none">
          <CardHeader className="space-y-0 px-3 py-2 sm:p-5">
            <CardTitle>{flight.from} - {flight.to}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between p-3 pt-0 sm:p-5 sm:pt-0">
            <div className="flex flex-col items-center 2xl:items-start">
              <span className="text-sm flex items-center gap-1 text-zinc-500">
                <Icon icon="tdesign:flight-takeoff"/>
                Departure
              </span>
              <span className="font-medium text-center sm:text-start">{flight.departure}</span>
              <span className="text-center sm:text-start">Airport: {flight.departureAirport}</span>
            </div>
            <Separator className='w-8 md:w-[3.5rem] h-0.5 bg-zinc-500'/>
            <div className="flex flex-col items-center justify-center">
              <span className="text-center">{flight.airline}</span>
              <Icon icon="f7:airplane" className="text-primary" />
              <span className="text-zinc-500 text-center">{flight.duration}</span>
            </div>
            <Separator className='w-8 md:w-[3.5rem] h-0.5 bg-zinc-500'/>
            <div className="flex flex-col items-center 2xl:items-start">
              <span className="text-sm flex items-center gap-1 text-zinc-500">
                <Icon icon="tdesign:flight-landing"/>
                Arrival
              </span>
              <span className="font-medium text-center sm:text-start">{flight.arrival}</span>
              <span className="text-center sm:text-start">Airport: {flight.arrivalAirport}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-0 pl-3 sm:pl-5">
            <div className="flex flex-col items-start self-start">
              <span className="text-primary font-bold">Price: {flight.price}</span>
              <span className="text-sm text-zinc-500">{flight.type}</span>
            </div>
            <Button className="bg-primary hover:bg-primaryHover rounded-bl-none rounded-tr-none w-40 h-12 2xl:h-16">Book Flight</Button>
          </CardFooter>
        </Card>
        <Button className="shadow-none bg-secondary hover:bg-secondaryHover text-primary underline rounded-t-none py-5">
          Check the details
        </Button>
      </div>
      ))}
    </div>
  );
};

export default FlightList;
