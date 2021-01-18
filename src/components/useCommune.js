// to facilitate easy and quick communication between a parent and child component

import { useContext } from "react";
import { AppContext } from "./context/appContext";

// allow the parent and child to listen 
// for certain evens from each other
// this way we can let the parent handle the most important tasks
// only pass along what the child simply needs

// this is going to be done using event pattern
const useCommune = function (name) {
    const appContext = useContext(AppContext);
    let eventContext;
    if(appContext.eventContext[name]) {
        eventContext = appContext.eventContext[name]
    }
    else {
        eventContext = {
            events: {},
            preventPropagation: false,
            publish(to, payload) {
                console.log(this);
                console.log(to)
                const listeners = this.events[to]
                for( var i =0; i < listeners.length; i++){
                    listeners[i](payload);
                    if(this.preventPropagation) {
                        break;
                    }
                }
                this.preventPropagation = false;
            },
            subscribe(eventName, callMe) {
                console.log("from subscribe ", eventName)
                if(this.events[eventName] !== undefined ) {
                    this.events[eventName].push(callMe)
                } else {
                    this.events[eventName] = [];
                    this.events[eventName].push(callMe);
                }
            }
        } 
        appContext.eventContext[name] = eventContext;
    } 

    return eventContext;
}

export default useCommune;