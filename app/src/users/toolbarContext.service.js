(function() {
    angular.module('users').service('toolbarContext', function () {
        var listeners = [],
            toolbarContext = {
                setContext: setContext,
                subscribe: subscribe
            };

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
         * @param subscriber
         */
        function subscribe(listener) {
            listeners.push(listener);
        }

        return toolbarContext;
    });
}());

