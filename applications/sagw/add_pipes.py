import sys
import re
file_name = sys.argv[1]
print("processing" + file_name)
data = []
with open(file_name) as f:
    for line in f:
        data.append(line)
        s = line.split(":")
        if(s[0].strip() == "name"):
            print(line)
            num = re.search('\"Line(.*)\"',s[1]).group(1)
            space = re.search("( *)name",s[0]).group(1)
            new_line = space + "label: strings.pipe(\'" + num + "\'),\n"
            data.append(new_line)
fout = open(file_name,"w")
fout.write("".join(data))
fout.close()

            
