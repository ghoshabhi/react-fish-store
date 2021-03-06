import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component{
  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log('Click Registered!');
    //Grab the text from the box
    const storeID = this.storeInput.value;
    //transition to /store/:storeId
    this.context.router.transitionTo(`/store/${storeID}`);
  }
  render(){
    //render is bound to the class StorePicker, that is why "this" works
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
