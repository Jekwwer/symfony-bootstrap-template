#!/bin/bash

# scripts/run-phpmd.sh: Runs PHPMD on the src directory

vendor/bin/phpmd src text cleancode,codesize,naming,unusedcode --exclude config/bundles.php,importmap.php
