const entries = []

fs.readFileSync("./database.txt", "utf8").split("\n").forEach(entry=>{
    entries.push(entry.replace(/#.*/, '').trim())
})

// An array of each entry in the database. This works with all entries in the compiled directory.