pipeline{
    agent any
    tools{
        nodejs "node18"
    }
    triggers{
        githubPush()
    }
    stages{
        stage('Checkout'){
            steps{
                git branch: 'master', url: 'https://github.com/LeslieKogi/gallery.git'
            }
        }
        stage ('Install dependancies'){
           steps{
               sh 'npm install'
           }
        }
         stage('Deploy to Render') {
            steps {
                sh 'curl -X POST https://api.render.com/deploy/srv-d37bffpr0fns739cjil0?key=BgsGqeJqG9E'
            }
         }
    }
}