import pandas as pd
import csv

output = []


def main() :
    with open("moreSparc.txt", "w", newline="") as f:
        writer = csv.writer(f)
        
        f = open("MoreSparcData.txt", "r")
        for x in f: 
            arr = x.split()
            output.append(arr)
            writer.writerow(arr)

def dos():
    f = open("moreSparc.txt", "r")
    f2 = open("MoreSparcData.txt", "w")
    for x in f: 
        arr = x.split()
        f2.write('[')
        for a in arr:
            f2.write("'" + a + "'" + ', ')
        f2.write(']\n')

        for i in range(len(arr)):
            


def tres():
    with open("MoreSparcData.csv", "w", newline="") as f:
        writer = csv.writer(f)
        f = open("moreSparc.txt", "r")
        for x in f: 
            arr = x.split()
            writer.writerow(arr)

dos()

