const addMultipleEventListeners = (
  selector: string,
  eventName: string,
  callback: EventListener,
) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.addEventListener(eventName, callback);
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
