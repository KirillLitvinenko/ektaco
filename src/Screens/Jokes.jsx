import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { compose, lifecycle, withHandlers } from 'recompose';

import JokesView from './components/JokesView';

import {
  getRandomJokeRequest,
  getCategoriesRequest,
  selectCategory,
  saveJoke,
  deleteJoke,
  editJoke,
  closeEditPopup,
  saveEditedJoke,
} from '../redux/reducers/mainReducer';

const Jokes = (
  {
    mainState,
    getRandomClick,
    handleSelectCategory,
    handleSaveJoke,
    handleDeleteJoke,
    handleEditJoke,
    handleCloseEditPopup,
    handleSaveEditedJoke,
  }
) => (
  <JokesView
    mainReducer={mainState}
    getRandomClick={getRandomClick}
    handleSelectCategory={handleSelectCategory}
    handleSaveJoke={handleSaveJoke}
    handleDeleteJoke={handleDeleteJoke}
    handleEditJoke={handleEditJoke}
    handleCloseEditPopup={handleCloseEditPopup}
    handleSaveEditedJoke={handleSaveEditedJoke}
  />
);

const mapStateToProps = state => ({
  mainState: state.mainReducer,
});

const mapDispatchToProps = dispatch => ({
  getRandomJokeRequest: () => dispatch(getRandomJokeRequest()),
  getCategoriesRequest: () => dispatch(getCategoriesRequest()),
  selectCategory: selectedCat => dispatch(selectCategory(selectedCat)),
  saveJoke: jokeObj => dispatch(saveJoke(jokeObj)),
  deleteJoke: id => dispatch(deleteJoke(id)),
  editJoke: joke => dispatch(editJoke(joke)),
  closeEditPopup: () => dispatch(closeEditPopup()),
  saveEditedJoke: editedJoke => dispatch(saveEditedJoke(editedJoke)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers(
    {
      getRandomClick: props => () => {
        props.getRandomJokeRequest();
      },
      handleSelectCategory: props => selectedCat => {
        props.mainState.selectedCategory !== selectedCat ? props.selectCategory(selectedCat) : props.selectCategory('');
      },
      handleSaveJoke: props => (id, value) => {
        if (!props.mainState.savedJokes.some(joke => joke.id === id)) {
          const presaved = {id: id, value: value};
          props.saveJoke(presaved);
        }
      },
      handleDeleteJoke: props => id => props.deleteJoke(id),
      handleEditJoke: props => joke => {
        props.editJoke(joke);
      },
      handleCloseEditPopup: props => () => {
        props.closeEditPopup();
      },
      handleSaveEditedJoke: props => (id, newValue) => {
        props.saveEditedJoke({id: id, value: newValue});
      },
    }
  ),
  lifecycle(
    {
      componentWillMount() {
        const { getCategoriesRequest, mainState: { categoriesFetched } } = this.props;
        !categoriesFetched && getCategoriesRequest();
      },
    }
  ),
)(JokesView);

JokesView.propTypes = {
  mainState: PropTypes.instanceOf(Object),
};

