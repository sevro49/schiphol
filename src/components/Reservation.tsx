import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"

const FormSchema = z.object({
  departure: z.date({
    required_error: "A departure date is required.",
  }),
  return: z.date({
    required_error: "A return date is required.",
  }),
})

const Reservation = () => {
  const [selected, setSelected] = useState("round-trip");
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSelected = (value: string) => {
    setSelected(value);
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const getDateFormat = (date: Date | undefined) => {
    if (!date) return "";
    return windowWidth > 1700 
    ? format(date, "PPP") 
    : windowWidth > 1024 
    ? format(date, "PP") 
    : windowWidth > 767 
    ? format(date, "P") 
    : format(date, "P"); 
  };

  const today = new Date();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='bg-white rounded-xl w-full px-2 py-2 sm:px-6 sm:py-4 flex flex-col items-center'>
      <div className="w-full flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-sm sm:text-lg font-medium">
          <Icon icon="f7:airplane" className="text-lg hidden sm:block" />
          BOOK YOUR FLIGHT
        </h2>
        <div className="flex items-center gap-0.5">
          <Button onClick={() => handleSelected("round-trip")} className={` ${selected === "round-trip" ? "bg-primary hover:bg-primaryHover text-white" : "bg-secondary text-primary hover:bg-secondaryHover"} rounded-s-2xl rounded-e-none shadow-none gap-2 px-2 h-8 sm:h-9 sm:px-4`}>
          <Icon icon="ic:round-loop" className=" text-2xl block sm:hidden"/>
          <span className="hidden sm:block">Round Trip</span>  
          </Button>
          <Button onClick={() => handleSelected("one-way")} className={` ${selected === "one-way" ? "bg-primary hover:bg-primaryHover text-white" : "bg-secondary text-primary hover:bg-secondaryHover"} rounded-s-none rounded-e-2xl shadow-none gap-2 px-2 h-8 sm:h-9 sm:px-4`}>
          <Icon icon="mingcute:arrow-up-line" className=" text-2xl block sm:hidden"/>
          <span className="hidden sm:block">One way</span>
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row items-center gap-1 mt-2 sm:mt-6">
        <div className="flex items-center gap-1 w-full xl:w-1/2">
          <div className="flex items-center relative w-full">
            <Input className="rounded-s-2xl rounded-e-none ps-10"/>
            <Icon icon="mdi:airplane-takeoff" className="text-primary text-2xl absolute left-2" />
          </div>
          <div className="flex items-center relative w-full">
            <Input className="rounded-s-none rounded-e-2xl ps-10"/>
            <Icon icon="mdi:airplane-landing" className="text-primary text-2xl absolute left-2" />
          </div>
        </div>
        <div className="flex items-center gap-1 w-full xl:w-1/2">
          <div className="flex items-center relative w-full">
            <Form {...form}>
              <form className="w-full">
                <FormField
                  control={form.control}
                  name="departure"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button className="w-full ps-10 rounded-s-2xl rounded-e-none bg-white hover:bg-white text-black shadow-sm border">
                            {getDateFormat(field.value)}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setDepartureDate(date);
                            }}
                            disabled={(date) =>
                              returnDate
                              ? date < today || date >= returnDate
                              : date < today
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <Icon icon="mdi:calendar" className="text-primary text-2xl absolute left-2" />
          </div>
          <div className="flex items-center relative w-full">
          <Form {...form}>
              <form className="w-full">
                <FormField
                  control={form.control}
                  name="return"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button className="w-full ps-10 rounded-s-none rounded-e-2xl bg-white hover:bg-white text-black shadow-sm border">
                            {getDateFormat(field.value)}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setReturnDate(date)
                            }}
                            disabled={(date) =>
                              departureDate
                              ? date <= departureDate
                              : date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <Icon icon="mdi:calendar" className="text-primary text-2xl absolute left-2" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start mt-2 sm:mt-6">
        <Button className="bg-primary hover:bg-primaryHover px-2 h-auto sm:h-9 sm:px-4 text-xs sm:text-sm text-white">
          Show Flights
        </Button>
      </div>
    </div>
  )
}

export default Reservation