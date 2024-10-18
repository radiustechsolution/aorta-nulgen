import StarRatings from "react-star-ratings";

interface Type {
  rating: number;
}

export const RatingComp = ({ rating }: Type) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#E59C02"
      numberOfStars={5}
      name="rating"
      starDimension="15px"
      starSpacing="2px"
    />
  );
};
