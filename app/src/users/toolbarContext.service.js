/*global window */
(function (angular) {

    'use strict';

    angular.module('users').service('toolbarContext', function () {
        var listeners = [];

        /**
         *
         * Method to set context actions
         *
         * @param contextDescription Array of objects that describe context actions. Consists of type (eg. edit/bin) and action (handler to call when clicked)
         */
        function setContext(contextDescription) {
            var contextActions = [];
            angular.forEach(contextDescription, function (value) {
                contextActions.push(
                    {
                        type: value.type,
                        action: value.action
                    }
                );
            });

            angular.forEach(listeners, function (value) {
                value(contextActions);
            });
        }

        /**
         *
         * Method to register listeners that will will be called on context change.
         * One candidate for listener is toolbar-context directive which is notified to update toolbar buttons
         *
         * @param listener
         */
        function subscribe(listener) {
            listeners.push(listener);
        }

        return {
            setContext: setContext,
            subscribe: subscribe
        };
    });
}(window.angular));

