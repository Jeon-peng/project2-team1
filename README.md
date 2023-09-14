# <img src="./strayanimal-app/strayanimal/public/logo512.png" width="45" height="45"> Animal Stat-us Tracker

## **유기동물 조회 API를 이용한 보호소 및 계류상태 분석**

- 프로젝트 기간 : 1차: 2023.05.29 ~ 2023.06.02 / 2차: 2023.06.26 ~ 2023.06.30

#### 1차

- 유기된 동물의 데이터를 주기적 크롤링, ETL를 통하여 생성한 데이터를 GoogleCloudStorage, GoogleBigquery를 활용하여 적재
- Apache Superset를 활용한 대시보드 제작
- Firebase를 통한 인포그래픽 제작

#### 2차

- 유기된 동물의 데이터를 Airflow를 이용한 주기적 크롤링, ETL를 통해 GoogleCloudStorage 및 GoogleBigquery, Firestore에 적재 및 관리
- Github Action을 통한 Python formatting 및 Style check, 서버 deployment 진행
- Firebase 인포그래픽 웹사이트 Jest 테스트 및 기능 업데이트

## 팀 구성

|    | 강다혜 | 박태준 | 전성현 | 최민수 |
| :---: | :---: | :---: | :---: | :---: |
|GitHub| [@kangdaia](https://github.com/kangdaia) | [@ih-tjpark](https://github.com/ih-tjpark) | [@Jeon-peng](https://github.com/Jeon-peng) | [@usiohc](https://github.com/usiohc) |

## 팀원 별 기여도

### 2차 프로젝트
<img width="568" alt="image" src="https://github.com/Jeon-peng/project2-team1/assets/70497132/1c1fc5bc-7cba-467f-a88b-0f2cfc321f32">

### 3차 프로젝트
<img width="588" alt="image" src="https://github.com/Jeon-peng/project2-team1/assets/70497132/59132134-c85c-4cf2-bd5d-91840114f935">


## Tech

| Field | Stack |
|:---:|:---|
| Design | <img src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6">  |
| FrameWork | <img src = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) <img src = "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">  <img src = "https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white">  ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) |
| 호스팅 & GA | <img src = "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"> |
| 데이터 관리 | Google Cloud Storage, Bigquery, FireStore |
| Dashboard | Superset |
| Data Pipelines | ![Apache Airflow](https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white) |
| CI/CD | ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) |
| Testing | ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) |
| Cloud | <img src = "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"> |
| Tools | ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)  ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)  ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) |

## 데이터 흐름

![image](https://github.com/data-dev-course/project2-team1/assets/70497132/7f18790d-85db-4f48-b3dc-0b74cfdd7546)

## 아키텍처

<img width="1515" alt="image" src="https://github.com/data-dev-course/project2-team1/assets/70497132/6ae128ce-d30f-47fa-a34e-3cbb446331b2">

## 프로젝트 진행과정

### 1. 인포그래픽을 위한 웹 호스팅 ( [link](https://strayanimal.web.app/) )

![screencapture-strayanimal-web-app-2023-06-03-14_04_00](https://github.com/data-dev-course/project2-team1/assets/70497132/3cb2e09c-a052-4df5-b540-bd3e8ac5674c)

### 2. 데이터 상태 분석을 위한 대시보드 구축

1. 유기동물보호소 현황 대시보드
![유기동물보호소-분석-2023-06-02T13-14-03 747Z](https://github.com/data-dev-course/project2-team1/assets/70497132/6012efe2-6428-4108-b209-80ee4a30cc0d)
2. 유기동물 보호종료 현황 대시보드
![유기동물-보호종료-상태-2023-06-02T13-11-50 958Z](https://github.com/data-dev-course/project2-team1/assets/70497132/ea85cf23-01b6-4f09-81bc-ca21e363aa26)

### 3. Airflow를 활용한 Pipelines 구축

### 4. Github Action CI/CD 구성

- Dags.py 파일의 스타일 체크 및 서버 내 배포 자동화

- Jest 및 테스팅 라이브러리를 활용한 React App Front 테스트 및 웹사이트 Build & Deploy

## 시연

### 1.인포그래픽을 위한 웹 호스팅

<https://github.com/data-dev-course/project2-team1/assets/70497132/513aaee9-5325-4d1a-9842-5529af6ca8fc>

### 2. 데이터 상태 분석을 위한 대시보드 구축

<https://github.com/data-dev-course/project2-team1/assets/70497132/6a756bbd-91d0-448a-b116-fdfd3722e3b4>
