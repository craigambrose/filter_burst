import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import Textarea from 'react-textarea-autosize'
import { ButtonToolbar, Button } from 'react-bootstrap'
import FocusOverlay from '../generic/FocusOverlay'

class NewPostForm extends React.Component {
  render() {
    return (
      <FocusOverlay>
        <div className={css(styles.container)}>
          <Textarea
            className={css(styles.textarea)}
            placeholder="what would you like to share?" />
          <div className={css(styles.controls)}>
            <ButtonToolbar>
              <div className="pull-right">
                <Button>Post</Button>
              </div>
            </ButtonToolbar>
          </div>
        </div>
      </FocusOverlay>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
    marginBottom: 20,
    border: "1px solid #dddddd",
    padding: 0,
    position: 'relative',
    zIndex: 101,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 2,
  },
  textarea: {
    width: '100%',
    margin: 0,
    border: 'none',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    resize: 'none',
    outline: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  controls: {
    borderTop: '1px solid #dddddd',
    paddingTop: 10,
  }
})

export default NewPostForm;