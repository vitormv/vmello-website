const addMultipleEventListeners = (
  selector: string,
  eventName: string,
  callback: EventListener,
) => {
  document.addEventListener(eventName, (event) => {
    if ((event.target as HTMLElement)?.closest(selector)) {
      callback.call(event.target, event);
    }
  });
};

const removeMultipleEventListeners = (
  selector: string,
  eventName: string,
  callback: EventListener,
) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.removeEventListener(eventName, callback);
  });
};

export { addMultipleEventListeners, removeMultipleEventListeners };
