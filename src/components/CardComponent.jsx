import { Card } from "flowbite-react";

export default function CardComponent({
  id,
  title,
  price,
  description,
  image,
}) {
  return (
    <Card
      className="w-80 h-96"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      renderImage={() => (
        <div className="w-40 flex justify-center bg-slate-500 ">
          <a href={`/product-detail/${id}`}>
            <img className="object-cover" src={image} />
          </a>
        </div>
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        {description}
      </p>
    </Card>
  );
}
