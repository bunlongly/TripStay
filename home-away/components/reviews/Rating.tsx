import { FaStar, FaRegStar } from 'react-icons/fa';

function Rating({ rating }: { rating: number }) {
  // rating = 2
  // 1 <= 2 true
  // 2 <= 2 true
  // 3 <= 2 false
  // ....
//   Example with rating = 3
//     First Iteration (i = 0): 0 + 1 <= 3 → 1 <= 3 which is true.
//     Second Iteration (i = 1): 1 + 1 <= 3 → 2 <= 3 which is true.
//     Third Iteration (i = 2): 2 + 1 <= 3 → 3 <= 3 which is true.
//     Fourth Iteration (i = 3): 3 + 1 <= 3 → 4 <= 3 which is false.
//     Fifth Iteration (i = 4): 4 + 1 <= 3 → 5 <= 3 which is false.
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);

  return (
    <div className='flex items-center gap-x-1'>
      {stars.map((isFilled, i) => {
        const className = `w-3 h-3 ${
          isFilled ? 'text-primary' : 'text-gray-400'
        }`;
        return isFilled ? (
          <FaStar className={className} key={i} />
        ) : (
          <FaRegStar className={className} key={i} />
        );
      })}
    </div>
  );
}

export default Rating;