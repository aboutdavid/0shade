const fs = require("fs")
fs.writeFileSync("compiled/mx.txt", `# 0shade - A blocklist for temporary email servers
# A list of the hostnames that MX server used by temporary email servers.
# Last Updated: ${new Date().toLocaleString('en-US', { timeZone: 'Etc/UTC', timeStyle: "short", dateStyle: "long" })} (UTC)
#
# License: https://opendatacommons.org/licenses/odbl/1-0/
# Git Repo: https://github.com/aboutdavid/0shade

`)

fs.writeFileSync("compiled/ips.txt", `# 0shade - A blocklist for temporary email servers
# A list of the IPs of MX servers that are used by temporary email servers.
# Last Updated: ${new Date().toLocaleString('en-US', { timeZone: 'Etc/UTC', timeStyle: "short", dateStyle: "long" })} (UTC)
#
# License: https://opendatacommons.org/licenses/odbl/1-0/
# Git Repo: https://github.com/aboutdavid/0shade

`)

fs.writeFileSync("compiled/domains.txt", `# 0shade - A blocklist for temporary email servers
# A list of the domains that temporary email servers use. (the thing after the "@" symbol.)
# Last Updated: ${new Date().toLocaleString('en-US', { timeZone: 'Etc/UTC', timeStyle: "short", dateStyle: "long" })} (UTC)
#
# License: https://opendatacommons.org/licenses/odbl/1-0/
# Git Repo: https://github.com/aboutdavid/0shade

${fs.readFileSync("./domains.txt", "utf8")}`)