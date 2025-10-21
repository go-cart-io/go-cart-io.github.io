# Troubleshooting

## Environment Variables Not Updating

If you've modified your **`.env`** file and the changes aren't taking effect in your running containers, you must rebuild and restart the service to refresh the environment variables.

Run these commands:

```bash
docker compose down
docker compose up -d
```

## The Container Port is Already in Use (Address Already in Use)

This error occurs when the port you're trying to map on your **host machine** is already being used by another application.

**If using `docker compose up -d` (Production/Default)**

1.  Open the **`docker-compose.yml`** file.
2.  Change the host port (the first number) in the `ports` section to an unused port number (e.g., $5002$).

```yml
# Before
ports:
  - "5001:5000"

# After (Example)
ports:
  - "5002:5000" # Host port 5002 is mapped to container port 5000
```

**If using `docker compose -f docker-compose-dev.yml up -d` (Development)**

1.  Identify the occupied port from the error message, such as "Bind for $0.0.0.0:5001$ failed: port is already allocated." (The port is $5001$ in this example).
2.  Open the **`docker-compose-dev.yml`** file.
3.  Change the identified host port (the first number) to an unused port number, following the example above.

**If using a VS Code Dev Container**

1.  The error message should appear in the dev container's terminal. Note the port number.
2.  Follow the instructions for the development setup above (adjusting the port in **`docker-compose-dev.yml`**).
3.  Alternatively, close the dev container and run the development command (`docker compose -f docker-compose-dev.yml up -d`) in a standard terminal, then follow the instructions for the Development setup.

## Full Clean Reset (Starting from Scratch)

If you encounter persistent, unresolvable errors, configuration issues, or dependency conflicts after an update, you may need to perform a full clean reset of your environment.

**⚠️ WARNING:** This process removes all local Docker images, containers, and networks. Any data stored locally within the container volumes (like the logs) will be lost unless you have explicit volume backups.

1. Stop and Remove All Running Containers

   First, ensure all containers are gracefully stopped and removed from both the default and development environments:

   ```bash
   docker compose down
   docker compose -f docker-compose-dev.yml down
   ```

2. Clean Up Docker System Resources

   Remove all stopped containers, unused networks, dangling images, and build cache. This frees up disk space and removes remnants that might cause conflicts:

   ```bash
   docker system prune --force
   ```

3. Remove Local Project Images

   List all images and manually remove the application images and their dependencies. **You should remove all tags** (e.g., `latest`, `3.2.0`) of the `gocartio/cartogram-web` image, for instance:

   ```bash
   docker images
   docker rmi gocartio/cartogram-web:latest
   docker rmi gocartio/cartogram-web:3.2.0
   docker rmi redis:alpine
   docker rmi postgres:12-alpine
   ```

4. Re-clone the Project

   Delete or rename your local project directory (`cartogram-docker`). Then, follow the **Setup Instructions** again, starting from cloning the repository to ensure you have a completely fresh codebase and clean Docker environment.
