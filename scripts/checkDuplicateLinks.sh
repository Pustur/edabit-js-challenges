#!/bin/sh

search_term="http"
result=$(head -n 5 src/*/README.md | grep "$search_term" | cut -c18-63 | sort | uniq -c | grep -v "1 $search_term")

echo "$result"

if [ -z "$result" ]; then
  echo "[OK] No duplicate links found"
else
  echo "[ERR] Duplicate links found, every challenge sould have a unique link"
  exit 1
fi
