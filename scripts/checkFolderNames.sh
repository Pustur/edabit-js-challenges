#!/bin/sh

invalid_chars="[<>:|?*/\\\"]"
result=$(ls -d src/* | cut -c5- | grep -FE "${invalid_chars}")

if [ -z "$result" ]; then
  echo "[OK] Directory names are valid"
else
  echo "[ERR] Some directory names contain characters that may be invalid in some OSs:\n"
  echo "$result"
  exit 1
fi
