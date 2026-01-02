pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-ci-cd-demo .'
            }
        }

        stage('Deploy Locally') {
            steps {
                sh '''
                docker stop node-jenkins-container || true
                docker rm node-jenkins-container || true
                docker run -d -p 3000:3000 --name node-jenkins-container node-jenkins-app
                '''
            }
        }
    }
}
