const changeObject = {};
let eventAction = '';
function broadcast() {
  Object.keys(changeObject).forEach(
    (k) => changeObject[k] && changeObject[k](),
  );
}
const ServicesEventElementListen = {
  get: () => eventAction,
  set: (eventListened) => {
    eventAction = eventListened;
    broadcast();
  },
  onChange: (key, cb) => {
    changeObject[key] = () => cb(eventAction);
  },
  remove: (key) => {
    delete changeObject[key];
  },
};
export default ServicesEventElementListen;
