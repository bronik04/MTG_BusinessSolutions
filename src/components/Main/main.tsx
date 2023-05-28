import React from 'react';
import { connect } from 'react-redux';
import ReviewList from '../ReviewList/ReviewList';
import Pagination from '../Pagination/Pagination';
import { MainProps, MainState, Review } from '../../utils/types';

class Main extends React.Component<MainProps, MainState> {

  state: MainState = {
    currentPage: 1,
  }

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { reviews } = this.props;
    const { currentPage } = this.state;

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedReviews = Object.values(reviews).slice(startIndex, endIndex);
    const totalPages = Math.ceil(Object.values(reviews).length / itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <main className='main'>
        <ReviewList reviews={paginatedReviews}/>
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}/>
      </main>
    );
  }
}

const mapStateToProps = (state: { reviews: Review[] }) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Main);
