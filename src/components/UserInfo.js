import { userName, userJob } from "../utils/constants.js";

class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    const user = {};
  }
}

export default UserInfo;
