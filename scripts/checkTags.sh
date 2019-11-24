#!/bin/sh

head -n 3 src/*/README.md | grep '`' | grep -v '#' | tr '\n' ' ' | node scripts/checkTags.js
