//= require action_cable
//= require_self
//= require_tree .

let App = {};
App.cable = ActionCable.createConsumer();
