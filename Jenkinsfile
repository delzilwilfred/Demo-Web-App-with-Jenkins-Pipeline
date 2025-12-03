pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
     stage('Install Linters') {
    steps {
        sh '''
            npm install htmlhint stylelint eslint
        '''
            }
        }   
        
        stage('Lint HTML') {
            steps {
                sh 'npx htmlhint *.html'
            }
        }
        
        stage('Lint CSS') {
            steps {
                sh 'npx stylelint "*.css"'
            }
        }
        
        stage('Lint JavaScript') {
            steps {
                sh 'npx eslint *.js'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! The app is ready for deployment.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for errors.'
        }
    }
}


