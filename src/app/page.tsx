import Heading from "@/components/heading";
import RoomCard from "@/components/room-card";
import prisma from "@/data/prisma";
import { Home as HomeType } from "@prisma/client";

export default async function Home() {
  const rooms: HomeType[] = await prisma.home.findMany();
  return (
    <div className="p-4 md:p-0  ">
      <Heading title="Available Rooms" />
      {rooms.map((room, index) => (
        <RoomCard {...room} index={index} key={room.id} />
      ))}
      <div>home page</div>
    </div>
  );
}
