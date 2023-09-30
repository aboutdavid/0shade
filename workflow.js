if (!process.env.GH_TOKEN) {
  console.error("No access token detected. Exiting...")
  process.exit(1)
}
console.log("Compiling data...")

require("./run.js").command("node", ["compile.js"])

require("./run.js").command("git", [
    "config",
    "--global",
    "user.email",
    `${process.env.EMAIL}`
  ]);
  require("./run.js").command("git", [
    "config",
    "--global",
    "user.name",
    `${process.env.NAME}`
  ]);
  require("./run.js").command("git", ["add", "--all"]);
  require("./run.js").command("git", [
    "commit",
    "-m",
    '🤩 Automated Commit: Compiled database'
  ]);
  require("./run.js").command("git", [
    "push",
    `https://${process.env.GH_TOKEN}@github.com/${process.env.REPO}.git`,
    process.env.BRANCH
  ]);