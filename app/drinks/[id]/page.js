import Link from 'next/link';
import Image from 'next/image';
import drinkImg from './drink.jpg';

console.log(drinkImg);

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch a drink...');
  }
  return res.json();
};

const SingleDrinksPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log(title, imgSrc);

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        Back to the list
      </Link>
      {/* <img src={drinkImg.src} /> */}
      {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg' alt='drink' /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt={title}
      />
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  );
};

export default SingleDrinksPage;
