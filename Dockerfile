FROM openjdk:8-jdk-alpine
EXPOSE 8080
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} website-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/website-0.0.1-SNAPSHOT.jar"]