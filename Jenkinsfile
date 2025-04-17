pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonarqube-token') // Use the ID of the stored token
        SONAR_HOST_URL = 'https://sonarcloud.io' // Replace with your SonarCloud URL
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/samaresh96/js-jenkins.git',
                    credentialsId: 'github-token'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def sonarProperties = """
                        sonar.projectKey=js-jenkins
                        sonar.projectName=JavaScript Jenkins Pipeline
                        sonar.projectVersion=1.0
                        sonar.sources=.
                        sonar.tests=.
                        sonar.test.inclusions=**/*.test.js
                        sonar.javascript.lcov.reportPaths=coverage/lcov.info
                        sonar.host.url=${SONAR_HOST_URL}
                        sonar.login=${SONAR_TOKEN}
                    """
                    writeFile file: 'sonar-project.properties', text: sonarProperties
                    sh 'sonar-scanner'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
