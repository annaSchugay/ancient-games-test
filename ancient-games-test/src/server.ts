import {generateUserModel} from "./models/user";

async ({req}) => {
  // pass the request information through to the model
  return {
    user,
    models: {
      User: generateUserModel({req}),
      ...
    }
  };
},
