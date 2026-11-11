// posts.js - 자동 생성
const POSTS = [
  {
    id: 1,
    slug: "heartbleed-ssl-attack-lab-1",
    title: "(1) SSL 취약점을 이용한 공격, Heartbleed(하트블리드) 실습",
    summary:
      "Open SSL 이란? Open SSL을 다루기 전에 먼저 SSL을 알아보자. SSl 이란, Secure Socket Layer로 월드 와이드 웹 브라우저와 웹 서버 간에 데이터를 안",
    category: "Security",
    tags: [],
    date: "2021-04-25",
    thumb:
      "posts/heartbleed-ssl-attack-lab-1/images/image_1.jpg",
  },
  {
    id: 2,
    slug: "drive-by-download-attack",
    title: "(1) 시스템보안🔒 Drive by download :: 드라이브 바이 다운로드 공격",
    summary:
      "📃 전체 시나리오 (1) 희생자가 해커의 웹 사이트에 접속하면, '드라이브 바이 다운로드' 공격에 의해서 랜썸웨어가 다운 및 실행된다. (2) 랜썸웨어는 희생자의 컴퓨터의 파일들을 암호화하고 암호화할 때 사용한 키를",
    category: "Security",
    tags: [],
    date: "2021-04-25",
    thumb:
      "posts/drive-by-download-attack/images/image_1.jpg",
  },
  {
    id: 3,
    slug: "heartbleed-ssl-attack-lab-2-session-hijacking",
    title:
      "(2) SSL 취약점을 이용한 공격, Heartbleed(하트블리드) 실습 / 웹 세션 하이재킹",
    summary:
      "SSL 취약점을 이용한 공격, Heart bleed(하트블리드) 실습 웹 세션 하이재킹 (1) SSL 취약점을 이용한 공격, Heart bleeds(하트블리드) 실습 Open SSL 이란?Open SSL을 다",
    category: "Security",
    tags: [],
    date: "2021-04-25",
    thumb:
      "posts/heartbleed-ssl-attack-lab-2-session-hijacking/images/image_1.jpg",
  },
  {
    id: 4,
    slug: "ransomware-lab",
    title: "(2) 시스템보안🔒 랜섬웨어 실습",
    summary:
      "[ 이전 글 ] 과 이어지는 랜섬웨어 실습 입니다. (1) 시스템보안🔒 Drive by download :: 드라이브 바이 다운로드 공격 # 전체 시나리오(1) 희생자가 해커의 웹 사이트에 접속하면, '드라이브 바이",
    category: "Security",
    tags: [],
    date: "2021-04-25",
    thumb: "posts/ransomware-lab/images/image_1.jpg",
  },
  {
    id: 5,
    slug: "active-directory-ldap",
    title: "AD, LDAP 이란?",
    summary:
      "업무 환경 세팅 중 모르는 단어가 있어서 얕게 알아본 것을 정리합니다. 자세한 내용은 참고 링크를 통해 확인해 주세요^^ 1. AD (Active Directory)란? AD는 마이크로소프트에서 만든 디렉토리 서",
    category: "Network",
    tags: [],
    date: "2022-12-10",
    thumb: "posts/active-directory-ldap/images/image_1.jpg",
  },
  {
    id: 6,
    slug: "aws-api-gateway-deploy",
    title: "AWS :: API GATEWAY (API 배포)",
    summary:
      "[ Amazon Web Services ] AWS API 게이트웨이 서버리스 아키텍처 (AWS Lambda, AWS API Gateway ✅) 저번 포스팅 에서는 aws의 서버리스 아키텍쳐 람다(Lambd",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-14",
    thumb: "posts/aws-api-gateway-deploy/images/image_1.jpg",
  },
  {
    id: 7,
    slug: "aws-api-gateway-get-ajax-cors",
    title: "AWS :: API GATEWAY - GET 방식(Ajax, CORS 정책)",
    summary:
      "Ajax AJAX는 Javascript Library 중 하나이며, Asynchronous Javascript And Xml의 약자. 브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-14",
    thumb:
      "posts/aws-api-gateway-get-ajax-cors/images/image_1.jpg",
  },
  {
    id: 8,
    slug: "aws-api-gateway-post-1",
    title: "AWS :: API GATEWAY - POST",
    summary:
      "POST [API Gateway 함수 생성] Post 람다 함수 생성 / 에서 [작업] [리소스 생성] insert 리소스 생성 우클릭해서 POST 생성 Post 람다 함수 지정 확인 GET",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-14",
    thumb: "posts/aws-api-gateway-post-1/images/image_1.jpg",
  },
  {
    id: 9,
    slug: "aws-api-gateway-post-2",
    title: "AWS :: API GATEWAY - POST",
    summary:
      "[ Amazon Web Services ] API GATEWAY + Lambda + RDS 연동 0. DB 생성 연동할 DB 생성하고 접속. 꼭 RDS 아니더라도 상관 없음~! mysql - u admin",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-15",
    thumb: "posts/aws-api-gateway-post-2/images/image_1.jpg",
  },
  {
    id: 10,
    slug: "aws-load-balancing",
    title: "AWS :: AWS 로드밸런싱",
    summary:
      "[ Amazon Web Services ] AWS 로드밸런싱 1. 로드밸런싱에 등록할 인스턴스 2개 생성 이미지로 인스턴스 2개 만들어주자. 인스턴스 생성 시 가용영역 a, c 로 둘을 다르게 해줘야한다.",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-13",
    thumb: "posts/aws-load-balancing/images/image_1.jpg",
  },
  {
    id: 11,
    slug: "aws-ebs-elastic-block-storage",
    title: "AWS :: AWS 스토리지 :: EBS (Elastic Block Storage)",
    summary:
      "스토리지 관련 클라우드 서비스 - Glacier 저비용 데이터 보관 및 백업 서비스. 자주 사용되지 않는 데이터를 보관 및 백업하는데 유용한 서비스 - S3 (Simple Storage Service) 객체 스토",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-11",
    thumb:
      "posts/aws-ebs-elastic-block-storage/images/image_1.jpg",
  },
  {
    id: 12,
    slug: "aws-s3-bucket",
    title:
      "AWS :: AWS 스토리지 S3 (Simple Storage Service) :: 버킷이란, 버킷 생성하기",
    summary:
      "[ Amazon Simple Storage Service ] S3 : 버킷 생성 스토리지 관련 클라우드 서비스 - Glacier 저비용 데이터 보관 및 백업 서비스. 자주 사용되지 않는 데이터를 보관 및 백업하는데",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-11",
    thumb:
      "posts/aws-s3-bucket/images/image_1.jpg",
  },
  {
    id: 13,
    slug: "aws-auto-scaling",
    title: "AWS :: AWS 오토스케일링",
    summary:
      "[ Amazon Web Services ] AWS 오토스케일링 시작하기 전에 우선, 인스턴스가 하나도 없는 상태에서 시작해야한다. 혹시 2개가 있는 상태에서 오토스케일링 인스턴스 2개 등록시켜 생성하면, 기존의",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-13",
    thumb: "posts/aws-auto-scaling/images/image_1.jpg",
  },
  {
    id: 14,
    slug: "aws-ami-spring-boot-deploy-tomcat-mysql",
    title:
      "AWS :: AWS 이미지 생성 (스프링부트 프로젝트 배포, Ubuntu에 tomcat 설치, Ubuntu에 mySQL 설치)",
    summary:
      "[ Amazon Web Services ] AWS 이미지 생성 스프링부트 배포(톰캣, DB 연동) 전체 구조 목표 : AWS 인스턴스에 개인 웹 사이트 스프링부트 프로젝트를 올리고, 해당 톰캣 인스턴스로 이미지를 생",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-13",
    thumb:
      "posts/aws-ami-spring-boot-deploy-tomcat-mysql/images/image_1.jpg",
  },
  {
    id: 15,
    slug: "aws-region-availability-zone-vpc",
    title:
      "AWS :: AWS란? AWS의 리전과 가용 영역, AWS의 네트워크(VPC, 서브넷, 인스턴스 생성)",
    summary:
      "[ Amazon Web Services ] AWS란? AWS의 리전과 가용 영역, AWS의 네트워크 (VPC, 서브넷, 인스턴스 생성) 1. AWS란? Amazon Web Service, 아마존에서 제공하는 각종",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-10",
    thumb:
      "posts/aws-region-availability-zone-vpc/images/image_1.jpg",
  },
  {
    id: 16,
    slug: "aws-compute-services",
    title: "AWS :: AWS의 컴퓨팅 서비스",
    summary:
      "[ Amazon Web Services ] AWS 의 컴퓨팅 서비스 (1) EC2 서비스란? Amazon Elastic Compute Cloud(Amazon EC2)는 AWS 클라우드에서 확장식 컴퓨팅을 제공한다",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-10",
    thumb: "posts/aws-compute-services/images/image_1.jpg",
  },
  {
    id: 17,
    slug: "aws-cloudformation",
    title: "AWS :: CloudFormation",
    summary:
      "[ Amazon Web Services ] AWS CloudFormation -1- AWS CloudFormation 서비스에 대해 알아보자. 🧞‍♂️ CloudFormation 이란? CloudFor",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-15",
    thumb: "posts/aws-cloudformation/images/image_1.jpg",
  },
  {
    id: 18,
    slug: "aws-cloudformation-autoscaling-group",
    title:
      "AWS :: CloudFormation Autoscaling Group 생성(CloudFormation 오토스케일링 생성 예제)",
    summary:
      "[ Amazon Web Services ] AWS CloudFormation -3- auto.yml 파일 Description : A sample template Resources : MyTargetG",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-16",
    thumb:
      "posts/aws-cloudformation-autoscaling-group/images/image_1.jpg",
  },
  {
    id: 19,
    slug: "aws-cloudformation-launch-template",
    title: "AWS :: CloudFormation 시작템플릿(LaunchTemplate)생성",
    summary:
      "[ Amazon Web Services ] AWS CloudFormation -2- 저번시간에 이어, AWS CloudFormation 실습을 해보자. 이번 포스팅에서는 ' 시작템플릿' 을 생성해본다. A",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-16",
    thumb:
      "posts/aws-cloudformation-launch-template/images/image_1.jpg",
  },
  {
    id: 20,
    slug: "aws-cloudfront-cdn",
    title: "AWS :: CloudFront (CDN 서비스)",
    summary:
      "[ Amazon Web Services ] AWS CloudFront (CDN 서비스, Cloudfront s3 연동 ) (1) CloudFront란? CloudFront는 AWS에서 제공하는 CDN 서비스.",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-15",
    thumb: "posts/aws-cloudfront-cdn/images/image_1.jpg",
  },
  {
    id: 21,
    slug: "aws-lambda-rds",
    title: "AWS ::  Lambda + RDS 연동(데이터 조회, 삽입)",
    summary:
      "[ Amazon Web Services ] Lambda + RDS 연동 1. RDS 생성 - admin - qwer1234 - 초기 DB : minji 2. 우선 파이참에서 먼저 해본다. Pycha",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-14",
    thumb:
      "posts/aws-lambda-rds/images/image_1.jpg",
  },
  {
    id: 22,
    slug: "aws-python-boto3",
    title: "AWS :: Python 코드로 'AWS' 이용하기",
    summary:
      "Python 코드로 'AWS' 이용하기 https://boto3.amazonaws.com/v1/documentation/api/latest/index.html [내 보안 자격증명] 탭에 들어간다. 만약 키가",
    category: "Backend/Python",
    tags: [],
    date: "2021-06-22",
    thumb:
      "posts/aws-python-boto3/images/image_1.jpg",
  },
  {
    id: 23,
    slug: "aws-rds-ec2-database-server",
    title: "AWS :: RDS 데이터베이스 EC2 서버 구축",
    summary:
      "EC2란? AWS EC2에 대하여 Elastic cloud com puting. Vmware의 가상머신을 아십니까? 대충 우리가 가상머신을 만들 때 선택했던 사항들을 Aws의 ec2는 인터넷으로 사용자들이 입력하",
    category: "Cloud/AWS",
    tags: [],
    date: "2020-09-21",
    thumb:
      "posts/aws-rds-ec2-database-server/images/image_1.jpg",
  },
  {
    id: 25,
    slug: "aws-rds-database-server",
    title: "AWS :: RDS 데이터베이스 서버 구축",
    summary:
      "AWS 에 DB서버 생성하기 뭐든 하기전에 오른쪽 위에 지역이 서울인지 확인 !- 시작합니다. 데이터 베이스 생성 저는 MySQL 을 할거예요 t2.micro만 공짜. 프리티어 선택 https://do",
    category: "Cloud/AWS",
    tags: [],
    date: "2020-09-21",
    thumb:
      "posts/aws-rds-database-server/images/image_1.jpg",
  },
  {
    id: 26,
    slug: "aws-rds-create",
    title: "AWS :: RDS 생성",
    summary:
      "[ Amazon Web Services ] RDS 생성 우선 DNS 호스트 이름이 활성화 되었는지 확인한다. 활성화됨 표시가 없다면 설정을 통해 활성화 후 RDS를 생성한다. RDS 생성 mySQL 체",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-13",
    thumb: "posts/aws-rds-create/images/image_1.jpg",
  },
  {
    id: 27,
    slug: "aws-rds-multi-az",
    title: "AWS :: RDS의 이중화 설정",
    summary:
      "[ Amazon Web Services ] RDS 이중화 마스터가 온프레미스 환경 ✅ (디비 서버가 우리 PC에 있을 때) https://docs.aws.amazon.com/ko_kr/AmazonRDS/l",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-13",
    thumb: "posts/aws-rds-multi-az/images/image_1.jpg",
  },
  {
    id: 28,
    slug: "aws-s3-mount-ec2",
    title: "AWS :: S3 EC2에 마운트 사용(AWS EC2 Instance에 S3 mount 하기)",
    summary:
      "[ Amazon Simple Storage Service ] EC2에 S 3 스토리지 마운트 AWS(Amazon) EC2 Instance에 S3 mount 하기 AWS S3를 EC2에 EBS처럼 사용해보자.",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-11",
    thumb:
      "posts/aws-s3-mount-ec2/images/image_1.jpg",
  },
  {
    id: 29,
    slug: "aws-serverless-lambda",
    title: "AWS :: 서버리스 아키텍처, Lambda (Lambda 생성)",
    summary:
      "[ Amazon Web Services ] Lambda 서버리스 아키텍처( AWS Lambda , AWS API Gateway) 💡 서버리스 아키텍처란? 서버리스(Serverless)를 직역하자면, “",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-14",
    thumb:
      "posts/aws-serverless-lambda/images/image_1.jpg",
  },
  {
    id: 30,
    slug: "aws-spring-boot-deploy-slow-tomcat-service",
    title: "📍 AWS 스프링부트 프로젝트 배포 시 느려지는 현상(톰캣 서비스 등록)",
    summary:
      "[ Amazon Web Services ] AWS 스프링부트 프로젝트 배포 시 느려지는 현상 그리고 해결 엄청 느려지는 상황... top 남은 메모리가 별로 없는 상황이었다. 그래서 그렇게 느렸",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-06-17",
    thumb:
      "posts/aws-spring-boot-deploy-slow-tomcat-service/images/image_1.jpg",
  },
  {
    id: 32,
    slug: "chromedriver-download",
    title: "ChromeDriver 다운로드 하는 법 (Chrome 버전 확인)",
    summary:
      "크롤링 프로그램을 만들기 위해서는 ChromeDriver가 필요하다. 그 첫걸음으로 현재 사용 중인 Chrome 브라우저 버전에 맞는 버전의 ChromeDriver 설치해야 하는데ChromeDriver 는 본인의 C",
    category: "DevTools",
    tags: [],
    date: "2024-10-18",
    thumb:
      "posts/chromedriver-download/images/image_1.jpg",
  },
  {
    id: 33,
    slug: "claude-desktop-notion-mcp",
    title:
      "Claude로 노션 자동화하는 법 (Claude Desktop x Notion MCP 연동 가이드)",
    summary:
      "나 자는 동안 AI 일시켜보기. 이거 진짜 되는건지 확인해봤는데 쩐다.. 혁신 그 자체 👏🏻 명령어 한 줄에, 인공지능이 알아서 노션에 페이지 추가하고 내 점심 메뉴 추천해주는 중! 진짜 나 자는 동안",
    category: "AI",
    tags: [],
    date: "2025-07-01",
    thumb:
      "posts/claude-desktop-notion-mcp/images/image_1.jpg",
  },
  {
    id: 34,
    slug: "what-is-docker",
    title: "Docker 도커란 무엇이고, 왜 쓰는지 정리",
    summary:
      "귀여운 고래 로고에 마음을 뺏긴 사람들이 종종 Docker에 대해 물어보시는데요. Docker 자주 들어본 질문 두 가지로는, 도커가 뭐에요? 도커 왜 써요? 이 질문들은 아주 기본적이면서도, 개발자 면접",
    category: "Cloud/Docker",
    tags: [],
    date: "2025-09-10",
    thumb:
      "posts/what-is-docker/images/image_1.jpg",
  },
  {
    id: 35,
    slug: "docker-centos-install-basic-commands",
    title: "[Docker] CentOs 도커 설치, 도커 실행, 중지 등 기본 명령어",
    summary:
      "[Docker] 도커, 컨테이너 Docker, 컨테이너 0) 환경 구성 https://docs.docker.com/engine/install/centos/ Install Docker Engine on CentO",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-05-31",
    thumb:
      "posts/docker-centos-install-basic-commands/images/image_1.jpg",
  },
  {
    id: 36,
    slug: "docker-swarm",
    title: "[Docker] Docker Swarm, 도커 스웜 (로드밸런스)",
    summary:
      "[Docker] Docker Swarm 0) 도커 스웜이란? 컨테이너 오케스트레이션 도구 중의 하나로, 여러 대의 Docker 호스트들을 마치 하나인 것처럼 만들어주는 Orchestration 도구 1) 도커",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-06-03",
    thumb:
      "posts/docker-swarm/images/image_1.jpg",
  },
  {
    id: 37,
    slug: "docker-mount-volume",
    title: "[Docker] Docker mount volume",
    summary:
      "[Docker] 도커 mount volume 일단 볼륨을 쓰는 이유는 컨테이너에서 생성되는 데이터가 컨테이너가 사라져도 남아있게하기 위해서. 방법 1) volume타입 -> 도커 볼륨 이용 방법 2",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-06-04",
    thumb: "posts/docker-mount-volume/images/image_1.jpg",
  },
  {
    id: 38,
    slug: "docker-hub-image-update",
    title: "[Docker] Docker 도커 허브 이미지 업데이트",
    summary:
      "[Docker] 도커 허브 - 이미지 업데이트 1. 이미지 생성 '1. jsp' 파일이 들어있는 커스텀 톰캣 이미지 생성. 파일 내용은 이따가 만들 2.jsp와 구분이 가능하게 ! \"1.0 파일 입니다.\" 이런거",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-06-03",
    thumb:
      "posts/docker-hub-image-update/images/image_1.jpg",
  },
  {
    id: 39,
    slug: "docker-for-mac-install",
    title: "Docker for Mac 맥북에 도커 설치, 컨테이너 생성하고 실행하기",
    summary:
      "목차 1. 도커 다운로드 - 도커 툴박스 vs 데스크탑 2. 도커 데스크탑 버전 설치 3. 버전 확인 4. 컨테이너 생성 및 실행 - 우분투 이미지 설치 - 이미지 목록 확인 - 컨테이너 생성 및 bash 실행 5.",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-02-15",
    thumb:
      "posts/docker-for-mac-install/images/image_1.jpg",
  },
  {
    id: 40,
    slug: "docker-volume",
    title: "[Docker] 도커 볼륨",
    summary:
      "[Docker] 도커 볼륨 1) 컨테이너 레이어 이미지로 컨테이너를 생성하면 이미지는 읽기 전용이 된다. 컨테이너 안에서 활용한 변경정보는 컨테이너 레이어 라는 곳에 기록된다. 예) mysql 의 DB 저장",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-06-02",
    thumb: "posts/docker-volume/images/image_1.jpg",
  },
  {
    id: 41,
    slug: "docker-container-chroot-namespace-cgroup",
    title: "Docker 도커 '컨테이너' chroot, namespace, cgroup",
    summary:
      "도커, 컨테이너란? 도커(Docker) 컨테이너는 사실 새로운 기술이 아닙니다. 그 뿌리는 리눅스 커널이 제공하는 프로세스 격리 기능 에 있습니다. 컨테이너를 이해하기 위해 꼭 알아야 할 세 가지 키워드가 있",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-02-18",
    thumb:
      "posts/docker-container-chroot-namespace-cgroup/images/image_1.jpg",
  },
  {
    id: 42,
    slug: "docker-tomcat-image-with-db-container",
    title:
      "[Docker] 도커 컨테이너 개발 :: DB 컨테이너로부터 값을 가져오는 tomcat '이미지 만들기'",
    summary:
      "[Docker] 도커 컨테이너 개발 Dockerfile # 이미지 만드는 이유 : 컨테이너 생성 . 오케스트레이션을 생각! # 전체 구성 리렉터리안에 아래 3가지 파일이 있어야 한다. dbconn . jsp",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-06-02",
    thumb:
      "posts/docker-tomcat-image-with-db-container/images/image_1.jpg",
  },
  {
    id: 43,
    slug: "docker-run-tomcat",
    title: "[Docker] 도커 '컨테이너 개발' - 도커로 톰캣 실행",
    summary:
      "[Docker] 도커 컨테이너 개발 1) 베이스 이미지 컨테이너를 개발할 때 기본이 되는 이미지를 베이스 이미지라고 한다. 도커 허브에 다양한 베이스 이미지들이 등록되어 있다. 리눅스 배포판 : ubuntu, c",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-05-31",
    thumb:
      "posts/docker-run-tomcat/images/image_1.jpg",
  },
  {
    id: 44,
    slug: "docker-container-network",
    title: "[Docker] 도커 '컨테이너 네트워크'",
    summary:
      "[Docker] Container Network 도커 컨테이너 네트워크 [0] 네트워크 관련 명령어 docker network ls : 네트워크 리스트 출력 docker network inspect : 네트워크",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-05-31",
    thumb:
      "posts/docker-container-network/images/image_1.jpg",
  },
  {
    id: 45,
    slug: "docker-vs-virtual-machine",
    title: "🐳 Docker, 도커란? (가상머신 vs 도커 컨테이너)",
    summary:
      "도커란? 도커는 가상 머신이 아니다 ! 가상 머신은 하드웨어를 소프트웨어로 구현합니다. VMWare 같은 도구를 사용해보셨다면 아시겠지만, 가상 머신을 생성할 때 CPU나 램도 설정해야하고, 설정을 잘 살펴보",
    category: "Cloud/Docker",
    tags: [],
    date: "2021-02-15",
    thumb:
      "posts/docker-vs-virtual-machine/images/image_1.jpg",
  },
  {
    id: 47,
    slug: "chatgpt-hidden-space-u202f",
    title: "ChatGPT 글에 섞인 보이지 않는 공백(U+202F) 확인하고 제거하기",
    summary:
      "ChatGPT가 쓴 글에 섞여 나오던 U+202F(Narrow No-Break Space)가 어떤 문자인지, 온라인 도구와 JavaScript·Python 코드로 찾는 방법, 에디터와 코드로 지우는 방법을 정리했어요.",
    category: "AI",
    tags: [],
    date: "2025-04-24",
    thumb:
      "posts/chatgpt-hidden-space-u202f/images/image_3.jpg",
  },
  {
    id: 49,
    slug: "html-signup-form",
    title: "HTML :: html 회원가입 폼 만들기",
    summary:
      'html로만 회원가입 폼 만들기! 스크립트 입히기 전 입니당 < html > < head > < meta charset = "utf-8" > < title > 회원가입 폼 < / title > < / head > <',
    category: "Frontend/Web",
    tags: [],
    date: "2020-07-28",
    thumb: "posts/html-signup-form/images/image_1.jpg",
  },
  {
    id: 50,
    slug: "html-meta-tag",
    title: "HTML :: meta 태그, meta 태그 쓰는 곳",
    summary:
      "meta 태그 정의 및 특징 <meta> 태그는 해당 문서에 대한 정보인 메타데이터(metadata)를 정의할 때 사용 합니다. <meta> 요소는..",
    category: "Frontend/Web",
    tags: [],
    date: "2020-08-18",
    thumb: null,
  },
  {
    id: 51,
    slug: "html-table",
    title: "HTML :: table, table-border 속성 (솔직히 이것만 알면 html끝)",
    summary:
      "자바스크립트 하기 전 필수 코스 HTML #a link 링크를 추가할 때 사용하는 <a> 태그. 링크를 만들 때는 2가지 정보가 필요하다. 이동하려는 실제 웹페이지 주소(=URL) 와 내가 만든 웹페이지에서 보여지는",
    category: "Frontend/Web",
    tags: [],
    date: "2020-07-27",
    thumb:
      "posts/html-table/images/image_1.jpg",
  },
  {
    id: 52,
    slug: "iot-indoor-navigation-project",
    title: "IOT 프로젝트 '실내 길찾기'",
    summary:
      "Summary 잠실역, 스타필드, 고속미널 지하상가 등 실내에서 길을 잃는 경우가 많다. 약속 시간은 됐는데, 복잡한 실내 공간 안에서 어디가 어딘지 모르겠고.. 네이버 길찾기는 애매한 실내 공간에서 길을 알려주지",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-10-02",
    thumb: "posts/iot-indoor-navigation-project/images/image_1.jpg",
  },
  {
    id: 53,
    slug: "java-annotation",
    title: "JAVA Annotation",
    summary:
      "Annotation @ : annotation 클래스 또는 메서드 또는 변수 앞에 @Override 같은 @ 표시를 많이 봤을 것이다. 어노테이션이란 본래 주석이란 뜻으로, 인터페이스를 기반으로 한 문법이다. 주",
    category: "Backend/Java",
    tags: [],
    date: "2021-04-08",
    thumb: "posts/java-annotation/images/image_1.jpg",
  },
  {
    id: 54,
    slug: "java-mysql-jdbc",
    title: "JAVA :: JAVA MySQL 연동 'JDBC' (가장 친절하게 설명된 글)",
    summary:
      "0. JDBC 란? J DBC란, 자바에서 데이터베이스를 접속할 수 있도록 해주는 자바 API 이다 ! JDBC를 사용 이유 : 다양하게 존재하는 데이터베이스의 독립된 API를 지원 받기 위해. JDBC의 목",
    category: "Backend/Java",
    tags: [],
    date: "2021-04-07",
    thumb:
      "posts/java-mysql-jdbc/images/image_1.jpg",
  },
  {
    id: 56,
    slug: "java-jdbc-login-session",
    title: "JAVA JDBC 로그인 기능 구현 '세션'",
    summary:
      "🔨 세션 코드 작성 - first.html : 세션을 저장하는 링크 구현해둔 페이지 - check.jsp : session.getAttribute()로 세션을 확인하는 JSP - set.jsp : session.se",
    category: "Backend/Java",
    tags: [],
    date: "2021-04-08",
    thumb:
      "posts/java-jdbc-login-session/images/image_1.jpg",
  },
  {
    id: 57,
    slug: "java-optional",
    title: "[JAVA] Optional 클래스",
    summary:
      "Spring Data JPA를 사용하며 CrudRepository의 findById 메서드 리턴 타입인 Optional 클래스를 살펴보았다. Optional은 Java 8에 추가된 새로운 API이며 'null일 수도",
    category: "Backend/Java",
    tags: [],
    date: "2022-10-06",
    thumb: "posts/java-optional/images/image_1.jpg",
  },
  {
    id: 58,
    slug: "java-multitasking-multithreading",
    title: "JAVA 기초 | 멀티태스킹, 멀티스레딩 (Process, Thread)",
    summary:
      "0. 프로세스, 스레드 Process and thread - 프로세스 :Process 란? 사전적 의미로 실행 중인 하나의 어플리케이션, 컴퓨터에서 연속적으로 실행되고 있는 컴퓨터 프로그램이다. 예를 들어, 크롬",
    category: "Backend/Java",
    tags: [],
    date: "2020-04-12",
    thumb:
      "posts/java-multitasking-multithreading/images/image_1.jpg",
  },
  {
    id: 59,
    slug: "java-thread-join-synchronized",
    title: "JAVA 기초 | 자바 기초 스레드 thread, join, Synchronized",
    summary:
      "0. Thread 란? 어떠한 프로그램내에서, 특히 프로세스 내에서 실행되는 흐름의 단위. 쓰레드를 알기 위해서는, 우선 프로세스Process에 대해 알아야 한다. Java, C/C++ 등 프로그래밍 언어로 소스",
    category: "Backend/Java",
    tags: [],
    date: "2020-03-23",
    thumb:
      "posts/java-thread-join-synchronized/images/image_1.jpg",
  },
  {
    id: 60,
    slug: "java-solid-ocp",
    title: "JAVA 디자인 패턴 | SOLID 원칙 :: OCP 개방 폐쇄 원칙",
    summary:
      "0) 객체지향 설계 5대 원칙 SOLID 객체 지향 프로그래밍 및 설계에 5가지 기본 원칙이 있다. - S RP (Single Responsibility Principle) : 단일 책임 원칙 - O CP (Op",
    category: "Backend/Java",
    tags: [],
    date: "2020-05-11",
    thumb:
      "posts/java-solid-ocp/images/image_1.jpg",
  },
  {
    id: 61,
    slug: "java-state-pattern",
    title: "JAVA 디자인패턴 | 스테이트 패턴",
    summary:
      "JAVA 디자인패턴 [ 스테이트 패턴 ] [ Point ] 1. UML 상태 머신 이란? 2. 상태를 캡슐화 로 처리하는 방법 3. 스테이트 패턴을 통한 상태 변화 의 처리 방법 4. 새로운 상태를 추가 할",
    category: "Backend/Java",
    tags: [],
    date: "2020-05-14",
    thumb:
      "posts/java-state-pattern/images/image_1.jpg",
  },
  {
    id: 62,
    slug: "java-singleton-vs-static-class",
    title:
      "JAVA 디자인패턴 | 싱글톤 패턴(Singleton)과 정적 클래스(Static) 차이. 다중 스레드, 생성자",
    summary:
      "자바 디자인 패턴 두번째 포스팅 - 싱글톤 패턴이란 어떤 것인지 - 싱글톤 패턴은 어떤 상황에 쓰는 것인지 -싱글톤 패턴과 정적 클래스(Static)의 차이 0. 싱글톤 패턴(Singleton) 이란? 최소 한번",
    category: "Backend/Java",
    tags: [],
    date: "2020-06-17",
    thumb:
      "posts/java-singleton-vs-static-class/images/image_1.jpg",
  },
  {
    id: 63,
    slug: "java-singleton-pattern",
    title: "JAVA 디자인패턴 | 싱글톤 패턴 Singleton",
    summary:
      "a. 프린터 관리자는 단 하나만 존재. b. 프린터 관리자는 3대의 프린터를 관리. c. 프린터 관리자는 이용가능한 프린터를 사용자에게 할당 d. 프린터 이용이 가능한지 확인하려면 프린터 클래스의 isAvailabl",
    category: "Backend/Java",
    tags: [],
    date: "2020-06-17",
    thumb:
      "posts/java-singleton-pattern/images/image_1.jpg",
  },
  {
    id: 64,
    slug: "java-singleton-pattern-example",
    title: "JAVA 디자인패턴 | 싱글톤 패턴 Singleton 예제 코드1",
    summary:
      "0. 싱글턴 패턴을 적용해 아래 요구조건을 충족하는 코드를 작성해보자! - 사용자는 티켓 발행기를 이용해 티켓을 발행 받을 수 있음. - 티켓 발행기는 딱 하나만 존재. - 발행된 티켓은 고유의 시리얼 번호가 있음.",
    category: "Backend/Java",
    tags: [],
    date: "2020-05-25",
    thumb:
      "posts/java-singleton-pattern-example/images/image_1.jpg",
  },
  {
    id: 65,
    slug: "java-design-pattern-warmup",
    title: "JAVA 디자인패턴 워밍업",
    summary:
      "음원을 구매하는 웹사이트의 장바구니 할인율을 고려해, 장바구니에 담긴 음원의 총가격을 계산하는 기능 을 구현해 보자. 각 음원은 할인모드에 따라 할인율이 다르게 적용된다. 현재 OnSale 모드와 Today Ev",
    category: "Backend/Java",
    tags: [],
    date: "2020-04-02",
    thumb: "posts/java-design-pattern-warmup/images/image_1.jpg",
  },
  {
    id: 66,
    slug: "java-template-method-pattern",
    title: "JAVA 디자인패턴 | 템플릿 메서드 패턴",
    summary:
      "템플릿 메서드 패턴 ! - 코드 중복 최소화 - 중간에 다른 부분을 Primitive메서드 혹은 hook메서드 라고 한다. 이 부분을 추상 메서드로 구현한다. package Template ; public cla",
    category: "Backend/Java",
    tags: [],
    date: "2020-06-18",
    thumb: null,
  },
  {
    id: 67,
    slug: "java-strategy-pattern-interface",
    title: "JAVA 스트레티지 패턴 | 인터페이스, 상속, 다중 상속",
    summary:
      "아래의 코드를 실제로 젤다가 움직이게 스트래티지 패턴으로 변경 하기! 라는 과제를 하며 인터페이스와 상속, 다중 상속과 인터페이스에 대해 공부해 보았다. public class Client { public",
    category: "Backend/Java",
    tags: [],
    date: "2020-05-02",
    thumb: null,
  },
  {
    id: 68,
    slug: "java-alphabet-to-array-index",
    title: "[JAVA] 자바로 알파벳을 배열 인덱스로 변환하기 (toCharArray)",
    summary:
      "자바로 알파벳을 배열 인덱스로 변환하기 알파벳을 배열의 인덱스로 변환한다는 말은 다음과 같다. 알파벳은 총 26개의 문자가 존재한다. 이를 배열로 바꾼다면 a 는 0 번째 인덱스로 b 는 1번째 인덱스로 ..",
    category: "Backend/Java",
    tags: [],
    date: "2022-10-18",
    thumb:
      "posts/java-alphabet-to-array-index/images/image_1.jpg",
  },
  {
    id: 69,
    slug: "jsp-vs-servlet",
    title: "[ JSP와 Servlet ] 개념, 실행원리, 비교, 차이",
    summary:
      "JSP와 Servlet 개념, 실행원리, 비교, 차이 1. JSP 와 Servlet JSP = Html 안에, JAVA Servlet = JAVA 안에, Html 하나는 HTML 안에 JAVA, 또 하나는 JAV",
    category: "Backend/Java",
    tags: [],
    date: "2021-04-12",
    thumb:
      "posts/jsp-vs-servlet/images/image_1.jpg",
  },
  {
    id: 70,
    slug: "java-inputstream-outputstream-conversion",
    title: "Java InputStream OutputStream 변환 방법 3가지",
    summary:
      "Java InputStream OutputStream 변환 방법 Java 8 에서 void copy ( InputStream source , OutputStream target ) throws IOExceptio",
    category: "Backend/Java",
    tags: [],
    date: "2023-06-28",
    thumb:
      "posts/java-inputstream-outputstream-conversion/images/image_1.jpg",
  },
  {
    id: 71,
    slug: "java-list-vs-array",
    title: "Java 'List' 배열과의 차이점",
    summary:
      "공간이 자동으로 늘어나고 줄어든다는 점. import java . util . ArrayList ; public class Ex01 { public static void main ( String[] args ) {",
    category: "Backend/Java",
    tags: [],
    date: "2021-04-01",
    thumb: null,
  },
  {
    id: 72,
    slug: "java-varargs",
    title: "[Java] 가변인자(varargs, 쩜쩜쩜) 사용법 (매개변수 동적 사용)",
    summary:
      "1. 가변인자란? 가변인자란, 하나의 함수에서 매개변수를 동적으로 받을수 있는 방법, 메서드의 매개변수 개수를 동적으로 지정해주는 방법이다. '타입… 변수명' 형식으로 선언할 수 있고, 예시로 PrintStream",
    category: "Backend/Java",
    tags: [],
    date: "2022-11-14",
    thumb:
      "posts/java-varargs/images/image_1.jpg",
  },
  {
    id: 73,
    slug: "java-immutable-object-final",
    title: "[Java] 불변객체란? (불변 객체 및 final을 사용해야 하는 이유)",
    summary:
      "'불변객체'란? Immutable Object 1. 불변객체란? 객체 생성 이후 내부의 상태가 변하지 않는 객체 입니다. 불변 객체는 read-only 메소드만을 제공하며, 객체의 내부 상태를 제공하는 메소드를",
    category: "Backend/Java",
    tags: [],
    date: "2022-11-28",
    thumb:
      "posts/java-immutable-object-final/images/image_1.jpg",
  },
  {
    id: 74,
    slug: "java-scanner-multiplication-table",
    title: "Java 자바 기초 | Scanner, int nextInt 으로 원하는 단의 구구단 코드",
    summary:
      "Scanner 클래스 - 읽은 바이트를 문자, 정수, 실수, 불린, 문자열 등 다양한 타입으로 변환하여 리턴 하는 클래스 - java.util.Scanner - Scanner는 입력되는 키 값을 공백으로 구분되는 토",
    category: "Backend/Java",
    tags: [],
    date: "2020-07-06",
    thumb:
      "posts/java-scanner-multiplication-table/images/image_1.jpg",
  },
  {
    id: 75,
    slug: "java-multiplication-table-try-catch",
    title: "Java 자바 기초 | 원하는 단의 구구단 코드, 자바 try-catch문",
    summary:
      "문자열이 입력되면 try-catch문을 이용해서 InputMismatchException 에 '다시 입력하시오'라는 메시지 출력 하기. * 방금 for(;;) 대신 while (true) 라고 바꾸는 것이 더 예",
    category: "Backend/Java",
    tags: [],
    date: "2020-07-07",
    thumb:
      "posts/java-multiplication-table-try-catch/images/image_1.jpg",
  },
  {
    id: 77,
    slug: "java-singleton-interview",
    title:
      "[Java/개발자면접] 디자인패턴 싱글톤 (싱글톤 구현방식, 주의점, 단점)",
    summary:
      "싱글턴이란? 싱글톤(Singleton) 패턴은 어떤 클래스의 인스턴스가 오직 하나임을 보장하며, 이 인스턴스에 접근할 수 있는 전역적인 접촉점을 제공하는 패턴입니다. 즉, 프로그램 시작부터 종료 시까지 어떤 클래스의",
    category: "Backend/Java",
    tags: [],
    date: "2022-11-28",
    thumb:
      "posts/java-singleton-interview/images/image_1.jpg",
  },
  {
    id: 79,
    slug: "kubernetes-cronjob-timezone-kst",
    title: "Kubernetes Cron Expression Timezone UTC 를 KST 로 바꾸는 방법",
    summary:
      '문제 spec : schedule : "0 0 * * *" 1) kubernetes Cron Expression 에 위와 설정하면, UTC 0시0분 (KST 9시0분) 에 실행된다. 절대 KST 시간이 되어주질 않는',
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2023-12-13",
    thumb:
      "posts/kubernetes-cronjob-timezone-kst/images/image_1.jpg",
  },
  {
    id: 80,
    slug: "minikube-install-mac",
    title: "[Kubernetes] Mac에 minikube설치 👾",
    summary:
      "Mac에서 kubectl과 minikube를 셋팅하기 위해서 brew를 활용한다. brew install kubectl minikube 📍에러 Error : Permission denied @ apply2fi",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-21",
    thumb:
      "posts/minikube-install-mac/images/image_1.jpg",
  },
  {
    id: 81,
    slug: "kubernetes-cluster-test-pod-deployment",
    title: "[Kubernetes] 쿠버네티스 Cluster test : pod, deployment 생성",
    summary:
      "[ Kubernetes ] 쿠버네티스 Cluster test - pod, deplotment 생성 Cluster test 클러스터가 구성이 되었으니 몇 가지 앱을 클러스터에 올리는 간단한 예제를 실행해본다.",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-04",
    thumb:
      "posts/kubernetes-cluster-test-pod-deployment/images/image_1.jpg",
  },
  {
    id: 82,
    slug: "kubernetes-service",
    title: "[Kubernetes] 쿠버네티스 - Service (서비스)",
    summary:
      "[Kubernetes] Service (서비스) 쿠버네티스 클러스터안에 컨트롤러를 이용해서 파드를 띄웠다면, 이제 그 파드들에 접근해보자! 파드는 컨트롤러에 의해 관리되기 때문에 한군데에 고정되어 떠 있지",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-21",
    thumb:
      "posts/kubernetes-service/images/image_1.jpg",
  },
  {
    id: 83,
    slug: "kubernetes-liveness-readiness-probe",
    title:
      "[Kubernetes] 쿠버네티스 'healthy-check' (활성 프로브 Liveness probe, 준비 상태 프로브 Readiness probe), 예제",
    summary:
      "[Kubernetes] Health check 4) Health check(헬스 체크) 쿠버네티스는 각 컨테이너의 상태를 주기적으로 체크해서, 문제가 있는 컨테이너를 자동으로 재시작하거나 또는 문제가 있는 컨",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-08",
    thumb:
      "posts/kubernetes-liveness-readiness-probe/images/image_1.jpg",
  },
  {
    id: 84,
    slug: "kubernetes-rbac-clusterrole",
    title: "[Kubernetes] 쿠버네티스 권한관리(Authorization), ClusterRole",
    summary:
      "권한관리 기본 쿠버네티스 클러스터의 api에 접근하기 위해서는 우선 유효한 사용자 인지 인증(authentication)을 거처야 한다. 인증이 됐으면 그 사용자가 접근하려고하는 api에 권한이 있는지 확인이 된 다",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-23",
    thumb:
      "posts/kubernetes-rbac-clusterrole/images/image_1.jpg",
  },
  {
    id: 85,
    slug: "kubernetes-terms-components-objects",
    title:
      "[ Kubernetes ] 쿠버네티스 다루기 - 쿠버네티스 용어, 컴포넌트, 오브젝트",
    summary:
      "[ Kubernetes ] 쿠버네티스 다루기 0) 쿠버네티스 용어 Namespace 물리 클러스터 내의 복수의 가상 클러스터 개발/운영/테스트 등을 네임스페이스로 나누면 개발은 CPU 100개, 운영은 4",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-04",
    thumb:
      "posts/kubernetes-terms-components-objects/images/image_1.jpg",
  },
  {
    id: 86,
    slug: "kubernetes-deployment",
    title: "[Kubernetes] 쿠버네티스 - 디플로이먼트(Deployment)",
    summary:
      "[Kubernetes] 디플로이먼트(Deployment) 디플로이먼트(Deployment)? 로드밸런서와 로드밸런서에 연결된 서버들처럼 시스템의 처리 능력을 분산시키고 장애가 발생한 서버들을 제외한 나머지",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-09",
    thumb:
      "posts/kubernetes-deployment/images/image_1.jpg",
  },
  {
    id: 87,
    slug: "kubernetes-manifest-yaml-pod",
    title:
      "[Kubernetes] 쿠버네티스 - 매니페스트, YAML파일, 파드(manifest, YAML 파일, pod)",
    summary:
      "[Kubernetes] 매니페스트, YAML, 파드 (manifest, YAML, pod) 1) manifest 매니페스트란, 쿠버네티스의 오브젝트를 생성하기 위한 메타 정보를 YAML이나 JSON으로 기술한",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-07",
    thumb:
      "posts/kubernetes-manifest-yaml-pod/images/image_1.jpg",
  },
  {
    id: 88,
    slug: "kubernetes-volume-pv-pvc-storageclass",
    title:
      "[Kubernetes] 쿠버네티스 - 볼륨과 스토리지 (PV, PVC, Static Provisioning, Dynamic-Provisioning, StorageClass)",
    summary:
      "[Kubernetes] 볼륨과 스토리지 (PV, PVC, Static Provisioning, Dynamic-Provisioning, StorageClass) 1. 쿠버네티스 볼륨(Volume) 저장소와 관련",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-22",
    thumb:
      "posts/kubernetes-volume-pv-pvc-storageclass/images/image_1.jpg",
  },
  {
    id: 89,
    slug: "kubernetes-sidecar-pattern-1",
    title:
      "[Kubernetes] 쿠버네티스 - 사이드카 패턴(Sidecar pattern), 사이드카 패턴 예제",
    summary:
      "[Kubernetes] 사이드카 패턴 Sidecar pattern 사이드카 패턴(Sidecar) 이란? 사이드카 패턴은 원래 사용하려고 했던 기본 컨테이너의 기능을 확장하거나 강화하는 용도의 컨테이너를 추가하",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-09",
    thumb:
      "posts/kubernetes-sidecar-pattern-1/images/image_1.jpg",
  },
  {
    id: 90,
    slug: "kubernetes-sidecar-pattern-2",
    title:
      "[Kubernetes] 쿠버네티스 - 사이드카 패턴(Sidecar pattern), 사이드카 패턴 예제",
    summary:
      "[Kubernetes] 사이드카 패턴 - Sidecar pattern - 사이드카 패턴(Sidecar) 이란? 사이드카 패턴은 원래 사용하려고 했던 기본 컨테이너의 기능을 확장하거나 강화하는 용도의 컨테이너를 추",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-07-05",
    thumb:
      "posts/kubernetes-sidecar-pattern-2/images/image_1.jpg",
  },
  {
    id: 91,
    slug: "kubernetes-autoscaling",
    title: "[Kubernetes] 쿠버네티스 - 오토스케일링(k8s Autoscaling)",
    summary:
      "[Kubernetes] Autoscaling 오토스케일링 #오토스케일링 이란, CPU와 메모리 사용률에 따라 파드나 노드의 수를 자동으로 늘리고 줄이는 기능. 1) 쿠버네티스의 오토스케일 서브",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-22",
    thumb:
      "posts/kubernetes-autoscaling/images/image_1.jpg",
  },
  {
    id: 92,
    slug: "kubernetes-install-centos-8",
    title:
      "[Kubernetes] 쿠버네티스란? 쿠버네티스 환경 구축, 쿠버네티스 CentOs 8 설치",
    summary:
      "[ Kubernetes ] 쿠버네티스 환경 구축, CentOs 8 설치 1. 쿠버네티스 쿠버네티스란 컨테이너 런타임을 통해 컨테이너를 다루는 도구를 말한다. 쿠버네티스가 해 주는 일은 여러 서버(노드)에 컨테",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-03",
    thumb:
      "posts/kubernetes-install-centos-8/images/image_1.jpg",
  },
  {
    id: 93,
    slug: "kubernetes-pod-networking",
    title: "[Kubernetes] 쿠버네티스의 'Pod', Pod 네트워킹",
    summary:
      "쿠버네티스 네트워킹 이해하기 🐳 Pod와 Pod 네트워킹에 대한 긴 글이다.📝 한 Pod가 다른 Pod와 어떻게 통신하는지 알아보자. 쿠버네티스의 Pod 네트워킹 쿠버네티스는 도커와는 달리, 파드 단위로 컨테이너",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-24",
    thumb:
      "posts/kubernetes-pod-networking/images/image_1.jpg",
  },
  {
    id: 94,
    slug: "leetcode-1304-find-n-unique-integers",
    title:
      "LeetCode | 1304. Find N Unique Integers Sum up to Zero 풀이, 파이썬 리스트 요소추가, 파이썬 증감연산자",
    summary:
      "1304. Find N Unique Integers Sum up to Zero 문제: Given an integer n , return any array containing n unique integers suc",
    category: "Backend/Python",
    tags: [],
    date: "2020-11-18",
    thumb:
      "posts/leetcode-1304-find-n-unique-integers/images/image_1.jpg",
  },
  {
    id: 95,
    slug: "leetcode-1436-destination-city",
    title: "LeetCode | 1436. Destination City 풀이, 파이썬 map 함수",
    summary:
      "1436. Destination City 문제: You are given the array paths , where paths[i] = [cityA i , cityB i ] means there exists a",
    category: "Backend/Python",
    tags: [],
    date: "2020-11-16",
    thumb:
      "posts/leetcode-1436-destination-city/images/image_1.jpg",
  },
  {
    id: 96,
    slug: "tmux-commands",
    title: "[Linux] tmux 사용법, 명령어 정리",
    summary:
      "1. tmux의 주요 개념 session, window, pane Session: tmux의 가장 큰 실행 단위, 윈도우에서는 데스크톱과 유사 Window: tmux 터미널 화면, 세션 내에서 탭처럼 이동 가능",
    category: "Linux/Administration",
    tags: [],
    date: "2024-02-16",
    thumb: null,
  },
  {
    id: 97,
    slug: "linux-cp-omitting-directory",
    title:
      "Linux 리눅스 | cp 명령 오류 (omitting directory 'directory name') 발생시 해결 방법",
    summary:
      "Linux 에서 cp 명령시 오류 (omitting directory 'directory name') 발생시 해결 방법 현상이 발생하는 이유: - 해당 디렉토리가 사용중일 경우 - 하위 디렉토리는 복사를 하지 않",
    category: "Linux/Administration",
    tags: [],
    date: "2020-06-05",
    thumb:
      "posts/linux-cp-omitting-directory/images/image_1.jpg",
  },
  {
    id: 98,
    slug: "linux-permission-chmod-chown",
    title: "Linux 리눅스 | 리눅스 퍼미션 권한(permission) 설정 (chmod, chown)",
    summary:
      "0. 리눅스와 퍼미션(permission) 서버용으로 만들어진 운영체제 리눅스 는 여러 사용자가 들어와 사용하는 멀티유저 시스템이다. 그런데 이 때문에 한가지 문제가 발생한다! 여러 사용자가 들어오면 서버에",
    category: "Linux/Administration",
    tags: [],
    date: "2020-06-05",
    thumb:
      "posts/linux-permission-chmod-chown/images/image_1.jpg",
  },
  {
    id: 99,
    slug: "macos-ip-address-settings",
    title: "MAC OS :: 맥북 IP주소 설정 방법(수동, 자동)",
    summary:
      "MAC OS IP주소 설정 방법(수동, 자동) 1. 시스템 환경설정 > 네트워크 2. 네트워크 > '고급' 3. TCP/IP 탭 > 여기서 DHCP 사용으로 하면 자동으로 IP 설정 하는 것. 스크롤버",
    category: "DevTools",
    tags: [],
    date: "2021-02-13",
    thumb:
      "posts/macos-ip-address-settings/images/image_1.jpg",
  },
  {
    id: 100,
    slug: "macos-apache-apachectl",
    title: "[ MAC Os apache 실행 ] 맥 아파치 실행, apachectl 옵션",
    summary:
      '​ 맥에서 아파치 다운로드 ​ 는 이미 깔려 있어서 다운로드 받을 필요 없이 터미널에서 sudo apache start 하면 실행된다ㅎㅎ ​ 명령어 입력하고 127.0.0.1 로 접속해서 "It works!" 뜨면 ',
    category: "DevTools",
    tags: [],
    date: "2021-01-29",
    thumb:
      "posts/macos-apache-apachectl/images/image_1.jpg",
  },
  {
    id: 101,
    slug: "vmware-fusion-12-vmmon-error",
    title:
      'MAC Os :: vmware fusion 12 설치, "could not open /dev/vmmon: 파이프 연결 해제됨."',
    summary:
      '​ 맥 vmware fusion 12 설치 + 설치 중 "could not open /dev/vmmon: 파이프 연결 해제됨." 에러 메시지가 뜨는 것 해결. ​ ​ 1. MAC Os :: vmware fusion ',
    category: "DevTools",
    tags: [],
    date: "2021-01-29",
    thumb:
      "posts/vmware-fusion-12-vmmon-error/images/image_1.jpg",
  },
  {
    id: 103,
    slug: "msa-spring-boot-spring-cloud-version-bom",
    title:
      "📦 MSA 스프링부트(Spring Boot)와 스프링클라우드(Spring Cloud) 버전 호환, BOM(pom.xml)",
    summary:
      "1. 스프링부트 스프링클라우드 버전 호환 스프링부트(Spring Boot)와 스프링 클라우드(Spring Cloud) 이 둘의 버전을 맞춰주어야 한다. 아래는 스프링 공식 사이트의 버전 표다. Release Tr",
    category: "Backend/MSA",
    tags: [],
    date: "2021-06-27",
    thumb:
      "posts/msa-spring-boot-spring-cloud-version-bom/images/image_1.jpg",
  },
  {
    id: 104,
    slug: "spring-cloud-netflix-hystrix-eureka-zuul",
    title:
      "MSA 아키텍처 Spring Cloud Netflix 구조 히스트릭스, 터빈, 유레카 서버, Config 서버, Zuul 서버",
    summary:
      "Spring Cloud Netflix Spring Cloud 는, Spring boot를 기반으로 MSA 구축에 특화된 라이브러리들의 집합이다. Spring Cloud에는 Eureka, Hystrix, Ribbon,",
    category: "Backend/MSA",
    tags: [],
    date: "2021-06-22",
    thumb:
      "posts/spring-cloud-netflix-hystrix-eureka-zuul/images/image_1.jpg",
  },
  {
    id: 105,
    slug: "monolithic-vs-microservice-architecture",
    title:
      "📦 MSA 아키텍처 프로젝트, 모노리틱 아키텍쳐 VS 마이크로 서비스 아키텍쳐",
    summary:
      "마이크로 서비스 아키텍쳐를 이해하려면 먼저 모노리틱 아키텍쳐 스타일에 대해서 이해해야 한다. 모노리틱 아키텍쳐 스타일은, 기존의 전통적인 웹 시스템 개발 스타일로 하나의 애플리케이션 내에 모든 로직들이 모두 들어 가",
    category: "Backend/MSA",
    tags: [],
    date: "2021-06-25",
    thumb:
      "posts/monolithic-vs-microservice-architecture/images/image_1.jpg",
  },
  {
    id: 106,
    slug: "msa-project-start-netflix-oss",
    title:
      "MSA 아키텍처 프로젝트, 시작 (MSA 아키텍처, MSA 적용사례, Netflix OSS, Spring Cloud Netflix)",
    summary:
      "해당 포스팅은 마이크로서비스 아키텍처(MSA 아키텍처)를 활용하여 커피 주문(가입, 주문, 상태) 시스템을 구축하는 프로젝트의 보고서 를 요약한 것 입니다. 1. IT 업계의 트렌드, MSA 2. MSA, 무엇인",
    category: "Backend/MSA",
    tags: [],
    date: "2021-06-23",
    thumb:
      "posts/msa-project-start-netflix-oss/images/image_1.jpg",
  },
  {
    id: 107,
    slug: "mysql-server-install-initial-setup",
    title:
      "MySQL server 설치, 초기 설정, MySQL 초기설정 기본 설정된 비번 바꾸기",
    summary:
      "본체에 SQL Workbrench 클라이언트 프로그램 설치, 가상머신에 CentOS7 서버 컴퓨터를 설치하고 sql server 설치. mySQL server 설치 sudo yum - y install htt",
    category: "Database",
    tags: [],
    date: "2021-03-08",
    thumb:
      "posts/mysql-server-install-initial-setup/images/image_1.jpg",
  },
  {
    id: 108,
    slug: "macos-mysql-remote-user-error-1064",
    title: "MacOS MySQL 원격 접속 사용자 생성, MySQL ERROR 1064 해결",
    summary:
      "ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version",
    category: "Database",
    tags: [],
    date: "2021-03-08",
    thumb:
      "posts/macos-mysql-remote-user-error-1064/images/image_1.jpg",
  },
  {
    id: 109,
    slug: "macos-apache-benchmark",
    title: "[MacOS] 맥북 아파치 벤치마크(성능테스트)",
    summary:
      "✔️벤치마크(성능테스트) 특정 오브젝트에 대해 일반적으로 수많은 표준 테스트와 시도를 수행하여 오브젝트의 상대적인 성능 측정을 목적으로 컴퓨터 프로그램을 실행하는 행위. ✔️'Apache Benchmark'",
    category: "DevTools",
    tags: [],
    date: "2021-03-22",
    thumb: null,
  },
  {
    id: 110,
    slug: "intellij-java-selenium-crawling",
    title: "[Mac] intelliJ + Java + Selenium 웹 크롤링 (1)",
    summary:
      "[Mac] intelliJ + Java + Selenium 웹 크롤링 0. 활용 도구 - Java - selenium 라이브러리 - chromedriver - 크롬 브라우저 1. selenium 설치 외부 클",
    category: "DevTools",
    tags: [],
    date: "2021-04-01",
    thumb:
      "posts/intellij-java-selenium-crawling/images/image_1.jpg",
  },
  {
    id: 111,
    slug: "maven-wrapper",
    title: "Maven Wrapper 란? (Maven Wrapper 실행방법)",
    summary:
      "Maven Wrapper 란? Maven Wrapper는 Maven Java 기반 프로젝트의 빌드, 의존성 관리, 테스트, 패키징 등을 관리하는 빌드 도구 프로젝트를 실행할 수 있는 도구입니다. Maven Wrapp",
    category: "DevTools",
    tags: [],
    date: "2023-06-16",
    thumb:
      "posts/maven-wrapper/images/image_1.jpg",
  },
  {
    id: 112,
    slug: "openjdk-11-install",
    title: "💻 OpenJDK 11 설치 (버전 충돌 해결)",
    summary:
      "1. OpenJDK 11 설치 yum - y install java - 11 - openjdk java - 11 - openjdk - devel cat > / etc / profile . d / java11 . sh",
    category: "DevTools",
    tags: [],
    date: "2021-04-22",
    thumb: null,
  },
  {
    id: 113,
    slug: "openstack-linuxbridge-to-ovs-ssh",
    title:
      "[OpenStack] Linuxbridge agent를 OVS agent로 바꾸기 'OVS 설정' + 인스턴스 SSH 접속",
    summary:
      "OVS 설정 [ controller ] ovs - vsctl add - br br - int ovs - vsctl add - br br - [ 네트워크 장치 이름 ] ovs - vsctl add - br br -",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-18",
    thumb:
      "posts/openstack-linuxbridge-to-ovs-ssh/images/image_1.jpg",
  },
  {
    id: 114,
    slug: "openstack-victoria-packstack-install",
    title: "[OpenStack] 오픈 스택 victoria Packstack 설치, 설정",
    summary:
      "📕 OpenStack, 오픈스택 0) 오픈스택이란? 클라우드 환경에서 컴퓨팅 자원과 스토리지 인프라를 설치하고 구동하기 위해 사용하는 오픈 소스. SW 프로젝트의 집합. (리눅스와 프로그램 세트?) 1)",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-07",
    thumb:
      "posts/openstack-victoria-packstack-install/images/image_1.jpg",
  },
  {
    id: 115,
    slug: "openstack-swift-container",
    title:
      "[OpenStack] 오픈 스택 컨테이너 생성 - 컨테이너를 네이버 클라우드 처럼 사용하기",
    summary:
      "오픈 스택 컨테이너 생성 컨테이너 생성 업로드 해보기 링크 주소 뒤에 /업로드한 파일 이름 붙여서 들어가면 업로드한 사진 페이지가 나온다. 네이버 클라우드 처럼 쓸 수 있네요 그렇네요 ~~",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-10",
    thumb:
      "posts/openstack-swift-container/images/image_1.jpg",
  },
  {
    id: 116,
    slug: "openstack-octavia-amphora-error",
    title:
      "[OpenStack] 오픈스택 Octavia 수동설치시 Amphora 로드밸런스 서비스 에러",
    summary:
      "[OpenStack - Octavia ] 오픈스택 로드밸런스 - Amphora 로드밸런서 기존 Neutron 로드밸런서는 Neutron 자체의 프로세스로 존재하였지만 Octavia에서는 Amphora라고 불리",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-26",
    thumb:
      "posts/openstack-octavia-amphora-error/images/image_1.jpg",
  },
  {
    id: 117,
    slug: "openstack-rocky-packstack-install",
    title: "[OpenStack] 오픈스택 Rocky packstack 설치 /1",
    summary:
      "[OpenStack - Rocky] 오픈스택 로드밸런스 - :: OpenStack Load balancer :: # 서론 Octavia 버전 오픈스택에서 로드밸런스 실습이 이루어 지지 않아 오픈스택 Rocky",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-30",
    thumb:
      "posts/openstack-rocky-packstack-install/images/image_1.jpg",
  },
  {
    id: 118,
    slug: "openstack-victoria-manual-3-glance",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: Glance (이미지 관리 서비스)설치 /3",
    summary:
      "[OpenStack] 오픈스택 수동설치 Glance (이미지 관리 서비스) 설치 1) glance DB 생성 [1] controller 노드 데이터베이스 서버에 root 사용자로 연결. mysql - u root",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-3-glance/images/image_1.jpg",
  },
  {
    id: 119,
    slug: "openstack-victoria-manual-2-keystone",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: Keystone(인증 서비스) 설치 /2",
    summary:
      "[OpenStack] 오픈스택 수동설치 Keystone 설치( 인증 서비스) 1) DB 생성 [1] controller 노드 데이터베이스 서버에 root 사용자로 연결. mysql - u root - p keys",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-2-keystone/images/image_1.jpg",
  },
  {
    id: 120,
    slug: "openstack-victoria-manual-cinder",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: cinder(블록 스토리지 서비스) 컨트롤러, 컴퓨트에 설치 및 설정",
    summary:
      "[OpenStack] 오픈스택 수동설치 cinder (블록 스토리지 서비스) 설치 컨트롤러, 컴퓨트에 설치 및 설정 1) DB 설정 💻 controller 노드 = = = = = = = = = = 데이터베",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-cinder/images/image_1.jpg",
  },
  {
    id: 121,
    slug: "openstack-victoria-manual-horizon",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: horizon(대시보드 서비스) 컨트롤러에 설치 및 설정",
    summary:
      "1) 서비스 설치 [1] controller dnf -- enablerepo = centos - openstack - victoria , powertools - y install openstack - dashboar",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-horizon/images/image_1.jpg",
  },
  {
    id: 122,
    slug: "openstack-victoria-manual-neutron-flat-network",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: neutron 네트워크 설정 'neutron flat 네트워크 설정' / 마지막",
    summary:
      "[OpenStack] 오픈스택 victoria 수동설치 - neutron 네트워크 설정 neutron flat 네트워크 설정 neutron 네트워크 설정 neutron flat 네트워크 설정 (1) 가상 브릿지",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-neutron-flat-network/images/image_1.jpg",
  },
  {
    id: 123,
    slug: "openstack-victoria-manual-neutron-network-node",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: neutron(네트워크 서비스) 네트워크 노드 설치 및 설정",
    summary:
      "[OpenStack] 오픈스택 수동설치 - neutron(네트워크 서비스) 네트워크 노드 설치,설정 1) 서비스 설치 📡 [3] network 노드 dnf - y install centos - release -",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-neutron-network-node/images/image_1.jpg",
  },
  {
    id: 124,
    slug: "openstack-victoria-manual-7-neutron-controller",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: neutron(네트워크 서비스) 컨트롤러 노드 설치 및 설정 /7",
    summary:
      "[OpenStack] 오픈스택 수동설치 neutron(네트워크 서비스) 컨트롤러 노드 설치 및 설정 1) DB 생성 [1] controller 노드 데이터베이스 서버에 root 사용자로 연결. mysql -",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-7-neutron-controller/images/image_1.jpg",
  },
  {
    id: 125,
    slug: "openstack-victoria-manual-neutron-compute-node",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: neutron(네트워크 서비스) 컴퓨트 노드 설치 및 설정",
    summary:
      "[OpenStack] 오픈스택 수동설치 - neutron(네트워크 서비스) 컴퓨트 노드 설치 및 설정 1) 서비스 설치 [2] compute dnf -- enablerepo = centos - openstac",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-neutron-compute-node/images/image_1.jpg",
  },
  {
    id: 126,
    slug: "openstack-victoria-manual-5-nova",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: nova (컴퓨팅 서비스) 설치 /5",
    summary:
      "[OpenStack] 오픈스택 수동설치 nova(컴퓨팅 서비스) 설치 1) nova DB 생성 [1] controller 노드 데이터베이스 서버에 root 사용자로 연결. mysql - u root - p key",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-5-nova/images/image_1.jpg",
  },
  {
    id: 127,
    slug: "openstack-victoria-manual-nova-compute-node",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: nova (컴퓨팅 서비스) 컴퓨트 노드 설치, 컴퓨트 노드 인식 시키기",
    summary:
      "[OpenStack] 오픈스택 수동설치 nova 설치(컴퓨팅 서비스) * Compute 노드 설치 1) Compute 노드 서비스 설치 [2] compute dnf - y install centos - r",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-nova-compute-node/images/image_1.jpg",
  },
  {
    id: 128,
    slug: "openstack-victoria-manual-4-placement",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: placement (배포 서비스)설치 /4",
    summary:
      "[OpenStack] 오픈스택 수동설치 placement (배포 서비스) 설치 * Stein 버전 이전에는 nova 서비스에 포함되어 있었지만, stein 이후 버전에서는 따로 빠져나옴. 1) plac",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-21",
    thumb:
      "posts/openstack-victoria-manual-4-placement/images/image_1.jpg",
  },
  {
    id: 129,
    slug: "openstack-victoria-manual-1-environment",
    title:
      "[OpenStack] 오픈스택 victoria 수동설치 :: 초기 설정 (오픈스택 패키지, 메세지 큐, Memcached 설치)/1",
    summary:
      "1. 사전 준비 1) 네트워크 설정 (1) 호스트명 설정 [1] controller 노드 vi /etc/hosts 아래에 다음 내용 추가 192.168 .1 .101 controller 192.168 .1 .10",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-20",
    thumb:
      "posts/openstack-victoria-manual-1-environment/images/image_1.jpg",
  },
  {
    id: 130,
    slug: "openstack-linuxbridge-to-ovs-agent",
    title:
      "[OpenStack] 오픈스택 네트워크 Linuxbridge agent를 OVS agent로 바꾸기",
    summary:
      "[OpenStack] Linuxbridge agent를 OVS agent로 바꾸기 (오픈스택 로드밸런스를 위해) (컨트롤러 노드) 1) dnf - y install openstack - neutron - op",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-18",
    thumb:
      "posts/openstack-linuxbridge-to-ovs-agent/images/image_1.jpg",
  },
  {
    id: 131,
    slug: "openstack-rocky-load-balancer-agent",
    title: "[OpenStack] 오픈스택 로드밸런스 'Rocky 로드 밸런스 agent 설정'",
    summary:
      "[OpenStack] 오픈스택 로드밸런스 - :: OpenStack Load balancer :: 로드 밸런스 agent 설정 0. 로드밸런싱이란? 1. 로드밸런싱 설치 2. 로드밸런싱 설정 3. 로드밸런서 데시",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-31",
    thumb:
      "posts/openstack-rocky-load-balancer-agent/images/image_1.jpg",
  },
  {
    id: 132,
    slug: "openstack-volume-instance-floating-ip",
    title:
      "[OpenStack] 오픈스택 볼륨으로 인스턴스 생성 (보안그룹 설정, 유동 IP 할당)",
    summary:
      "1. 볼륨 생성 생성한 볼륨 확인 2. 생성한 볼륨으로 인스턴스 생성 [ 인스턴스 시작 ] 인스턴스 이름 입력 부팅 소스 선택 시 볼륨에 체크하고, 사용 가능 목록에서 사용할 볼륨 옆 화살표 눌러서 사",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-16",
    thumb:
      "posts/openstack-volume-instance-floating-ip/images/image_1.jpg",
  },
  {
    id: 133,
    slug: "openstack-heat-orchestration-setup",
    title:
      "[OpenStack] 오픈스택 오케스트레이션 '오픈스택 히트 설정, 설치, 사용'",
    summary:
      "[OpenStack] 오픈스택 오케스트레이션 설정, 설치, 사용하기 1) 오픈스택 히트(오케스트레이션 서비스) ::설정 및 설치 (1) 설치 [ controller ] dnf -- enablerepo = cent",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-24",
    thumb:
      "posts/openstack-heat-orchestration-setup/images/image_1.jpg",
  },
  {
    id: 134,
    slug: "openstack-windows-instance-password-rdp",
    title:
      "[OpenStack] 오픈스택 '윈도우 인스턴스 비밀번호 찾기 기능 추가 (맥북 RDP 설치)'",
    summary:
      "https://docs.openstack.org/horizon/victoria/configuration/settings.html 1. 윈도우 인스턴스 비밀번호 찾기 기능 추가 vi / etc / opensta",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-17",
    thumb:
      "posts/openstack-windows-instance-password-rdp/images/image_1.jpg",
  },
  {
    id: 135,
    slug: "openstack-orchestration-heat-ceilometer",
    title:
      "[OpenStack] 클라우드 오케스트레이션, 오픈스택 오케스트레이션이란? (Heat, Ceilometer, Gnocchi, Aodh)",
    summary:
      "- 클라우드 오케스트레이션 에 대한 개념과, 오픈스택 오케스트레이션 , 오픈스택 오케스트레이션 관련 프로그램 (Heat, Ceilometer, Gnocchi, Aodh) 의 개념에 대해 다루는 글. - 1. 클라",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-29",
    thumb:
      "posts/openstack-orchestration-heat-ceilometer/images/image_1.jpg",
  },
  {
    id: 136,
    slug: "openstack-windows-cloud-image",
    title: "[OpenStack] 클라우드용 windows 이미지 만들기",
    summary:
      "클라우드용 windows 이미지 만들기 https://docs.openstack.org/image-guide/windows-image.html 👈🏻메뉴얼 페이지 < ISO 파일로 클라우드용 이미지 만들기 요약 >",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-14",
    thumb:
      "posts/openstack-windows-cloud-image/images/image_1.jpg",
  },
  {
    id: 137,
    slug: "openstack-linux-cloud-image",
    title: "[OpenStack] 클라우드용 '리눅스 이미지 생성'",
    summary:
      "클라우드용 리눅스 이미지 만들기 CentOS7 minimal ISO 파일을 이용하여, 클라우드용 이미지 생성하기 < ISO 파일로 클라우드용 이미지 만들기 요약 > 1. QEMU + KVM 에뮬레이터를 실행할",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-14",
    thumb:
      "posts/openstack-linux-cloud-image/images/image_1.jpg",
  },
  {
    id: 138,
    slug: "linux-pam-module",
    title: "PAM 모듈",
    summary:
      "PAM 모듈 PAM 이란? Pluggable Authentication Modules. 시스템에 공통적인 인증 방법을 제공하고, 쉽게 보안 설정 내용들을 교체 또는 추가/제거가 가능하다. 모듈의 종류는 다양하며 각각",
    category: "Security",
    tags: [],
    date: "2021-02-22",
    thumb: "posts/linux-pam-module/images/image_1.jpg",
  },
  {
    id: 139,
    slug: "pub-sub-pattern",
    title: "📬 Pub/Sub구조 (비동기, Pub/Sub 비동기 작동)",
    summary:
      "micro-frontends 를 공부하다가 자꾸 눈에 띄는 Pub/Sub구조. Pub/Sub구조에 대해 간단히 정리한 포스팅이다. # Pub/Sub 구조 Pub/Sub 구조는 '비동기식' 메세징 패턴. 그렇다면",
    category: "Backend/Architecture",
    tags: [],
    date: "2021-06-28",
    thumb:
      "posts/pub-sub-pattern/images/image_1.jpg",
  },
  {
    id: 140,
    slug: "python-if-examples",
    title: "Python :: 간단한 파이썬 예제 [조건문]",
    summary:
      "0. 파이썬의 조건문 규칙 파이썬의 조건문은 다른 언어와 조금 다르다. 어떤 부분이 다른지 알아보고, 예제를 통해 연습해 보자! if (공백) True : (Tab) 값이 참일 때 실행할 문장 (Tab) 값이 참",
    category: "Backend/Python",
    tags: [],
    date: "2020-07-21",
    thumb: null,
  },
  {
    id: 141,
    slug: "python-kmeans-clustering-matplotlib",
    title:
      "Python 머신러닝 :: 비지도 학습 클러스터링 (K-Means), Matplotlib 연동 예제",
    summary:
      "파이썬 비지도 학습 클러스터링 (K-Means), Matplotlib 연동 예제 https://blog.naver.com/ghdalswl77/222086147547 Python 머신러닝 예제 :: 비지도 학습 클",
    category: "Backend/Python",
    tags: [],
    date: "2020-09-12",
    thumb:
      "posts/python-kmeans-clustering-matplotlib/images/image_1.jpg",
  },
  {
    id: 142,
    slug: "python-kmeans-image-clustering",
    title:
      "Python 머신러닝 :: 비지도학습 클러스터링 (K-Means), Matplotlib 연동해서 이미지 클러스터링",
    summary:
      "파이썬 비지도학습 클러스터링(K-Means), Matplotlib 연동해서 이미지 클러스터링 이전 포스팅 https://blog.naver.com/ghdalswl77/222087760628 Python 머신러닝",
    category: "Backend/Python",
    tags: [],
    date: "2021-02-19",
    thumb:
      "posts/python-kmeans-image-clustering/images/image_1.jpg",
  },
  {
    id: 143,
    slug: "python-boto3-s3-image-analysis",
    title: "Python 머신러닝 예제 :: Python boto3 + AWS S3 연동해서 이미지 분석",
    summary:
      "Python boto3 + AWS S3 연동, 이미지 분석 AWS S3란, 이미지, 동영상 등 다양한 파일을 저장하기 위한 목적으로 사용할 수 있는 아마존 서비스 입니다. Python에서 AWS S3에 다양한 파",
    category: "Backend/Python",
    tags: [],
    date: "2020-09-10",
    thumb:
      "posts/python-boto3-s3-image-analysis/images/image_1.jpg",
  },
  {
    id: 144,
    slug: "python-kmeans-clustering-example",
    title: "Python 머신러닝 예제 :: 비지도 학습 클러스터링 (K-Means)",
    summary:
      "파이썬 비지도 학습 클러스터링 (K-Means) 예제 비지도 학습이란? 클러스터링 (K-Means) 머신러닝을 세 가지 종류로 나누어 볼 수 있다. 지도 학습 , 비지도 학습 , 그리고 강화 학습 이다. 이번 시간에",
    category: "Backend/Python",
    tags: [],
    date: "2020-09-10",
    thumb:
      "posts/python-kmeans-clustering-example/images/image_1.jpg",
  },
  {
    id: 145,
    slug: "pycharm-venv-scikit-learn-tensorflow",
    title:
      "Python 머신러닝 예제 :: 파이참 가상환경 만들기, 파이참 Scikit-learn(사이킷런) 설치, 파이참 TensorFlow 설치",
    summary:
      "가상 환경(virtualenv) 만들기 :: Windows PyCharm 텐서플로우 소스코드를 실행할 수 있는 가상 환경(virtualenv)을 만들기 위한 작업. 파이썬 3.7버전의 가상환경을 세팅 하는 것이 이번",
    category: "Backend/Python",
    tags: [],
    date: "2020-09-08",
    thumb:
      "posts/pycharm-venv-scikit-learn-tensorflow/images/image_1.jpg",
  },
  {
    id: 146,
    slug: "python-data-io",
    title: "Python :: 파이썬 데이터 입출력",
    summary:
      "데이터 입출력 프로그래밍에서는 다양한 입출력 방식을 제공해준다! - 표준 입출력 - 파일 입출력 - DB 입출력 - 네트워크 입출력 파일 입출력 표준 입력 input() : 키보드로 입력받음 -> 표준 출력",
    category: "Backend/Python",
    tags: [],
    date: "2020-08-26",
    thumb: null,
  },
  {
    id: 147,
    slug: "python-decision-tree",
    title: "Python 파이썬 머신러닝 :: 의사결정 트리 그래프",
    summary:
      "머신 러닝 지도 학습 모델 중. '의사결정 트리' 장미꽃이 찍혀 있는 이미지 데이터( 꽃잎의 가로 세로 길이 데이터) 에 레이블로 “해당 장미꽃의 품종을 나타내는 텍스트“를 함께 입력 하고 학습기를 지도 학습시키면",
    category: "Backend/Python",
    tags: [],
    date: "2020-09-08",
    thumb:
      "posts/python-decision-tree/images/image_1.jpg",
  },
  {
    id: 148,
    slug: "python-string-reverse-max-math-pow",
    title:
      "Python :: 파이썬 문자열 거꾸로 출력하기, 가장 큰 수 찾기, math.pow()",
    summary:
      "[문자열 거꾸로 출력하기] ‘abcde’ 라는 문자열을 거꾸로 출력해보자. 즉, ‘edcba’ 라는 출력을 원한다. 무수히 많은 방법이 있겠지만, 몇 가지만 살펴보자. 일단 단순히 for문을 통해 해결하는 방법이 있",
    category: "Backend/Python",
    tags: [],
    date: "2020-08-18",
    thumb: null,
  },
  {
    id: 149,
    slug: "python-install-pycharm",
    title: "Python :: 파이썬 설치 및 개발 환경 구축 (파이참PyCharm 설치)",
    summary:
      "Python 파이썬 설치 및 개발 환경 구축 0. 파이썬 프로그램 설치. 서론 없이 바로 다운부터 받자! 우선 파이썬 공식 홈페이지의 다운로드 페이지 에서 윈도우용 파이썬 언어 패키지를 다운로드한다. Downlo",
    category: "Backend/Python",
    tags: [],
    date: "2020-07-21",
    thumb:
      "posts/python-install-pycharm/images/image_1.jpg",
  },
  {
    id: 150,
    slug: "python-if-dict-loop-examples",
    title: "Python :: 파이썬 조건문, 딕셔너리, 반복문 예제",
    summary:
      "#조건문 #조건문 예제 1 # 반복문 numlist = [ 20 , 36654 , 132 , 768 , 3 , 86 , 2 ] print ( '100 이하의 수: ' ) for number in numlist : i",
    category: "Backend/Python",
    tags: [],
    date: "2020-07-31",
    thumb:
      "posts/python-if-dict-loop-examples/images/image_1.jpg",
  },
  {
    id: 151,
    slug: "python-mysql-database",
    title: "Python :: 파이썬으로 데이터베이스 입출력(mysql database)",
    summary:
      "데이터 베이스 파이썬 프로그램에서 데이터 베이스로 접근, 데이터를 조회, 입력, 수정, 삭제 할 수 있다. pymysql 모듈을 사용하며, connect함수를 사용해 DB에 접근한다. 실행하는 법은 다음과 같다: c",
    category: "Backend/Python",
    tags: [],
    date: "2020-08-26",
    thumb:
      "posts/python-mysql-database/images/image_1.jpg",
  },
  {
    id: 152,
    slug: "raspberry-pi-i2c-oled-ssd1306",
    title:
      "Raspberry Pi [I2C 통신] :: 라즈베리파이와 OLED SSD1306 으로 원하는 이미지 띄우기",
    summary:
      "라즈베리파이와 OLED SSD1306, I2C 통신으로 원하는 이미지 띄우기! 0. 준비 준비물은 간단합니다! 라즈베리파이, 브레드보드, OLED SSD1306, 띄우고 싶은 그림 png 파일 # 테스트용으로",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-18",
    thumb:
      "posts/raspberry-pi-i2c-oled-ssd1306/images/image_1.jpg",
  },
  {
    id: 153,
    slug: "raspberry-pi-pwm-led",
    title: "Raspberry Pi :: PWM 통신으로 led 밝기 조절 코드",
    summary:
      "0초 0초 100% 광고 후 계속됩니다. 다음 동영상 subject author 취소 라즈베리파이 LED 제어 재생 26 좋아요 0 좋아요 공유하기 재생 (space/k) 재생 00:04 0:00:00 재생 (spa",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-16",
    thumb: null,
  },
  {
    id: 154,
    slug: "raspberry-pi-spi-mcp3008",
    title: "Raspberry Pi :: 라즈베리 파이 SPI 통신, MCP3008 IC",
    summary:
      "라즈베리 파이 SPI 통신 :: 아날로그 신호와 SPI 통신 조도센서는 빛의 세기에 따라 저항값이 변하는 소자다. 그런데 라즈베리파이는 DAC(Digital-Analog Converter) 뿐 아니라 ADC(Anal",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-18",
    thumb:
      "posts/raspberry-pi-spi-mcp3008/images/image_1.jpg",
  },
  {
    id: 155,
    slug: "raspberry-pi-initial-setup-network-korean",
    title:
      "Raspberry Pi :: 라즈베리 파이 초기 설정, 라즈베리파이 네트워크 설정, 라즈베리 파이 한글 설정",
    summary:
      "0. 라즈베리파이에 운영체제(라즈비안) 설치하기 (1) 라즈비안 다운 https://www.raspberrypi.org/downloads/raspbian/ 에 접속해서 Raspberry Pi OS (32-bit)",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-14",
    thumb:
      "posts/raspberry-pi-initial-setup-network-korean/images/image_1.jpg",
  },
  {
    id: 156,
    slug: "raspberry-pi-opencv-upper-body-detection",
    title: "Raspberry Pi :: 라즈베리파이 Opencv로 상체 인식 💁🏻‍♂️",
    summary:
      "[ 라즈베리파이에 OpenCV 설치 ] https://github.com/opencv/opencv/tree/master/data/haarcascades opencv/opencv Open Source Compu",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2021-03-30",
    thumb:
      "posts/raspberry-pi-opencv-upper-body-detection/images/image_1.jpg",
  },
  {
    id: 157,
    slug: "raspberry-pi-microphone-speaker",
    title: "Raspberry Pi :: 라즈베리파이 마이크, 스피커 연결",
    summary:
      "스피커 : Advanced -> Audio 스피커 테스트 녹음 : arecord -- format = S16_LE -- duration = 10 -- rate = 160000 -- file - type =",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-10-04",
    thumb:
      "posts/raspberry-pi-microphone-speaker/images/image_1.jpg",
  },
  {
    id: 159,
    slug: "raspberry-pi-temperature-pressure-altitude-sensor",
    title: "Raspberry Pi :: 라즈베리파이 온도/대기압/고도 센서",
    summary:
      "Raspberry Pi :: 라즈베리파이 'I2C 통신' I2C(Inter-Integrated Circuit)는 SPI 통신처럼 시리얼 통신 이며 SDA(Serial Data Line) , SCL(Seria Cloc",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-18",
    thumb:
      "posts/raspberry-pi-temperature-pressure-altitude-sensor/images/image_1.jpg",
  },
  {
    id: 160,
    slug: "raspberry-pi-wordpress-lamp-1",
    title:
      "Raspberry Pi | 라즈베리파이 워드프레스 설치하기 1  LAMP (Linux, Apache, MySQL, PHP) 설치 +MariaDB 설치",
    summary:
      "가상 공간 속 내 집 마련하기! 0. 라즈베리파이에 LAMP 설치 라즈베리파이에 LAMP (Linux, Apache, MySQL, PHP)를 설치하는 방법! ((라즈베리 파이에 리눅스는 기본적으로 깔려 있기",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-05-30",
    thumb:
      "posts/raspberry-pi-wordpress-lamp-1/images/image_1.jpg",
  },
  {
    id: 161,
    slug: "raspberry-pi-wordpress-lamp-2",
    title:
      "Raspberry Pi | 라즈베리파이 워드프레스 설치하기 2 LAMP (Linux, Apache, MySQL, PHP) 설치",
    summary:
      "5. 워드프레스 설치하기 (라즈베리 파이 웹 서버에 워드프레스 외에 별도 다른 기능은 없는것으로 가정하고 설치) 마지막 단계 입니다~~!! 아자아자★ 라즈베리파이 워드프레스 설치 1 에 이어서 진행됩니다!",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-06-07",
    thumb:
      "posts/raspberry-pi-wordpress-lamp-2/images/image_1.jpg",
  },
  {
    id: 162,
    slug: "raspberry-pi-web-mqtt",
    title: "Raspberry Pi :: 라즈베리파이 웹 mqtt 통신",
    summary:
      '1. 라즈베리파이 = publisher 1) 코드 import paho . mqtt . client as mqtt mqttc = mqtt . Client ( "client" , transport = \'websocke',
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-16",
    thumb:
      "posts/raspberry-pi-web-mqtt/images/image_1.jpg",
  },
  {
    id: 165,
    slug: "raspberry-pi-soil-moisture-sensor",
    title: "Raspberry Pi :: 라즈베리파이 '토양 수분센서'",
    summary:
      "토양 수분센서 는 토양의 수분이 얼만큼 있는지 특정하는 소자. 그런데 라즈베리파이는 DAC(Digital-Analog Converter) 뿐 아니라 ADC(Analog-Digital Converter) 장치도 내",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2021-03-30",
    thumb:
      "posts/raspberry-pi-soil-moisture-sensor/images/image_1.jpg",
  },
  {
    id: 167,
    slug: "raspberry-pi-joystick",
    title: "Raspberry Pi :: 라즈베리파이로 조이스틱 컨트롤하기",
    summary:
      "# 라즈베리파이로 조이스틱 컨트롤하기 # - * - coding : utf - 8 - * - import time import spidev delay = 0.5 sw_channel = 0 vrx_channel = 1",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-19",
    thumb: null,
  },
  {
    id: 168,
    slug: "raspberry-pi-opencv-install",
    title: "Raspberry Pi :: 라즈베리파이에 Opencv 설치하기",
    summary:
      "0. 새 모듈 Enable 해주기 Camera -> Enable 1. Opencv 설치하기 1) 필요한 패키지 및 라이브러리 설치 패키지 리스트 업데이트 및 샐치된 패키지들 업그레이드 ﻿apt - get upda",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-10-04",
    thumb:
      "posts/raspberry-pi-opencv-install/images/image_1.jpg",
  },
  {
    id: 170,
    slug: "raspberry-pi-samba",
    title: "Raspberry pi | 라즈베리파이 삼바(Samba)설치하기",
    summary:
      "0. 삼바(Samba) 삼바(samba)는 SMB(Server Message Block) 또는 CIFS (Common Internet File System)로 알려져 있으며 리눅스(UNIX-like)와 윈도우간에",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-05-29",
    thumb: null,
  },
  {
    id: 171,
    slug: "ssh-unprotected-private-key-file",
    title: "SSH 접속 :: UNPROTECTED PRIVATE KEY FILE 해결",
    summary:
      "WARNING: UNPROTECTED PRIVATE KEY FILE! Permissions 0644 for 'centos_key.pem' are too open. SSH 접속 에러 UNPROTECTED PRI",
    category: "Linux/Administration",
    tags: [],
    date: "2021-05-25",
    thumb: null,
  },
  {
    id: 172,
    slug: "ssl-strip-example",
    title: "SSL Strip 예제",
    summary:
      "0. SSL Strip 0) SSL 이란? 전송(4)계층 보안 프로토콜, TLS(과거 명칭, Transprot Layer Security) HTTP 통신을 암호화하는데 사용 1) SSL 스트립이란? MITM 공격",
    category: "Security",
    tags: [],
    date: "2021-04-22",
    thumb: "posts/ssl-strip-example/images/image_1.jpg",
  },
  {
    id: 173,
    slug: "session-hijacking",
    title: "Session Hijacking 이란?",
    summary:
      "👾 Session Hijacking 이란? HTTP Session Hijacking 이라는 공격 기법은 웹 브라우징시 세션 관리를 위해 사용되는 Session ID를 스니핑이나 무작위 추측 공격(brute-force",
    category: "Security",
    tags: [],
    date: "2021-09-05",
    thumb: "posts/session-hijacking/images/image_1.jpg",
  },
  {
    id: 174,
    slug: "java-string-pool",
    title: "String 과 String Pool",
    summary:
      'String은 Java 에서 제공하는 특별한 자료형이다. Java에서 String 객체를 생성하는 방법은 2가지가 있는데 첫번째는 String literal (큰 따옴표""를 사용하는 것), 두번째는 new 연산자를',
    category: "Backend/Java",
    tags: [],
    date: "2022-11-04",
    thumb: "posts/java-string-pool/images/image_1.jpg",
  },
  {
    id: 175,
    slug: "ubuntu-nfs-dynamic-provisioning-kubernetes",
    title:
      "Ubuntu Dynamic NFS Client Provisioning 구성(Kubernetes Dynamic Storage Provisioning)",
    summary:
      "Ubuntu에 NFS Server로 운영하면서 Kubernetes의 PVC (Perssistent Volume Claim) - StorageClass - NFS 로 연동되는 PV (Persistent Volume)를",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-23",
    thumb:
      "posts/ubuntu-nfs-dynamic-provisioning-kubernetes/images/image_1.jpg",
  },
  {
    id: 176,
    slug: "ubuntu-ssh",
    title: "Ubuntu ssh 접속 🕹",
    summary:
      "Ubuntu를 설치하고 나면 원격으로 접속할 수 있게 ssh 연결 설정을 해야 한다. ssh server를 설치하면 되는데 우선 Ubuntu에 설치되어 있는 패키지 목록을 확인해보자. 1. openssh-serv",
    category: "Linux/Administration",
    tags: [],
    date: "2021-06-21",
    thumb: null,
  },
  {
    id: 177,
    slug: "webgoat-xss",
    title: "[Webgoat] XSS",
    summary:
      "Password 칸이 문자열 제한이 걸려있음 -> 인증 우회를 위한 문자열 작성이 불가능. 따라서 문제에서 필요시, 개발자 모드(F12)에서 수정하여 더 작성할 수 있도록 제한을 풀어줄 것. Stage 1:",
    category: "Security",
    tags: [],
    date: "2021-07-19",
    thumb: "posts/webgoat-xss/images/image_1.jpg",
  },
  {
    id: 178,
    slug: "zookeeper-acl-superuser",
    title: "Zookeeper ACL 적용 (setAcl, zookeeper superuser 슈퍼 유저 방법)",
    summary:
      "1. 목표 운영 중인 zookeeper 서버 3대에 대해 ACL (Access Control List)을 적용한다. 2. ACL이란? ACL은 Access Control List 의 약자로, Zookeep",
    category: "Search/Kafka",
    tags: [],
    date: "2024-09-06",
    thumb:
      "posts/zookeeper-acl-superuser/images/image_1.jpg",
  },
  {
    id: 179,
    slug: "zookeeper-install-ensemble-znodes",
    title: "Zookeeper란? zookeeper 3.8설치, 앙상블 구성, Znodes",
    summary:
      "1. Zookeeper 란? 분산 시스템을 위한 분산 코디네이션 이다. 쉽게 말해 분산 시스템에서 중요한 점은 분산된 시스템 간 정보 공유, 클러스터 내 서버의 상태, 서버 간 동기화 작업 등이 있는데, 주키퍼가 이",
    category: "Search/Kafka",
    tags: [],
    date: "2024-03-06",
    thumb:
      "posts/zookeeper-install-ensemble-znodes/images/image_1.jpg",
  },
  {
    id: 180,
    slug: "aws-mail-server-gmail",
    title: "[aws 메일서버 구축] gmail에서 메일 받기",
    summary:
      "1. aws에서 서버 한 대 만들기 - 우분투나 centOS 프리티어 한 대 생성. 2. 내도메인 한국 -> dns 서버 생성 # nslookup으로 이름 풀이가 제대로 되는지 확인. 설정한 ip를 잘 알려주",
    category: "Cloud/AWS",
    tags: [],
    date: "2021-03-17",
    thumb:
      "posts/aws-mail-server-gmail/images/image_1.jpg",
  },
  {
    id: 181,
    slug: "html-button-page-reload",
    title: "button 태그 페이지 reload 문제 해결",
    summary:
      "일반 button을 누를 경우, (버튼에 설정해놓은 이벤트 외에 추가로) 페이지가 제멋대로 reload 되는 경우가 있다. [원인] button이 form 태그 안에 있을 경우 발생한다. button의 t",
    category: "Frontend/Web",
    tags: [],
    date: "2022-01-12",
    thumb: null,
  },
  {
    id: 183,
    slug: "what-is-helm",
    title:
      "helm이란, 이런 것 🛠 (kubernetes helm, helm chart, Helm v3 client Tiller)",
    summary:
      "helm 이란 kubernetes helm 이란? Docker가 나오면서 container 혁신이 이루어지고, container를 쉽게 관리/배포해주는 kubernetes가 나오게 되었다. (일종의 container",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-30",
    thumb:
      "posts/what-is-helm/images/image_1.jpg",
  },
  {
    id: 184,
    slug: "java-int-vs-integer",
    title: "int와 Integer 차이 (Primitive 자료형과 Wrapper 클래스 관계)",
    summary:
      "int 와 Integer 차이 (Primitive 자료형 - Wrapper 클래스 관계) 1. Wrapper 클래스 자바의 자료형은 크게 기본 타입(primitive type)과 참조 타입(reference",
    category: "Backend/Java",
    tags: [],
    date: "2022-04-13",
    thumb:
      "posts/java-int-vs-integer/images/image_1.jpg",
  },
  {
    id: 185,
    slug: "jquery-vs-javascript",
    title: "jQuery | 자바스크립트와 제이쿼리 비교, 제이쿼리 사용법",
    summary:
      "자바스크립트, 제이쿼리 자바스크립트는 웹브라우저에서 작동하는 스크립트이다. 기능성 홈페이지 99% 이상이 이 기술을 사용하고 있다고 해도 될 정도로 많이 쓰이고 있다. 그렇다면 jQuery 는? jQuery",
    category: "Frontend/Web",
    tags: [],
    date: "2020-08-01",
    thumb:
      "posts/jquery-vs-javascript/images/image_1.jpg",
  },
  {
    id: 186,
    slug: "java-decorator-pattern",
    title: "java | 디자인패턴 데커레이터 패턴 : Decorator Pattern",
    summary:
      "데커레이터 패턴: 본 기능에 추가할 것이 많을 때 사용하기 좋다! 왜 그런지 알아보기 위해 지금부터 우리가 네이게이션 소프트웨어 를 만드는 사람이라고 생각하고 한 가지 예제를 살펴보자. 우선, 뭐가 필요할까?",
    category: "Backend/Java",
    tags: [],
    date: "2020-06-17",
    thumb:
      "posts/java-decorator-pattern/images/image_1.jpg",
  },
  {
    id: 187,
    slug: "java-regex-phone-number",
    title: "java 정규표현식 | 휴대폰 번호 정규식 예제",
    summary:
      "예제로 정규식 이해하기 정규표현식(Regular Expression, RegExp) 특정한 규칙을 가진 문자열의 집합을 표현하는데 사용하는 형식 언어. 0. 핸드폰 번호 정규식 보통 핸드폰 번호는 세 자리로 나뉘",
    category: "Backend/Java",
    tags: [],
    date: "2020-07-29",
    thumb:
      "posts/java-regex-phone-number/images/image_1.jpg",
  },
  {
    id: 188,
    slug: "kafka-pod-communication-nodeport",
    title:
      "📦 kafka Pod 끼리 통신(연결) 해결 : (NodePort External Service Type, values.yaml 파일)",
    summary:
      "kafka Pod 끼리 통신(연결) 해결 values.yaml 수정 https://github.com/helm/charts/tree/master/incubator/kafka values.yaml 파일을 받아서",
    category: "Search/Kafka",
    tags: [],
    date: "2021-06-30",
    thumb:
      "posts/kafka-pod-communication-nodeport/images/image_1.jpg",
  },
  {
    id: 189,
    slug: "kali-linux-2020-root-password",
    title: "🏴‍☠️ kali Linux 2020 root password 문제 해결",
    summary:
      "kali Linux 2020 version를 virtualBox에 구동 후 root (su) 계정 접속되지 않는 문제. kali Linux 초기 계정은 kali이고 password는 계정과 동일하게 kali",
    category: "Security",
    tags: [],
    date: "2021-04-21",
    thumb:
      "posts/kali-linux-2020-root-password/images/image_1.jpg",
  },
  {
    id: 190,
    slug: "kubernetes-metrics-server-missing-endpoints",
    title:
      "📍 kube-system/metrics-server false (missingendpoints), kubectl get hpa <unknown> 에러 해결",
    summary:
      "HPA 실습 중, kubectl autoscale deployment 로 hpa를 생성하고 kubectl get hpa 로 cpu 사용량을 확인하려고 했는데, 다음과 같은 에러가 났다. kubectl get",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-22",
    thumb:
      "posts/kubernetes-metrics-server-missing-endpoints/images/image_1.jpg",
  },
  {
    id: 191,
    slug: "linux-restrict-root-login",
    title:
      "login 가능한 account 제한 :: root 계정 콘솔, 원격으로 직접 로그인 불가하게 하기",
    summary:
      "root 계정 콘솔에서 직접 로그인 불가하게 하기 1. etc 안에 pam.d 안에 있는 gdm-password 파일을 vi 편집기로 열어 수정한다. vi / etc / pam . d / gdm - password",
    category: "Security",
    tags: [],
    date: "2021-02-22",
    thumb:
      "posts/linux-restrict-root-login/images/image_1.jpg",
  },
  {
    id: 192,
    slug: "nohup-disown",
    title: "[nohup, disown 명령어] 무중단 서비스 nohup, disown",
    summary:
      "터미널로 접속해서 명령어를 실행한 후, 해당 터미널을 종료해도 계속 명령어가 실행되도록 유지하고 싶을 때 nohup 명령어를 사용한다. 무중단 서비스를 위해 nohu p 을 이용하여 백그라운드에서 실행시키자.",
    category: "Linux/Troubleshooting",
    tags: [],
    date: "2022-06-11",
    thumb: null,
  },
  {
    id: 193,
    slug: "java-null",
    title: "null 이란?",
    summary:
      "1. null 이란? 1) null 정의 값이 할당되지 않은 변수. 모든 참조 유형이 될 수있는 특수 리터럴이다. (모든 참조는 null 가능) null은 '객체 없음'또는 '알 수 없음' 또는 '사용할 수 없음",
    category: "Backend/Java",
    tags: [],
    date: "2020-07-06",
    thumb: "posts/java-null/images/image_1.jpg",
  },
  {
    id: 194,
    slug: "scp-command",
    title: "scp 명령어 : scp 명령어를 이용한 파일 복사 및 전송",
    summary:
      "scp [ path ] [ user name ] @ [ IP ] : [ receive path ] scp . / minji . zip root@ 192.168 .100 .100 : / root계정으로 . / 에 위치",
    category: "Linux/Administration",
    tags: [],
    date: "2021-03-17",
    thumb: null,
  },
  {
    id: 195,
    slug: "linux-restrict-su",
    title: "su 명령어 사용 제한",
    summary:
      "1. su 명령 파일 수정 :: pam.d/su 의 주석 제거 vi / etc / pam . d / su 들어가보면 5번째 줄의 auth required pam_wheel.so.use_uid 부분이 주석이 되어있다.",
    category: "Linux/Administration",
    tags: [],
    date: "2021-02-23",
    thumb: "posts/linux-restrict-su/images/image_1.jpg",
  },
  {
    id: 196,
    slug: "sudo-su-difference",
    title: "sudo, su, su - 차이점",
    summary:
      "sudo, su, su - 차이점 sudo: 현재 계정에서 다른 계정의 권한만 빌림 su: 다른 계정으로 전환 su -: 다른계정으로 전환 + 그 계정의 환경변수 적용 상세내용 sudo는 root가 아닌",
    category: "Linux/Administration",
    tags: [],
    date: "2023-02-27",
    thumb: "posts/sudo-su-difference/images/image_1.jpg",
  },
  {
    id: 197,
    slug: "raspberry-pi-proximity-screen-switcher-1",
    title: "가까이 오면 실행중인 화면이 바뀌는 장치 만들기.1",
    summary:
      "0. 라이브러리 설치 pip install pypiwin32 ++ 1. 특정 윈도우(창)의 핸들 받아오는 함수 import win32gui def GetHwnds ( pid = None ) : def call",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-09-16",
    thumb:
      "posts/raspberry-pi-proximity-screen-switcher-1/images/image_1.jpg",
  },
  {
    id: 198,
    slug: "oop-overloading-vs-overriding-constructor",
    title: "객체지향, 오버로딩과 오버라이딩의 차이, 생성자",
    summary:
      "1. 객체지향 에서 중요하다고 여겨지는 두 가지 - 상속 - 다형성 .. 그리고 그 기반에 추상화 라는 원리가 숨겨져 있다 2. 오버로딩과 오버라이딩의 차이 오버로딩 은 중복선언 . = 여러번",
    category: "Backend/Java",
    tags: [],
    date: "2019-09-15",
    thumb:
      "posts/oop-overloading-vs-overriding-constructor/images/image_1.jpg",
  },
  {
    id: 200,
    slug: "tcp-port-scan-open-half-fin",
    title:
      "🏴‍☠️ 네트워크 패킷을 이용한 해킹(TCP Open Scan, TCP Half Scan, FIN Scan)",
    summary:
      "네트워크 패킷을 이용한 해킹 # 환경 준비 - 타깃 : CentOS(nat, 네트워크 설정) / 본체 컴퓨터 - 해커 : Kali(nat) * id, pw : kali # 포트 스캔을 이용한 정보수집 타깃이",
    category: "Security",
    tags: [],
    date: "2021-04-21",
    thumb:
      "posts/tcp-port-scan-open-half-fin/images/image_1.jpg",
  },
  {
    id: 201,
    slug: "docker-network-isolation-linux",
    title: "도커는 결국 리눅스다. Docker 네트워크 격리의 원리",
    summary:
      "저번 포스팅에서는 리눅스에서 네트워크 격리와 연결을 직접 다뤄보며 컨테이너 네트워크 가 어떻게 구현되는지를 확인했습니다. 리눅스로 컨테이너 네트워크 알아보기 (리눅스 네임스페이스) 도커란, 결국 하나의 리눅스 커",
    category: "Cloud/Docker",
    tags: [],
    date: "2025-09-17",
    thumb:
      "posts/docker-network-isolation-linux/images/image_1.jpg",
  },
  {
    id: 202,
    slug: "raspberry-pi-raspbian-install-korean-font",
    title:
      "라즈베리 파이 B+ 설치하기, 라즈비안 RASPBIAN 설치, 한글 깨짐 현상 해결",
    summary:
      "0. 준비할 것 - 라즈베리파이 OS 설치 작업을 할 노트북 💻 혹은 데스크탑 🖥 - microSD 메모리카드 리더 + micro SD 메모리 (라즈베리파이 OS 설치용 16GB 이상 권장) (USB는추후 라즈비안을",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-04-05",
    thumb:
      "posts/raspberry-pi-raspbian-install-korean-font/images/image_1.jpg",
  },
  {
    id: 203,
    slug: "raspberry-pi-ssh-remote-access",
    title:
      "라즈베리 파이 원격으로 접속하기.(PC에서 SSH 원격 접속) Windows, Linux, PuTTY",
    summary:
      "라즈베리 파이 원격으로 접속하기 PC에서 SSH 원격 접속 ( Windows, Linux, PuTTY) (이전글: 라즈베리 파이 b+ 라즈비안 설치하기) 라즈베리 파이 B+ 설치하기, 라즈비안 RASPBI",
    category: "IoT/RaspberryPi",
    tags: [],
    date: "2020-04-07",
    thumb:
      "posts/raspberry-pi-ssh-remote-access/images/image_1.jpg",
  },
  {
    id: 205,
    slug: "linux-ps1-prompt",
    title: "리눅스 PS1 쉘 프롬프트 변경, 전체 경로(pwd)표시하기",
    summary:
      "쉘 변수, PS1 현재 사용자의 시스템 사용환경을 개별적으로 사용할 수 있도록 지원하는 사용자별 시스템 환경변수를 쉘 변수라 한다. 쉘변들 가운데 PS1 이라는 쉘 변수가 있는데 이 쉘 변수는 우리가 사용하는 쉘 변",
    category: "Linux/Administration",
    tags: [],
    date: "2021-02-22",
    thumb:
      "posts/linux-ps1-prompt/images/image_1.jpg",
  },
  {
    id: 206,
    slug: "linux-syslog-basics",
    title: "리눅스 :: Syslog 이론",
    summary:
      "로그 ? 출처 입력 운영체제나 소프트웨어가 실행 중 발생하는 이벤트 나 각기 다른 사용자의 통신 소프트웨어 간의 메시지를 기록한 파일. 로그를 기록하는 행위를 로깅(logging) 이라고 한다. 로그의 종류 시스",
    category: "Linux/Administration",
    tags: [],
    date: "2020-08-31",
    thumb: null,
  },
  {
    id: 207,
    slug: "linux-syslog-config",
    title: "리눅스 :: Syslog 활용, 로그 파일 설정하기",
    summary:
      "Syslog 를 설정해서 원하는 곳에 로그 데이터 저장하기 ﻿ * . * / var / log / minji . log var 안에 -> log안에 -> minji.log 에 저장! 프로그램 재실행 해주기 : ﻿",
    category: "Linux/Administration",
    tags: [],
    date: "2020-08-31",
    thumb:
      "posts/linux-syslog-config/images/image_1.jpg",
  },
  {
    id: 208,
    slug: "linux-passwd-shadow",
    title: "리눅스 passwd 패스워드 삭제 명령어, shadow 파일",
    summary:
      "리눅스 passwd 패스워드 없애기 passwd - d test01 Removing password for user test01 . passwd : Success # 리눅스 shadow 파일 shadow 파일 :",
    category: "Linux/Administration",
    tags: [],
    date: "2021-03-30",
    thumb: null,
  },
  {
    id: 209,
    slug: "linux-absolute-relative-path",
    title: "리눅스 :: 리눅스 절대경로 상대경로, 디렉토리 이동 명령어",
    summary:
      "1. 절대경로 절대경로란 최상위 디렉토리 (/)부터 시작해서 목표 디렉토리까지 가는 경로를 전부 기술하는 방식이다. 절대경로로 경로를 기술할 때에는 항상 맨 앞에 최상위 디렉토리 (/)가 붙는다는 것을 명심하자. 절",
    category: "Linux/Administration",
    tags: [],
    date: "2020-08-31",
    thumb:
      "posts/linux-absolute-relative-path/images/image_1.jpg",
  },
  {
    id: 210,
    slug: "linux-export-environment-variables",
    title: "[리눅스 명령어] export 명령어와 환경변수",
    summary:
      'ansible 공부하며 다시 리눅스 기초 공부를 하던 중 사용하게된 export 명령어. ​ [환경변수] "쉘 스크립트에서 변수 명 앞에 export을 붙여주면 환경 변수로 설정되어 자식 스크립트에서 사용 가능하다.',
    category: "Linux/Administration",
    tags: [],
    date: "2023-01-16",
    thumb:
      "posts/linux-export-environment-variables/images/image_1.jpg",
  },
  {
    id: 211,
    slug: "linux-shell-bash-bashrc-bash-profile",
    title: "리눅스 쉘(Shell)과 Bash | bashrc, .bash_profile",
    summary:
      "쉘(Shell) 쉘이란, 사용자와 커널 사이의 매개체 역할을 하는 프로그램이다. 사용자가 커널에 직접 명령을 내릴 수 있게 하는 프로그램이다. 즉, 쉘은 사용자로부터 명령을 받아서 그것을 프로세싱 하기 위해 커널에게",
    category: "Linux/Administration",
    tags: [],
    date: "2023-02-27",
    thumb:
      "posts/linux-shell-bash-bashrc-bash-profile/images/image_1.jpg",
  },
  {
    id: 212,
    slug: "linux-network-namespace-container",
    title: "리눅스로 컨테이너 네트워크 알아보기 (리눅스 네임스페이스)",
    summary:
      "도커란, 결국 하나의 리눅스 커널 위에서 여러 개의 격리된 실행 환경 을 제공하는 기술 입니다. docker run 한 줄로 띄우는 컨테이너도 사실 리눅스 내부에서 이미 존재하던 기능들이 자동으로 설정된 결과물인",
    category: "Linux/Administration",
    tags: [],
    date: "2025-09-10",
    thumb:
      "posts/linux-network-namespace-container/images/image_1.jpg",
  },
  {
    id: 213,
    slug: "linux-users-groups-permissions",
    title: "리눅스의 권한, 사용자, 그룹 (useradd, usermod, chmod, chown)",
    summary:
      "1. useradd 리눅스에서는 다음과 같이 새로운 계정을 생성 할 수 있다. useradd test01 새로 생성한 test01 에 대한 정보는 /etc/passwd 에서 확인할 수 있으며, 다음과 같이 생성되",
    category: "Linux/Administration",
    tags: [],
    date: "2024-03-03",
    thumb:
      "posts/linux-users-groups-permissions/images/image_1.jpg",
  },
  {
    id: 214,
    slug: "arp-spoofing-lab",
    title: "🏴‍☠️ 보안 :: ARP 스푸핑 (실습)",
    summary:
      "0. 환경 준비 - 타깃 : XP / win 10 (NAT) - 해커 : 칼리(NAT) 1. 공격 / 해커(칼리) 컴퓨터에 터미널 3개를 띄우고 실습. arp 스푸핑을 이용한 MITM 공격 ( Man in the",
    category: "Security",
    tags: [],
    date: "2021-04-21",
    thumb: "posts/arp-spoofing-lab/images/image_1.jpg",
  },
  {
    id: 215,
    slug: "async-ajax-callback",
    title:
      "비동기 통신과 AJAX (동기 비동기의 개념, 차이,장단점, 예시, 콜백함수, 콜백지옥)",
    summary:
      "비동기 통신과 AJAX (동기 비동기의 개념, 차이,장단점, 예시, 콜백함수, 콜백지옥) 데이터를 받는 방식인 동기와 비동기 그리고 AJAX. 각각이 무엇이며, 어떤 특징이 있는지 예시를 통해 알아본다.",
    category: "Frontend/Web",
    tags: [],
    date: "2021-07-20",
    thumb:
      "posts/async-ajax-callback/images/image_1.jpg",
  },
  {
    id: 216,
    slug: "linux-su-who-last",
    title: "사용자 로그인 관련 명령어 su, who, last",
    summary:
      "사용자 로그인 관련 명령어 - su - who - last #su 명령어 switch user 라고 불리며 특정 사용자로 전환할 때 사용. su - [ 사용자명 ] 다른 사용자로 로그인할 때 사용한다. 💡 d",
    category: "Linux/Administration",
    tags: [],
    date: "2021-02-22",
    thumb:
      "posts/linux-su-who-last/images/image_1.jpg",
  },
  {
    id: 218,
    slug: "spring-boot-ambiguous-mapping-error",
    title:
      "스프링부트 에러 Caused by: Ambiguous mapping. Cannot map 'sampleController' method 해결",
    summary:
      "스프링부트 에러 Caused by: Ambiguous mapping. Cannot map 'sampleController' method 해결 이유는 GetMapping이 두 개 존재해서 그런거였다. 그래서",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-04-13",
    thumb:
      "posts/spring-boot-ambiguous-mapping-error/images/image_1.jpg",
  },
  {
    id: 219,
    slug: "openstack-glance",
    title: "오픈스택 Glance(이미지 관리 서비스)",
    summary:
      "오픈스택 Glance(이미지 관리 서비스) # 이미지 : 가상머신 ova 파일 같은 것. 1) Glance 구조 이미지를 저장하면 glance-registry로 Glance DB에 저장 2) 가상머신 이미지 형식",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-12",
    thumb:
      "posts/openstack-glance/images/image_1.jpg",
  },
  {
    id: 220,
    slug: "openstack-cinder-volume-service-down",
    title:
      "📍[ 오픈스택 :: cinder-volume service is down ] cinder-volume 서비스가 자꾸 down되는 에러",
    summary:
      "여기에 있어야할 cinder-volume 이 없다. 일단 그러면 컴퓨트 노드에 LVM 설정할 때 해줬던 명령어 한번 더 쳐주면 생기고, losetup / dev / loop0 / var / lib / cind",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-12",
    thumb:
      "posts/openstack-cinder-volume-service-down/images/image_1.jpg",
  },
  {
    id: 221,
    slug: "openstack-pike-no-valid-host-found",
    title:
      '오픈스택 에러 "Openstack pike: No valid host was found. There are not enough hosts available."',
    summary:
      "Openstack pike: No valid host was found. There are not enough hosts available. 오픈스택 인스턴스 생성이 안되는 상황에서 위 에러를 만났다.",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-13",
    thumb:
      "posts/openstack-pike-no-valid-host-found/images/image_1.jpg",
  },
  {
    id: 222,
    slug: "openstack-compute-ovs-agent-down",
    title:
      "📍 오픈스택 에러 :: compute 서비스 다운, 네트워크 노드 Open vSwitch agent 서비스 다운",
    summary:
      "1. Open vSwitch agent setenforce 0 systemctl restart neutron - openvswitch - agent 2. 컨트롤러에서 먼저 : systemctl restart",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-18",
    thumb:
      "posts/openstack-compute-ovs-agent-down/images/image_1.jpg",
  },
  {
    id: 223,
    slug: "openstack-keystone-500-error",
    title:
      "오픈스택 에러 :: openstack internal server error (http 500) keystone",
    summary:
      "오픈스택 에러.... openstack internal server error (http 500) keystone http 500 에러면 httpd 쪽 로그를 봐야 하는데 다른 쪽 에러만 보고 있었다 cd /",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-20",
    thumb: null,
  },
  {
    id: 224,
    slug: "observer-pattern",
    title: "👀 옵저버 패턴 (micro-frontends)",
    summary:
      "micro-frontends 를 공부하다가 자꾸 눈에 띄는 Pub/Sub구조. Pub/Sub구조와 옵저버 패턴 에 대해 간단히 정리한 포스팅이다. # Pub/Sub 구조 Pub/Sub 구조는 '비동기식' 메세징",
    category: "Backend/Architecture",
    tags: [],
    date: "2021-07-05",
    thumb: null,
  },
  {
    id: 225,
    slug: "kubernetes-install-ubuntu-20-04",
    title: "우분투(Ubuntu 20.04)에 쿠버네티스 설치하기",
    summary:
      "우분투 (Ubuntu 20.04) Kubernetes 설치 우분투 Kubernetes 설치 Ubuntu 20.04 우분투에서 쿠버네티스를 설치하는 방법을 설명한다. Kubernetes 설치 후 Master 노",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-23",
    thumb:
      "posts/kubernetes-install-ubuntu-20-04/images/image_1.jpg",
  },
  {
    id: 226,
    slug: "xss-session-hijacking",
    title: "웹 보안🏴‍☠️ Cross-Site Scripting(XSS) 세션 탈취",
    summary:
      "Cross-Site Scripting(XSS) 세션 탈취 (네트워크 트래픽 스니핑을 통한 HTTP 요청 헤더 안의 쿠키값) 웹 서버 상의 HTML 코드 삽입이 가능한 페이지는 주로 사용자가 글을 게시할 수 있는",
    category: "Security",
    tags: [],
    date: "2021-04-26",
    thumb:
      "posts/xss-session-hijacking/images/image_1.jpg",
  },
  {
    id: 227,
    slug: "sql-injection-error-union",
    title: "웹 보안 🏴‍☠️ Error SQL Injection, UNION SQL Injection",
    summary:
      "🧨 Error SQL Injection 고의적으로 에러를 발생시켜서 DB 정보를 획득하는 공격. SQL에서 having은 group by에 의해 그룹화된 데이터 검색 조건을 설정하여 데이터를 검색할수 있다. 그러나",
    category: "Security",
    tags: [],
    date: "2021-04-26",
    thumb:
      "posts/sql-injection-error-union/images/image_1.jpg",
  },
  {
    id: 228,
    slug: "beef-xss",
    title: "웹보안🏴‍☠️ BeeF XSS",
    summary:
      "XSS SQL 인젝션처럼 사용자가 입력한 데이터를 검증하지 않아서 발생하는 취약점으로 사용자가 입력한 내용 중에 스크립트 형식의 내용이 그대로 DB에 저장되어 해당 내용을 조회할 때 스크립트가 그대로 동작하게 된다.",
    category: "Security",
    tags: [],
    date: "2021-04-26",
    thumb: "posts/beef-xss/images/image_1.jpg",
  },
  {
    id: 229,
    slug: "sql-injection-bypass",
    title: "웹보안🏴‍☠️ SQL injection :: Bypass SQL Injection",
    summary:
      "# SQL injection Bypass SQL Injection 사용자가 웹을 이용하면서 입력할 수 있는 곳에서 DB와 연결이되는 부분에 정상정인 입력 값이 아닌 SQL구문을 삽입해서 DB의 내용을 조작하거나 알아",
    category: "Security",
    tags: [],
    date: "2021-04-26",
    thumb:
      "posts/sql-injection-bypass/images/image_1.jpg",
  },
  {
    id: 230,
    slug: "eclipse-tomcat-chrome",
    title: "이클립스 톰캣 연동, 이클립스 웹 프로젝트 크롬으로 실행되게 설정",
    summary:
      "1. 이클립스 톰캣 연동 하기 아래 servers 탭의 저것 클릭 1, 2, 3 차례대로 클릭. 계속 Next 하다가 톰캣이 있는 경로로 browse 후 Finish. 이어서 2. 톰캣 프로젝트",
    category: "DevTools",
    tags: [],
    date: "2020-12-16",
    thumb:
      "posts/eclipse-tomcat-chrome/images/image_1.jpg",
  },
  {
    id: 231,
    slug: "intellij-css-not-applied",
    title: "인텔리제이 CSS 파일 적용 안되는 에러",
    summary:
      "분명히 경로 맞게 해 줬는데도 계속 CSS 파일을 못찾길래 살펴보니 web war exploded 파일과 그냥 파일이 따로 나눠져 있었고 내용이 달랐다. web war exploded 에 static 파일 넣",
    category: "DevTools",
    tags: [],
    date: "2021-03-29",
    thumb:
      "posts/intellij-css-not-applied/images/image_1.jpg",
  },
  {
    id: 232,
    slug: "java-stack-implementation",
    title: "[자료구조::Java] 스택(Stack) 자바로 구현하기",
    summary:
      "자바로 스택 짜보기 스택 설명 스택은 대충 이런 거였어요 [문제의 코드] public class Stack { int [ ] st = new int [ 5 ] ; int top = - 1 ; public void",
    category: "Backend/Java",
    tags: [],
    date: "2020-11-30",
    thumb:
      "posts/java-stack-implementation/images/image_1.jpg",
  },
  {
    id: 233,
    slug: "java-queue-circular-queue",
    title:
      "자료구조::Java | 큐(Queue), 원형 큐(Circular Queue) 개념 및 자바로 구현",
    summary:
      "0. 큐(Queue)의 기본 개념 큐(Queue)는 줄(line) 이라는 의미 큐(Queue)란 데이터의 제거가 대기 줄의 가장 앞에서 수행되고 데이터의 삽입은 대기 줄의 가장 뒤에서 수행이 되는 제한된 리스트 구조",
    category: "Backend/Java",
    tags: [],
    date: "2020-12-09",
    thumb:
      "posts/java-queue-circular-queue/images/image_1.jpg",
  },
  {
    id: 234,
    slug: "java-stack-implementation-2",
    title: "[자료구조] Java Stack 구현 / 자바 스택 구현",
    summary:
      "Stack (스택) 한쪽 끝에서만 자료를 넣고 뺄 수 있는 자료구조 스택. - 데이터를 일시적으로 보관하는 자료구조 - 선입후출 (FILO: First In, Last Out ) - 스택에 데이터를 넣는 push,",
    category: "Backend/Java",
    tags: [],
    date: "2022-05-16",
    thumb:
      "posts/java-stack-implementation-2/images/image_1.jpg",
  },
  {
    id: 235,
    slug: "java-alternating-characters",
    title: "자바 Java 문제풀이 | 두 가지 문자를 번갈아가며 표시하는 프로그램",
    summary:
      "읽은 값의 개수만큼 *와 +를 번갈아 가며 표시하는 프로그램 작성. public class Random1 { public static void main ( String[] args ) { // TODO Auto-",
    category: "Backend/Java",
    tags: [],
    date: "2020-07-14",
    thumb: null,
  },
  {
    id: 236,
    slug: "java-swing-keep-character-in-frame",
    title: "자바 스윙 Java Swing | 캐릭터가 window frame을 벗어나지 않게 하기",
    summary:
      "[ 자바 스윙 Java swing 공부 ] 1. 움직이는 캐릭터가 창 (window frame) 을 넘어가지 않는 것. 기존 코드에서는 캐릭터가 왼쪽으로 움직일 때, window frame 을 넘어 무한정",
    category: "Backend/Java",
    tags: [],
    date: "2020-07-02",
    thumb: null,
  },
  {
    id: 237,
    slug: "java-method-overloading",
    title: "자바기초 '메소드 오버로딩(overloading)'",
    summary:
      "메소드 오버로딩(overloading) 메소드 오버로딩 이란 같은 이름의 메소드를 중복 정의하는 것을 의미 한다. 자바에서는 원래 한 클래스 내에 같은 이름의 메소드를 둘 이상 가질 수 없다. 하지만 매개변수의",
    category: "Backend/Java",
    tags: [],
    date: "2022-02-07",
    thumb:
      "posts/java-method-overloading/images/image_1.jpg",
  },
  {
    id: 238,
    slug: "java-constructor",
    title: "자바기초 '생성자'",
    summary:
      "Java 생성자 생성자란? 클래스로 객체를 만들 때 무조건 호출되는 메소드. new 연산자와 같이 사용되어 클래스로부터 객체를 생성할 때 호출되어 객체의 초기화를 담당한다. 여기서 객체 초기화란 필드를 초기화하거",
    category: "Backend/Java",
    tags: [],
    date: "2022-02-08",
    thumb: "posts/java-constructor/images/image_1.jpg",
  },
  {
    id: 239,
    slug: "java-constructor-overloading",
    title: "자바기초 '생성자 오버로딩(Overloading)'",
    summary:
      "생성자 오버로딩 (Overloading) 생성자도 결국 메소드. 오버로딩 할 수 있다. 외부에서 제공되는 다양한 데이터들을 이용해서 객체를 초기화 하려면 생성자도 다양화될 필요가 있다. Cat 이라는 객체 생성",
    category: "Backend/Java",
    tags: [],
    date: "2022-02-08",
    thumb:
      "posts/java-constructor-overloading/images/image_1.jpg",
  },
  {
    id: 240,
    slug: "django-matching-query-does-not-exist",
    title: "장고 에러 Django error - matching query does not exist",
    summary:
      "에러 상황 : matching query does not exist 로그인을 시도할 때 아이디와 (username) 일치하는 게 없는 상황. 회원가입을 시도하지 않은 임의의 아무 username 을 갖다 붙이고",
    category: "Backend/Python",
    tags: [],
    date: "2021-07-19",
    thumb:
      "posts/django-matching-query-does-not-exist/images/image_1.jpg",
  },
  {
    id: 241,
    slug: "java-static-method",
    title: "정적 메소드 static (자바 static이란?)",
    summary:
      "정적 메소드(static Method)란? static 이란, static으로 지시된 특정한 멤버가 해당 클래스의 인스턴스가 아니라 클래스 자체에 속해 있음을 나타내는 자바 키워드다. 클래스에 고정된 멤버. 그래",
    category: "Backend/Java",
    tags: [],
    date: "2022-05-17",
    thumb:
      "posts/java-static-method/images/image_1.jpg",
  },
  {
    id: 242,
    slug: "gpt-watermark-u202f-ai-content-search",
    title: "'GPT 워터마크(U+202F)'는 진짜 워터마크일까? 문자 워터마크의 한계와 AI 글 검색 노출 기준",
    summary:
      "한때 GPT 워터마크로 불린 U+202F 이슈가 어떻게 정리됐는지, 보이지 않는 문자가 워터마크가 되기 어려운 이유, 네이버와 구글이 AI로 쓴 글을 어떤 기준으로 다루는지 정리했어요.",
    category: "AI",
    tags: [],
    date: "2025-09-20",
    thumb:
      "posts/gpt-watermark-u202f-ai-content-search/images/image_1.jpg",
  },
  {
    id: 243,
    slug: "kafka-kraft-zookeeper-both-configured-error",
    title: "카프카 에러 Both KRaft mode and Zookeeper modes are configured",
    summary:
      "다음과 같은 에러가 나면서 카프카가 자꾸 죽는 현상이 있었다. kafka ERROR == > Both KRaft mode and Zookeeper modes are configured , but KAFKA_CFG_Z",
    category: "Search/Kafka",
    tags: [],
    date: "2023-09-08",
    thumb: null,
  },
  {
    id: 244,
    slug: "kubernetes-image-pod-deployment-service-flow",
    title: "📦 쿠버네티스 image, pod, deployment, service 생성 과정",
    summary:
      "테스트 중에 에러나면.. 지우고 아래 과정 다시 반복해야해서 정리해둔 글. # 전체 과정 1. 스프링부트에서 .jar 파일 생성 FROM openjdk : 8u292 - slim - buster RUN apt -",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-07-05",
    thumb:
      "posts/kubernetes-image-pod-deployment-service-flow/images/image_1.jpg",
  },
  {
    id: 245,
    slug: "kafka-install-kubernetes",
    title: "쿠버네티스 카프카 설치(Kafka install in Kubernetes)",
    summary:
      "Kubernetes 카프카 설치 쿠버네티스에 카프카 설치 OS 우분투(Ubuntu 20.04) *카프카 : bin packing(1개 가상/물리 장비에서 여러 application을 돌리는 것)을 통해 리소스",
    category: "Cloud/Kubernetes",
    tags: [],
    date: "2021-06-23",
    thumb:
      "posts/kafka-install-kubernetes/images/image_1.jpg",
  },
  {
    id: 246,
    slug: "openstack-manual-9-cinder",
    title:
      "[클라우드] Open Stack 오픈 스택 수동 설치 cinder (블록 스토리지 서비스) 설치 /9",
    summary:
      "(1) DB 설정 [1] controller mysql -u root -p CREATE DATABASE cinder; GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'localhos",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-11",
    thumb:
      "posts/openstack-manual-9-cinder/images/image_1.jpg",
  },
  {
    id: 247,
    slug: "openstack-manual-3-glance",
    title: "[클라우드] Open Stack 오픈 스택 수동 설치 'glance' /3",
    summary:
      "2. glance (이미지 서비스) (1) DB 생성 [1] controller mysql - u root - p CREATE DATABASE glance ; GRANT ALL PRIVILEGES ON glanc",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-10",
    thumb:
      "posts/openstack-manual-3-glance/images/image_1.jpg",
  },
  {
    id: 248,
    slug: "openstack-manual-8-horizon",
    title:
      "[클라우드] Open Stack 오픈 스택 수동 설치 'horizon (대시보드 서비스)'설치 /8",
    summary:
      "(1) 서비스 설치 [1] controller dnf - y install openstack - dashboard (2) 서비스 설정 [1] controller vi / etc / openstack - dashb",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-11",
    thumb:
      "posts/openstack-manual-8-horizon/images/image_1.jpg",
  },
  {
    id: 249,
    slug: "openstack-manual-7-neutron",
    title:
      "[클라우드] Open Stack 오픈 스택 수동 설치 'neutron 네트워크 서비스'설치 /7",
    summary:
      "### 중요한 부분이니, 시작하기 전 스냅샷 찍어두시면 좋습니다 ### 5. neutron (네트워크 서비스) (1) DB 생성 [1] controller mysql -u root -p CREATE DATABAS",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-11",
    thumb:
      "posts/openstack-manual-7-neutron/images/image_1.jpg",
  },
  {
    id: 250,
    slug: "openstack-manual-6-nova-compute-node",
    title:
      "[클라우드] Open Stack 오픈 스택 수동 설치 'nova' 설치(compute 노드) /6",
    summary:
      "(5) compute 노드 서비스 설치 ** compute 노드에서 진행) dnf - y install openstack - nova - compute (5) compute 노드 서비스 설정 [2] compute",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-11",
    thumb: null,
  },
  {
    id: 251,
    slug: "openstack-manual-5-nova",
    title: "[클라우드] Open Stack 오픈 스택 수동 설치 'nova'설치 /5",
    summary:
      "### 시작하기 전 스냅샷 찍어두시면 좋습니다 ### 4) nova (컴퓨팅 서비스) (1) DB 생성 [1] controller mysql -u root -p CREATE DATABASE nova_api; CR",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-11",
    thumb: null,
  },
  {
    id: 252,
    slug: "openstack-manual-4-placement",
    title: "[클라우드] Open Stack 오픈 스택 수동 설치 'placement'설치 /4",
    summary:
      "### 시작하기 전 스냅샷 찍어두시면 좋습니다 ### 3. placement 배포 서비스, Stein 버전 이전에는 nova 서비스에 포함되어 있었지만 stein 이후 버전에서는 따로 빠져나옴. https://b",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-10",
    thumb:
      "posts/openstack-manual-4-placement/images/image_1.jpg",
  },
  {
    id: 253,
    slug: "openstack-manual-2-services",
    title:
      "[클라우드] Open Stack 오픈 스택 수동 설치 '오픈스택 서비스 설치' /2",
    summary:
      "인증관련 서비스부터 설치 2. 오픈스택 서비스 설치 1) keystone (인증 서비스) (1) DB 생성 [1] controller mysql -u root -p CREATE DATABASE keystone;",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-10",
    thumb:
      "posts/openstack-manual-2-services/images/image_1.jpg",
  },
  {
    id: 254,
    slug: "openstack-flavor",
    title: "[클라우드] Open Stack 오픈스택 :: Flavor 추가",
    summary:
      "오픈스택 Flavor 추가 확인: 플레이버 두 개 더 만들어본다. 확인:",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-12",
    thumb:
      "posts/openstack-flavor/images/image_1.jpg",
  },
  {
    id: 255,
    slug: "openstack-controller-reboot-checklist",
    title:
      "📍 [클라우드] Open Stack 오픈스택 controller 재부팅 했을 때 에러, 확인해야할 서비스 목록",
    summary:
      "오픈스택 controller 재부팅 했을 때 확인할 서비스 시스템 정보 탭 확인해서 Down 인 것 Up으로 ===================================== systemctl status",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-12",
    thumb:
      "posts/openstack-controller-reboot-checklist/images/image_1.jpg",
  },
  {
    id: 256,
    slug: "openstack-network-architecture",
    title: "[클라우드] Open Stack 오픈스택 :: 네트워크 구조",
    summary:
      "오픈스택 네트워크 구조 0) SDN Software-Defined Networking 기존의 네트워크 인프라가 가지고 있던 문제를 해결하기 위해서 나온 개념. 기존의 네트워크 인프라를 구성하는 네트워크 장비들은",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-12",
    thumb:
      "posts/openstack-network-architecture/images/image_1.jpg",
  },
  {
    id: 257,
    slug: "openstack-add-network-image",
    title: "[클라우드] Open Stack 오픈스택 :: 네트워크 추가, 이미지 추가",
    summary:
      "1) 네트워크 추가(관리자가 관리자 프로젝트) [1] 외부 네트워크 추가 (브릿지처럼, 시스템 전체에서 쓰는거기 때문에 관리에서 추가) 관리 -> 네트워크 -> 네트워크 생성 -> 이름(external), 프로젝",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-12",
    thumb:
      "posts/openstack-add-network-image/images/image_1.jpg",
  },
  {
    id: 258,
    slug: "openstack-create-instance",
    title: "[클라우드] Open Stack 오픈스택 :: 인스턴스 (가상 컴퓨터) 생성",
    summary:
      "프로젝트 -> Compute -> 인스턴스 -> 인스턴스 시작 -> 인스턴스 이름(cirros) -> next 원하는 이미지의 위 모양 화살표 눌러서 위로 추가 -> next m1.tiny 의 위 모양",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-12",
    thumb:
      "posts/openstack-create-instance/images/image_1.jpg",
  },
  {
    id: 259,
    slug: "openstack-custom-cloud-image",
    title: "클라우드용 커스텀 이미지 관리",
    summary:
      "클라우드용 커스텀 이미지 관리 (1) virt-manager 설치 dnf - y install virt - manager (2) MacOs에 X11설치 리눅스(compute)에서 아래를 설치. dnf - y",
    category: "Cloud/OpenStack",
    tags: [],
    date: "2021-05-14",
    thumb:
      "posts/openstack-custom-cloud-image/images/image_1.jpg",
  },
  {
    id: 260,
    slug: "python-venv",
    title: "파이썬 가상 환경 venv :: 가상 환경 만들기, 가상 환경 끄기",
    summary:
      "0. 파이썬 가상 환경이란? 파이썬에서 가상 환경(virtual environment)은 하나의 PC에서 프로젝트 별로 독룁된 파이썬 실행 환경(runtime/interpreter)을 사용할 수 있도록 해줍니다. 독",
    category: "Backend/Python",
    tags: [],
    date: "2020-08-17",
    thumb:
      "posts/python-venv/images/image_1.jpg",
  },
  {
    id: 261,
    slug: "python-payroll-program",
    title: "파이썬 문제 :: 사원 임금 관리 프로그램",
    summary:
      "흑 ㅠ class Person : def __init__ ( self , id , name ) : self . __id = id self . __name = name def get_id ( self ) : retur",
    category: "Backend/Python",
    tags: [],
    date: "2020-07-27",
    thumb: null,
  },
  {
    id: 262,
    slug: "linux-kill-pkill-sleep",
    title: "프로세스 제어 명령어 kill, pkill, sleep",
    summary:
      "프로세스에게 시그널 번호를 전송하는 kill과 pkill 명령어. kill : PID로 프로세스를 제어, pkill : 프로세스 이름으로 제어. 이름에 해당하는 프로세스 모두 다운(down) 가능. 1. ki",
    category: "Linux/Administration",
    tags: [],
    date: "2021-02-22",
    thumb:
      "posts/linux-kill-pkill-sleep/images/image_1.jpg",
  },
  {
    id: 263,
    slug: "macos-check-close-open-ports",
    title: "💻 현재 열려있는 포트 확인 및 닫기(mac)",
    summary:
      "쉘에서 다음과 같이 치면 현재 열린 포트 목록을 확인할 수 있다. sudo lsof - PiTCP - sTCP : LISTEN 특정 포트를 찾아 포트를 닫고 싶으면 다음과 같이 쳐서 PID를 알아낸다. sudo",
    category: "Linux/Troubleshooting",
    tags: [],
    date: "2021-04-21",
    thumb:
      "posts/macos-check-close-open-ports/images/image_1.jpg",
  },
  {
    id: 264,
    slug: "api-vs-endpoint",
    title: "API 와 Endpoint ? (둘 다 정확히 알고 있다면 안 봐도 되는 글)",
    summary:
      "API 와 Endpoint의 차이점? 둘 다 정확히 알고 있다면 안 봐도 되는 글. API 와 Endpoint의 차이 한 줄 정리 API가 두 시스템(어플리케이션)이 상호작용할 수 있게 하는 프로토콜의 총집합",
    category: "Backend/Architecture",
    tags: [],
    date: "2021-06-17",
    thumb:
      "posts/api-vs-endpoint/images/image_1.jpg",
  },
  {
    id: 265,
    slug: "aws-api-gateway-lambda-rest-api",
    title: "AWS API Gateway와 Lambda를 활용해 REST API 구축하기 1",
    summary:
      "AWS에서 API Gateway 와 Lambda 를 활용해 REST API 구축 하기! Lambda Function부터 만들어야 합니다. 우선 AWS홈페이지에서 Lambda 카테고리로 들어갑니다. [함수생",
    category: "Cloud/AWS",
    tags: [],
    date: "2020-08-30",
    thumb:
      "posts/aws-api-gateway-lambda-rest-api/images/image_1.jpg",
  },
  {
    id: 266,
    slug: "aws-ec2-react-node-14",
    title: "AWS EC2서버에 React 앱 실행하기 (ubuntu에 node 14.18.0 설치)",
    summary:
      "AWS EC2서버에 리액트 배포를 하고 싶었는데, 자꾸 에러나서 일단 그냥 실행으로 띄워봤다. 큰 차이 없을거라 생각했지만 파일 용량이 예상보다 커서 수정할 예정이다. 이렇게 하는 사람 별로 없겠지만 혹시 나처럼 그",
    category: "Cloud/AWS",
    tags: [],
    date: "2022-06-06",
    thumb:
      "posts/aws-ec2-react-node-14/images/image_1.jpg",
  },
  {
    id: 267,
    slug: "ansible-basics-elasticsearch-install",
    title:
      "Ansible 앤서블이란? 앤서블의 기본 개념, 용어, Ansible로 Elasticsearch 설치 (CentOS7)",
    summary:
      "1. 앤서블이란? Ansible (앤서블)은 여러 개의 서버를 효율적으로 관리할 수 있게 해주는 IT 환경 구성 자동화 도구이다. 시스템 구성하고, 소프트웨어 배포하고, 지속적인 배포 또는 제로 다운 타임 롤링 업데",
    category: "DevOps/Ansible",
    tags: [],
    date: "2023-02-20",
    thumb:
      "posts/ansible-basics-elasticsearch-install/images/image_1.jpg",
  },
  {
    id: 268,
    slug: "azure-key-vault-auth-expiry-incident",
    title: "Azure Key Vault 인증 만료 장애",
    summary:
      "Azure AD Client Secret 만료로 인해 발생했던 장애 기록 1. 장애 현상 Azure Blob Storage에 파일을 저장하고 Azure Key Vault를 사용하는 서비스를 운영하던 중, 어느",
    category: "Cloud/Azure",
    tags: [],
    date: "2025-12-27",
    thumb:
      "posts/azure-key-vault-auth-expiry-incident/images/image_1.jpg",
  },
  {
    id: 269,
    slug: "bearer-token",
    title: "Bearer is..?🤔 (토큰 기반 인증에서 bearer란)",
    summary:
      "JWT 토큰 기반 인증 시스템으로 로그인 기능을 구현해서 bearer라는 키워드를 수없이 보고 있는데.. 이 Bearer가 무엇인지 파악하고자 작성한 글 토큰 기반 인증 토큰 기반 인증은 쿠키나 세션을 이용한",
    category: "Security",
    tags: [],
    date: "2022-04-18",
    thumb:
      "posts/bearer-token/images/image_1.jpg",
  },
  {
    id: 270,
    slug: "builder-pattern-lombok-builder",
    title:
      "Builder Pattern 빌더 패턴의 특징, 장점 (@Builder 사용이유, @Builder 예제)",
    summary:
      "스프링 시큐리티 쓰면서 왜 빌더를 쓸까 궁금했었는데, 이제야 공부하고 정리해본다..^^ entity나 Dto객체에 값을 넣어줄때, 롬복의 빌더 애노테이션(@Builder)을 사용하는 예제들이 많다. 객체를 생성하",
    category: "Backend/Java",
    tags: [],
    date: "2022-08-09",
    thumb:
      "posts/builder-pattern-lombok-builder/images/image_1.jpg",
  },
  {
    id: 271,
    slug: "centos-static-ip",
    title: "[CentOS network] 속상한 네트워크 ip 수동 설정",
    summary:
      "맥북 / vmware fusion 입니다. 가상머신 network-scripts 파일을 수정해서 네트워크를 설정하는 방법. network-scripts/ifcfg-ens 에 네트워크 구성 파일들이 있다.",
    category: "Network",
    tags: [],
    date: "2021-02-26",
    thumb:
      "posts/centos-static-ip/images/image_1.jpg",
  },
  {
    id: 273,
    slug: "dhcp-lab",
    title: "DHCP 할당 확인 실습",
    summary:
      "DHCP DHCP 통신방식 : 브로드 캐스트 후보를 알려주면 - 응답 - 할당 - 응답 DHCP 할당 확인 실습 yum install dhcp 10분 마다 재시작 systemctl restart dhcpd",
    category: "Network",
    tags: [],
    date: "2021-07-19",
    thumb: "posts/dhcp-lab/images/image_1.jpg",
  },
  {
    id: 274,
    slug: "database-transaction-acid",
    title: "Database : Transaction과 ACID란?",
    summary:
      "1. 트랜잭션이란? 여러 작업들을 하나로 묶은 단위. 한 덩어리의 작업들은 모두 실행되거나, 모두 실행되지 않게 하여 작업의 완전성을 보장해주는 것이다. Transaction 을 좀 더 엔지니어적으로 표현하자면",
    category: "Database",
    tags: [],
    date: "2020-09-19",
    thumb: null,
  },
  {
    id: 275,
    slug: "doit-network-https-packet-lab-fix",
    title: "Do it 네트워크 기초 Https 패킷 실습 문제 오류와 해결방법",
    summary:
      "Do it 네트워크 기초 Https 패킷 실습 문제 오류와 해결방법 제가 지난번 포스팅에서 추천했던 개발 도서, Do it 네트워크 기초 에서 실습을 진행하다 보면 http 패킷 캡쳐 실습에서 책 대로 안되는 부",
    category: "Network",
    tags: [],
    date: "2026-03-06",
    thumb:
      "posts/doit-network-https-packet-lab-fix/images/image_1.jpg",
  },
  {
    id: 276,
    slug: "kibana-install",
    title: "ELK Kibana 설치, 설정하는법",
    summary:
      "Kibana 설치 # 방화벽 끄기 systemctl stop firewalld systemctl disable firewalld setenforce 0 1) 키바나 설치 rpm -- import https :",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2021-03-23",
    thumb: "posts/kibana-install/images/image_1.jpg",
  },
  {
    id: 277,
    slug: "elasticsearch-6-8-cluster-ubuntu",
    title: "Elasticsearch 6.8.23 설치 및 클러스터 구성(Ubuntu 20.04.5)",
    summary:
      "아키텍처 구성 master node 1대 data node 1대 data node 1대 설치 과정 ssh [IP] sudo su - root apt update apt install openjdk-11-jdk",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2022-12-25",
    thumb: null,
  },
  {
    id: 278,
    slug: "elasticsearch-7-cluster-upgrade",
    title: "Elasticsearch 7버전 클러스터 업그레이드",
    summary:
      "실제 운영 환경에서 Elasticsearch 7.17.11 업그레이드를 진행하며 겪었던 경험을 기반으로 정리한 글이다. 운영 중인 Elasticsearch 클러스터를 업그레이드하는 작업은 언제나 긴장된다. 특히",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2025-12-23",
    thumb:
      "posts/elasticsearch-7-cluster-upgrade/images/image_1.jpg",
  },
  {
    id: 279,
    slug: "elasticsearch-forcemerge",
    title: "Elasticsearch forcemerge 란?",
    summary:
      "Elasticsearch forcemerge 란? forcemerge 란 Elasticsearch에서 불필요한 Segments를 병합 하거나 삭제 된 doc들을 병합 하는 기능으로, Elasticsearch에서 사용",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-10-24",
    thumb: "posts/elasticsearch-forcemerge/images/image_1.jpg",
  },
  {
    id: 280,
    slug: "elasticsearch-kibana-password",
    title: "Elasticsearch, kibana 아이디 비밀번호 설정",
    summary:
      "Elasticsearch 비밀번호 설정 방법 7.x 버전 부터 비밀번호 설정 할 수 있도록 xpack 에 추가 되었다. 1) vi /etc/elasticsearch/elasticsearch elasticsearc",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-02-20",
    thumb:
      "posts/elasticsearch-kibana-password/images/image_1.jpg",
  },
  {
    id: 281,
    slug: "elasticsearch-maximum-shards-open",
    title: "[ Elasticsearch ] maximum normal shards open 해결",
    summary:
      "[ 에러 ] elasticsearch failed to flush export bulk [ default_local ] Validation Failed : 1 : this action would add [ 1 ] s",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-07-04",
    thumb: null,
  },
  {
    id: 282,
    slug: "elasticsearch-snapshot",
    title: "Elasticsearch snapshot 생성 방법",
    summary:
      "Elasticsearch의 스냅샷은 데이터 백업 및 복구 시 필수적인 기능이다. Elasticsearch의 스냅샷과 생성 방법에 대해 정리한다. 1) Elasticsearch에서 스냅샷을 실행할 때, 스냅샷",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-06-12",
    thumb:
      "posts/elasticsearch-snapshot/images/image_1.jpg",
  },
  {
    id: 283,
    slug: "elasticsearch-cluster-yellow",
    title: "Elasticsearch 클러스터 yellow 일때 !",
    summary:
      "1. Elasticsearch 클러스터 상태가 yellow Elasticsearch 클러스터 상태 3가지 1. Green: 모든 샤드의 복제본이 있고 클러스터가 정상적으로 작동함 2. Yellow : 모든 p",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-09-02",
    thumb:
      "posts/elasticsearch-cluster-yellow/images/image_1.jpg",
  },
  {
    id: 284,
    slug: "what-is-elasticsearch-inverted-index",
    title: "Elasticsearch란? 구조와 장단점, RDB 비교, 역색인",
    summary:
      "1. Elasticsearch 란? Apache Lucene(아파치 루씬) 기반의 Java 오픈소스 분산 검색 엔진 방대한 양의 데이터를 '거의' 실시간 (NRT, Near Real Time)으로 저장, 검색, 분석",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-01-27",
    thumb:
      "posts/what-is-elasticsearch-inverted-index/images/image_1.jpg",
  },
  {
    id: 285,
    slug: "elasticsearch-index-read-only",
    title: "Elasticsearch 'index read-only' 전환 현상",
    summary:
      "어느날 엘라스틱 서치가 index read-only 로 전환 되었다... 확인해보니 디스크 용량이 어느 수준으로 쌓이게되면 엘라스틱 서치 설정에 의하여 인덱스가 read only로 바뀌게 된다고 한다. 이 설정은",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-09-06",
    thumb:
      "posts/elasticsearch-index-read-only/images/image_1.jpg",
  },
  {
    id: 287,
    slug: "gif-file-structure-lzw",
    title: "GIF 파일이란? GIF 파일 구조, LZW 압축 방식",
    summary:
      "All of Gif GIF 파일 구조와 LZW 압축 방식에 대하여 Intro. 우노하나 만해 gif 요즘 흩날려라 천본앵 보다 더 인기가 좋아진 우노하나 만해 GIF 입니다. 다들 좋아하는 명장면 몇",
    category: "Media",
    tags: [],
    date: "2025-07-31",
    thumb: null,
  },
  {
    id: 288,
    slug: "video-to-gif-site-3-gifski",
    title: "동영상 GIF 변환하는 사이트 만들기 3 | gifski",
    summary:
      'git commit -m "고품질 GIF 만들기 여정 3" ​ 지난 포스팅에서는 FFmpeg 를 사용해 동영상을 GIF로 변환하는 과정을 다뤘습니다. ​ FFmpeg로 동영상 고화질 GIF 만드는 법 git comm',
    category: "Media",
    tags: [],
    date: "2025-09-07",
    thumb:
      "posts/video-to-gif-site-3-gifski/images/image_1.jpg",
  },
  {
    id: 290,
    slug: "gns3-vmware-fusion-firewall-lab",
    title: "GNS3 0.8.7 + vmWare fusion 방화벽 실습 환경 구축",
    summary:
      "# 아래 환경 구축 Start ! 0. 가상머신 세팅 Delete로 싹 지워줌! 지우는 이유는 그냥 보기 깔끔한게 안헷갈리구 좋으니까.. 1. Server IP 설정 2. Firewall IP 설정",
    category: "Network",
    tags: [],
    date: "2021-05-04",
    thumb:
      "posts/gns3-vmware-fusion-firewall-lab/images/image_1.jpg",
  },
  {
    id: 291,
    slug: "gns3-0-8-7-install",
    title: "GNS3 0.8.7 버전 설치, 초기 설정",
    summary:
      "1. dynamips 만약 위와 같이 뜬다면.. 경로 설정을 제대로 해주어야 한다. 2. IOS images and hypervisors (1) 이미지 파일 다운로드 http://tfr.org/cisco-",
    category: "Network",
    tags: [],
    date: "2021-05-04",
    thumb: "posts/gns3-0-8-7-install/images/image_1.jpg",
  },
  {
    id: 292,
    slug: "burp-suite-falcon-proxy",
    title: "HTTP / Burp suite, Falcon Proxy 사용법",
    summary:
      "이런 글을 가입 없이 볼 수 있을까? 0. 프록시(Proxy)란? 사전적인 의미로는 대리인(agent)라는 의미. 서버와 클라이언트 사이에서 중계기로서 대리로 통신을 수행하는 기능을 가리켜 프록시, 해당 컴퓨터나",
    category: "Security",
    tags: [],
    date: "2021-04-25",
    thumb:
      "posts/burp-suite-falcon-proxy/images/image_1.jpg",
  },
  {
    id: 293,
    slug: "http-put-vs-patch",
    title:
      "HTTP 메서드 :: PUT과 PATCH의 차이 (멱등성 보장하는 PUT, 멱등성 보장하지 않는 PATCH)",
    summary:
      "PUT과 PATCH의 차이가 뭘까? 클라이언트가 기존 리소스를 완전히 교체해야 하는 경우 PUT을 사용. 부분 업데이트를 수행할 때 PATCH를 사용한다. 예를 들어 리소스의 단일 필드를 업데이트할 때 전체 리소",
    category: "Network",
    tags: [],
    date: "2022-05-02",
    thumb:
      "posts/http-put-vs-patch/images/image_1.jpg",
  },
  {
    id: 294,
    slug: "http-stateless-cookie-session-token",
    title:
      "HTTP의 특징 | Stateful과 Stateless, 쿠키, 세션, 토큰, 인증방식 비교",
    summary:
      "0. HTTP의 특징, 쿠키와 세션을 사용하는 이유 쿠키와 세션을 사용하는 이유 서버와 클라이언트가 통신을 할 때 마다 서버는 클라이언트가 누구인지 인증을 계속해야 한다. 왜냐면 HTTP 프로토콜이 connectio",
    category: "Network",
    tags: [],
    date: "2021-09-27",
    thumb:
      "posts/http-stateless-cookie-session-token/images/image_1.jpg",
  },
  {
    id: 295,
    slug: "jpa-inheritance-mapping",
    title: "JPA 3가지 상속 관계 Mapping",
    summary:
      "상속 관계 매핑이란? 관계형 데이터베이스에서는 객체 지향에서 사용되는 상속이라는 개념이 없다. 대신 슈퍼타입 서브타입 관계라는 모델링 기업이 존재하는데 이 기법이 그나마 상속 개념과 흡사하다. 이를 이용하여 객체의",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-08-11",
    thumb: "posts/jpa-inheritance-mapping/images/image_1.jpg",
  },
  {
    id: 296,
    slug: "jpa-persistence-context",
    title: "[JPA] JPA의 구동방식, 영속성 컨텍스트 (영속성 컨텍스트의 장점)",
    summary:
      "1. JPA의 구동방식 JPA의 구동방식을 살펴보면 아래와 같이 META-INF라는 곳 아래에 persistence.xml을 설정정보로 참고한 뒤 EntityManagerFactory를 생성하고 거기서 EntityM",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-01",
    thumb:
      "posts/jpa-persistence-context/images/image_1.jpg",
  },
  {
    id: 297,
    slug: "jpa-cascade-remove",
    title: "JPA cascade (cascade = CascadeType.REMOVE)",
    summary:
      "JPA는 부모에서 자식에게 영속성을 전이하는 기능을 제공한다. 간단히 말하자면, 부모가 변경 될 때 해당 부모의 자식의 상태도 변경되게 하는 것이다. 예를 들어 게시물에 댓글들이 달려있다. 만약 게시물을 삭제하면",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-01-04",
    thumb:
      "posts/jpa-cascade-remove/images/image_1.jpg",
  },
  {
    id: 298,
    slug: "querydsl-no-constructor-found",
    title:
      "[JPA] com.querydsl.core.types.ExpressionException:No constructor found for class - with parameters:",
    summary:
      "[에러] com . querydsl . core . types . ExpressionException : No constructor found for class - with parameters : [ ] ...",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-29",
    thumb:
      "posts/querydsl-no-constructor-found/images/image_1.jpg",
  },
  {
    id: 299,
    slug: "jpa-lazy-loading-n-plus-1",
    title: "[JPA] jpa 지연로딩 사용 주의점 (jpa 지연 로딩과 조회 성능 최적화)",
    summary:
      "주문 API를 만들며 만난 jpa 지연로딩 문제와 주의점. XToOne 성능 최적화에 대한 이야기 우선 주문 API는 다음과 같은 구조다. (전부 XToOne 관계) order - member (ManyT",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-15",
    thumb: "",
  },
  {
    id: 300,
    slug: "jpa-owner-joincolumn-mappedby-jointable",
    title: "JPA 연관관계 주인, JoinColumn과  mappedBy 그리고 @JoinTable",
    summary:
      "0. 연관관계 주인 두 객체 간 연관관계를 나타낼 때 M:N 관계가 아닌 이상 한 객체에서 테이블의 FK를 관리해야 한다. 이때, 연관관계의 주인이란 FK를 가지고 있는 객체 즉, FK를 관리하는 객체다. (무조건",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-08-19",
    thumb:
      "posts/jpa-owner-joincolumn-mappedby-jointable/images/image_1.jpg",
  },
  {
    id: 301,
    slug: "jpa-distinct-list-to-set",
    title: "JPA 중복제거 해결 (List를 Set로)",
    summary:
      "[ 상황 ] 게시글 1 - > 게시글 1 관련 글 1 - > 게시글 1 관련 글 2 - > 게시글 1 의 댓글 게시글 1개에 대한 관련글이 2개, 게시글 1개에 대한 댓글이 1개 존재함. 아래 그림이 내가 원하는",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-12-06",
    thumb:
      "posts/jpa-distinct-list-to-set/images/image_1.jpg",
  },
  {
    id: 302,
    slug: "jpa-collection-fetch-paging",
    title:
      "[JPA] 컬렉션 조회 최적화 (페이징을 하면서 컬렉션 엔티티를 같이 조회)",
    summary:
      "이전 글 컬렉션 조회(일대다 관계) 최적화 페이징을 하면서 컬렉션 엔티티를 같이 조회하려면 어떻게 해야할까? XToOne 관계는 모두 fetch join. (toOne 끼리는 fetch join을 해도 문제없",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-16",
    thumb:
      "posts/jpa-collection-fetch-paging/images/image_1.jpg",
  },
  {
    id: 303,
    slug: "jpa-one-to-many-collection-optimization",
    title: "[JPA] 컬렉션 조회(일대다 관계) 최적화",
    summary:
      "이번엔 저번 포스팅에 이어.. 주문 api XToMany 관계인 Order(주문)과 OrderItem(주문상품) 최적화를 해보자. XToOne의 경우 fetch join(left outer join)을 하면 성능",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-15",
    thumb:
      "posts/jpa-one-to-many-collection-optimization/images/image_1.jpg",
  },
  {
    id: 304,
    slug: "what-is-jpa-orm-hibernate",
    title: "JPA란? (Java Persistence API, ORM, hibernate)",
    summary:
      "0. JPA Java Persistence API 자바 ORM 기술에 대한 표준 명세로, JAVA에서 제공하는 API. 자바 어플리케이션에서 관계형 데이터베이스를 사용하는 방식을 정의한 인터페이스 이다. 여기서 중요",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-04-18",
    thumb:
      "posts/what-is-jpa-orm-hibernate/images/image_1.jpg",
  },
  {
    id: 305,
    slug: "junit5-webmvctest-springboottest",
    title: "JUnit 5 SpringBoot 테스트 분류 (@WebMvcTest,  @SpringBootTest)",
    summary:
      "매번 advanced rest client 툴로 테스트 했던 사람 나야나 ㅠㅠ 이제는 꽤 습관이 되어가는 테스트 코드에 대해 정리한다. SpringBoot 테스트 분류 공식 사이트에서 추천하는 테스트 방법을",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-10",
    thumb:
      "posts/junit5-webmvctest-springboottest/images/image_1.jpg",
  },
  {
    id: 306,
    slug: "spring-boot-jwt-authentication-flow",
    title: "JWT 인증 과정 (스프링부트 JWT 인증)",
    summary:
      "스프링부트 프로그램과 직접 그린 그림으로 JWT 인증 과정 에 대해 알아본다. JWT의 개념과 특징 등의 설명은 아래 링크를 참고해 주세요. JWT 형식, 동작과정 JWT(Json Web Token) :: JWT",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-09-30",
    thumb:
      "posts/spring-boot-jwt-authentication-flow/images/image_1.jpg",
  },
  {
    id: 307,
    slug: "what-is-jwt",
    title: "JWT란? JWT 형식, 동작과정",
    summary:
      "1. JWT란? JWT(Json Web Token)는 비밀키를 이용하여 서명된 JSON 형태의 데이터다. 여기에 사용자 인증 정보를 넣어서 토큰 * 을 발급해주면, 추후 인증이 필요한 리소스에 접근 시 사용자가 서버",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-09-28",
    thumb: "posts/what-is-jwt/images/image_1.jpg",
  },
  {
    id: 308,
    slug: "jwt-refresh-token",
    title: "JWT에서 Refresh Token이 필요한 이유",
    summary:
      "구현중인 프로젝트에서는 회원가입 후 로그인 시 JWT를 발급해준다. 이 토큰은 애플리케이션 전반에서 사용자를 인증하는데 사용된다. 기존의 세션과는 달리 다양한 플랫폼에서 토큰만으로 인증할 수 있다는 장점이 있어 유용",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-01-28",
    thumb: null,
  },
  {
    id: 309,
    slug: "jenkins-github-react-deploy-aws",
    title: "Jenkins github React 자동 배포 (with aws)",
    summary:
      "개발 환경에서 git push만 해도 배포가 되는 환경을 구성한다. 실습은 다음과 같은 환경에서 진행된다. 젠킨스 서버와 프론트엔드 서버 각각 다른 aws에 구동되어 있다. 빌드 1) 개발환경에서 빌드한 경우 v",
    category: "DevOps/Jenkins",
    tags: [],
    date: "2022-06-15",
    thumb:
      "posts/jenkins-github-react-deploy-aws/images/image_1.jpg",
  },
  {
    id: 310,
    slug: "mongodb-nosql-bson-vs-mysql",
    title:
      "[MongoDB] MongoDB에 대하여 (NoSQL, BSON,  MongoDB vs MySQL, MongoDB 사용법)",
    summary:
      "1. NoSQL이란? Not Only SQL, SQL 뿐만 아니다라는 의미다. SQL을 사용하는 관계형 데이터베이스가 아닌 데이터베이스를 의미한다. 대표적인 관계형 데이터베이스로는 MyS",
    category: "Database",
    tags: [],
    date: "2022-11-04",
    thumb:
      "posts/mongodb-nosql-bson-vs-mysql/images/image_1.jpg",
  },
  {
    id: 311,
    slug: "mysql-select-exists-vs-count-case",
    title: "MySQL SELECT EXISTS, COUNT CASE (조건 카운트) 비교",
    summary:
      "1. SELECT EXISTS 두 테이블 간의 결과를 어떤 값이 존재하는 지를 알고 싶은 경우, 새로운 데이터를 입력할 때 해당 데이터가 이미 존재하는지 확인할 때도 유용하다. 핵심은 '존재하는가'를 판단하는 것.",
    category: "Database",
    tags: [],
    date: "2022-07-03",
    thumb:
      "posts/mysql-select-exists-vs-count-case/images/image_1.jpg",
  },
  {
    id: 312,
    slug: "mysql-insert-update-delete",
    title: "MySQL 데이터 추가, 수정, 삭제 (INSERT, UPDATE, DELETE)",
    summary:
      "MySQL 데이터 추가, 수정, 삭제 (INSERT, UPDATE, DELETE) 1. 데이터 추가 사용법 INSERT INTO 테이블명 [ 컬럼 1 , 컬럼 2 , ... ] VALUES ( 값 1 , 값 2",
    category: "Database",
    tags: [],
    date: "2022-07-03",
    thumb:
      "posts/mysql-insert-update-delete/images/image_1.jpg",
  },
  {
    id: 314,
    slug: "mysql-user-commands-grant-password",
    title:
      "Mysql 사용자 관련 명령어 (사용자 조회, 사용자 추가/생성, 사용자 삭제, 사용자 권한 부여, 비밀번호 변경)",
    summary:
      "Mysql 사용자 조회 use mysql ; select user , host from user ; Mysql 사용자 추가/생성 (사용자 생성/추가를 위해 mysql에 root로 접속.) mysql - u roo",
    category: "Database",
    tags: [],
    date: "2021-03-30",
    thumb:
      "posts/mysql-user-commands-grant-password/images/image_1.jpg",
  },
  {
    id: 315,
    slug: "nat-network-address-translation",
    title: "NAT, 네트워크 주소 변환(Network Address Translation)",
    summary:
      "NAT NAT : 네트워크 주소 변환(Network Address Translation, NAT) IP 패킷의 TCP/UDP 포트 숫자와 소스 및 목적지의 IP 주소 등을 재기록하면서 라우터를 통해 네트워크 트래",
    category: "Network",
    tags: [],
    date: "2021-07-19",
    thumb:
      "posts/nat-network-address-translation/images/image_1.jpg",
  },
  {
    id: 316,
    slug: "jpa-osiv-open-session-in-view",
    title: "OSIV(Open Session in view)이란? 장단점, 써야할지 말아야할지",
    summary:
      "Open-In-View / Open-Session-In-View / Open-EntityManager-In-View 스프링부트 2.x 이상을 사용 중이라면 아래 경고를 한번 쯤 본 적 있을 것이다. 2022 - 10",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-21",
    thumb:
      "posts/jpa-osiv-open-session-in-view/images/image_1.jpg",
  },
  {
    id: 317,
    slug: "openclaw-raspberry-pi-4-install",
    title: "[OpenClaw] 라즈베리파이4에 오픈클로 설치해본 후기",
    summary:
      "라즈베리파이4에 오픈클로 + Ollama 설치 요새 두쫀쿠보다 핫한 오픈클로(OpenClaw) 라는 녀석. 들어보셨나요? OpenClaw 오픈클로란, 내 컴퓨터를 직접 제어 하고 업무를 대신 수행하는 AI",
    category: "AI",
    tags: [],
    date: "2026-02-13",
    thumb:
      "posts/openclaw-raspberry-pi-4-install/images/image_1.jpg",
  },
  {
    id: 318,
    slug: "pojo-vs-java-beans",
    title: "POJO와 Beans의 차이점",
    summary:
      "POJO Classes - POJO(Plain Old Java Object) 는 자바 객채의 표준 (ordinay)이며, Java Language Specification 에 의한 어떤 특정한 엄격한(restrict",
    category: "Backend/Java",
    tags: [],
    date: "2022-07-16",
    thumb: null,
  },
  {
    id: 319,
    slug: "python-mqtt",
    title: "Python :: MQTT 통신 | MQTT 통신 특징, 파이썬으로 mqtt 통신 하기",
    summary:
      "MQTT MQTT 란? MQTT란 M2M, IOT를 위한 프로토콜 로서, 최소한의 전력과 패킷량으로 통신 하는 프로토콜이다. 출처 : https://www.eclipse.org/community/eclipse_new",
    category: "Backend/Python",
    tags: [],
    date: "2020-08-29",
    thumb:
      "posts/python-mqtt/images/image_1.jpg",
  },
  {
    id: 320,
    slug: "jwt-token-has-expired-postman",
    title:
      "Postman이나 Advanced REST client로 JWT Test 'JWT Token has expired'에러",
    summary:
      "JWT (Json Web Token) Postman이나 Advanced REST client로 JWT Test 중 만난 JWT Token has expired 에러 1. JWT 동작 과정 'JWT Token",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-09-23",
    thumb:
      "posts/jwt-token-has-expired-postman/images/image_1.jpg",
  },
  {
    id: 321,
    slug: "react-component-props-usestate-useeffect-useref",
    title:
      "React 리액트 : Component, Props, useState, useEffect, useRef 개념 정리",
    summary:
      "📍Component 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나눈다. 컴포넌트는 개념적으로 JavaScript 함수와 유사하다. 'props'라는 입력을 받은 후, 화면에 어떻게 표시되는지 기",
    category: "Frontend/React",
    tags: [],
    date: "2022-06-22",
    thumb:
      "posts/react-component-props-usestate-useeffect-useref/images/image_1.jpg",
  },
  {
    id: 322,
    slug: "react-component-render-props-vs-state",
    title:
      "React 리액트 : Component, render,constructor(props), props와 state 차이점",
    summary:
      "React 리액트 Component, render,constructor(props), props와 state 차이점 이전 글 : React 리액트 설치&기본페이지 실행 React 리액트 설치&기본페이지 실행",
    category: "Frontend/React",
    tags: [],
    date: "2021-10-17",
    thumb:
      "posts/react-component-render-props-vs-state/images/image_1.jpg",
  },
  {
    id: 323,
    slug: "react-install-first-page",
    title: "React 리액트 설치&기본페이지 실행",
    summary:
      "0. node.js 설치 & 설치 확인 아래 링크에서 node.js를 설치한다. https://nodejs.org/ko/download/ 다운로드 | Node.js Node.js® is a JavaScri",
    category: "Frontend/React",
    tags: [],
    date: "2021-10-17",
    thumb:
      "posts/react-install-first-page/images/image_1.jpg",
  },
  {
    id: 324,
    slug: "react-arrow-function",
    title: "React : 리액트 화살표 함수 Arrow Function, 쓰는 이유",
    summary:
      "화살표 함수 (Arrow Function) ES6 문법 화살표 함수는 function 키워드를 사용해서 함수를 만든 것보다 간단히 함수를 표현할 수 있다. 또 콜백함수에서 this를 bind 해야하는 문제도 발생",
    category: "Frontend/React",
    tags: [],
    date: "2021-10-17",
    thumb:
      "posts/react-arrow-function/images/image_1.jpg",
  },
  {
    id: 325,
    slug: "react-function-component-hooks-usestate",
    title: "React : 함수형 컴포넌트와 Hooks (useState)",
    summary:
      "리액트로 프론트 개발을 할 때, 두 가지 방법으로 컴포넌트를 선언 할 수 있다. 과거에는 클래스형 컴포넌트를 주로 사용했지만, 2019년 v16.8 부터 함수형 컴포넌트에 리액트 훅(hook)을 지원해 주어서",
    category: "Frontend/React",
    tags: [],
    date: "2021-10-31",
    thumb:
      "posts/react-function-component-hooks-usestate/images/image_1.jpg",
  },
  {
    id: 326,
    slug: "mysql-only-full-group-by-error",
    title:
      "SELECT list is not in GROUP BY clause and contains nonaggregated column 에러 해결",
    summary:
      "[원인, 해결] com . mysql . jdbc . exceptions . jdbc4 . MySQLSyntaxErrorException : Expression # 2 of SELECT list is not in G",
    category: "Database",
    tags: [],
    date: "2021-12-02",
    thumb: null,
  },
  {
    id: 327,
    slug: "why-jpa-problems-with-raw-sql",
    title: "SQL을 직접 다룰 때의 문제점과 JPA를 사용하는 이유 정리",
    summary:
      "SQL을 직접 다룰 때의 문제점 1. 반복적인 코드의 작성 테이블이 100개 존재한다면, 100개의 CRUD를 작성해야 한다. SQL 작성, JDBC API로 SQL 실행, 결과를 객체로 매핑 등.. 2. S",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-08-29",
    thumb:
      "posts/why-jpa-problems-with-raw-sql/images/image_1.jpg",
  },
  {
    id: 328,
    slug: "what-is-ssl-certificate",
    title:
      "SSL 인증서란? (SSL 인증서가 안전한 연결을 만드는 법, 공개키, 개인키, 세션키)",
    summary:
      "0. HTTPS 와 HTTP HTTPS는 HTTP를 안전하게 만드는 방식 HTTP는 암호화되지 않은 방법으로 데이터를 전송하기 때문에 서버와 클라이언트가 주고 받는 메시지를 감청하는 것이 쉽다. 예를들어 로그인을 위",
    category: "Network",
    tags: [],
    date: "2022-11-16",
    thumb:
      "posts/what-is-ssl-certificate/images/image_1.jpg",
  },
  {
    id: 329,
    slug: "jpa-entity-update-without-setter",
    title: "Setter 없이 Entity update (setter 지양 이유)",
    summary:
      "값의 변화점을 예측하기 힘들어지게하는 Setter 는 지양해야 한다. 이후 Setter에 의한 문제가 발생할 여지를 남겨두는 것은 위험하기 때문이다. 물론 '무조건' 쓰지 말아야 하는 것은 아니다. 단순히 필드",
    category: "Backend/Java",
    tags: [],
    date: "2022-10-09",
    thumb:
      "posts/jpa-entity-update-without-setter/images/image_1.jpg",
  },
  {
    id: 330,
    slug: "python-socket-programming-threads",
    title:
      "Socket Programming in Python :: 파이썬 소켓 프로그래밍의 모든 것, 스레드 개념",
    summary:
      "파이썬 소켓 프로그래밍 오늘의 목표 : ' 특정 IP와 메시지 주고 받기' ! 0. Socket 소켓이란 뭘까? 소켓이란 소프트웨어로 작성된 추상적인 개념의 통신 접속점, 네트워크 응용 프로그램이 데이터를 송수신",
    category: "Backend/Python",
    tags: [],
    date: "2020-08-28",
    thumb:
      "posts/python-socket-programming-threads/images/image_1.jpg",
  },
  {
    id: 331,
    slug: "spring-boot-2-7-swagger-3-error",
    title: "SpringBoot 2.7.1 에서 swagger 3.0.0 에러 해결책",
    summary:
      "swagger를 적용하는 방법 : https://blog.naver.com/ghdalswl77/222794931667 Spring Boot Swagger UI 3.x 적용 및 사용법 📝 API Docs가 필요한 이유",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-07-15",
    thumb: null,
  },
  {
    id: 332,
    slug: "spring-boot-aop-logging",
    title: "SpringBoot AOP로 로깅처리 (@Aspect)",
    summary:
      "1. AOP 란 AOP는 프로그램의 주요 비즈니스 로직과는 별개로 공통적인 기능(로깅, 트랜잭션, 보안 등)을 분리해 관리할 수 있게 해준다. AOP를 사용하는 이유: 예를들어 프로젝트에서 메서드들이 호출될때마다",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2024-09-23",
    thumb:
      "posts/spring-boot-aop-logging/images/image_1.jpg",
  },
  {
    id: 333,
    slug: "spring-boot-rest-api-restful",
    title: "SpringBoot REST API, 'RESTful API란?'",
    summary:
      "[SpringBoot] REST API로 변경하기 'REST API란?' 어제 진행중이었던 개인 프로젝트의 구조를 전체적으로 수정했다. 일반적인 어플리케이션이 그렇듯, 내 프로젝트 또한 백엔드 서버와 클라",
    category: "Backend/Architecture",
    tags: [],
    date: "2021-09-14",
    thumb:
      "posts/spring-boot-rest-api-restful/images/image_1.jpg",
  },
  {
    id: 334,
    slug: "spring-boot-postmapping-requestbody",
    title: "SpringBoot와 @PostMapping, @RequestBody",
    summary:
      'SpringBoot와 @PostMapping, @RequestBody ​ ​ 해당 내용에 앞서, get과 post 방식의 차이를 먼저 짚고 넘어가자. GetMapping은 @GetMapping(value = "/ge',
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-02-07",
    thumb:
      "posts/spring-boot-postmapping-requestbody/images/image_1.jpg",
  },
  {
    id: 335,
    slug: "spring-boot-jwt-security-signup-login",
    title:
      "Spring Boot + JWT + Security + Security 권한 설정해서 '회원가입/로그인 구현'",
    summary:
      "Spring Boot + JWT + Security + Security 권한 설정해서 회원가입/로그인 구현. 구현하고자 하는 전체 로직은 다음과 같다. 1. ID / PW 로그인 시도 - > < - 2. ID /",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-03-18",
    thumb:
      "posts/spring-boot-jwt-security-signup-login/images/image_1.jpg",
  },
  {
    id: 336,
    slug: "spring-boot-swagger-ui-3",
    title: "Spring Boot Swagger UI 3.x 적용 및 사용법",
    summary:
      "API Docs가 필요한 이유.. 1. Swagger란? 백엔드 개발에 있어서 Web API를 문서화하기 위한 도구이며, 쉽게는 제품의 설명서라고도 생각할 수 있다. 간단한 설정으로 프로젝트의 API 목록을 웹에",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-06-30",
    thumb:
      "posts/spring-boot-swagger-ui-3/images/image_1.jpg",
  },
  {
    id: 337,
    slug: "spring-boot-post-like-feature",
    title: "Spring Boot 게시글 좋아요 기능 구현(좋아요 조회, 좋아요 판별)",
    summary:
      "좋아요 기능 게시글에 좋아요 버튼 처음 누르면 좋아요, 이미 좋아요를 누른 게시글에 또 좋아요를 누르면 좋아요 취소가 되는 기능 구현. 좋아요를 누르는 파트 1 와, 좋아요를 누른 게시글을 조회 2 할 수 있는 두",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-03-30",
    thumb:
      "posts/spring-boot-post-like-feature/images/image_1.jpg",
  },
  {
    id: 338,
    slug: "spring-boot-project-structure",
    title: "Spring Boot🍃 스프링부트 프로젝트 생성, 스프링부트 프로젝트 구조",
    summary:
      "Spring Boot 🍃 스프링부트 프로젝트 생성 하는 법과 스프링부트 프로젝트 구조 (src/main/java, src/main/resources, src/test/java, build.gradle) 에 대해 알아",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-07-30",
    thumb:
      "posts/spring-boot-project-structure/images/image_1.jpg",
  },
  {
    id: 339,
    slug: "spring-data-jpa",
    title: "Spring Data JPA",
    summary:
      "1. Spring Data JPA Spring Data JPA는, JPA를 쓰기 편하게 만들어 놓은 모듈이다. 스프링 부트로 개발하면, EntityManager 를 직접 다룰 필요가 없어진다. (순수 자바로 JP",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-04-18",
    thumb: "posts/spring-data-jpa/images/image_18.jpg",
  },
  {
    id: 340,
    slug: "spring-data-jpa-jparepository-vs-repository",
    title:
      "[Spring Data JPA] extends JpaRepository VS @Repository, Spring Data JPA 반환타입",
    summary:
      "우선 extends JpaRepository는 Spring Data JPA 기술을 사용한 것이다. 이에 대한 개념을 간단히 이해하고 둘을 비교해보자. 0. Spring Data JPA Spring Data JPA는",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-01",
    thumb: null,
  },
  {
    id: 341,
    slug: "spring-security-login-failure-handler",
    title: "Spring Security - 로그인 실패 후 부가 작업",
    summary:
      "로그인에 실패했을 때 에러 메시지만 보여줘도 되지만, 추가적인 부가 작업을 해보려고 한다. 로그인에 실패했을 때 부가적인 작업을 할 수 있는 인터페이스를 Spring Security 에서 제공한다. 마찬가지로 로그인",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-03-30",
    thumb: null,
  },
  {
    id: 342,
    slug: "spring-security-basics-1",
    title: "Spring Security🍃 스프링시큐리티 기본개념과 사용예제 (1)",
    summary:
      "Spring Boot 🍃 Spring Security 란? Spring Security는 Spring기반의 어플리케이션의 보안(인증과 권한)을 담당하는 스프링 하위 프레임워크 이다. Spring Security는 F",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-08-17",
    thumb:
      "posts/spring-security-basics-1/images/image_1.jpg",
  },
  {
    id: 343,
    slug: "spring-security-architecture-2",
    title: "Spring Security 스프링시큐리티 동작 구조 (2)",
    summary:
      "0. Spring Security(스프링 시큐리티)란? 참고 : https://blog.naver.com/ghdalswl77/222474006420 스프링 시큐리티는 스프링 기반의 애플리케이션의 보안(인증과 권한,인",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-09-07",
    thumb:
      "posts/spring-security-architecture-2/images/image_1.jpg",
  },
  {
    id: 344,
    slug: "spring-security-signup-bcrypt",
    title: "Spring Security 회원가입 (BCryptPasswordEncoder)",
    summary:
      "스프링부트 환경에서 BCryptPasswordEncoder를 이용한 회원가입 암호화 구현 시큐리티의 구조 웹에서 스프링 시큐리티는 기본적으로 아래와 같이 필터 기반으로 동작한다. 많은 필터들이 존재하며, Di",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-03-11",
    thumb:
      "posts/spring-security-signup-bcrypt/images/image_1.jpg",
  },
  {
    id: 345,
    slug: "spring-qualifier-primary-bean-name",
    title: '[Springboot] @Qualifier, @Primary, @Bean(name="")',
    summary:
      '[Springboot] @Qualifier, @Primary, @Bean(name="") ​ 하나의 서비스에 2개의 datasource 를 사용하려 할 때, 메인 데이터베이스 커넥션에 @Primary 를 사용하여 d',
    category: "Backend/Spring Boot",
    tags: [],
    date: "2023-11-13",
    thumb:
      "posts/spring-qualifier-primary-bean-name/images/image_1.jpg",
  },
  {
    id: 346,
    slug: "spring-boot-responseentity",
    title: "[Springboot] ResponseEntity란?",
    summary:
      "Spring에서는 HTTP Response로 200, 404 등 각각의 응답의 상태 코드 뿐만 아니라, Body 에 들어갈 내용도 넣어 주어야 한다. 이 요소를 채운 객체 데이터를 받아서 자동으로 구성해주는 것이",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-07-23",
    thumb: "posts/spring-boot-responseentity/images/image_1.jpg",
  },
  {
    id: 347,
    slug: "spring-boot-unit-test-mock-assertthat",
    title: "[Springboot  Unit Test] Mock, AssertThat",
    summary:
      "Springboot Unit Test 공부하며 정리 Mock, AssertThat 1. build.gradle에 다음을 추가 testImplementation 'org.springframework.boot:sprin",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-07-13",
    thumb:
      "posts/spring-boot-unit-test-mock-assertthat/images/image_1.jpg",
  },
  {
    id: 348,
    slug: "spring-boot-signup-email-unique",
    title: "[Springboot] 멤버가입 이메일 중복 메서드 (Unique 제약조건)",
    summary:
      "JPA springboot 멤버가입 이메일 중복 로직을 구현하며.. 코드만 봤을 때 다음의 문제점 무엇일까? private void validMemberEmailDuplicate ( String email ) { i",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-10-04",
    thumb:
      "posts/spring-boot-signup-email-unique/images/image_1.jpg",
  },
  {
    id: 349,
    slug: "spring-configuration-singleton-interview",
    title: "[Springboot/개발자 면접] @Configuration과 스프링 싱글톤 (2)",
    summary:
      "[Java/개발자면접] 디자인패턴 싱글톤 저번 글에서는 디자인패턴 싱글톤에 대해 알아보았습니다. 싱글톤 객체는 전역에서 공유되는 객체이므로 멀티스레드 환경에서 동시성 문제 가 있었는데요. '전역에서 공유된다 =",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-11-29",
    thumb:
      "posts/spring-configuration-singleton-interview/images/image_1.jpg",
  },
  {
    id: 350,
    slug: "spring-dependency-injection-mvc-interview",
    title:
      "[Springboot/개발자 면접] 스프링 의존성 주입 방법 3가지, Spring MVC란",
    summary:
      "[ 이전 글 ] Spring 프레임워크란?, IoC 컨테이너와 Bean, 스프링 빈의 라이프사이클 (1) (2) 의존성 주입(DI, Dependency Injection) 의존성 주입 3가지 방법 (생성자 주입,",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-11-28",
    thumb:
      "posts/spring-dependency-injection-mvc-interview/images/image_1.jpg",
  },
  {
    id: 351,
    slug: "thymeleaf-basic-syntax",
    title: "Thymeleaf 타임리프 기본문법",
    summary:
      "th:id, th:value, th:text < input type = \"check\" th : id = \"'check'+${info.seq}\" th : value = '${info.name}' th : text =",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-01-04",
    thumb: "posts/thymeleaf-basic-syntax/images/image_1.jpg",
  },
  {
    id: 352,
    slug: "xampp-port-443-in-use-vmware",
    title: "XAMPP 포트 중복 에러 'port 443 in use by vmware'",
    summary:
      "XAMPP를 사용중에 443 포트의 중복 에러가 발생했다! 가상머신으로 사용하고 있던 VMWARE와 관련된 문제였는데 이 해결방법을 알아본다. XAMPP 문제해결 필자의 경우 VMWare가 443 포트를 사용중이",
    category: "DevTools",
    tags: [],
    date: "2020-08-06",
    thumb:
      "posts/xampp-port-443-in-use-vmware/images/image_1.jpg",
  },
  {
    id: 353,
    slug: "zookeeper-session-expired-connection-error",
    title:
      "Zookeeper connection error 해결 (attempting reconnect except it is a sessionexpiredexception.)",
    summary:
      "에러 로그: session 0x0 for server localhost/127.0.0.1:2181, closing socket connection. attempting reconnect except it is a s",
    category: "Search/Kafka",
    tags: [],
    date: "2024-02-13",
    thumb: null,
  },
  {
    id: 354,
    slug: "react-axios-api-cors",
    title: "axios API 호출해서 데이터 받아오기 (리액트 axios cors 대충 처리)",
    summary:
      "1. 프로젝트 폴더에서 axios 설치 yarn add axios 2. API 데이터 받아오기 API를 호출해서 데이터를 받아와보자. react APP을 하나 생성하고 Test.js를 다음과 같이 작성한다.",
    category: "Frontend/React",
    tags: [],
    date: "2022-02-15",
    thumb:
      "posts/react-axios-api-cors/images/image_1.jpg",
  },
  {
    id: 355,
    slug: "spring-circular-reference-error",
    title:
      "bean is currently in creation: unresolvable circular reference, 스프링 빈의 순환 종속성 에러",
    summary:
      "에러 : Requested bean is currently in creation: Is there an unresolvable circular reference? org . springframework . beans",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-04-17",
    thumb: null,
  },
  {
    id: 356,
    slug: "elasticsearch-minimum-master-nodes",
    title:
      "[elasticsearch 엘라스틱서치] Master Node discovery.zen.minimum_master_nodes",
    summary:
      "elasticsearch(엘라스틱서치) 노드의 종류 elasticsearch.yml 파일에는 노드 관련 속성이 제공된다. node.master : 마스터 기능 활성화 여부 node.data : 데이터 기능 활성화 여",
    category: "Search/Elasticsearch",
    tags: [],
    date: "2023-02-20",
    thumb:
      "posts/elasticsearch-minimum-master-nodes/images/image_1.jpg",
  },
  {
    id: 357,
    slug: "intellij-maven-offline-mode-error",
    title:
      "intellij cannot access central (https://repo.maven.apache.org/maven2) in offline mode",
    summary:
      "maven po m.xml install 이 안되면 Preferences > Build, Execution, Deployment > Build Tools > Maven 에서 Work offline 이 선택되어있으",
    category: "DevTools",
    tags: [],
    date: "2023-07-14",
    thumb:
      "posts/intellij-maven-offline-mode-error/images/image_1.jpg",
  },
  {
    id: 358,
    slug: "javascript-promise-async-await-axios",
    title: "promise, await, async, axios 정리",
    summary:
      "REST API + 리액트에 비동기 통신 라이브러리 axios를 사용. 동기, 비동기? 자바스크립트에서 동기, 비동기 작업의 대표적인 예시는 다음과 같다. 동기 작업 은 일반적으로 우리가 작성하는 코드. 이 코드",
    category: "Frontend/React",
    tags: [],
    date: "2022-02-10",
    thumb:
      "posts/javascript-promise-async-await-axios/images/image_1.jpg",
  },
  {
    id: 359,
    slug: "spring-controller-vs-restcontroller-requestparam",
    title:
      "spring controller required defaultvalue,  Controller와 RestController차이, RequestParam, RequestBody 차이",
    summary:
      "아래 에러를 해결하며 알아봤던 스프링 상식들을 정리한다. Resolved [ org . springframework . web . HttpMediaTypeNotSupportedException : Content ty",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-03-10",
    thumb:
      "posts/spring-controller-vs-restcontroller-requestparam/images/image_1.jpg",
  },
  {
    id: 360,
    slug: "spring-threadpooltaskexecutor",
    title: "[springboot] ThreadPoolTaskExecutor, Thread Pool",
    summary:
      "1. ThreadPoolTaskExecutor 특정 스레드 개수 + 작업 큐 + 스레드 풀 개수를 만들어 놓고 작업을 작업 큐에 올려놓아 적입 끝난 스레드가 큐에서 작업을 꺼내 기능을 수행하는 방식이다. 분업화로",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-12-27",
    thumb:
      "posts/spring-threadpooltaskexecutor/images/image_1.jpg",
  },
  {
    id: 361,
    slug: "spring-boot-gmail-smtp-email-verification",
    title:
      "springboot 구글 이메일 gmail 인증 회원가입 구현 (SMTP 용 계정 세팅)",
    summary:
      "백엔드(스프링부트)와 프론트(리액트)를 연동해서 구현했으며, Redis는 일단 사용하지 않았습니다. 이메일 인증과 회원가입/로그인을 구현하는 방법 이메일 인증을 받아 회원가입, 로그인을 구현하는 방법은 여러가지가 있",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-05-20",
    thumb:
      "posts/spring-boot-gmail-smtp-email-verification/images/image_1.jpg",
  },
  {
    id: 362,
    slug: "spring-ioc-di",
    title: "[springboot] 스프링부트 기초 IoC와 DI 진짜 쉽게 설명해봄",
    summary:
      "안녕하세요 토찌 입니다! 오늘은 스프링에서 필수 개념인 IoC와 DI에 대해 진짜 쉽게 정리해 봅니다. Spring에 대해 공부 중이시라면, IoC(제어의 역전)라는 용어도 한 번쯤 들어봤을 겁니다. 제어의 역전",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2025-04-22",
    thumb:
      "posts/spring-ioc-di/images/image_1.jpg",
  },
  {
    id: 363,
    slug: "why-i-used-jpa",
    title: "[springboot 프로젝트 JPA] 내가 JPA를 사용한 이유, JPA의 장점 등",
    summary:
      "내가 JPA를 사용한 이유, JPA의 장점, ORM, JPA, Spring Data JPA, JPQL, QueryDSL 1. 내가 JPA를 사용한 이유 hello JPA!😀 새로 시작한 리팩토링 프로젝트에서 JP",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-07-13",
    thumb:
      "posts/why-i-used-jpa/images/image_1.jpg",
  },
  {
    id: 364,
    slug: "vmware-mac-address-remote-host-identification-changed",
    title:
      "vm ware 문제 : Device has different MAC address than expected, REMOTE HOST IDENTIFICATION HAS CHANGED",
    summary:
      "vm ware 에러 문제1 : Device has different MAC address than expected, ignoring. 문제2: WARNING: REMOTE HOST IDENTIFICATION HAS",
    category: "DevTools",
    tags: [],
    date: "2021-04-23",
    thumb:
      "posts/vmware-mac-address-remote-host-identification-changed/images/image_1.jpg",
  },
  {
    id: 365,
    slug: "video-to-gif-site-4-usage",
    title: "동영상 GIF 변환하는 사이트 만들기 4 | 사용법",
    summary:
      "gif 만들때, 어떤 사이트를 사용하시나요? ezgif? gif converter? 그럼 GIF를 만든 결과물을 보고 이런 고민을 하셨을 겁니다. 왜 내 GIF는 이렇게 뚝뚝 끊기지? gif 이유는 바로",
    category: "Media",
    tags: [],
    date: "2025-11-04",
    thumb:
      "posts/video-to-gif-site-4-usage/images/image_1.jpg",
  },
  {
    id: 366,
    slug: "network-0-0-0-0",
    title: "네트워크 0.0.0.0 이란",
    summary:
      "0.0.0.0은 흔히 Default route라고 하며, 보통 서브넷 마스크 0.0.0.0과 같이 사용되며 모든 IP를 의미한다. IPv4 패킷을 전송하고자 하는 컴퓨터가 자신의 IP주소를 모르는 경우, 통신",
    category: "Network",
    tags: [],
    date: "2021-07-19",
    thumb: "posts/network-0-0-0-0/images/image_1.jpg",
  },
  {
    id: 367,
    slug: "network-ip-address-routing",
    title: "네트워크 :: IP 주소, 멀리 떨어진 컴퓨터들의 통신 방법",
    summary:
      "세상에 존재하는 수많은 네트워크 장비들은 어떻게 서로 통신 하는 걸까? 전 세계 멀리있는 떨어져 있는 이 기기들은 어떻게 서로 통신을 할 수 있는 걸까? 에 대한 답, 우리가 살면서 한번 쯤 들어 본 단어 '",
    category: "Network",
    tags: [],
    date: "2021-02-10",
    thumb:
      "posts/network-ip-address-routing/images/image_1.jpg",
  },
  {
    id: 368,
    slug: "network-ping-nslookup",
    title: "네트워크 | ping 8.8.8.8 과 nslookup",
    summary:
      "인터넷 연결이 되었는지 확인할 때 쓰는 명령어 ping. ping 8.8 .8 .8 그런데 이것만으로는 정확한 확인을 할 수 없다. 왜냐하면~~~? ping 은 ip 통신. 도메인 주소 통신이 되는지도 확인해",
    category: "Network",
    tags: [],
    date: "2020-08-25",
    thumb:
      "posts/network-ping-nslookup/images/image_1.jpg",
  },
  {
    id: 369,
    slug: "network-public-private-ip",
    title: "네트워크 :: 공인IP, 사설IP",
    summary:
      "핫했던 게임 어몽어스에서 지원하는 Local 기능 사설 IP 어몽어스 Local 기능을 사용하면, 같은 공간(사설 ip 대역)에 있는 친구들끼리는 인터넷 연결이 되어있지 않아도 같은 방에 접속할 수 있었다.",
    category: "Network",
    tags: [],
    date: "2021-02-12",
    thumb: "posts/network-public-private-ip/images/image_1.jpg",
  },
  {
    id: 370,
    slug: "network-subnet-mask",
    title: "네트워크 :: 서브넷 마스크(Subnet mask)",
    summary:
      "하나의 큰 네트워크를 여러개의 작은 네트워크로 나누어 쓰자! 서브넷 마스크 'Subnet mask', 네트워크를 서브 =보조 한다. IP 주소의 부족 현상을 해결하기 위해 네트워크 대역을 잘게 쪼개는 '서",
    category: "Network",
    tags: [],
    date: "2021-02-12",
    thumb: null,
  },
  {
    id: 372,
    slug: "video-to-gif-site-1",
    title: "동영상 GIF 변환하는 사이트 만들기 1",
    summary:
      "Intro. 내가 더 잘 만들지도? 블로그 좀 하는 사람이라면 동영상 Gif 변환 프로그램을 종종 쓸 것이다. 나도 자주 사용하는 사람 중 하나인데, 썩 맘에 드는 gif 변환 프로그램이 없었다. 네이버 블로",
    category: "Media",
    tags: [],
    date: "2025-08-18",
    thumb:
      "posts/video-to-gif-site-1/images/image_1.jpg",
  },
  {
    id: 373,
    slug: "video-to-gif-site-2-ffmpeg",
    title: "동영상 GIF 변환하는 사이트 만들기 2 | FFmpeg",
    summary:
      'git commit -m "궁극의 GIF 만들기 여정 2" ​ 동영상을 gif로 변환하는 여정이 영화라면, 이번 포스팅에서는 주인공 친구급인 ffmpeg 에 대해 알아보고 ffmpeg를 사용해 GIF 파일을 생성 해',
    category: "Media",
    tags: [],
    date: "2025-08-18",
    thumb:
      "posts/video-to-gif-site-2-ffmpeg/images/image_1.jpg",
  },
  {
    id: 374,
    slug: "what-is-openclaw",
    title: "OpenClaw(오픈클로)란? 조언 대신 직접 실행하는 셀프 호스팅 AI 에이전트",
    summary:
      "OpenClaw는 내 컴퓨터나 서버에 직접 설치하는 오픈소스 AI 에이전트예요. 챗봇처럼 방법만 알려 주는 게 아니라 메신저로 받은 지시를 직접 실행해요. 챗봇과의 차이, 설치할 기기, 무엇을 자동화할지 정한 기준을 정리했어요.",
    category: "AI",
    tags: [],
    date: "2026-02-11",
    thumb:
      "posts/what-is-openclaw/images/image_4.jpg",
  },
  {
    id: 375,
    slug: "jpeg-compression-digital-weathering",
    title: "디지털 풍화가 생기는 이유! JPEG 압축 방식에 대하여",
    summary:
      "디지털 풍화는 왜 생길까? Compress my cat to JPG 디지털 풍화.. 다들 뭔지 아시져..? 누가 쓴 글을 캡쳐해서 SNS에 올리고, 그걸 또 누가 캡쳐해서 커뮤니티에 올리고, 또 그걸 누가 캡",
    category: "Media",
    tags: [],
    date: "2025-06-26",
    thumb:
      "posts/jpeg-compression-digital-weathering/images/image_1.jpg",
  },
  {
    id: 376,
    slug: "react-css-two-ways",
    title: "리액트 CSS 적용 방법 두가지",
    summary:
      '1. HTML에서 클래스로 디자인이 지정된 것. 리액트에서는 styled 컴포넌트 로 만들어서 디자인 적용한다. ​ ex) HTML 에서 이렇게 하는 것을: < div class = "ex01" > < / div >',
    category: "Frontend/React",
    tags: [],
    date: "2022-02-05",
    thumb: "posts/react-css-two-ways/images/image_1.jpg",
  },
  {
    id: 377,
    slug: "react-input-state-usestate-onchange",
    title: "리액트 input 상태 관리하기 (useState, onChange)",
    summary:
      '리액트 input 상태 관리하기 ​ [코드] import React , { useState } from "react" ; import styled from "styled-components" ; function Te',
    category: "Frontend/React",
    tags: [],
    date: "2022-02-17",
    thumb:
      "posts/react-input-state-usestate-onchange/images/image_1.jpg",
  },
  {
    id: 378,
    slug: "react-key-warning-each-child",
    title:
      '리액트 key 할당해도 해결 안되는 문제. Warning:Each child in an array or iterator should have a unique"key"prop.',
    summary:
      "리액트에서 key를 할당해도 해결 안되는 문제. Warning: Each child in an array or iterator should have a unique “key” prop. 보통 react에서 위 에",
    category: "Frontend/React",
    tags: [],
    date: "2022-02-28",
    thumb:
      "posts/react-key-warning-each-child/images/image_1.jpg",
  },
  {
    id: 379,
    slug: "react-unexpected-token-lt-error",
    title: "리액트 uncaught syntaxerror: unexpected token '<' 해결",
    summary:
      "리액트 uncaught syntaxerror: unexpected token '<' 해결 리액트로 프로젝트 빌드 후 분명히 로컬에서는 멀쩡했던 프로젝트가 흰페이지가 뜨면서 콘솔창에 다음 에러가 뜬다. Reac",
    category: "Frontend/React",
    tags: [],
    date: "2022-06-13",
    thumb:
      "posts/react-unexpected-token-lt-error/images/image_1.jpg",
  },
  {
    id: 380,
    slug: "react-useeffect",
    title: "리액트 useEffect() 사용법",
    summary:
      "useEffect() 사용법 useEffect()는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook이다. 리액트의 useEffect 훅을 사용하면 함수 컴포넌트에서도 sid",
    category: "Frontend/React",
    tags: [],
    date: "2022-03-03",
    thumb: "posts/react-useeffect/images/image_1.jpg",
  },
  {
    id: 381,
    slug: "react-spring-boot-search",
    title:
      "리액트 검색기능 구현 (스프링부트, 리액트 연동 쇼핑몰 검색 기능 구현)",
    summary:
      '스프링부트, 리액트 연동 쇼핑몰 검색 기능 구현 ​ Header 페이지에서 검색 하면 -> ProductSearch 라는 새 페이지에서 검색 결과가 출력되는 검색 기능을 구현했다. "test" 검색 이전글 : 스프링',
    category: "Frontend/React",
    tags: [],
    date: "2022-03-03",
    thumb:
      "posts/react-spring-boot-search/images/image_1.jpg",
  },
  {
    id: 382,
    slug: "react-localhost-on-mobile",
    title: "리액트 모바일에서 로컬 열기 (모바일에서 localhost 접속하기)",
    summary:
      "1. PC와 모바일이 같은 와이파이를 잡도록 설정한다. PC와 모바일이 다른 와이파이를 잡고 있으면 로컬이 안 열림. ip 찾는 법은 맥버전과 윈도우 버전 둘 다 써본다. ======================",
    category: "Frontend/React",
    tags: [],
    date: "2022-01-21",
    thumb:
      "posts/react-localhost-on-mobile/images/image_1.jpg",
  },
  {
    id: 383,
    slug: "react-build-createclass-error",
    title:
      "리액트 빌드 에러 TypeError: react__WEBPACK_IMPORTED_MODULE_0___default.a.createClass is not a function",
    summary:
      "useEffect import의 문제였다. 에러: TypeError : react__WEBPACK_IMPORTED_MODULE_0___default . a . createClass is not a functi",
    category: "Frontend/React",
    tags: [],
    date: "2022-06-06",
    thumb:
      "posts/react-build-createclass-error/images/image_1.jpg",
  },
  {
    id: 384,
    slug: "react-shopping-mall-options",
    title: "리액트 쇼핑몰 옵션 기능 구현",
    summary:
      "리액트로 쇼핑몰 옵션 기능 구현하기 옵션 1 옵션 1의 옵션 1 옵션 1의 옵션2 최종적으로 이렇게 되게 1. 우선 반복되어야 하는 부분을 반복문으로 만들기 function Product ( ) { con",
    category: "Frontend/React",
    tags: [],
    date: "2022-01-30",
    thumb: "posts/react-shopping-mall-options/images/image_1.jpg",
  },
  {
    id: 385,
    slug: "react-todo-list-basic",
    title: "리액트 아주 기본적인 todoList 만들기 (useState, spread, map 함수)",
    summary:
      "리액트로 아주 기본적인 todoList 를 만들어본다. useState는 저번 글 에서 설명했으니 넘어가고, {...} spread 연산자와 .map 함수에 대해 설명한다. 1. spread 연산자 Btn",
    category: "Frontend/React",
    tags: [],
    date: "2022-02-17",
    thumb:
      "posts/react-todo-list-basic/images/image_1.jpg",
  },
  {
    id: 386,
    slug: "react-todo-list-props-good-bad",
    title:
      "리액트로 간단한 todo list (useState와 props으로만) 좋은 예와 나쁜 예",
    summary:
      "리액트로 todo list를 만드는데 안좋은 예와 괜찮은 예가 만들어져서.. 정리할 겸 올린다. 리액트로 구현하는 TodoList 중 좋은 예제는 아니며, useState와 props 으로만 최대한 간단하게 구현",
    category: "Frontend/React",
    tags: [],
    date: "2022-02-21",
    thumb: null,
  },
  {
    id: 388,
    slug: "sophos-firewall-vpn-2",
    title: "🧱 방화벽 :: SOPHOS VPN /2",
    summary:
      "🔗 VPN 이란? Virtual Private Network, 가상 사설망이라고 한다. 특정 네트워크 대역끼리 사설 네트워크를 만들어서 연결할 때, 하나하나 실제 네트워크.선을 연결해서 만들어야 하지만 현실적으로 비",
    category: "Security",
    tags: [],
    date: "2021-05-06",
    thumb: "posts/sophos-firewall-vpn-2/images/image_1.jpg",
  },
  {
    id: 389,
    slug: "sophos-firewall-install-1",
    title: "🧱 방화벽 :: SOPHOS 설치, 초기 설정 /1",
    summary:
      "1. 가상 머신 생성 리눅스 버전 : Other Linux 2.6 Kernel CPU : 1개 메모리 : 2GB (2048) 디스크 : 40GB 네트워크 어댑터 : 3개 (VMnet1, VMnet2, VMnet3)",
    category: "Security",
    tags: [],
    date: "2021-05-04",
    thumb:
      "posts/sophos-firewall-install-1/images/image_1.jpg",
  },
  {
    id: 390,
    slug: "centos-firewalld-lab",
    title: "방화벽 실습 a to z(CentOS - firewalld)",
    summary:
      "방화벽 (CentOS - firewalld) 1) 리눅스의 방화벽이란? 커널의 Netfilter 모듈에 기초를 두고 있는 하나의 프로그램. 방화벽은 일반적으로 내부와 외부 네트워크의 경계 지점에 위치해 있다. 기",
    category: "Network",
    tags: [],
    date: "2021-05-04",
    thumb:
      "posts/centos-firewalld-lab/images/image_1.jpg",
  },
  {
    id: 391,
    slug: "private-public-ip-vpn",
    title: "사설 IP, 공인 IP, VPN",
    summary:
      "IP주소 는 유한 한데, 어떻게 수없이 늘어나는 모든 스마트폰, 노트북이 모두 인터넷을 할 수 있을까 ? 다음과 같은 개념도를 보면 그 이유를 알 수 있습니다. 출처 : How to Use Your Router an",
    category: "Network",
    tags: [],
    date: "2020-08-03",
    thumb: null,
  },
  {
    id: 392,
    slug: "server-scaling-strategy",
    title: "사용자가 증가하면 서버를 어떻게 확장해야할까?",
    summary:
      "언젠가 수많은 사용자가 서비스를 이용한다면 과연 이 서버가 감당할수 있을까? 서비스 플랫폼을 개발하며 반드시 고민해야하는 문제인 것 같다. 사용자가 증가하면 서버를 어떻게 확장해야할까? 1. 더 좋은 성능을 가진",
    category: "Backend/Architecture",
    tags: [],
    date: "2021-10-11",
    thumb:
      "posts/server-scaling-strategy/images/image_1.jpg",
  },
  {
    id: 393,
    slug: "http-multipart-form-data-upload",
    title: "(사진 업로드 구현하기) HTTP multipart/form-data",
    summary:
      "사진 업로드 구현하기 HTTP multipart/form-data 📩 HTTP multipart/form-data ✔️ 클라이언트 → 서버 파일 업로드하는 과정 ✔️ HTTP 구조 ✔️ multipart/fo",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-12-10",
    thumb:
      "posts/http-multipart-form-data-upload/images/image_1.jpg",
  },
  {
    id: 394,
    slug: "what-happens-when-you-type-a-url",
    title:
      "서버, 클라이언트, 웹 서버. 이게 뭐에요? www.naver.com을 입력하면 일어나는 일",
    summary:
      "서버, 클라이언트, 웹 서버. 에 대해 설명해 주세요. 이 질문에 가장 명확하게 답하는 방법은, 우리가 실제 웹사이트에 접속할 때 어떤 일이 일어나는지를 따라가보는 것 입니다. 예를 들어, 브라우저에 www.nave",
    category: "Network",
    tags: [],
    date: "2025-05-19",
    thumb:
      "posts/what-happens-when-you-type-a-url/images/image_1.jpg",
  },
  {
    id: 395,
    slug: "session-flow",
    title: "세션의 동작 과정",
    summary:
      "세션의 동작 과정 대해 알아보자. 간단한 스프링부트 프로그램과 그림으로 세션 동작 과정에 대해 알아본다. 세션의 개념과 특징, 토큰과의 비교 등 이론적인 설명은 아래 링크를 참고해 주세요. 세션이란? Stat",
    category: "Network",
    tags: [],
    date: "2021-09-27",
    thumb: "posts/session-flow/images/image_1.jpg",
  },
  {
    id: 396,
    slug: "spring-vs-spring-boot",
    title: "스프링, 스프링부트 !",
    summary:
      "1. 스프링 프레임워크 1) 스프링이란? 자바 플랫폼 을 위한 오픈 소스 애플리케이션 프레임워크 로서 간단히 스프링이라고도 한다. 큰 규모 프로젝트에 주로 사용되고, 동적인 웹 사이트를 개발하기 위한 여러 가지",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2020-12-29",
    thumb: "posts/spring-vs-spring-boot/images/image_1.jpg",
  },
  {
    id: 397,
    slug: "spring-layered-architecture-controller-service-repository",
    title:
      "스프링 프로젝트 계층 구조 이해 (Controller, Service, Repository, Domain Model, Entity, DTO, DAO)",
    summary:
      "스프링의 계층 구조에 대해 정리한다. 1. 스프링 웹 계층 아래는 스프링 계층 구조를 크게크게 나누어 본 그림이다. 아래 그림으로 전체적인 흐름을 파악하고, 용어 정리를 해보자. - Web Layer 흔히 사",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-08-31",
    thumb:
      "posts/spring-layered-architecture-controller-service-repository/images/image_1.jpg",
  },
  {
    id: 398,
    slug: "spring-boot-jwt-authentication-flow-2",
    title: "스프링부트 JWT 인증 과정 (더 좋은 코드)",
    summary:
      "프로젝트를 진행하면서 저번에 올렸던 'JWT 인증 과정' 포스팅에 별로인 코드가 있는 것을 알았다 로그인 과정에서 불필요하게 디비 접속을 한번 더 하더라..! 그래서 문제점과 해결 방법에 대해 적어본다. http",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-11-13",
    thumb:
      "posts/spring-boot-jwt-authentication-flow-2/images/image_1.jpg",
  },
  {
    id: 399,
    slug: "spring-boot-mvc-controller",
    title: "스프링부트, MVC 패턴 Controller(컨트롤러)의 역할과 생성 (URI)",
    summary:
      "Spring Boot 🍃 Controller(컨트롤러)의 역할과 생성 MVC 패턴 애플리케이션의 역할을 모델(Model), 뷰(View), 컨트롤러(controller)로 나누어, 이들 사이 상호작용을 통제하",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-08-02",
    thumb:
      "posts/spring-boot-mvc-controller/images/image_1.jpg",
  },
  {
    id: 400,
    slug: "spring-boot-mvc-model",
    title: "스프링부트, MVC 패턴 Model의 역할과 생성",
    summary:
      "Spring Boot 🍃 Model의 역할과 생성 MVC 패턴은 애플리케이션의 역할을 모델(Model), 뷰(View), 컨트롤러(controller)로 나누어, 이들 사이 상호작용을 통제하는 아키텍처 패턴이다.",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-08-07",
    thumb:
      "posts/spring-boot-mvc-model/images/image_1.jpg",
  },
  {
    id: 401,
    slug: "spring-boot-mvc-view",
    title: "스프링부트, MVC 패턴 View의 역할과 생성",
    summary:
      "Spring Boot 🍃 View(뷰)의 역할과 생성 Thymeleaf MVC 패턴은 애플리케이션의 역할을 모델(Model), 뷰(View), 컨트롤러(controller)로 나누어, 이들 사이 상호작용을 통제하",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-08-02",
    thumb:
      "posts/spring-boot-mvc-view/images/image_1.jpg",
  },
  {
    id: 402,
    slug: "spring-boot-mvc-example",
    title: "스프링부트, MVC 패턴 예제(Controller, Model, View)",
    summary:
      "Spring Boot 🍃 지난 포스팅에서 Controller, Model, View 각각의 역할과 생성 방법을 알아보았다. 이번엔 이 세가지를 동시에 사용하여 사용자에게 입력 페이지에서 두 정수값을 받아, 전송",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-08-09",
    thumb:
      "posts/spring-boot-mvc-example/images/image_1.jpg",
  },
  {
    id: 403,
    slug: "spring-boot-patchmapping",
    title: "스프링부트 @PatchMapping",
    summary:
      "데이터 일부를 수정할 때 사용하는 HTTP PATCH 메소드. HTTP PATCH 메소드는 데이터 일부를 수정할 때 사용한다. HTTP PUT 메소드와 다른 점은 HTTP PATCH 메소드의 경우, 수정하기로 명",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-02-10",
    thumb: "posts/spring-boot-patchmapping/images/image_1.jpg",
  },
  {
    id: 404,
    slug: "spring-boot-requestbody-responsebody",
    title: "스프링부트  @RequestBody와 @ResponseBody",
    summary:
      "스프링에서 비동기 처리를 하는 경우 @RequestBody 와 @ReponseBody 를 사용한다. 위 어노테이션을 사용하여 어떻게 비동기 처리를 할 것인지 알아보자. 클라이언트와 서버의 비동기 통신 처리 웹에서",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-09-05",
    thumb:
      "posts/spring-boot-requestbody-responsebody/images/image_1.jpg",
  },
  {
    id: 405,
    slug: "spring-boot-valid-notblank-notempty-notnull",
    title:
      "스프링부트 @Valid, @Valid의 동작 원리(@NotBlank @NotEmpty @NotNull 차이점)",
    summary:
      "1. @Valid 어노테이션 스프링부트 RestController를 이용해 @RequestBody 객체를 사용자로부터 가져올 때, 들어오는 값을 검증할 수 있다. @Valid는 JSR-303 표준 스펙으로써 빈 검증",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-08-19",
    thumb:
      "posts/spring-boot-valid-notblank-notempty-notnull/images/image_1.jpg",
  },
  {
    id: 406,
    slug: "spring-boot-react-login",
    title: "스프링부트 x 리액트 연동해서 로그인 기능 구현하기",
    summary:
      "스프링부트 x 리액트 연동 로그인 기능 구현 1. 로그인 기능의 백엔드(백엔드: 스프링부트) 먼저 구현한다. UserController 구현 @RestController @ RequestMapping (",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-11-20",
    thumb:
      "posts/spring-boot-react-login/images/image_1.jpg",
  },
  {
    id: 407,
    slug: "spring-boot-dev-environment-openjdk-intellij",
    title: "스프링부트 개발환경 설정(openJDK 설치, intellij)",
    summary:
      "스프링부트 개발환경 설정 (openJDK 설치, intellij) 1) openJDK 11 1. 사이트에서 다운로드 https://jdk.java.net/archive/ Archived OpenJDK GA Relea",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2020-12-29",
    thumb:
      "posts/spring-boot-dev-environment-openjdk-intellij/images/image_1.jpg",
  },
  {
    id: 408,
    slug: "spring-boot-search-query-like",
    title:
      "스프링부트 검색기능 구현 : Get방식으로 넘긴 Param 받기, 검색 쿼리문(where 컬럼명 like)",
    summary:
      "스프링부트, 리액트로 검색 기능 구현하는데 가장 먼저 한 부분을 정리. (Spring Boot로 Parameter 전달 받는 방법, Spring Boot Get방식으로 넘긴 값 받기) 검색은 get 방식이다.",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-03-02",
    thumb:
      "posts/spring-boot-search-query-like/images/image_1.jpg",
  },
  {
    id: 409,
    slug: "spring-boot-post-without-comments-error",
    title: "스프링부트, 댓글이 없는 게시글 조회 에러",
    summary:
      "[ 상황 ] 댓글 기능이 있는 게시글을 구현했는데, 게시글에 댓글이 없으면 게시글 조회가 안됐다. 그림과 같은 상황 [ 해결 ] 게시글 조회 시 댓글이 없어도 에러가 안나게, 게시글 조회 service에 if로",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-12-06",
    thumb:
      "posts/spring-boot-post-without-comments-error/images/image_1.jpg",
  },
  {
    id: 410,
    slug: "spring-boot-kakao-login-jwt-oauth2-1",
    title: "스프링부트 카카오 로그인 하기 (JWT+OAuth2) [1]",
    summary:
      "백엔드:스프링부트 + 프론트:리액트 카카오 로그인 구현하기(이론) 해당 포스팅에는 구현하기 전 생각한 구조에 대한 정리 입니다. 구현 예제는 다음 포스팅에서 이어집니다. ✅ 카카오 로그인(소셜 로그인) 구조",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-04-26",
    thumb:
      "posts/spring-boot-kakao-login-jwt-oauth2-1/images/image_1.jpg",
  },
  {
    id: 411,
    slug: "spring-boot-kakao-login-jwt-oauth2-2",
    title: "스프링부트 카카오 로그인 하기 (JWT+OAuth2) [2]",
    summary:
      "백엔드:스프링부트 + 프론트:리액트 카카오 로그인 구현하기 해당 포스팅에 대한 구조, 이론 정리는 이전 게시글 에 있습니다. 스프링부트 카카오 로그인 하기 (JWT+OAuth2) [1] 백엔드:스프링부트 + 프론",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-04-26",
    thumb:
      "posts/spring-boot-kakao-login-jwt-oauth2-2/images/image_1.jpg",
  },
  {
    id: 413,
    slug: "spring-boot-pay-mileage",
    title: "스프링부트 페이(마일리지) 기능 구현",
    summary:
      "스프링부트로 페이(마일리지) 서비스를 구현한다. 페이 서비스 기능은 1) 페이 충전 2) 페이 출금 3) 총 금액(남은 금액) 조회 4) 충전 및 내역 전체 조회 1) 페이 충전 DB 테이블 생성 crea",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-04-03",
    thumb: null,
  },
  {
    id: 414,
    slug: "spring-boot-initializr-intellij-community",
    title: "스프링부트 프로젝트 생성 (커뮤니티 버전에서 Initializr 기능 사용)",
    summary:
      "스프링부트 프로젝트 생성 참고로 ultimate 버전의 Initializr 기능은 커뮤니티 버전에서도 쓸 수 있다. ultimate 버전의 Initializr 기능 어떻게 쓸 수",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2020-12-29",
    thumb:
      "posts/spring-boot-initializr-intellij-community/images/image_1.jpg",
  },
  {
    id: 415,
    slug: "spring-security-react-show-nickname",
    title: "스프링시큐리티/리액트) 로그인 시 닉네임 정보 띄워주기",
    summary:
      "구현하려는 것: 로그인 시 '토찌님' 이렇게 닉네임 정보 띄워주는 것! (이 기능에 대한 멋진 명칭을 알고 계시다면 알려주세요...😭) 어떻게 구현을 해야하나 고민했었는데 결국 jwt decode 가 답이었다.",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-04-19",
    thumb:
      "posts/spring-security-react-show-nickname/images/image_1.jpg",
  },
  {
    id: 416,
    slug: "what-is-spring-framework",
    title:
      "스프링이란? 스프링 프레임워크의 핵심기능 (스프링 컨테이너, DI, DL, Ioc, AOP)",
    summary:
      "1. 스프링이란? 스프링이 왜 만들어 졌는지, 왜 필요했는지 그리고 개인적으로 궁금했던..ㅎㅎ 왜 이름이 spring 인지 알아봤다. 우선 spring인 이유는 EJB 라는 겨울을 넘어 새로운 시작이라는 뜻이다.",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2021-07-07",
    thumb:
      "posts/what-is-spring-framework/images/image_1.jpg",
  },
  {
    id: 417,
    slug: "jpa-entity-entitymanager",
    title: "엔티티(Entity), 엔티티매니저(EntityManager)",
    summary:
      "엔티티(Entity) 객체, 엔티티를 다루는 엔티티매니저(EntityManager) 객체 JPA의 가장 큰 특징은 영속성(Persistence)이다. JPA를 사용해 검색한 DB매핑정보(엔티티)는 메모리(영속 컨",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-08-11",
    thumb:
      "posts/jpa-entity-entitymanager/images/image_1.jpg",
  },
  {
    id: 418,
    slug: "spring-dependency-injection-three-ways",
    title:
      "의존성 주입 3가지 방법 (생성자 주입, Field 주입, Setter 주입, @RequiredArgsConstructor과 @Autowired 차이점)",
    summary:
      "순환 참조 에러 덕분에 자주쓰는 @Autowired 어노테이션과 @RequiredArgsConstructor에 대해 찾아보고 정리한 글. 이 글에서 일반 메서드 주입 방법은 의존성 주입 방법에서 제외한다. 1.",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-04-25",
    thumb:
      "posts/spring-dependency-injection-three-ways/images/image_1.jpg",
  },
  {
    id: 419,
    slug: "how-the-internet-works",
    title: "인터넷이 동작하는 원리 (학교에서 구글에 접속하는 과정)",
    summary:
      "Park Seong-beom 박성범 (Park Seong-beom) parksb.github.io 얼마전 박성범 님의 깃헙에서 읽게 된 글, '인터넷이 동작하는 아주 구체적인 원리'를 보고 참 유익하다는 생각이",
    category: "Network",
    tags: [],
    date: "2020-02-19",
    thumb:
      "posts/how-the-internet-works/images/image_1.jpg",
  },
  {
    id: 420,
    slug: "intellij-git",
    title: "인텔리제이(IntelliJ) 프로젝트와 깃(Git) 연동하기",
    summary:
      "인텔리제이(IntelliJ) 프로젝트와 깃(Git) 연동하기 GitHub에 새로운 remote repository를 만들고 기존 IntelliJ 프로젝트(모듈)을 연동하는 방법에 대해 다룬다. 과정은 다음 순서로 진",
    category: "DevTools",
    tags: [],
    date: "2021-07-30",
    thumb:
      "posts/intellij-git/images/image_1.jpg",
  },
  {
    id: 421,
    slug: "engineer-information-processing-database-summary",
    title: "📝 정처기 필기 요약 '데이터 베이스' 요약 정리",
    summary:
      "정처기 필기 준비 했을 때 정리해둔 문서. 1. 데이터 베이스 정의 (1) 정보와 데이터 ① 데이터 관찰이나 측정을 통해서 수집된 사실이나 값 (수치, 스트링) ② 정보 데이터를 가공하여 얻은 결과로써 부",
    category: "Database",
    tags: [],
    date: "2021-07-19",
    thumb:
      "posts/engineer-information-processing-database-summary/images/image_1.jpg",
  },
  {
    id: 422,
    slug: "spring-requestparam-default-value",
    title:
      "컨트롤러 @RequestParam 기본값 설정하기(@RequestParam(required = false))",
    summary:
      '​ @Controller에서 파라미터를 하나 받아보자. @ GetMapping ( "/test/{cnt}" ) public String methodName ( @RequestParam int cnt ) { // TO',
    category: "Backend/Spring Boot",
    tags: [],
    date: "2022-03-07",
    thumb:
      "posts/spring-requestparam-default-value/images/image_1.jpg",
  },
  {
    id: 423,
    slug: "jdbc-sql-mapper-orm-statement",
    title:
      "코드로 DB를 다루는 방법에 대하여 (JDBC, SQL Mapper, ORM 그리고 Statement, Preparedstatement, cursor)",
    summary:
      "우리가 알고 있는 디비, DB, DBMS(DataBase Management System). 이러한 DB 서버에는 어떤 것들이 있나? 익숙한 MySQL, Oracle 등.. 이러한 데이터베이스의 종류에는",
    category: "Backend/Spring Boot",
    tags: [],
    date: "2023-10-11",
    thumb:
      "posts/jdbc-sql-mapper-orm-statement/images/image_1.jpg",
  },
  {
    id: 424,
    slug: "arp-protocol",
    title:
      "통신하기 전 반드시 필요한 'ARP 프로토콜' (ARP 프로토콜의 구조, ARP 프로토콜의 통신 과정)",
    summary:
      "1. ARP 프로토콜 - ARP가 하는 일 - ARP 프로토콜의 구조 2. ARP 프로토콜의 통신 과정 -IP 주소로 MAC 주소를 알아오는 과정 3. ARP 테이블 - 나와 통신했던 컴퓨터들 1. ARP 프로토",
    category: "Network",
    tags: [],
    date: "2021-02-13",
    thumb:
      "posts/arp-protocol/images/image_1.jpg",
  },
  {
    id: 426,
    slug: "port-forwarding",
    title: "포트포워딩",
    summary:
      "포트포워딩이란 외부에서 서버쪽으로 데이터를 받고 싶다는 신호를 보내기 위해서는 ip 주소말고도 고려해야 하는 것이 바로 포트이다. 포트는 ip 주소라는 벽에 있는 문과 같은 것인데, 이러한 문이 ip 주소마다 수",
    category: "Network",
    tags: [],
    date: "2020-08-29",
    thumb: null,
  },
];

if (typeof window !== "undefined") window.POSTS = POSTS;
