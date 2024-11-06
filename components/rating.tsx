import StarRatings from "react-star-ratings";

interface Type {
  rating: number;
  color?: string;
}

export const RatingComp = ({ rating, color }: Type) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor={color ? color : "#E59C02"}
      numberOfStars={5}
      name="rating"
      starDimension="15px"
      starSpacing="2px"
    />
  );
};
