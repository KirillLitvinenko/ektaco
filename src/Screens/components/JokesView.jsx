import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useMediaPredicate } from 'react-media-hook';

import { commonStyles } from '../../styles/styles';

const JokesView = ({
  classes,
  getRandomClick,
  mainState,
  handleSelectCategory,
  handleSaveJoke,
  handleDeleteJoke,
  handleEditJoke,
  handleCloseEditPopup,
  handleSaveEditedJoke,
}) => {
  const mobileSze = useMediaPredicate('(max-width: 400px)');
  let inputRef;
  return (
    <div className={`${classes.page} ${classes.jokesPage} ${mobileSze && classes.mobilePage}`}>
      <div className={`${classes.mainColumn} ${mobileSze && classes.fullWidthColumn}`}>
        <div className={classes.categoriesSet}>
          {mainState.categoriesFetched &&
          mainState.categoriesResponse.map(
            category => (
              <Button
                variant='contained'
                color={mainState.selectedCategory !== category ? 'secondary' : 'default'}
                size='small'
                key={category}
                className={classes.catButton}
                onClick={() => handleSelectCategory(category)}
              >
                {category}
              </Button>
            )
          )}
        </div>
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={getRandomClick}
        >
          {`Get a random joke ${mainState.selectedCategory && `about ${mainState.selectedCategory}`}`}
        </Button>
        {mainState.jokeFetched &&
        <div className={classes.jokeBox}>
          <Typography variant='body1' className={classes.joke}>{mainState.randomJokeResponse.value}</Typography>
          {!mainState.savedJokes.some(joke => joke.id === mainState.randomJokeResponse.id) && (
            <div className={classes.jokesBoxFooter}>
              <Fab
                aria-label='like'
                color='primary'
                size='small'
                onClick={() => handleSaveJoke(mainState.randomJokeResponse.id, mainState.randomJokeResponse.value)}>
                <FavoriteIcon />
              </Fab>
            </div>
          )}
        </div>
        }
      </div>
      <div className={`${classes.secondaryColumn} ${mobileSze && classes.fullWidthColumn}`}>
        <Typography variant='h6' className={classes.columnTitle}>Saved jokes</Typography>
        {mainState.savedJokes.length > 0 &&
        <div>
          {mainState.savedJokes.map(
            joke => (
              <div className={`${classes.jokeBox} ${classes.jokeBoxSaved}`} key={joke.id}>
                <Typography variant='body1' className={classes.joke}>{joke.value}</Typography>
                <div className={classes.jokesBoxFooter}>
                  <Fab
                    aria-label='edit'
                    color='primary'
                    size='small'
                    onClick={() => handleEditJoke(joke)}
                    className={classes.footerIcons}>
                    <EditIcon fontSize='small' />
                  </Fab>
                  <Fab
                    aria-label='delete'
                    color='primary'
                    size='small'
                    onClick={() => handleDeleteJoke(joke.id)}
                    className={classes.footerIcons}>
                    <DeleteIcon fontSize='small' />
                  </Fab>
                </div>
              </div>
            )
          )}
        </div>
        }
      </div>
      <Dialog
        open={mainState.openEditPopup}
        onClose={handleCloseEditPopup}
        aria-labelledby='form-dialog-title'
        fullWidth
      >
        <DialogTitle id='form-dialog-title'>Edit Joke</DialogTitle>
        <DialogContent>
          <textarea
            autoFocus
            id='joke'
            type='text'
            rows='6'
            defaultValue={mainState.jokeToEdit.value}
            ref={ el => inputRef = el }
            className={classes.editJokeInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditPopup} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => handleSaveEditedJoke(mainState.jokeToEdit.id, inputRef.value)} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const styles = theme => ({
  ...commonStyles,
});

export default compose(withStyles(styles))(JokesView);

JokesView.propTypes = {
  classes: PropTypes.instanceOf(Object),
  getRandomClick: PropTypes.func,
  handleSaveJoke: PropTypes.func,
  handleSelectCategory: PropTypes.func,
  mainState: PropTypes.object,
  handleDeleteJoke: PropTypes.func,
  handleEditJoke: PropTypes.func,
  handleCloseEditPopup: PropTypes.func,
  handleSaveEditedJoke: PropTypes.func,
};