import { Card } from "antd";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export const CategoryCard = ({ title, image }: Props) => {
  return (
    <Card
      hoverable
      className="overflow-hidden w-full h-full!"
      cover={
        <div className="relative w-full aspect-video h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 788px) 100vw, 33vw"
            priority
          />
        </div>
      }
    >
      <h3 className="text-lg font-semibold">{title}</h3>
    </Card>
  );
};
