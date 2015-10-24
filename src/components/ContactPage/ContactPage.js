/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */



const React = require('react');
const TextField = require('material-ui/lib/text-field');
 
const MyAwesomeReactComponent = React.createClass({
  render() {
    return (
      
        <TextField
          hintText="Hint Text" />
    );
  },
});
 
module.exports = MyAwesomeReactComponent;