import BookRoom from "@/components/book-room";
import prisma from "@/data/prisma";
import { Home } from "@prisma/client";

const BookARoom = async () => {
  const rooms: Home[] = await prisma.home.findMany();
  return (
    <div>
      <p className="text-lg font-medium my-5">Kindly, select a room</p>
      <BookRoom rooms={rooms} />
    </div>
  );
};

export default BookARoom;
