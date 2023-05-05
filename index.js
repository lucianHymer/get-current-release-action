const core = require("@actions/core");
const { Octokit } = require("@octokit/rest");

async function run() {
  try {
    const octokit = new Octokit({
      auth: core.getInput("token"),
    });
    const owner = "lucianHymer";
    const repo = "workflowTest";
    var releases = await octokit.repos.listReleases({
      owner: owner,
      repo: repo,
    });
    // core.setOutput("tag", "abc");
    console.log(`The release payload: ${releases}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
