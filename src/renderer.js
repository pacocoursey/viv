const notify = ({ title, body }) => {
  const n = new Notification(title, { body });
  console.log(n);
};

module.exports = {
  notify,
};
