FROM mcr.microsoft.com/playwright:v1.41.0

RUN npx playwright install --with-deps chrome msedge chromium firefox webkit

RUN git config --global --add safe.directory /workspaces/scylladb-tests

RUN git config --global core.editor "code --wait"
