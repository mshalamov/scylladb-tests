# How to run project locally

## General Prerequisites:

- Git is installed: <a href="https://git-scm.com/downloads" target="_blank">https://git-scm.com/downloads</a>
- Docker installed: <a href="https://docs.docker.com/engine/install/" target="_blank">https://docs.docker.com/engine/install/</a>
- VS code: <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>
- In VS code install "Dev Containers" extension: <a href="vscode:extension/ms-vscode-remote.remote-containers" target="_blank">install</a>

## OS Prerequisites:

Please note if you want to run your tests in headless mode (for debugging), you should have up and running X Server application.

1. Windows:

- VcXsrv or Xming X Serve is installed:
  - <a href="https://sourceforge.net/projects/vcxsrv/" target="_blank">https://sourceforge.net/projects/vcxsrv/</a>
  - <a href="https://sourceforge.net/projects/xming/" target="_blank">https://sourceforge.net/projects/xming/</a>

2. Mac OS:

- XQuartz is installed:
  - <a href="https://sourceforge.net/projects/vcxsrv/" target="_blank">https://sourceforge.net/projects/vcxsrv/</a>
  - if brew is installed, run in terminel `brew install --cask xquartz`

## Setting up the application:

- Run docker
- Run VS code
- In VS code:
  - open "Command pallet" (CTRL + Shift + P) and run the command:  
    **Dev Containers: Clone Repository in Named Container Volume**
  - On the next prompt paste the URL to the git repo  
    **https://github.com/mshalamov/scylladb-tests**
  - Use the default for any other prompts by hitting enter
  - You can open the terminal to check the setup process and see potentials errors
  - When initial setup is done, you should have a terminal prompt looking something like this `root@${pc_name}:/workspaces/scylladb-tests#`
  - Create a .env file and put there auth url and credentials
    ```
    BASE_AUTH_URL: auth_url
    EMAIL: your_email
    PASSWORD: your_password
    ```
  - Run `npx playwright test`

## List of improvements

- Add Cypress support
- Add Allure report
- Add test with drop down
