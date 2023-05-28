import React from 'react';
import { ReviewItemProps } from '../../utils/types';

class ReviewItem extends React.Component<ReviewItemProps> {
  render() {
    const { review } = this.props;
    return (
      <li className="main__list-item">
        <p>{review.name}</p>
        <p>{review.review}</p>
        <p>{review.date}</p>
      </li>
    );
  }
}

export default ReviewItem;
