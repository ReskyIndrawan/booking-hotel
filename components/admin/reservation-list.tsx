import { getReservation } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";

const ReservationList = async () => {
  const reservation = await getReservation();
  if (!reservation?.length) return <p>No Reservation Found</p>;

  return (
    <div className='bg-white p-4 mt-5 shadow-sm rounded-md'>
      <div className='overflow-x-auto'>
        <table className='w-full min-w-[900px] divide-y divide-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-3 w-32 text-xs md:text-sm font-bold text-gray-700 uppercase text-left'>
                Image
              </th>
              <th className='px-4 py-3 text-xs md:text-sm font-bold text-gray-700 uppercase text-left'>
                Name
              </th>
              <th className='px-4 py-3 text-xs md:text-sm font-bold text-gray-700 uppercase text-left'>
                Arrival
              </th>
              <th className='px-4 py-3 text-xs md:text-sm font-bold text-gray-700 uppercase text-left'>
                Departure
              </th>
              <th className='px-4 py-3 text-xs md:text-sm font-bold text-gray-700 uppercase text-left'>
                Room Name
              </th>
              <th className='px-4 py-3 text-xs md:text-sm font-bold text-gray-700 uppercase text-left'>
                Price
              </th>
              <th className='px-4 py-3 text-xs md:text-sm font-bold text-gray-700 uppercase text-left'>
                Created At
              </th>
              <th className='px-4 py-3 text-xs md:text-sm font-bold text-gray-700 uppercase text-center'>
                Status
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {reservation.map((reserve) => (
              <tr className='hover:bg-gray-100' key={reserve.id}>
                <td className='px-4 py-3'>
                  <div className='h-16 w-24 relative'>
                    <Image
                      src={reserve.Room.image}
                      fill
                      sizes='20vw'
                      alt='room image'
                      className='object-cover rounded'
                    />
                  </div>
                </td>
                <td className='px-4 py-3 text-xs md:text-sm'>
                  {reserve.User.name}
                </td>
                <td className='px-4 py-3 text-xs md:text-sm'>
                  {formatDate(reserve.startDate.toISOString())}
                </td>
                <td className='px-4 py-3 text-xs md:text-sm'>
                  {formatDate(reserve.endDate.toISOString())}
                </td>
                <td className='px-4 py-3 text-xs md:text-sm'>
                  {reserve.Room.name}
                </td>
                <td className='px-4 py-3 text-xs md:text-sm'>
                  {formatCurrency(reserve.price)}
                </td>
                <td className='px-4 py-3 text-xs md:text-sm'>
                  {formatDate(reserve.createdAt.toString())}
                </td>
                <td className='px-4 py-3 text-center text-xs md:text-sm'>
                  <span className='capitalize'>
                    {reserve.Payment?.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationList;
