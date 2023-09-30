entries = []

with open("./database.txt", "r") as file:
    for line in file:
        entry = line.split('#', 1)[0].strip()
        entries.append(entry)