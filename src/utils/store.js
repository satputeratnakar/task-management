const store = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Added",
      cards: [
        {
          id: "1",
          title: "Task-1",
        },
      ],
    },
    "list-2": {
      id: "list-2",
      title: "Started",
      cards: [],
    },
    "list-3": {
      id: "list-3",
      title: "Completed",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2", "list-3"],
};

export default store;
