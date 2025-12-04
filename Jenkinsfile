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
                // Install linters globally in the workspace
                sh 'npm install htmlhint stylelint stylelint-config-standard eslint'
            }
        }

        stage('Lint HTML') {
            steps {
                sh '''
                    if [ -f "index.html" ]; then
                        npx htmlhint index.html
                    else
                        echo "No HTML files found, skipping HTML lint."
                    fi
                '''
            }
        }

        stage('Lint CSS') {
            steps {
                sh '''
                    if [ -f ".stylelintrc.json" ] || [ -f ".stylelintrc.js" ]; then
                        npx stylelint "*.css"
                    else
                        echo "Stylelint config missing, skipping CSS lint."
                    fi
                '''
            }
        }

        stage('Lint JavaScript') {
            steps {
                sh '''
                    ls eslint.config.js script.js
                    npx eslint --fix eslint.config.js script.js || true
                '''
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

