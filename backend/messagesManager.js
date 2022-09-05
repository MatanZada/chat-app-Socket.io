const messages = {
  about: [
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1662474492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1662474492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1665066492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1665066492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1665066492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1665066492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1633530492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1633530492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1633530492000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1662398977000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1662398977000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1662398977000,
    },
    {
      body: "dsafsdaf",
      name: "anonymous",
      senderId: "gx1WlvDQb0due6dXAAAG",
      sentAt: 1662398977000,
    },
  ],
};

const addMessage = (room, message) => {
  if (Array.isArray(messages[room])) {
    messages[room].push(message);
    return;
  }

  messages[room] = [message];
};

const getRoomMessages = (room) => {
  return messages[room] || [];
};

module.exports = {
  addMessage,
  getRoomMessages,
};
