


import Image from "next/image";
import Link from "next/link"; 

interface CardData {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  
  imageUrl: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    category: "Travel",
    date: "October 2023",
    title: "8 Rules Of Traveling in Sea You Need To Know",
    description:
      "A guide to safe and enjoyable sea journeys, from understanding marine protocols to packing essential supplies.",
    imageUrl: "/1.png",
  },
  {
    id: 2,
    category: "Tips",
    date: "September 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    description:
      "Learn the key strategies to showcase your skills and create a portfolio that attracts top recruiters.",
    imageUrl: "/2.png",
  },
  {
    id: 3,
    category: "Sports",
    date: "August 2023",
    title: "How to Be a Professional Footballer in 2023",
    description:
      "Discover the skills and training required to become a professional football player and how to excel in the field.",
    imageUrl: "/3.png",
  },

];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        >
          <Image
            src={card.imageUrl}
            alt={card.title}
            width={400}
            height={200}
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-2">
              {card.category} | {card.date}
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>
            <Link
              href={`/posts/${card.id}`}
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              Read More...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
