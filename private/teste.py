import sys
import json
import ast 
from io import StringIO

data_to_pass_back = "Send to Node"

input = ast.literal_eval(sys.argv[1])
output = input
output["data_returned"] = data_to_pass_back

print(json.dumps(output))

sys.stdout.flush()