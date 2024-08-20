# Next.js 13을 활용해서 간단한 웹 애플리케이션 만들기
![화면 기록 2024-08-20 오후 5 59 23](https://github.com/user-attachments/assets/bdbb2ccc-7389-4cc7-936c-f432fc0f57f3)

### API 라우트 작성
```
import { NextResponse } from "next/server";

const data = {
  message: "저는 귀여운 고양이입니다.",
  image:
    "https://i.pinimg.com/736x/80/0b/68/800b68ce974655bab8f4bde1eceee087.jpg",
};

export async function GET() {
  return NextResponse.json(data);
}
```

### Link
```
import Link from "next/link";

export default function Home() {
  return (
    <div className="main__box">
      <h1>골라보세요</h1>
      <div>
        <Link href={"/dog"}>
          <button>강아지</button>
        </Link>
        <Link href={"/cat"}>
          <button>고양이</button>
        </Link>
      </div>
    </div>
  );
}

```


### 서버사이드데이터 fecth
```
const res = await fetch("http://localhost:3000/api/cat");
const catData = await res.json();
```


### 공통레이아웃
```
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${inter.className} container`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
```
