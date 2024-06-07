# Use the official MySQL 5.7 image from DockerHub
FROM mysql:5.7

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=news_db
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Copy the SQL script to the container
COPY setup.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306