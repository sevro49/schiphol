import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator"


const flights = [
  {
    id: 1,
    departureTime: '10:00 AM',
    arrivalTime: '12:00 PM',
    duration: '2h',
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
    planeCode: 'B737',
    airline: 'Delta',
    airlineLogo: 'https://example.com/logos/delta.png',
    type: 'Round Trip',
    cabinClasses: [
      { class: 'Main', price: '$136' },
      { class: 'Comfort+', price: '$200' },
      { class: 'First', price: '$400' },
      { class: 'Comfort+', price: '$200' },
      { class: 'First', price: '$400' },
    ]
  },
  {
    id: 2,
    departureTime: '2:00 PM',
    arrivalTime: '4:30 PM',
    duration: '2h 30m',
    departureAirport: 'LAX',
    arrivalAirport: 'ORD',
    planeCode: 'B737',
    airline: 'American Airlines',
    airlineLogo: 'https://example.com/logos/american.png',
    type: 'One Way',
    cabinClasses: [
      { class: 'Main', price: '$120' },
      { class: 'Comfort+', price: '$180' },
      { class: 'First', price: '$350' }
    ]
  },
  {
    id: 3,
    departureTime: '9:30 AM',
    arrivalTime: '11:45 AM',
    duration: '2h 15m',
    departureAirport: 'ORD',
    arrivalAirport: 'ATL',
    planeCode: 'B737',
    airline: 'United Airlines',
    airlineLogo: 'https://example.com/logos/united.png',
    type: 'Round Trip',
    cabinClasses: [
      { class: 'Main', price: '$110' },
      { class: 'Comfort+', price: '$160' },
      { class: 'First', price: '$320' }
    ]
  },
  {
    id: 4,
    departureTime: '7:00 AM',
    arrivalTime: '10:00 AM',
    duration: '3h',
    departureAirport: 'JFK',
    arrivalAirport: 'MIA',
    planeCode: 'B737',
    airline: 'JetBlue',
    airlineLogo: 'https://example.com/logos/jetblue.png',
    type: 'Round Trip',
    cabinClasses: [
      { class: 'Main', price: '$130' },
      { class: 'Comfort+', price: '$190' },
      { class: 'First', price: '$360' }
    ]
  },
  {
    id: 5,
    departureTime: '1:15 PM',
    arrivalTime: '3:30 PM',
    duration: '2h 15m',
    departureAirport: 'SFO',
    arrivalAirport: 'SEA',
    planeCode: 'B737',
    airline: 'Alaska Airlines',
    airlineLogo: 'https://example.com/logos/alaska.png',
    type: 'One Way',
    cabinClasses: [
      { class: 'Main', price: '$90' },
      { class: 'Comfort+', price: '$140' },
      { class: 'First', price: '$250' }
    ]
  },
  {
    id: 6,
    departureTime: '8:00 AM',
    arrivalTime: '11:00 AM',
    duration: '3h',
    departureAirport: 'DEN',
    arrivalAirport: 'LAX',
    planeCode: 'B737',
    airline: 'Southwest Airlines',
    airlineLogo: 'https://example.com/logos/southwest.png',
    type: 'Round Trip',
    cabinClasses: [
      { class: 'Main', price: '$125' },
      { class: 'Comfort+', price: '$190' },
      { class: 'First', price: '$350' }
    ]
  },
  {
    id: 7,
    departureTime: '6:30 PM',
    arrivalTime: '9:00 PM',
    duration: '2h 30m',
    departureAirport: 'LAS',
    arrivalAirport: 'DFW',
    planeCode: 'B737',
    airline: 'Spirit Airlines',
    airlineLogo: 'https://example.com/logos/spirit.png',
    type: 'One Way',
    cabinClasses: [
      { class: 'Main', price: '$70' },
      { class: 'Comfort+', price: '$130' },
      { class: 'First', price: '$280' }
    ]
  },
  {
    id: 8,
    departureTime: '3:00 PM',
    arrivalTime: '5:30 PM',
    duration: '2h 30m',
    departureAirport: 'LAX',
    arrivalAirport: 'PHX',
    planeCode: 'B737',
    airline: 'Frontier Airlines',
    airlineLogo: 'https://example.com/logos/frontier.png',
    type: 'Round Trip',
    cabinClasses: [
      { class: 'Main', price: '$100' },
      { class: 'Comfort+', price: '$150' },
      { class: 'First', price: '$290' }
    ]
  },
  {
    id: 9,
    departureTime: '11:30 AM',
    arrivalTime: '2:00 PM',
    duration: '2h 30m',
    departureAirport: 'ATL',
    arrivalAirport: 'MCO',
    planeCode: 'B737',
    airline: 'Delta',
    airlineLogo: 'https://example.com/logos/delta.png',
    type: 'One Way',
    cabinClasses: [
      { class: 'Main', price: '$95' },
      { class: 'Comfort+', price: '$160' },
      { class: 'First', price: '$320' }
    ]
  },
  {
    id: 10,
    departureTime: '5:00 PM',
    arrivalTime: '7:45 PM',
    duration: '2h 45m',
    departureAirport: 'DFW',
    arrivalAirport: 'ORD',
    planeCode: 'B737',
    airline: 'American Airlines',
    airlineLogo: 'https://example.com/logos/american.png',
    type: 'Round Trip',
    cabinClasses: [
      { class: 'Main', price: '$150' },
      { class: 'Comfort+', price: '$210' },
      { class: 'First', price: '$380' }
    ]
  },
];

const MyFlightList = () => {
  return (
    <div className='mt-6 px-12'>
        <div className='flex items-center justify-between'>
          <div>
            <span>Sort by:</span>
            <Button className='bg-transparent px-1 text-base text-black hover:bg-transparent shadow-none'>
              <span>Recommended</span>
              <Icon icon="mdi:chevron-down" className='text-lg'/>
            </Button>
          </div>
          <div className='flex items-center gap-1'>
            <Icon icon="ic:outline-info" className='text-xl text-backgroundSecondary'/>
            Avg Fare: <strong>$225</strong>
          </div>
        </div>
        <div className='mt-6 flex flex-col gap-4'>
          {flights.map((flight) => (
            <Card key={flight?.id} className="rounded-md">
              <CardContent className="flex items-center justify-between px-6 py-7">
                <div className="flex gap-4 w-full">
                  <div className="flex self-start">
                    <img src="https://github.com/sevro49.png" alt={flight?.airline} className="rounded-full h-10 w-10"/>
                  </div>
                  <div>
                    <p className="text-2xl mb-3 flex items-center gap-2">
                      {flight?.departureTime}
                      <Separator className="w-5 bg-black"/>
                      {flight?.arrivalTime}
                    </p>
                    <div className="flex items-center justify-between gap-20">
                      <div>
                        <p className="font-medium">{flight?.airline}</p>
                        <Button className='bg-transparent text-backgroundSecondary hover:bg-transparent px-0 h-auto py-0 shadow-none'>
                          <span>Flight Details</span> 
                          <Icon icon="mdi:chevron-down" className='text-lg'/>
                        </Button>
                      </div>
                      <div>
                        <p className="font-medium">{flight?.type}</p>
                        <p>{flight?.duration}</p>
                      </div>
                      <div>
                        <p className="font-medium">{flight?.departureAirport} to {flight?.arrivalAirport}</p>
                        <p>{flight?.planeCode}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-3 items-center ps-64">
                  {flight?.cabinClasses.map((cabinClass) => (
                    <Card className="w-20 rounded-md cursor-pointer hover:shadow-md duration-150">
                      <CardHeader className="p-0 py-3 px-0">
                        <CardTitle className="text-lg text-center">{cabinClass?.price}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 py-2 px-0 text-center text-sm">
                        <p>{cabinClass?.class}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  )
}

export default MyFlightList