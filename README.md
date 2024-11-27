# Symfony Project Template

This repository serves as a template for creating Symfony + Bootstrap projects with a fully configured development environment, including Docker-based devcontainer support, Dependabot integration, pre-configured tools, and a deploy workflow for GitHub Pages.

## Features

- **Symfony 7**: Modern PHP framework for web applications.
- **Bootstrap 5**:
- **Devcontainer Support**: Run the project in a consistent development environment using Docker.
- **VSCode Configuration**: Includes recommended extensions and settings for PHP.
- **Dependabot**: Automated dependency updates for Composer, Docker, and GitHub Actions.
- **Xdebug Configuration**: Preconfigured for debugging with VSCode.
- **Makefile**: Convenient shortcuts for common tasks.
- **Deploy Workflow**: GitHub Actions workflow for deploying to GitHub Pages.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) - Required for the development container.
- [VSCode](https://code.visualstudio.com/) with the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

## Getting Started

1. **Clone this repository**:

   ```bash
   git clone https://github.com/Jekwwer/symfony-template.git
   cd symfony-template
   ```

2. **Open in VSCode**:

   - Open VSCode and use the `Remote - Containers` extension to open the folder in the devcontainer.
   - VSCode will automatically build the Docker container and install the necessary dependencies.

3. **Run the Application**:

   - Start the Symfony server by running:

     ```bash
     make serve
     ```

   - The application will be available at `http://localhost:8000`.

## Debugging with Xdebug

This template includes Xdebug for PHP debugging. Xdebug is configured to listen for incoming connections, making it easy to debug with VSCode.

> Note: For phpmd, it’s necessary to start debugging; otherwise, the pre-commit hook will fail.

## Project Structure

- **`src/`**: Symfony application source code.
- **`templates/`**: Twig templates for HTML rendering.
- **`.devcontainer/`**: Docker and devcontainer configuration files.
- **`.env`**: Environment variable files for development.
- **`.github/dependabot.yml`**: Dependabot configuration for automated dependency updates.
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for deploying the project to GitHub Pages.

## Available Commands

You can use the following commands from the Makefile:

- **`make install`** - Install project dependencies and build assets.
- **`make serve`** - Start the Symfony server.
- **`make audit`** - Run security audits on PHP dependencies.
- **`make diagnose`** - Diagnose the Symfony application for potential issues.
- **`make cache-clear`** - Clear Symfony cache.

## Automated Dependency Updates

This template uses Dependabot to keep dependencies up-to-date:

- **Docker**: `.devcontainer` Docker dependencies.
- **GitHub Actions**: `.github` workflows.
- **Composer**: PHP dependencies.

## Deployment

This project includes a deploy workflow to publish the application to GitHub Pages. It builds a static version of the Symfony application and deploys it to the `gh-pages` branch.
You can view the deployed application [here](https://jekwwer.github.io/symfony-bootstrap-template/).

## Customizing

Feel free to modify this template to suit your project's needs. You can add new Symfony bundles, customize configurations, or expand the Docker setup as required.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
