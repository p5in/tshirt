const initialState = {
  designs: [
    { id: 1, name: "tshirt one", tshirtColor: "black" },
    {
      id: 2,
      name: "tshirt two",
      tshirtColor: "blue"
    },
    {
      id: 3,
      name: "tshirt three",
      tshirtColor: "red"
    },
    {
      id: 4,
      name: "tshirt four",
      tshirtColor: "white"
    },
    {
      id: 5,
      name: "tshirt five",
      tshirtColor: "grey"
    }
  ]
};

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DESIGN":
      console.log("design i ssaved in the database", action.design);
  }
  return state;
};

export default designReducer;
