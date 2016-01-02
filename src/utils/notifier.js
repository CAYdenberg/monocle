var _ = require('underscore');
var EE = require('event-emitter');

var dispatcher = require('../utils/').dispatcher;
var emitter = EE({});

function Notifier() {
  this.notifications = [];
}

/**
 * Create a notification by calling notifier.create({object literal})
 *
 * Notifications can have any properties but typically include:
 * message - message displayed to user
 * class - BS Alert class (success, info, warning, danger)
 * payload - a Dispatcher payload which can be re-sent to the dispatcher by calling
 * notifcation.retry()
 * autodismiss - Boolean whether to dismiss the notification after 3 sec
 *
 * Notifications have two methods:
 * dismiss (removes the notification from the Notifier)
 * retry (sends the notifications payload to the dispatcher)
 *
 * This Notifier.create returns the notification so these methods can be called
 */
Notifier.prototype.create = function(settings) {
  var defaults = {
    message: '',
    class: 'danger',
    payload: false,
    autodismiss: false
  }
  var notification = _.extend(defaults, settings);
  var notifier = this;

  //append dismiss method
  notification.dismiss = function() {
    this.notifications.splice(notifier.notifications.indexOf(this), 1);
    emitter.emit('UPDATE');
  };

  //append retry method
  notification.retry = function() {
    if (notification.payload) {
      dispatcher.dispatch(this.payload);
      this.dismiss();
    }
  }

  this.notifications.push(notification);
  emitter.emit('UPDATE');

  //dismiss after 3 sec if autodismiss is set to true
  if (notification.autodismiss) {
    setTimeout(function() {
      notification.dismiss();
    }, 3000);
  }
  return notification;
}

Notifier.prototype.onUpdate = function(callback) {
  emitter.on('UPDATE', callback);
}

module.exports = new Notifier();
