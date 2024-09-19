import { useState } from "react";

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

  const handleSelected = (value: string) => {
    setSelected(value);
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const today = new Date()

  return (
    <div className='bg-white rounded-xl w-full px-6 py-4 flex flex-col items-center'>
      <div className="w-full flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-lg font-medium">
          <Icon icon="f7:airplane" className="" />
          BOOK YOUR FLIGHT
        </h2>
        <div className="flex items-center gap-0.5">
          <Button onClick={() => handleSelected("round-trip")} className={` ${selected === "round-trip" ? "bg-primary hover:bg-primaryHover text-white" : "bg-secondary text-primary hover:bg-secondaryHover"} rounded-s-2xl rounded-e-none shadow-none gap-2`}>
            Round Trip
          </Button>
          <Button onClick={() => handleSelected("one-way")} className={` ${selected === "one-way" ? "bg-primary hover:bg-primaryHover text-white" : "bg-secondary text-primary hover:bg-secondaryHover"} rounded-s-none rounded-e-2xl shadow-none gap-2`}>
            One way
          </Button>
        </div>
      </div>
      <div className="w-full flex items-center gap-5 mt-6">
        <div className="flex items-center gap-1 w-full">
          <div className="flex items-center relative w-full">
            <Input className="rounded-s-2xl rounded-e-none ps-10"/>
            <Icon icon="mdi:airplane-takeoff" className="text-primary text-2xl absolute left-2" />
          </div>
          <div className="flex items-center relative w-full">
            <Input className="rounded-s-none rounded-e-2xl ps-10"/>
            <Icon icon="mdi:airplane-landing" className="text-primary text-2xl absolute left-2" />
          </div>
        </div>
        <div className="flex items-center gap-1 w-full">
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
                            <Button className="w-full rounded-s-2xl rounded-e-none bg-white hover:bg-white text-black shadow-sm border">
                            {field.value 
                            ? format(field.value, "PPP")
                            : ""}
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
                            <Button className="w-full rounded-s-none rounded-e-2xl bg-white hover:bg-white text-black shadow-sm border">
                            {field.value 
                            ? format(field.value, "PPP")
                            : ""}
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
      <div className="w-full flex justify-start">
        <Button className="bg-primary hover:bg-primaryHover text-white mt-6 ">
          Show Flights
        </Button>
      </div>
    </div>
  )
}

export default Reservation