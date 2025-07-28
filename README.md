# web-project-1
AWS S3를 활용하여 [따배]이성미 강사의 강사 소개 페이지 만들기

> 웹페이지 바로가기(http://weplat.site)

## 기존 웹페이지

<img width="200" height="317" alt="Image" src="https://github.com/user-attachments/assets/099ebef4-1230-48e2-b240-c21ceff58af7" />

🔼 ChatGPT를 활용해 급하게 만들어 사용하던 기존 웹페이지

가장 중요하게 생각한 포인트는 “**깔끔함**”과 “**가독성**”

또한, 새롭게 생성되는 내용은 추가하고, 너무 오래된 내용은 삭제할 수 있도록 ‘**관리하기 편하도록**’ 구축


## Figma를 활용하여 UI 디자인하기

<img width="800" height="440" alt="Image" src="https://github.com/user-attachments/assets/d22bd911-40bc-43e2-9c58-163762814f2d" />

### # Color

WePLAT의 로고 색상인 #A25BA0를 기준으로 사용

<img width="400" height="111" alt="Image" src="https://github.com/user-attachments/assets/5685f2de-cedb-4b14-90b2-5a67f5b0ee0b" />

위 4가지 색상을 위주로 사용하며, 필요시 [ColorSpace](https://mycolor.space/)를 활용하여 색조합 구성

### # 구현하려는 기능

1. **상단바**

    <img width="800" height="58" alt="Image" src="https://github.com/user-attachments/assets/96485ab0-3f5a-4a99-be6e-9be6d3c8bd8c" />
    
    상단의 메뉴 선택 시, 각 태그에 맞는 페이지로 이동
    
2. section1 : **타이핑 효과 & 페이드 효과**

    <img width="800" height="523" alt="Image" src="https://github.com/user-attachments/assets/92d30836-1d95-40f2-9c84-0deb03b34d60" />

    첫 화면의 “안녕하세요, 강사 이성미입니다!”에 집중될 수 있도록 타이핑 효과 적용
    
    앞부분의 타이핑 효과가 끝나면, 하단의 설명들과 버튼이 페이드인 효과로 나타도록 구성
    
3. sectoin3 : **모달창**

    <img width="800" height="522" alt="Image" src="https://github.com/user-attachments/assets/d4410e41-3f2f-4041-bb30-f240206f370e" />

    각 아이콘을 클릭 시, 강의 커리큘럼을 볼 수 있는 모달창 적용
    
4. section4 : **mail to**

    <img width="800" height="522" alt="Image" src="https://github.com/user-attachments/assets/8f09400d-6603-42b3-a3d9-594100d3aa70" />

    하단의 ‘MSP 지원 문의’ 버튼을 클릭 시, ‘seongmi.lee@weplat.site’로 바로 메일을 보낼 수 있는 창 생성
    
5. section5 : **버튼별 다른 화면 지원**

    <img width="800" height="523" alt="Image" src="https://github.com/user-attachments/assets/e65d244e-3be3-4284-ba22-6f15ebb60003" />

    <img width="800" height="523" alt="Image" src="https://github.com/user-attachments/assets/381f3a5d-a8fb-4474-ad2a-19f75bfc814f" />

    ‘유튜브 [따배런]’과 ‘패스트캠퍼스’ 버튼을 클릭 시, 각 내용에 맞는 썸네일 표시
    
    썸네일 클릭 시, 각 영상의 링크로 이동
    
6. Contact : **내용 복사**

    <img width="1210" height="428" alt="Image" src="https://github.com/user-attachments/assets/8a93f37f-171c-40ad-bdf7-12bcca359218" />

    아이콘 클릭 시, 전화번호 또는 이메일 주소 복사
    
7. **상단/하단 이동 스크롤 버튼**

    <img width="800" height="568" alt="Image" src="https://github.com/user-attachments/assets/56406da4-c99a-4a28-a159-34f93767b43d" />

    오른쪽 하단의 버튼 클릭 시, 상단의 메인 화면, 하단의 Contact 화면으로 이동
    
8. **강제 스크롤**
    
    스크롤 시, 섹션과 섹션 사이에 머무르지 않고, 한 섹션만 볼 수 있도록 구성


## 자세히 보기
개인 노션 페이지(https://road-cartoon-1a1.notion.site/Web-Project-1-_-1aa1d6e7a68c808a9d81e30644a141dc?source=copy_link)
