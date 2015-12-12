Sample test nodejs app so I can test docker tooling I am working on.

#### How to build

    docker build -t node-test-app .

#### How to run

    docker run -d -P --name node-test-app node-test-app
