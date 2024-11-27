# Makefile: Automates common tasks for Symfony project development and testing.

# Install project dependencies
install:
	composer install
	npm install
	npm run dev

# Run the Symfony server
pre-serve:
	symfony server:ca:install

# Start the Symfony server
serve: pre-serve
	symfony serve

# Check for security vulnerabilities with Composer
audit:
	composer audit

# Run diagnostics with Composer
diagnose:
	composer diagnose

# Clear the Symfony cache
cache-clear:
	php bin/console cache:clear
