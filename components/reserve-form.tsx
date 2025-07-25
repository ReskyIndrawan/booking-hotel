"use client";

import { useActionState, useState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createReserve } from "@/lib/actions";
import { DisableDateProps, RoomDetailProps } from "@/types/room";
import clsx from "clsx";

const ReserveForm = ({
  room,
  disableDate,
}: {
  room: RoomDetailProps;
  disableDate: DisableDateProps[];
}) => {
  const StartDate = new Date();
  const EndDate = addDays(StartDate, 1);

  const [startDate, setStartDate] = useState(StartDate);
  const [endDate, setEndDate] = useState(EndDate);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start ?? StartDate);
    setEndDate(end ?? EndDate);
  };

  const [state, formAction, isPending] = useActionState(
    createReserve.bind(null, room.id, room.price, startDate, endDate),
    null
  );

  const excludeDates = disableDate.map((item) => {
    return {
      start: item.startDate,
      end: item.endDate,
    };
  });

  return (
    <div>
      <form action={formAction}>
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Arrival - Departure
          </label>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange={true}
            onChange={handleDateChange}
            excludeDateIntervals={excludeDates}
            dateFormat={"dd-MM-YYYY"}
            wrapperClassName='w-full'
            className='py-2 px-4 rounded-md border-gray-300 border w-full'
          />
          <div aria-live='polite' aria-atomic='true'>
            <p className='text-sm text-red-500'>
              {state?.messageDate}
            </p>
          </div>
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Your Name
          </label>
          <input
            type='text'
            name='name'
            className='py-2 px-4 rounded-md border-gray-300 border w-full'
            placeholder='Full Name...'
          />
          <div aria-live='polite' aria-atomic='true'>
            <p className='text-sm text-red-500'>
              {state?.error?.name}
            </p>
          </div>
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Phone Number
          </label>
          <input
            type='text'
            name='phone'
            className='py-2 px-4 rounded-md border-gray-300 border w-full'
            placeholder='Phone Number...'
          />
          <div aria-live='polite' aria-atomic='true'>
            <p className='text-sm text-red-500'>
              {state?.error?.phone}
            </p>
          </div>
        </div>
        <button
          disabled={isPending}
          className={clsx(
            "px-10 py-3 text-center font-semibold text-white w-full bg-teal-400 rounded-sm cursor-pointer hover:bg-teal-500 ",
            {
              "opacity-50 cursor-progress": isPending,
            }
          )}>
          {isPending ? "Loading..." : "Reserve"}
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
