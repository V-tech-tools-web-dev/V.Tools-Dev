// https://www.npmjs.com/package/is-docker
// Check if the process is running inside a Docker container

import isDocker from "is-docker";

let isDockerVal = new isDocker();

if (isDockerVal) {
  console.log("Running inside a Docker container");
}

//==============[bad]=============
