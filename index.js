const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const octokit = new github.Octokit({
      auth: core.input("token"),
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
