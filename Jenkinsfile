pipeline {
    agent any

    stages {
            stage('Code Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[url: 'https://github.com/EdgarLemus/KarateRest.git']]
                ])
            }
        }
        stage('Plan') {
            steps {
                echo 'En esta fase se recopilan los requisitos del producto de los clientes y las partes interesadas. El equipo de desarrollo planifica la hoja de ruta, las tecnolog�as y las caracter�sticas del proyecto. Se utilizan herramientas como Jira para la gesti�n del proyecto y el seguimiento del progreso...'
            }
        }
        stage('Codificaci�n') {
            steps {
                echo 'Aqu�, los desarrolladores empiezan a escribir c�digo bas�ndose en los planes y requisitos. Siguen buenas pr�cticas de codificaci�n y utilizan herramientas de automatizaci�n para acelerar la entrega. Se utiliza un sistema de control de versiones como Git...'
            }
        }
        stage('Construcci�n') {
            steps {
                echo 'Una vez que los bloques de c�digo individuales est�n listos, se integran en la base de c�digo principal. Cualquier problema se soluciona antes de la integraci�n. Para la automatizaci�n se utilizan herramientas como Jenkins...'
            }
        }
        stage('Pruebas') {
            steps {
            echo 'Se realizan pruebas manuales y automatizadas para identificar errores y problemas. Esto asegura la calidad del software antes de su publicaci�n. Se utilizan herramientas como Selenium y JUnit.'
                bat 'gradle test --tests *KarateRunner'
            }
        }
        stage('Lanzamiento') {
            steps {
                echo 'El software se pone en producci�n si supera todas las pruebas. Se pueden utilizar banderas de caracter�sticas para desplegar gradualmente nuevas caracter�sticas.....'
            }
        }
        stage('Despliegue') {
	        steps {
	        echo 'La versi�n se despliega en el entorno de producci�n. Para la gesti�n de la configuraci�n se utilizan herramientas como Ansible, Puppet y Chef.'
	        }
        }
        stage('Funcionamiento') {
	        steps {
	        echo 'El software ya est� operativo y accesible para los usuarios. Se recogen los comentarios de los clientes para identificar �reas de mejora.'
	        }
        }
        stage('Monitorizaci�n') {
	        steps {
	        echo 'Todo el proceso de DevOps y el software se supervisan mediante herramientas como Nagios, Splunk y New Relic. Se informa de cualquier problema para solucionarlo en la siguiente iteraci�n.'
	        }
        }
    }
}