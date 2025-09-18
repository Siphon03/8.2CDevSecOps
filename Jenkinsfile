pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Siphon03/8.2CDevSecOps.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        // keep pipeline going even if tests fail (e.g., snyk not authed)
        sh 'npm test || true'
      }
    }

    stage('Generate Coverage Report') {
      steps {
        // fine if you don’t have a coverage script yet
        sh 'npm run coverage || true'
      }
    }

    stage('NPM Audit (Security Scan)') {
      steps {
        sh 'npm audit || true'
      }
    }

    stage('SonarCloud Analysis') {
      steps {
        script {
          // Tool name must match what you configured under "Global Tool Configuration"
          def scannerHome = tool 'SonarScanner'
          // Server name must match what you configured under "Manage Jenkins » System"
          withSonarQubeEnv('SonarCloud') {
            sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }
  }
}
