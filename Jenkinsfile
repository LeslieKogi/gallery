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
                script {
                    sh 'curl -X POST https://api.render.com/deploy/srv-d37bffpr0fns739cjil0?key=BgsGqeJqG9E'

                    
                    slackSend (
                        channel: '#leslie_ip1',   
                        message: "Deploy Successful! \nBuild ID: ${env.BUILD_ID} \nView site: https://gallery-ed60.onrender.com/ \nJenkins job: ${env.BUILD_URL}"
                    )
                }
            }
         }
            stage('Test') {
            steps {
                script {
                    try {
                        sh 'npm test'
                    } catch (err) {
                        
                        mail to: 'lesliekogi@gmail.com',
                             subject: "Jenkins: Tests Failed in ${env.JOB_NAME}",
                             body: "The tests failed in build ${env.BUILD_NUMBER}. Check the console output at ${env.BUILD_URL}"
                        
                        throw err
                    }
                }
            }
        }
    }
}