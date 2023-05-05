const core = require("@actions/core");
const github = require("@actions/github");

try {
  const octokit = new github.Octokit({
    auth: core.input("token"),
  });
  const releases = await octokit.request(
    "GET /repos/{owner}/{repo}/releases?per_page=2&page=1",
    {
      owner: "lucianHymer",
      repo: "workflowTest",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  // core.setOutput("tag", "abc");
  console.log(`The release payload: ${releases}`);
} catch (error) {
  core.setFailed(error.message);
}
