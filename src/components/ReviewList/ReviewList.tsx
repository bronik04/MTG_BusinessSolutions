import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import { ReviewListProps } from '../../utils/types';


class ReviewList extends React.Component<ReviewListProps> {
  render() {
    const { reviews } = this.props;
    return (
      <ul className="main__list">
        { reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </ul>
    );
  }
}

export default ReviewList;
