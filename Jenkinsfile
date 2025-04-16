pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Use the Node.js installation configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/samaresh96/js-jenkins.git'
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
    }

    post {
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
