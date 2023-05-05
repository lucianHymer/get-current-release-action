const core = require("@actions/core");
const { Octokit } = require("@octokit/rest");

async function run() {
  try {
    const octokit = new Octokit({
      auth: core.getInput("token"),
    });
    const owner = "lucianHymer";
    const repo = "workflowTest";
    var releases = await octokit.request("GET /repos/{owner}/{repo}/releases", {
      owner: owner,
      repo: repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    // core.setOutput("tag", "abc");
    console.log(`The release payload: ${JSON.stringify(releases)}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
