const API_GET_RANDOM_JOKE_REQUEST = 'API_GET_RANDOM_JOKE_REQUEST';
const API_GET_RANDOM_JOKE_SUCCESS = 'API_GET_RANDOM_JOKE_SUCCESS';
const API_GET_RANDOM_JOKE_FAILURE = 'API_GET_RANDOM_JOKE_FAILURE';

const API_GET_CATEGORIES_REQUEST = 'API_GET_CATEGORIES_REQUEST';
const API_GET_CATEGORIES_SUCCESS = 'API_GET_CATEGORIES_SUCCESS';
const API_GET_CATEGORIES_FAILURE = 'API_GET_CATEGORIES_FAILURE';

const SELECT_CATEGORY = 'SELECT_CATEGORY';

const SAVE_JOKE = 'SAVE_JOKE';
const DELETE_JOKE = 'DELETE_JOKE';
const EDIT_JOKE = 'EDIT_JOKE';

const CLOSE_EDIT_POPUP = 'CLOSE_EDIT_POPUP';
const SAVE_EDITED_JOKE = 'SAVE_EDITED_JOKE';

export const getRandomJokeRequest = () => ({
  type: API_GET_RANDOM_JOKE_REQUEST,
});

export const getRandomJokeSuccess = payload => ({
  type: API_GET_RANDOM_JOKE_SUCCESS,
  payload,
});

export const getRandomJokeFailure = payload => ({
  type: API_GET_RANDOM_JOKE_FAILURE,
  payload,
});

export const getCategoriesRequest = () => ({
  type: API_GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = payload => ({
  type: API_GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesFailure = payload => ({
  type: API_GET_CATEGORIES_FAILURE,
  payload,
});

export const selectCategory = payload => ({
  type: SELECT_CATEGORY,
  payload,
});

export const saveJoke = payload => ({
  type: SAVE_JOKE,
  payload,
});

export const deleteJoke = payload => ({
  type: DELETE_JOKE,
  payload,
});

export const editJoke = payload => ({
  type: EDIT_JOKE,
  payload,
});

export const closeEditPopup = () => ({
  type: CLOSE_EDIT_POPUP,
});

export const saveEditedJoke = payload => ({
  type: SAVE_EDITED_JOKE,
  payload,
});

const initialState = {
  randomJokeResponse: {},
  jokeFetching: false,
  jokeFetched: false,
  getRandomJokeError: '',
  categoriesResponse: {},
  categoriesFetching: false,
  categoriesFetched: false,
  getCategoriesError: '',
  selectedCategory: '',
  savedJokes: [],
  jokeToEdit: {},
  openEditPopup: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_GET_RANDOM_JOKE_FAILURE:
      return {
        ...state,
        jokeFetching: false,
        getRandomJokeError: action.payload,
        jokeFetched: false,
      };
    case API_GET_RANDOM_JOKE_SUCCESS:
      return {
        ...state,
        randomJokeResponse: action.payload,
        jokeFetching: false,
        jokeFetched: true,
      };
    case API_GET_RANDOM_JOKE_REQUEST:
      return {
        ...state,
        jokeFetching: true,
      };
    case API_GET_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesFetching: false,
        getCategoriesError: action.payload,
        categoriesFetched: false,
      };
    case API_GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesResponse: action.payload,
        categoriesFetching: false,
        categoriesFetched: true,
      };
    case API_GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categoriesFetching: true,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case SAVE_JOKE:
      return {
        ...state,
        savedJokes: [...state.savedJokes, action.payload],
      };
    case DELETE_JOKE:
      return {
        ...state,
        savedJokes: state.savedJokes.filter(elem => elem.id !== action.payload),
      };
    case EDIT_JOKE:
      return {
        ...state,
        jokeToEdit: action.payload,
        openEditPopup: true,
      };
    case CLOSE_EDIT_POPUP:
      return {
        ...state,
        openEditPopup: false,
      };
    case SAVE_EDITED_JOKE:
      return {
        ...state,
        savedJokes: [...state.savedJokes.filter(elem => elem.id !== state.jokeToEdit.id), action.payload],
        openEditPopup: false,
      };
    default:
      return state;
  }
};
