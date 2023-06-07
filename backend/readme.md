> npm install -g nodemon # nodemon은 global scope로 설치

- babel -
  @babel/runtime # runtime 종속성, -dev 옵션 X
  babel-plugin-transform-remove-console # build 할 때 console 제거, build:dev는 console 유지

> npm run dev # develop용 실행 스크립트
> npm run build # dst folder에 배포 버전으로 ES5 문법으로 변환하여 생성
> npm run build:dev # dst folder에 개발 버전으로 ES5 문법으로 변환하여 생성
> npm run start # 배포 버전으로 transpile된 dst 프로젝트 실행
> npm run start:dev # 개발 버전으로 transpile된 dst 프로젝트 실행

> routers/\_routers.js에 필요한 함수를 추가하면 server.js에서 등록함
> chrome://inspect/#devices 페이지에서 해당 Target의 inspect click → chrome console로 출력
