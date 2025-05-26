# Deployment of go-cart.io with Docker

The go-cart.io web application consists of several components which must be deployed properly for the application to work for end-users. We suggest using [cartogram-ansible](https://github.com/go-cart-io/cartogram-ansible) for initial deployment. After that, deployment of updated versions of the application can be automated. This document provides step-by-step instructions for performing the following tasks:

## Making changes to cartogram-cpp

(Thanks @Adi)

To make changes only to the `cartogram-cpp` executable, follow these steps:

1. **Make Changes to `cartogram-cpp`**

   Create a new branch in the **`cartogram-cpp`** repository and implement your changes.

2. **Create a Pull Request to `cartogram-cpp:main`**

   Once your changes are complete and tested, create a pull request to merge your branch into **`cartogram-cpp:main`** on GitHub.

   After your pull request is approved, a new binary release should automatically build. Wait for the relevant run on [`cartogram-cpp`'s GitHub actions page](https://github.com/mgastner/cartogram-cpp/actions/workflows/build.yml) to successfully complete. The run will be titled "Merge pull request \#`X` from mgastner/`Y`" (where `X` is your pull request number and `Y` is your branch name), indicating the binary is built and pushed to GitHub releases.

3. **Update `cartogram` Binary in `cartogram-web`**

   Create a new branch in the **`cartogram-web`** repository and update the `cartogram` binary by running:

   ```bash
   bash tools/pull-executable.sh --latest
   ```

4. **Continue with `cartogram-web` Instructions**

   Now, treat this as a change to `cartogram-web` and proceed by following the instructions in the "Making changes to cartogram-web" section, starting from step 2.

## Making changes to cartogram-web

To make changes to the website, follow these steps:

1. **Create a New Branch**

   In the `cartogram-web` directory, create a new branch for your changes:

   ```bash
   git checkout -b <branch-name>
   ```

2. **Run Tests (Inside DevContainer)**

   Once you've made your changes, ensure they pass all tests by running the following command in the `cartogram-docker` folder _inside_ your devcontainer:

   ```bash
   npm run test
   ```

3. **Build the Project**

   After all tests pass, build the project:

   ```bash
   npm run build
   ```

   **Note the version number** in `internal\version.txt`.

4. **Test the Build Image (Outside DevContainer)**

   Test the latest build image by running the following commands in the **`cartogram-docker`** folder _outside_ your devcontainer:

   ```bash
   export TAG=:<version-number>
   docker compose up -d
   ```

   Replace `<version-number>` with the version you noted in the previous step (e.g., `:1.0.0`).

   The website should be accessible via `http://localhost:5001`. Remember, port `5000` is for development and `5001` is for production.

   **Manual Testing:** please perform manual tests as automated tests aren't yet available. At a minimum, verify that you can create cartograms from:

   - Predefined maps
   - GeoJSON files
   - Shapefiles

5. **Create a Pull Request to `dev`**

   Once satisfied with your changes and testing, create a pull request to merge your branch into the `dev` branch of `cartogram-web` on GitHub.

   GitHub will scan for security issues. **Fix any issues and retest** (repeat steps 3-4).

   _If you don't have permission to merge, await approval for your changes to be pushed to production. Project admins, please proceed to the rest of steps._

6. **Create a Pull Request to `main` (Project Admins)**

   When ready for a new release, create a pull request to the **`main`** branch. Automation will perform a final security check; fix any new issues that arise. Approve the merge, preferably by selecting "Create a merge commit."

7. **Trigger Docker Image Update**

   Go to the [Build, Publish, Release workflow in GitHub Actions](https://github.com/go-cart-io/cartogram-web/actions/workflows/docker-publish.yml). Select **Run workflow** and check **Update docker image on go-cart.io server** before clicking **Run workflow button**.

8. **Verify Production Update**

   Go to `https://go-cart.io` and check the footer to ensure it displays the new version.

9. **Sync `dev` with `main`**

   Finally, bring the `dev` branch up to date with `main`:

   ```bash
   git checkout dev
   git fetch origin
   git merge origin/main
   git push origin dev
   ```

## Making changes to cartogram-docker

If you make changes to the cartogram-docker, follow these steps:

1. **Test the Build Image (Outside DevContainer)**

   Test the build image by running the following commands in the **`cartogram-docker`** folder _outside_ your devcontainer:

   ```shell script
   cd cartogram-docker
   export TAG=:<version-number>
   docker compose pull web
   docker compose up -d
   ```

   Replace `<version-number>` with the version you want to test (e.g., `:1.0.0` or `:latest`).

   The website should be accessible via `http://localhost:5001`. Remember, port `5000` is for development and `5001` is for production.

   **Manual Testing:** please perform manual tests as automated tests aren't yet available. At a minimum, verify that you can create cartograms from:

   - Predefined maps
   - GeoJSON files
   - Shapefiles

2. **Trigger Docker Image Update**

   Go to the [Pull latest gocartio/cartogram-web image on host (go-cart.io) workflow in GitHub Actions](https://github.com/go-cart-io/cartogram-docker/blob/main/.github/workflows/pull-image.yml). Select **Run workflow** and input version number before clicking **Run workflow button**.
   The action will ssh into the production server and pull the cartogram-docker and cartogram-web images specified by the version.

3. **Verify Production Update**

   Go to `https://go-cart.io` and check the footer to ensure it displays the new version and your changes reflect in the production. In there is any issues, you may need to manually deploy the changes to the production environment.
