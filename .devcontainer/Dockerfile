# .devcontainer/Dockerfile: Sets up the development container for the project.

# Base image
FROM mcr.microsoft.com/vscode/devcontainers/php:8.3

# Set environment variable to non-interactive mode for apt-get installations
ENV DEBIAN_FRONTEND=noninteractive

# Set the environment variable for Webpack
ENV NODE_ENV=development

# Define SHELL with -o pipefail to prevent errors in piping commands
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Define ARGs for the version of each package
ARG BUILD_ESSENTIAL_VERSION=12.9
ARG HADOLINT_VERSION=v2.12.0
ARG LIBZIP_VERSION=1.7.3-1+b1
ARG NODEJS_VERSION=18.18.2-1nodesource1
ARG NPM_VERSION=9.8.1
ARG PYTHON_PIP_VERSION=23.0.1+dfsg-1
ARG PYTHON_VENV_VERSION=3.11.2-1+b1
ARG UNZIP_VERSION=6.0-28

# Install Composer globally
RUN wget -q -O composer-setup.php https://getcomposer.org/installer && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    rm composer-setup.php

# Install Symfony CLI
RUN wget -q -O - https://get.symfony.com/cli/installer | bash && \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Configure Xdebug (Assuming Xdebug is already installed in the base image)
RUN { \
    echo "xdebug.mode=debug"; \
    echo "xdebug.start_with_request=yes"; \
    echo "xdebug.client_host=localhost"; \
    echo "xdebug.client_port=9003"; \
    echo "xdebug.discover_client_host=true"; \
    } >> /usr/local/etc/php/conf.d/xdebug.ini

# Install additional packages and Hadolint
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential=${BUILD_ESSENTIAL_VERSION} \
    libzip-dev=${LIBZIP_VERSION} \
    unzip=${UNZIP_VERSION} \
    python3-pip=${PYTHON_PIP_VERSION} \
    python3-venv=${PYTHON_VENV_VERSION} && \
    docker-php-ext-install zip && \
    wget --progress=dot:giga -O /usr/local/bin/hadolint https://github.com/hadolint/hadolint/releases/download/${HADOLINT_VERSION}/hadolint-Linux-x86_64 && \
    chmod +x /usr/local/bin/hadolint && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Node.js, npm, and project dependencies
RUN wget --progress=dot:giga -qO- https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y --no-install-recommends nodejs=${NODEJS_VERSION} && \
    npm install -g npm@${NPM_VERSION}

# Set up project dependencies for PHP
WORKDIR /workspace

# Copy the entire project directory into the container
COPY . .

# Set up project dependencies for PHP
RUN if [ -f composer.json ]; then composer install --no-scripts --no-interaction --optimize-autoloader; fi

# Set up project dependencies for JavaScript
RUN if [ -f package.json ]; then npm install && npm run dev; fi

# Set up a virtual environment specifically for pre-commit
RUN python3 -m venv /opt/precommit-env && \
    /opt/precommit-env/bin/pip install --upgrade pip && \
    /opt/precommit-env/bin/pip install pre-commit

# Add virtual environment to PATH
ENV PATH="/opt/precommit-env/bin:$PATH"

# Set up working directory
WORKDIR /workspace

# Expose necessary ports (8000 for Symfony's built-in server)
EXPOSE 8000
